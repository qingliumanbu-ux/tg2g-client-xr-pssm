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
  name: 'PSSM13VS2N',
  components: {
    xrEfForm,
    xrEfPanel,
    erLayout,
    erGrid,
  },
  setup: () => {
    // 获取画面的分区信息及设置画面初始化service
   
    const initializeFlag = ref(false);
    const editable = ref(false);
    // eslint-disable-next-line no-undef
    let gridView1!: any;
    const erFormHelper: ER.FormHelper = new ER.FormHelper()
    let selectedDataItems: any[] = [];

    // 画面相关数据初始化定义
    const efFormInfo = ref<{ [key: string]: any }>({});
    // const efFormIsReady = ref(false);
    let formPartition: string;
    let formName  = 'PSSM13V';
    let PROGRAM_NAME: string;

    // xr-ef-form提供了ready事件, 在这里获取画面配置信息
    const efFormReady = (e: any) => {
      efFormInfo.value = e.formInfo;
      // efFormIsReady.value = true;
      formPartition = efFormInfo.value.formPartition; // 分区
      Initialize();
    };
    const erGrid1Ready = () => {
      gridView1 = erFormHelper.getGrid('gridView1');
      erFormHelper.setGridEditable(gridView1, false); // 设置grid不可编辑
    };
    // 画面相关数据初始化
    const Initialize = async () => {
      const initialResult = await erFormHelper.Initialize(
        formPartition,
       formName,
        "",
        "pssm_form_get"
      );
      console.log('BS1');

      if (initialResult.flag > 0) {
        initializeFlag.value = true;
        // 初始化工具栏
      } else {
        erFormHelper.messageError(
          'ErFormHelper initialize faild, error msg is [' + initialResult.msg + ']!'
        );
      }
    };

    onMounted(() => {});

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

      await erFormHelper.callService('pssm13f2_inq', eiInfo, true, false).then((res) => {
        const mainData = res.blocks['Table0'].data;
        console.log("lxx1",mainData);
        nextTick(() => {
          erFormHelper.mergeDataToGrid(mainData, gridView1);
        });
      });
    };

    console.log('BS-end');

    //查询
    const F2_DO = (e: any) => {
      queryData();
    };

    return {
      erFormHelper,
      initializeFlag,
      efFormReady,
      erGrid1Ready,
      gridView1,
      F2_DO
    };
  }
});
