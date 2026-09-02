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
  name: 'PSSM02VS2N',
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
    const erFormHelper: ER.FormHelper = new ER.FormHelper()
    let selectedDataItems: any[] = [];

    // 画面相关数据初始化定义
    const efFormInfo = ref<{ [key: string]: any }>({});
    // const efFormIsReady = ref(false);
    let formPartition: string;
    let formName = 'PSSM021PE';
    let PROGRAM_NAME: string;

    // xr-ef-form提供了ready事件, 在这里获取画面配置信息
    const efFormReady = (e: any) => {
      efFormInfo.value = e.formInfo;
      // efFormIsReady.value = true;
      formPartition = efFormInfo.value.formPartition; // 分区
      Initialize();
    };
    const initializeFlag = ref(0);
    const gridToolbar1: Ref<any[]> = ref([]);
    let gridView1!: any;
    let gridView2!: any;
    let gridView3!: any;
    let cc_mach_no = ref<any>(null);
    let ischeck = ref<any>(null);
    const editable = ref(false);
    const hiddenButton: Ref<any[]> = ref(['F5']);
    // 自定义工具栏按钮功能
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
    // 主表保存

    // 画面相关数据初始化
    const Initialize = async () => {
      const initialResult = await erFormHelper.Initialize(
        formPartition,
        formName,
        "",
        ""
      );

      if ((initialResult).flag > 0) {
        initializeFlag.value = 1;
        // 初始化工具栏
      } else {
        erFormHelper.messageError(
          'ErFormHelper initialize faild, error msg is [' + initialResult.msg + ']!'
        );
      }
    };
    onMounted(() => { });

    const GridView1FocusChanged = async (e: any) => {
      if (e && e.data) {
        let selectedMainGridRow: any = [];
        selectedMainGridRow = e.data.toJSON();
        listQuery(selectedMainGridRow);
      }
    };
    const GridView2FocusChanged = async (e: any) => {
      if (e && e.data) {
        let selectedMainGridRow: any = [];
        selectedMainGridRow = e.data.toJSON();
        listQuery1(selectedMainGridRow);
      }
    };
    const listQuery1 = async (datarow: any) => {
      const eiInfo = new EI.EIInfo();
      const eiBlock = new EI.EiBlock();
      const subGridData = ref<any>([]);
      eiBlock.pushData(datarow, true);
      eiInfo.addBlock(eiBlock);
      // 子表查询
      const outInfo = await erFormHelper.callService('pssm02_slab_inq', eiInfo, false, true);
      if (outInfo.sys.status >= 0) {
        // 根据返回数据加载页面显示数据//需要和si配置的数据集的表一致
        erFormHelper.mergeEiBlockToGrid(outInfo.getBlock(0), gridView3);
      } else {
        erFormHelper.messageError(outInfo.sys.msg);
      }
    };
    const listQuery = async (datarow: any) => {
      const eiInfo = new EI.EIInfo();
      const eiBlock = new EI.EiBlock();
      const subGridData = ref<any>([]);
      eiBlock.pushData(datarow, true);
      const column1 = new EI.EiColumn();
      column1.name = 'CC_MACH_NO';
      column1.pos = 1;
      column1.type = 'C';
      eiBlock.addColumn(column1);
      const column2 = new EI.EiColumn();
      column2.name = 'IS_CHECK';
      column2.pos = 2;
      column2.type = 'C';
      eiBlock.addColumn(column2);
      if (eiBlock.data.length > 0) {
        eiBlock.data[0]['CC_MACH_NO'] = cc_mach_no;
        eiBlock.data[0]['IS_CHECK'] = ischeck;
      }
      console.log(eiBlock)
      eiInfo.addBlock(eiBlock);
      // 子表查询
      const outInfo = await erFormHelper.callService('pssm02_pono_inq', eiInfo, false, true);
      if (outInfo.sys.status >= 0) {
        // 根据返回数据加载页面显示数据//需要和si配置的数据集的表一致
        erFormHelper.mergeEiBlockToGrid(outInfo.getBlock(0), gridView2);
      } else {
        erFormHelper.messageError(outInfo.sys.msg);
      }
    };
    //查询
    const getData = async () => {
      //压条件
      const eiInfo = new EI.EIInfo();
      const eiBlock = erFormHelper.getAllControlValueAsEiBlock('LayoutGroupFilter');
      eiInfo.addBlock(eiBlock, '0');
      cc_mach_no = eiBlock.data[0]['CC_MACH_NO'];
      ischeck = eiBlock.data[0]['IS_CHECK'];
      const outInfo = await erFormHelper.callService('pssm02_lot_inq', eiInfo, false, true);
      if (outInfo.sys.status >= 0) {
        // 根据返回数据加载页面显示数据//需要和si配置的数据集的表一致
        erFormHelper.mergeEiBlockToGrid(outInfo.getBlock(0), gridView1);
      } else {
        erFormHelper.messageError(outInfo.sys.msg);
      }
    };

    // 查询
    const F2_DO = async () => {
      if(!await erFormHelper.checkRequiredInput("LayoutGroupFilter"))return;
      getData();
    };

    return {
      erFormHelper,
      efFormReady,
      erGrid1Ready,
      erGrid2Ready,
      erGrid3Ready,
      initializeFlag,
      gridToolbar1,
      editable,
      hiddenButton,
      dropdownlistValue,
      dataSourceArray,
      gridView1,
      gridView2,
      gridView3,
      Initialize,
      F2_DO,
      getData,
      GridView1FocusChanged,
      GridView2FocusChanged
    };
  }
});
