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
import { Console } from "console";
import ErPopFree from 'ERX/ErPopFree'
import ErPopQuery from 'ERX/ErPopQuery'
export default defineComponent({
  name: 'PSSM51VS2N',
  components: {
    xrEfForm,
    xrEfPanel,
    erLayout,
    erGrid,
    ErPopFree
  },
  setup: () => {
    // 获取画面的分区信息及设置画面初始化service
    const erFormHelper: ER.FormHelper = new ER.FormHelper()
    let selectedDataItems: any[] = [];
    const $router = useRouter();

    // 画面相关数据初始化定义
    const efFormInfo = ref<{ [key: string]: any }>({});
    // const efFormIsReady = ref(false);
    let formPartition: string;
    let formName = 'PSSM51V';
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
      console.log(e);
      initializePage();
    };

    const initializeService = '';
    const mainGridData = ref<any>([]);
    const subGridData = ref<any>([]);
    let gridView1!: any;
    let gridView2!: any;
    let selectedMainGridRow: any = []; //焦点行数据
    let initializeFlag = ref(false);
    // 画面相关数据初始化
    const popFreeAdd = new ER.PopFreeHelper(
      efFormInfo.value.formPartition,
      'PSSM18SV',
      'LayoutGroupFilter',
      ''
    )
    const initializePage = async () => {
      const initialResult = await erFormHelper.Initialize(
        formPartition,
        formName,
        '',
        initializeService
      );
      if (initialResult.flag >= 0) {
        // 画面工具类初始化成功后将画面渲染条件设置为1
        initializeFlag.value = true;
        // 回调函数获取控件信息及设置定义事件等操作
      } else {
        erFormHelper.messageError(
          'ErFormHelper initialize faild, error msg is [' + initialResult.msg + ']!'
        );
      }
    };

    const queryData = async (e: any) => {
      //1.压入查询条件
      const eiInfo = new EI.EIInfo();
      eiInfo.addBlock(erFormHelper.convertModelAsBlock(popFreeAdd.DataModel), 'Table0');

      //控制台日志
      await erFormHelper.callService('pssm18_sk_upd', eiInfo, true, false).then((res) => {
        nextTick(() => {


          console.log('调用结果', res);
          if (res.status >= 0) {
            erFormHelper.messageSuccess('回退成功!!');
          }
          else {
            erFormHelper.messageError('回退失败!!，失败原因:' + res.sys.msg);
          }

        });
      });
      nextTick(() => {
        f2_DO(e);
      });
    };


    onMounted(() => { });

    const f2_DO = async (e: any) => {
      //grid清空
      erFormHelper.clearLayoutOrGridData('gridView1', 'gridView2');
      erFormHelper.clearLayoutOrGridData('LayoutGroupFilter');

      const eiInfo = new EI.EIInfo();
      const queryCondition = erFormHelper.getAllControlValueAsEiBlock('LayoutGroupFilter');
      eiInfo.addBlock(queryCondition, 'Table0');

      //主表查询
      erFormHelper.callService('pssm51f2_inq', eiInfo, true, true).then((res) => {
        mainGridData.value = res.getBlock('Table0').data;
        nextTick(() => {
          erFormHelper.mergeDataToGrid(mainGridData.value, gridView1);

          // 默认显示第一条
          if (erFormHelper.getGridDataCount("gridView1") > 0) {
            listQuery(mainGridData.value[0]);
          }
          else {
            erFormHelper.setControlValue(
              'LayoutGroupFilter',
              'PROC_NO',
              ''
            );
            erFormHelper.setControlValue(
              'LayoutGroupFilter',
              'PROC_TIME',
              ''
            );

          }

        });
      });
    };

    // gridView1行点击事件
    const GridView1FocusChanged = async (e: any) => {
      if (e && e.data) {
        let selectedMainGridRow: any = [];
        selectedMainGridRow = e.data.toJSON();
        listQuery(selectedMainGridRow);
      }
    }
    //子表查询-运转信号查询
    const listQuery = async (datarow: any) => {
      const eiInfo = new EI.EIInfo();
      const eiBlock = eiInfo.addBlock(new EI.EiBlock(), 'Table0');
      eiBlock.pushData(datarow, true);
      erFormHelper.callService('pssm51f2_inq_sign', eiInfo, true, true).then((res) => {
        subGridData.value = res.getBlock('TSIGNAL').data;
        nextTick(() => {
          erFormHelper.mergeDataToGrid(subGridData.value, gridView2);

          // 默认显示第一条
          console.log(subGridData.value[0]);
          listQuery2(subGridData.value[0]);
        });
      });
    };

    // // gridView2行点击事件
    // const gridView2Click = async (e: XrErGridEventArgs) => {
    //   if (e && e.data) {
    //     console.log("G");
    //     selectedMainGridRow = e.data.toJSON();
    //     listQuery2(selectedMainGridRow);
    //   }
    // };

    const GridView2FocusChanged = async (e: any) => {
      if (e && e.rowChanged) {
        if (e.data) {
          selectedMainGridRow = e.data.toJSON();
          listQuery2(selectedMainGridRow);
        }
      }
    };


    //模拟处理号查询
    const listQuery2 = async (datarow: any) => {
      const eiInfo = new EI.EIInfo();
      const eiBlock = eiInfo.addBlock(new EI.EiBlock(), 'Table0');
      eiBlock.pushData(datarow, true);

      erFormHelper.callService('pssm51f2_inq_proc', eiInfo, true, true).then((res) => {
        subGridData.value = res.getBlock('PROC').data;
        nextTick(() => {
          erFormHelper.setControlValue(
            'LayoutGroupFilter',
            'PROC_NO',
            subGridData.value[0]['CURR_PROC_NO']
          );
          erFormHelper.setControlValue(
            'LayoutGroupFilter',
            'PROC_TIME',
            subGridData.value[0]['CURR_PLAN_TIME']
          );
        });
      });
    };

    // 信号发送
    const F3_DO = async (e: any) => {
      //--------------------------------------------------------
      //先定义 eiInfo，依次获取Block
      const eiInfo = new EI.EIInfo();

      const eiBlock = erFormHelper.getAllControlValueAsEiBlock('LayoutGroupFilter');
      eiInfo.addBlock(eiBlock, 'Table0');

      eiInfo.addBlock(erFormHelper.getGridCurrentRowAsBlock(gridView1), 'Table1');

      const eiBlock1 = erFormHelper.getGridCurrentRowAsBlock(gridView2);
      eiInfo.addBlock(eiBlock1, 'Table2');
      //--------------------------------------------------------------
      //调用服务
      erFormHelper.callService('pssm51f3_run', eiInfo, true, true).then((res) => {
        f2_DO(e);
      });
    };

    //信号回退
    const F4_DO = async (e: any) => {
      //获取当前行
      // const selectedRows = erFormHelper.getGridCurrentRow('gridView1');

      // // 画面跳转
      // $router.push({ query: selectedRows, path: 'PSSM18SVS2N' });
      const selectedRows = erFormHelper.getGridCurrentRow('gridView1', false);
      popFreeAdd.ReceiveData(selectedRows);
      ER.PopUtils.showErPopFree(ErPopFree, popFreeAdd, (e: any) => {
        if (popFreeAdd.getEvent('ok')) {
          queryData(e);
        }
      })
    };

    // 铸片展示
    const linkTo = () => {
      // let skiparam: any = [];
      // // 选择材料号
      // skiparam = selectedMainGridRow;
      // if (skiparam.length === 0) {
      //   // 如果选择材料号为空，传入第一行数据
      //   skiparam = mainGridData.value[0];
      // }
      // console.log('传入参数', skiparam);
      // // 画面跳转
      // $router.push({ query: skiparam, path: 'QXSMWD03' });
    };


    return {
      erFormHelper,
      initializeFlag,
      gridView1,
      gridView2,
      efFormReady,
      erGrid1Ready,
      erGrid2Ready,
      GridView2FocusChanged,
      f2_DO,
      F3_DO,
      F4_DO,
      GridView1FocusChanged
    };
  }
});
