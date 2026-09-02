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
    let formName  = 'PSSMZLV';
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
    const initializeService = '';
    const mainGridData = ref<any>([]);
    const subGridData = ref<any>([]);
    let gridView1!: any;
    let gridView2!: any;
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
  

    // 获取值：获取事件参数为传递的数据
   
    // 关闭弹窗事件
    
    const erGrid1Ready = () => {
      gridView1 = erFormHelper.getGrid('gridView1');
      erFormHelper.setGridEditable(gridView1, false); // 设置grid不可编辑
    };
    const erGrid2Ready = () => {
      gridView2 = erFormHelper.getGrid('gridView2');
      erFormHelper.setGridEditable(gridView2, false); // 设置grid不可编辑
    };
    
    const f2_DO = async (e: any) => {
      //grid清空
      erFormHelper.clearLayoutOrGridData('gridView1', 'gridView2');

      const condition = erFormHelper.getAllControlValue('LayoutGroupFilter');
      const eiInfo = new EI.EIInfo();
      const queryCondition = erFormHelper.getAllControlValueAsEiBlock('LayoutGroupFilter');
      eiInfo.addBlock(queryCondition, 'Table0');
      erFormHelper.callService('pssmzlf2_inq', eiInfo, true, true).then((res) => {
        mainGridData.value = res.getBlock('Table0').data;
        nextTick(() => {
          erFormHelper.mergeDataToGrid(mainGridData.value, gridView1);
          nextTick(() => {
          erFormHelper.setGridIndicator(gridView1,{PONO:PONO_DW});
          });
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
      if (erFormHelper.getGridCheckedRows(gridView1).length === 0) {
        erFormHelper.messageWarning("请选择一条信息进行操作");
        return;
      } 
     const eiBlock = erFormHelper.getGridSelectRowsAsBlock("gridView1");
     PONO_DW = eiBlock.data[0]["PONO"];
     const eiInfo = new EI.EIInfo();
      eiInfo.addBlock(eiBlock, 'Table0');
      const outInfo = await erFormHelper.callService(
        "pssmzlf3_pro",
        eiInfo,
        true,
        false,
        true
      );
      if (outInfo.sys.status >= 0) {
        erFormHelper.messageSuccess("铸流交换成功");
        f2_DO(e);
       
      } else {
        erFormHelper.messageError(outInfo.sys.msg);
      }
    };
    const F4_PRE_DO = async (e: any) => {
      initializeFlag_A.value=1;
      f2_DO(e);
    }
    const F4_CANCEL = async (e: any) => {
      initializeFlag_A.value=0;
      f2_DO(e);
    }
   
    return {
      erFormHelper,
      initializeFlag,initializeFlag_A,
      gridView1,
      gridView2,
      efFormReady,
      erGrid1Ready,
      erGrid2Ready,
      f2_DO,
      f3_DO,
      GridView1FocusChanged,
      dialogVisible,
      dialogFormName,
      xrEfDialogRef,
      parentInfo,
    };
  }
});
