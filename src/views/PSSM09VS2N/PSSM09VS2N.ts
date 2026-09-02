/*
 * @Description:
 * @Author: Edward
 * @Date: 2022-06-02 17:21:37
 * @LastEditors: zhangTing
 * @LastEditTime: 2023-07-19 15:13:06
 */
import {
  defineComponent,
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
import ErPopFree from'ERX/ErPopFree'
import ErPopQuery from 'ERX/ErPopQuery'
import { useRoute, useRouter } from "vue-router";
import { Console } from "console";
import xrEfDialog from "EFX/xrEfDialog";
import PSSM09ADDS2N from "../PSSM09ADDS2N/PSSM09ADDS2N.vue";

export default defineComponent({
  name: 'PSSM09VS2N',
  components: {
    xrEfForm,
    xrEfPanel,
    erLayout,
    erGrid,
    ErPopFree,
    xrEfDialog,
    PSSM09ADDS2N
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
    let formName  = 'PSSM09V';
    let PROGRAM_NAME: string;
    const dialogFormName = ref(""); // 弹出画面的画面名
    const parentInfo = ref({}); // 给弹出画面传入数据
    // xr-ef-form提供了ready事件, 在这里获取画面配置信息
    const efFormReady = (e: any) => {
      efFormInfo.value = e.formInfo;
      // efFormIsReady.value = true;
      formPartition = efFormInfo.value.formPartition; // 分区
      initializePage();
    };
    let PONO_DW:any;
    let PONO_TS:any;
    const initializeService = '';
    const mainGridData = ref<any>([]);
    const subGridData = ref<any>([]);
    let gridView1!: any;
    let gridView2!: any;
    let gridView3!: any;
    let selectedMainGridRow: any = []; //焦点行数据
    let initializeFlag = ref(false);
    let initializeFlag_A = ref(0);
    // 画面相关数据初始化
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
        nextTick(() => {
        });
      } else {
        erFormHelper.messageError(
          'ErFormHelper initialize faild, error msg is [' + initialResult.msg + ']!'
        );
      }
    };
    const dialogVisible = ref<boolean>(false);
    // 弹框ref
    const xrEfDialogRef = ref<any>(null);
    // 点击按钮打开弹框
    const openXrEfDialog = () => {
      dialogVisible.value = true;
    };

    // 获取值：获取事件参数为传递的数据
    const getChildInfo = (info: any) => {
      console.log("获取弹窗画面传递过来的信息", info);
      if (info.close) {
        dialogVisible.value = false; // 关闭弹框
        PONO_DW=info.PONO;
        closeXrEfDialog();
        console.log(PONO_DW);
      }
    };
    // 关闭弹窗事件
    const closeXrEfDialog = () => {
      // 如果是修改，则不做主表查询，只做子表查询，保持主表焦点行不变
      let e : any; 
      f2_DO(e);
      nextTick(() => {
        erFormHelper.setGridIndicator(gridView1,{PONO:PONO_DW});
      });
    };
    const erGrid1Ready = () => {
      gridView1 = erFormHelper.getGrid('gridView1');
      erFormHelper.setGridEditable(gridView1, false); // 设置grid不可编辑
    };
    const erGrid2Ready = () => {
      gridView2 = erFormHelper.getGrid('gridView2');
      erFormHelper.setGridEditable(gridView2, false); // 设置grid不可编辑
    };
    const erGrid3Ready = () => {
      gridView3 = erFormHelper.getGrid('gridView3');
      erFormHelper.setGridEditable(gridView3, false); // 设置grid不可编辑
    };
    const popFreeAdd = new ER.PopFreeHelper(
      efFormInfo.value.formPartition,
      'PSSM10SV',
      'LayoutGroupFilter',
      ''
    )

    const queryData = async (e :any) => {
      //1.压入查询条件
      const eiInfo = new EI.EIInfo();
      eiInfo.addBlock(erFormHelper.convertModelAsBlock(popFreeAdd.DataModel), 'Table0');
      console.log('lxxx',eiInfo);
      //控制台日志
      await erFormHelper.callService('pssm10f3_ins', eiInfo, true, false).then((res) => {
        nextTick(() => {


          console.log('调用结果', res);
          if (res.status >= 0)
          {
            erFormHelper.messageSuccess('新增成功!!');
          }
          else{
            erFormHelper. messageError('新增失败!!，失败原因:'+res.sys.msg);
          }
         
        });
      }); 
      nextTick(() => {
        f2_DO(e);
      });
    };
    
    const f2_DO = async (e: any) => {
      //grid清空
      erFormHelper.clearLayoutOrGridData('gridView1', 'gridView2');
      initializeFlag_A.value=0;
      const condition = erFormHelper.getAllControlValue('LayoutGroupFilter');
      const eiInfo = new EI.EIInfo();
      const queryCondition = erFormHelper.getAllControlValueAsEiBlock('LayoutGroupFilter');
      eiInfo.addBlock(queryCondition, 'Table0');
      if(queryCondition.data[0]["PLAN_DATE_FROM"]===''||queryCondition.data[0]["PLAN_DATE_TO"]==='')
      {
        erFormHelper.messageError('开始结束日期不能为空，请检查后再查询' );
        return;
      }
      erFormHelper.callService('pssm10f2_inq', eiInfo, true, true).then((res) => {
        mainGridData.value = res.getBlock('Table0').data;
        nextTick(() => {
          erFormHelper.mergeDataToGrid(mainGridData.value, gridView1);
          erFormHelper.mergeDataToGrid(mainGridData.value, gridView3);
          // 默认显示第一条
          if (mainGridData.value.length>0) {
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
        erFormHelper.checkGridCurrentRow("gridView1");
      }
    }
    const GridView3FocusChanged = async (e: any) => {
      if (e && e.data) {
        let selectedMainGridRow: any = [];
        selectedMainGridRow = e.data.toJSON();
        listQuery(selectedMainGridRow);
         erFormHelper.checkGridCurrentRow("gridView3");
      }
    }
    const listQuery = async (datarow: any) => {
      const eiInfo = new EI.EIInfo();
      const eiBlock = eiInfo.addBlock(new EI.EiBlock(), 'Table0');
      eiBlock.pushData(datarow, true);
      // 子表查询
      erFormHelper.callService('pssm10f2_inq1', eiInfo, true, true).then((res) => {
        subGridData.value = res.getBlock('TPSSM03').data;
        nextTick(() => {
          erFormHelper.mergeDataToGrid(subGridData.value, gridView2);
        });
      });
    };

    // 后备命令和命令板坯号
    const f3_DO = async (e: any) => {
     const selectedRows = erFormHelper.getGridCheckedRowsAsBlock('gridView1');
      console.log('aaaa',selectedRows);
     const data  = 
     {
      PONO : selectedRows.data[0]['PONO'],
      ST_NO : selectedRows.data[0]['ST_NO']
     }
     
      dialogFormName.value = "PSSM09ADDS2N"; // 读配置表获取画面名
      parentInfo.value = data;
      console.log(dialogFormName.value);
      openXrEfDialog();  
    };
    const F4_PRE_DO = async (e: any) => {
      initializeFlag_A.value=1;
      f2_DO(e);
    }
    const F4_CANCEL = async (e: any) => {
      initializeFlag_A.value=0;
      f2_DO(e);
    }
    const f4_DO = async (e: any) => {
      //const selectedRows = erFormHelper.getGridCheckedRowsAsBlock('gridView1');
      if (erFormHelper.getGridCheckedRows("gridView3").length === 0) {
            erFormHelper.messageWarning("请选择一条信息再修改");
            return false;
         }
      const eiInfo = new EI.EIInfo();
      const selectedRows = erFormHelper.getGridCheckedRowsAsBlock('gridView3');
      eiInfo.addBlock(selectedRows, 'Table0');
      for (let i = 0; i < selectedRows.data.length; i++) {
        if(i===0)
          {
            PONO_TS=selectedRows.data[i]["PONO"]+",";
          }
          else
          {
            PONO_TS = PONO_TS + selectedRows.data[i]["PONO"]+",";
          }
      }
      const mes_res = await erFormHelper.messageConfirm(
        "是否确认炉次关闭？ PONO信息为：" + PONO_TS
      );
      if (!mes_res) {
        PONO_TS = "";
        return;
      } else {
        PONO_TS = "";
      }
      await erFormHelper.callService('pssm10f5_del', eiInfo, true, false).then((res) => {
        nextTick(() => {
          initializeFlag_A.value=0;
          nextTick(() => {
          f2_DO(e);
          if (res.status >= 0) {
            erFormHelper.messageSuccess('删除成功!!');
          }
          else {
            erFormHelper.messageError('删除失败!!，失败原因:' + res.sys.msg);
          }
        });
      });
    });
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

        erFormHelper.callService('pssm91f7_proc', eiInfo, true, true).then((res) => {
          f2_DO(e);
        });
      } else {
        erFormHelper.messageWarning('请选择数据');
      }
    };

    // 铸片展示

    return {
      erFormHelper,
      initializeFlag,initializeFlag_A,
      gridView1,
      gridView2,
      gridView3,
      efFormReady,
      erGrid1Ready,
      erGrid2Ready,
      erGrid3Ready,
      f2_DO,
      f3_DO,
      f4_DO,F4_PRE_DO,F4_CANCEL,
      GridView1FocusChanged,
      GridView3FocusChanged,
      dialogVisible,
      dialogFormName,
      xrEfDialogRef,
      openXrEfDialog,
      parentInfo,
      getChildInfo,
      closeXrEfDialog
    };
  }
});
