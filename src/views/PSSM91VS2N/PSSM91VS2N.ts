/*
 * @Description:
 * @Author: Edward
 * @Date: 2022-06-02 17:21:37
 * @LastEditors: zhangTing
 * @LastEditTime: 2023-07-19 15:13:06
 */
import {
  defineComponent,
  onMounted,
  ref,
  reactive,
  computed,
  nextTick,
  toRaw,
  Ref,
} from "vue";
import { EI, EIManager } from "EIX/ei";
import { ER } from "ERX/Er";
import { SiUtils } from "ERX/SiUtils";
import { FiUtils } from "ERX/FiUtils";
import xrEfForm from "EFX/xrEfForm";
import xrEfPanel from "EFX/xrEfPanel";
import erLayout from "ERX/ErLayout";
import erGrid from "ERX/ErGrid";

import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: 'PSSM91VS2N',
  components: {
    xrEfForm,
    xrEfPanel,
    erLayout,
    erGrid,
  },
  setup: () => {
    // 获取画面的分区信息及设置画面初始化service
    const erFormHelper: ER.FormHelper = new ER.FormHelper()
    let selectedDataItems: any[] = [];
    const $router = useRouter();
    const initializeService = '';
    const mainGridData = ref<any>([]);
    const subGridData = ref<any>([]);
    let gridView1!: any;
    let gridView2!: any;
    let selectedMainGridRow: any = []; //焦点行数据
    // 画面相关数据初始化定义
    const efFormInfo = ref<{ [key: string]: any }>({});
    // const efFormIsReady = ref(false);
    let formPartition: string;
    let formName  = 'PSSM91V';
    let PROGRAM_NAME: string;
    const erGrid1Ready = () => {
      gridView1 = erFormHelper.getGrid('gridView1');
      erFormHelper.setGridEditable(gridView1, false); // 设置grid不可编辑
    };
    const erGrid2Ready = () => {
      gridView2 = erFormHelper.getGrid('gridView2');
      erFormHelper.setGridEditable(gridView2, false); // 设置grid不可编辑
    };
    // xr-ef-form提供了ready事件, 在这里获取画面配置信息
    const efFormReady = (e: any) => {
      efFormInfo.value = e.formInfo;
      // efFormIsReady.value = true;
      formPartition = efFormInfo.value.formPartition; // 分区
      initializePage();
    };
    const initializeFlag = ref(false);

    // 画面相关数据初始化
    const initializePage = async () => {
      const initialResult = await erFormHelper.Initialize(
        formPartition,
        formName,
        '',
        ''
      );
      if (initialResult.flag >= 0) {
        // 画面工具类初始化成功后将画面渲染条件设置为1
        initializeFlag.value = true;
      } else {
        erFormHelper.messageError(
          'ErFormHelper initialize faild, error msg is [' + initialResult.msg + ']!'
        );
      }
    };

    onMounted(() => {
      initializePage();
    });

    const F2_DO = async (e: any) => {
      //grid清空
      erFormHelper.clearLayoutOrGridData('gridView1', 'gridView2');

      const condition = erFormHelper.getAllControlValue('LayoutGroupFilter');
      const eiInfo = new EI.EIInfo();
      const queryCondition = erFormHelper.getAllControlValueAsEiBlock('LayoutGroupFilter');
      eiInfo.addBlock(queryCondition, 'Table0');
      erFormHelper.callService('pssm91f2_inq', eiInfo, true, true).then((res) => {
        mainGridData.value = res.getBlock('Table0').data;
        nextTick(() => {
          erFormHelper.mergeDataToGrid(mainGridData.value, gridView1);
          if (erFormHelper.getGridDataCount("gridView1") > 0)
          {
           // 默认显示第一条
            listQuery(mainGridData.value[0]);
           }


        });
      });
    };

    // 行点击事件
    const GridView1FocusChanged = async (e: any) => {
      if (e && e.data) {
        let selectedMainGridRow: any = [];
        selectedMainGridRow = e.data.toJSON();
        listQuery(selectedMainGridRow);
      }
    };

    const listQuery = async (datarow: any) => {
      const eiInfo = new EI.EIInfo();
      const eiBlock = eiInfo.addBlock(new EI.EiBlock(), '0');
      const queryCondition = erFormHelper.getAllControlValueAsEiBlock('LayoutGroupFilter');
      eiInfo.addBlock(queryCondition, '1');
      eiBlock.pushData(datarow, true);
      // 子表查询
      erFormHelper.callService('pssm91f2_inq2', eiInfo, true, true).then((res) => {
        subGridData.value = res.getBlock('Table0').data;
        nextTick(() => {
          erFormHelper.mergeDataToGrid(subGridData.value, gridView2);
        });
      });
    };

    // 炉次确定
    const F6_DO = async (e: any) => {
      const selectedRows = erFormHelper.getGridCheckedRows('gridView1');
      if (selectedRows.length > 0) {
        const rows: any = [];
        selectedRows.forEach((tr: any) => {
          const json = tr.toJSON();
          rows.push(json);
        });

        const eiInfo = new EI.EIInfo();
        const eiBlock = eiInfo.addBlock(new EI.EiBlock());
        eiBlock.pushData(rows, true);

        for (const item of rows) {
          if (item['STEEL_RETURN_CODE'] !== '1') {
            if (item['MOLTIRON_WT'] === 0) {
              erFormHelper.messageWarning('炉号{' + item['HEAT_NO'] + '} 的铁水重量为0:不能确定'); //若无数据，报错提示
              return;
            }

            if (item['CAST_STEEL_WT'] === 0) {
              erFormHelper.messageWarning('炉号{' + item['HEAT_NO'] + '} 的钢水重量为0:不能确定'); //若无数据，报错提示
              return;
            }

            if (item['RUN_STATUS'] !== '53') {
              erFormHelper.messageWarning('炉号{' + item['HEAT_NO'] + '} 还未浇铸结束:不能确定'); //若无数据，报错提示
              return;
            }
          } else {
            console.log('回炉钢水无需校验');
          }
        }

        const outInfo = await erFormHelper.callService(
          "pssm91f6_proc",
          eiInfo,
          true,
          false,
          true
        );
        if (outInfo.sys.status < 0) {
          erFormHelper.messageError("错误:" + outInfo.sys.msg);
        } else {
          erFormHelper.messageWarning('操作成功');
          F2_DO(e);
          
         }
      } else {
        erFormHelper.messageWarning('请选择数据');
      }
    };

    //强制炉次确定
    const F7_DO = async (e: any) => {
      const selectedRows = erFormHelper.getGridCheckedRows('gridView1');
      if (selectedRows.length > 0) {
        const rows: any = [];
        selectedRows.forEach((tr: any) => {
          const json = tr.toJSON();
          rows.push(json);
        });

        const eiInfo = new EI.EIInfo();
        const eiBlock = eiInfo.addBlock(new EI.EiBlock());
        eiBlock.pushData(rows, true);

        const outInfo = await erFormHelper.callService(
          "pssm91f7_proc",
          eiInfo,
          true,
          false,
          true
        );
        if (outInfo.sys.status < 0) {
          erFormHelper.messageError("错误:" + outInfo.sys.msg);
        } else {
          erFormHelper.messageWarning('操作成功');
          F2_DO(e);
          
         }
      } else {
        erFormHelper.messageWarning('请选择数据');
      }
    };
    const F8_DO = async (e: any) => {
      const selectedRows = erFormHelper.getGridCheckedRows('gridView1');
      if (selectedRows.length > 0) {
        const rows: any = [];
        selectedRows.forEach((tr: any) => {
          const json = tr.toJSON();
          rows.push(json);
        });

        const eiInfo = new EI.EIInfo();
        const eiBlock = eiInfo.addBlock(new EI.EiBlock());
        eiBlock.pushData(rows, true);
      
        const outInfo = await erFormHelper.callService(
          "pssm91f8_proc",
          eiInfo,
          true,
          false,
          true
        );
        if (outInfo.sys.status < 0) {
          erFormHelper.messageError("下发错误:" + outInfo.sys.msg);
        } else {
          erFormHelper.messageWarning('下发成功');
         }
      } else {
        erFormHelper.messageWarning('请选择数据');
      }
    };


    return {
      erFormHelper,
      initializeFlag,
      gridView1,
      gridView2,
      efFormReady,
      erGrid1Ready,
      erGrid2Ready,
      F2_DO,
      F6_DO,
      F7_DO,F8_DO,
      GridView1FocusChanged
    };
  }
});
