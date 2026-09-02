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
import ErPopFree from 'ERX/ErPopFree'
import ErPopQuery from 'ERX/ErPopQuery'
import { useRoute } from "vue-router";
import { Console } from "console";

export default defineComponent({
  name: 'PSSM35VS2N',
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

    // 画面相关数据初始化定义
    const efFormInfo = ref<{ [key: string]: any }>({});
    // const efFormIsReady = ref(false);
    let formPartition: string;
    let formName = 'PSSM35V';
    let PROGRAM_NAME: string;

    // xr-ef-form提供了ready事件, 在这里获取画面配置信息
    const efFormReady = (e: any) => {
      efFormInfo.value = e.formInfo;
      // efFormIsReady.value = true;
      formPartition = efFormInfo.value.formPartition; // 分区
      InitializePage();
    };
    const initializeService = '';
    const mainGridData = ref<any>([]);
    const subGridData = ref<any>([]);
    let gridView1!: any;
    let selectedMainGridRow: any = []; //焦点行数据
    let initializeFlag = ref(false);
    const erGrid1Ready = () => {
      gridView1 = erFormHelper.getGrid('gridView1');
      erFormHelper.setGridEditable(gridView1, false); // 设置grid不可编辑
    };

    const popFreeAdd = new ER.PopFreeHelper(
      efFormInfo.value.formPartition,
      'PSSM35SV',
      'LayoutGroupFilter',
      ''
    )
    const popFreeUPD = new ER.PopFreeHelper(
      efFormInfo.value.formPartition,
      'PSSM35UV',
      'LayoutGroupFilter',
      ''
    )

    // 画面相关数据初始化
    const InitializePage = async () => {
      const initialResult = await erFormHelper.Initialize(
        formPartition,
        formName,
        '',
        ''
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

    onMounted(() => { });


    //主表查询
    const queryData = async () => {
      //push test
      //1.压入查询条件
      const eiInfo = new EI.EIInfo();
      const eiBlock = erFormHelper.getAllControlValueAsEiBlock('LayoutGroupFilter');
      eiInfo.addBlock(eiBlock, 'Table0');

      //控制台日志
      console.log(eiBlock);
      console.log('BS-biegin');

      await erFormHelper.callService('pssm35_inq', eiInfo, true, false).then((res) => {
        const mainData = res.blocks['Table0'].data;
        nextTick(() => {
          erFormHelper.mergeDataToGrid(mainData, gridView1);
        });
      });
    };


    //查询
    const F2_DO = (e: any) => {
      queryData();
    };
    const F3_DO = (e: any) => {
      popFreeAdd.setEvent("itemValueChanged", async (a: any) => {
        if (a.itemCode === "HEAT_NO") {
          //  获取重量绑定到字段上
          const inInfo1 = new EI.EIInfo();
          const eiBlock = inInfo1.addBlock(new EI.EiBlock());
          eiBlock.pushData(
            {
              HEAT_NO: popFreeAdd.getValue("HEAT_NO"),
            },
            true
          );
          const outInfo = await erFormHelper.callService('pssm35tcf2_inq', inInfo1, true, false, true);
          popFreeAdd.FormHelper.reloadDropDownDataSource("LayoutGroupFilter", "TOTAL_WT", outInfo.getBlock(0))
        }
      });
      ER.PopUtils.showErPopFree(ErPopFree, popFreeAdd, async (e: any) => {

        if (popFreeAdd.getEvent('ok')) {
          const eiInfo = new EI.EIInfo();
          eiInfo.addBlock(erFormHelper.convertModelAsBlock(popFreeAdd.DataModel), 'Table0');
          console.log('lxxx', eiInfo);
          await erFormHelper.callService('pssmxh35_ins', eiInfo, true, false).then((res) => {
            nextTick(() => {
              console.log('调用结果', res);
              if (res.status >= 0) {
                erFormHelper.messageSuccess('新增成功!!');
              }
              else {
                erFormHelper.messageError('新增失败!!，失败原因:' + res.sys.msg);
              }
            });
          });
          nextTick(() => {
            queryData();
          });
        }
      })
    };
    const F4_DO = async(e: any) => {
      const inInfo = new EI.EIInfo();
      const selectedRows = erFormHelper.getGridCurrentRowAsBlock('gridView1');
      inInfo.addBlock(selectedRows);
      const outInfo1 = await erFormHelper.callService('pssm35f4_inq', inInfo, true, false, true); 
      if (outInfo1.sys.status < 0) {
        erFormHelper.messageError("查询错误:" + outInfo1.sys.msg);
      } else {
        const F_data ={
          HEAT_NO:outInfo1.getBlock(0).data[0]["HEAT_NO"],
          RET_HEAT_NO:outInfo1.getBlock(0).data[0]["RET_HEAT_NO"],
          RATE:outInfo1.getBlock(0).data[0]["RATE"],
          RET_HEAT_NO1:outInfo1.getBlock(0).data[0]["RET_HEAT_NO1"],
          RATE1:outInfo1.getBlock(0).data[0]["RATE1"],
          RET_HEAT_NO2:outInfo1.getBlock(0).data[0]["RET_HEAT_NO2"],
          RATE2:outInfo1.getBlock(0).data[0]["RATE2"],
          RET_HEAT_NO3:outInfo1.getBlock(0).data[0]["RET_HEAT_NO3"],
            RATE3: outInfo1.getBlock(0).data[0]["RATE3"],
            RET_HEAT_NO4: outInfo1.getBlock(0).data[0]["RET_HEAT_NO4"],
            RATE4: outInfo1.getBlock(0).data[0]["RATE4"],
            RET_HEAT_NO5: outInfo1.getBlock(0).data[0]["RET_HEAT_NO5"],
            RATE5: outInfo1.getBlock(0).data[0]["RATE5"],
            RET_HEAT_NO6: outInfo1.getBlock(0).data[0]["RET_HEAT_NO6"],
            RATE6: outInfo1.getBlock(0).data[0]["RATE6"],
            RET_HEAT_NO7: outInfo1.getBlock(0).data[0]["RET_HEAT_NO7"],
            RATE7: outInfo1.getBlock(0).data[0]["RATE7"],
            RET_HEAT_NO8: outInfo1.getBlock(0).data[0]["RET_HEAT_NO8"],
            RATE8: outInfo1.getBlock(0).data[0]["RATE8"],
            RET_HEAT_NO9: outInfo1.getBlock(0).data[0]["RET_HEAT_NO9"],
            RATE9: outInfo1.getBlock(0).data[0]["RATE9"],
          RET_TIME:outInfo1.getBlock(0).data[0]["RET_TIME"],
          REMARK:outInfo1.getBlock(0).data[0]["REMARK"]
        }
        popFreeUPD.ReceiveData(F_data);
       }
      const inInfo1 = new EI.EIInfo();
      popFreeUPD.setEvent("open", async (a: any) => {
      const eiBlock = erFormHelper.getGridCurrentRowAsBlock('gridView1');
      inInfo1.addBlock(eiBlock);
       const outInfo = await erFormHelper.callService('pssm35tcf2_inq', inInfo1, true, false, true); 
       popFreeUPD.FormHelper.reloadDropDownDataSource("LayoutGroupFilter", "TOTAL_WT", outInfo.getBlock(0));
      });
      ER.PopUtils.showErPopFree(ErPopFree, popFreeUPD, async (e: any) => {
        if (popFreeUPD.getEvent('ok')) {
          const eiInfo = new EI.EIInfo();
          eiInfo.addBlock(erFormHelper.convertModelAsBlock(popFreeUPD.DataModel), 'Table0');
          console.log('AAAA',eiInfo);
          await erFormHelper.callService('pssmxh35_upd', eiInfo, true, false).then((res) => {
            nextTick(() => {
              console.log('调用结果', res);
              if (res.status >= 0) {
                erFormHelper.messageSuccess('修改成功!!');
              }
              else {
                erFormHelper.messageError('修改失败!!，失败原因:' + res.sys.msg);
              }

            });
          });
          nextTick(() => {
            queryData();
          });
        }
      })
    };
    const F5_DO = async (e: any) => {
      const eiInfo = new EI.EIInfo();
      const selectedRows = erFormHelper.getGridCheckedRowsAsBlock('gridView1');
      eiInfo.addBlock(selectedRows, 'Table0');
      await erFormHelper.callService('pssmxh35_del', eiInfo, true, false).then((res) => {
        nextTick(() => {
          F2_DO(e);
        });
      });

    };
    const F6_DO = async (e: any) => {
      const eiInfo = new EI.EIInfo();
      const selectedRows = erFormHelper.getGridCheckedRowsAsBlock('gridView1');
      eiInfo.addBlock(selectedRows, 'Table0');
      await erFormHelper.callService('pssmxh35_cancel', eiInfo, true, false).then((res) => {
        if (res.status >= 0) {
          erFormHelper.messageSuccess('回炉取消成功!!');
        }
        else {
          erFormHelper.messageError('回炉取消失败!!，失败原因:' + res.sys.msg);
        }
        nextTick(() => {
          F2_DO(e);
        });
      });

    };
    return {
      erFormHelper,
      initializeFlag,
      erGrid1Ready,
      efFormReady,
      gridView1,
      F2_DO,
      F3_DO,
      F4_DO,
      F5_DO,
      F6_DO
    };
    //TEST QINGQ
  }
});
