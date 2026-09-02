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

import { useRoute } from "vue-router";

export default defineComponent({
  name: 'PSSMERRS2N',
  components: {
    xrEfForm,
    xrEfPanel,
    erLayout,
    erGrid,
  },
  setup() {
    const dropdownlistValue = ref('0');
    const dataSourceArray = [
      { text: '在线数据', value: '0' },
      { text: '历史数据', value: '1' }
    ];

    let selectedDataItems: any[] = [];

    // 画面相关数据初始化定义
    const erFormHelper: ER.FormHelper = new ER.FormHelper()
    const initializeService = '';
    const mainGridData = ref<any>([]);
    const subGridData = ref<any>([]);
    let gridView1!: any;
    const initializeFlag = ref(false);
    let selectedMainGridRow: any = []; //焦点行数据
    // 画面相关数据初始化定义
    const efFormInfo = ref<{ [key: string]: any }>({});
    // const efFormIsReady = ref(false);
    let formPartition: string;
    let formName  = 'PSSMERRV';
    let PROGRAM_NAME: string;
    const erGrid1Ready = () => {
      gridView1 = erFormHelper.getGrid('gridView1');
      erFormHelper.setGridEditable(gridView1, false); // 设置grid不可编辑
    };
   
    // xr-ef-form提供了ready事件, 在这里获取画面配置信息
    const efFormReady = (e: any) => {
      efFormInfo.value = e.formInfo;
      // efFormIsReady.value = true;
      formPartition = efFormInfo.value.formPartition; // 分区
      Initialize();
    };
    // 自定义工具栏按钮功能
    
  
    // 主表保存
   
    // 画面相关数据初始化
    const Initialize = async () => {
      const initialResult = await erFormHelper.Initialize(
        formPartition,
        formName,
        "",
        ""
      );

      if (initialResult.flag > 0) {
        initializeFlag.value = true;
        // 初始化工具栏
      } else {
        erFormHelper.messageError(
          'ErFormHelper initialize faild, error msg is [' + initialResult.msg + ']!'
        );
      }
    };
    onMounted(() => {
    });
    // 下拉切换触发
 

    //查询
    const getData = async () => {
      //压条件
      const eiInfo = new EI.EIInfo();
      const eiBlock = erFormHelper.getAllControlValueAsEiBlock('LayoutGroupFilter');
      eiInfo.addBlock(eiBlock, 'Table0');
      const outInfo = await erFormHelper.callService(
        "pssmerrf2_inq",
        eiInfo,
        true,
        false,
        true
      );
      if (outInfo.sys.status >= 0) {
        
        erFormHelper.mergeEiBlockToGrid(outInfo.getBlock(0), gridView1);
      } else {
        erFormHelper.messageError(outInfo.sys.msg);
      }

    };

    // 查询
    const f2Do = () => {
      getData();
    };
    return {
      erFormHelper,
      initializeFlag,
      dropdownlistValue,
      dataSourceArray,
      Initialize,
      f2Do,
      getData,
      gridView1,
      efFormReady,
      erGrid1Ready
    };
  }
});
