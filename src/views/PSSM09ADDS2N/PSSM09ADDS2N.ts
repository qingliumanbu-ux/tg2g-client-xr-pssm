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


export default defineComponent({
  name: 'PSSM09VS2N',
  components: {
    xrEfForm,
    xrEfPanel,
    erLayout,
    erGrid,
    ErPopFree
  },
  props: {
    openInDialog: {
      type: Boolean,
      default: false,
    },
    dialogFormName: {
      type: String,
      default: "",
    },
    parentInfo: {
      type: Object,
    },
  },
  // 向父画面传递数据-注册emit监听事件
  emits: ["getChildInfo"],
  setup: (props, { emit }) => {
    // 获取画面的分区信息及设置画面初始化service
    const erFormHelper: ER.FormHelper = new ER.FormHelper()
    let selectedDataItems: any[] = [];
    const $router = useRouter();
    // 画面相关数据初始化定义
    const efFormInfo = ref<{ [key: string]: any }>({});
    // const efFormIsReady = ref(false);
    let formPartition: string;
    let formName  = 'PSSM09ADD';
    let PROGRAM_NAME: string;
    const parentInfo = ref(props.parentInfo); // 获取父画面传入参数
    const pono = parentInfo.value?.PONO;
    const st_no = parentInfo.value?.ST_NO;
    let pono_return:any;
    // xr-ef-form提供了ready事件, 在这里获取画面配置信息
    const efFormReady = (e: any) => {
      efFormInfo.value = e.formInfo;
      // efFormIsReady.value = true;
      formPartition = efFormInfo.value.formPartition; // 分区
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
          Query();
          nextTick(() => {
            erFormHelper.addModelToLayout("LayoutGroupFilter",true,false);
            erFormHelper.setControlValue("LayoutGroupFilter","ST_NO",st_no);
          });
        });
      } else {
        erFormHelper.messageError(
          'ErFormHelper initialize faild, error msg is [' + initialResult.msg + ']!'
        );
      }
    };
    const Query = () =>{
      const queryCondition = new EI.EiBlock;
      queryCondition.pushData({PONO:pono},true);
      console.log('lxx1',pono)
      const eiInfo = new EI.EIInfo();
      eiInfo.addBlock(queryCondition, 'Table0');
      erFormHelper.callService('pssm10f2_inq1', eiInfo, true, true).then((res) => {
        mainGridData.value = res.getBlock('TPSSM03').data;
        console.log('lxx2',mainGridData.value);
        erFormHelper.mergeDataToGrid(mainGridData.value, gridView1);
        });
    }
    const erGrid1Ready = () => {
      gridView1 = erFormHelper.getGrid('gridView1');
      erFormHelper.setGridEditable(gridView1, true); // 设置grid不可编辑
      
    };
    
    const f2_DO = async (e: any) => {
      const eiBlock = erFormHelper.getGridAllRowsAsBlock('gridView1');
      const eiInfo = new EI.EIInfo();
      eiInfo.addBlock(eiBlock, 'Table0');
      const queryCondition = new EI.EiBlock;
      queryCondition.pushData({PONO:pono},true);
      eiInfo.addBlock(queryCondition, 'Table1');
      const eiBlock11 = erFormHelper.getAllControlValueAsEiBlock('LayoutGroupFilter');
      eiInfo.addBlock(eiBlock11,'Table2');
      erFormHelper.callService('pssm10f3_ins_tg', eiInfo, true, true).then((res) => {
        pono_return = res.getBlock(0).data[0]["PONO"];
        nextTick(() => {
        closeClick();
        })
      })
    };

    const closeClick = () => {
      const data = {
        PONO:pono_return,
        close: true
      };
      emit('getChildInfo', data);
    };


    // 行点击事件
   

    // 铸片展示

    return {
      erFormHelper,
      initializeFlag,
      gridView1,
      gridView2,
      efFormReady,
      erGrid1Ready,
      f2_DO,
      closeClick
    };
  }
});
