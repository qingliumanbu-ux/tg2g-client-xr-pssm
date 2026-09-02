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
  name: 'PSSM10CLLVS2N',
  components: {
    xrEfForm,
    xrEfPanel,
    erLayout,
    erGrid,
  },
  setup() {

    // 画面相关数据初始化定义
    const erFormHelper: ER.FormHelper = new ER.FormHelper()
    let selectedDataItems: any[] = [];
    let initializeFlag = ref(false);
    let gridView1!: any;
    let gridView1Api!: any;
    const editable = ref(false);
    // 画面相关数据初始化定义
    const efFormInfo = ref<{ [key: string]: any }>({});
    // const efFormIsReady = ref(false);
    let formPartition: string;
    let formName = 'PSSM10V';
    let PROGRAM_NAME: string;

    // xr-ef-form提供了ready事件, 在这里获取画面配置信息
    const efFormReady = (e: any) => {
      efFormInfo.value = e.formInfo;
      // efFormIsReady.value = true;
      formPartition = efFormInfo.value.formPartition; // 分区
      initializePage();
    };



    const erGrid1Ready = () => {
      gridView1 = erFormHelper.getGrid('gridView1');
      gridView1Api = erFormHelper.getGridApi('gridView1')
      erFormHelper.setGridEditable(gridView1, false); // 设置grid不可编辑
    };

    // 画面相关数据初始化
    const initializePage = async () => {
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
    onMounted(() => { });

    //查询
    const getData = async () => {
      //压条件
      const eiInfo_l = new EI.EIInfo();
      const eiBlock = erFormHelper.getAllControlValueAsEiBlock('LayoutGroupFilter');
      console.log('lxx2', eiInfo_l)
      eiInfo_l.addBlock(eiBlock);
      if(eiBlock.data[0]["CC_MACH_NO"] === ''){
        erFormHelper.messageWarning('请选择铸机!!');
        return;
      }
      await erFormHelper.callService('pssm10cllcf2_inq', eiInfo_l, true, false).then((res) => {
        const mainData = res.blocks['PSSM101_INQ'].data;
        nextTick(() => {
          erFormHelper.mergeDataToGrid(mainData, gridView1);
        });
      });
    };


    // 查询
    const f2Do = () => {

      getData();
    };


    const array = ref<any[]>([]);

    //gird1焦点行变变化



    //pre
    const f3PreDo = (e: any) => {
      editable.value = true;
      erFormHelper.setGridEditable('gridView1', true);
    };



    // 自动预排
    const f3Do = async (e: any) => {
      //--------------------------------------------------------
      //先定义 eiInfo，依次获取Block
      const eiInfo = new EI.EIInfo();
      const eiBlock = new EI.EiBlock();
      // const eiBlock = erFormHelper.getAllControlValueAsEiBlock('LayoutGroupFilter');
      // eiBlock.addColumn("PONO");
      // eiBlock.addColumn("MOVE_TYPE");

      //多行压值
      const data = erFormHelper.getAllControlValue('LayoutGroupFilter');
      if (array.value.length > 0) {
        array.value.forEach(function (item, index, array) {
          console.log('index', index);
          console.log('item', item);
          eiBlock.pushData([{
            FACTORY_DIV: data.FACTORY_DIV,
            CC_MACH_NO: data.CC_MACH_NO,
            MOVE_TYPE: 'auto',
            PONO: item
          }], true);
        });
        console.log('eiBlock', eiBlock);
      }

      eiInfo.addBlock(eiBlock, 'Table0');
      //--------------------------------------------------------------
      //调用服务
      erFormHelper.callService('pssm10ccf3_move', eiInfo, true, true).then((res) => {
        f2Do();//刷新

        console.log('调用结果', res);
        if (res.status >= 0) {
          erFormHelper.messageSuccess('铸顺调整成功!!');
        }
      });
    };

    // 维护取消
    const f3Cancel = async () => {
      // editable.value = false;
      // setToolbarVisible(editable.value);
      // erFormHelper.setGridEditable('gridView1', false);
    };

    // 审核前判断
    const f4PreDo = (e: any) => {
    };


    //移动
    const f4Do = async (e: any) => {
      //--------------------------------------------------------
      //先定义 eiInfo，依次获取Block
      const eiInfo1 = new EI.EIInfo();
      const eiBlock1 = new EI.EiBlock();
      //const eiBlock1 = erFormHelper.getGridAllRowsAsBlock('gridView1');
      const rowData: any[] = []
      gridView1Api.forEachNode((node: { data: any; }) => rowData.push(node.data))

      for (let i = 0; i < rowData.length; i++) {
          eiBlock1.pushData([{
            PONO: rowData[i].PONO,
            FACTORY_DIV: 'LG1'
          }], true);
      }
      eiInfo1.addBlock(eiBlock1, '0');
      //第一张存放grid顺序数据，第二张存放厂别和铸机
      const eiBlock2 = erFormHelper.getAllControlValueAsEiBlock('LayoutGroupFilter');
      eiInfo1.addBlock(eiBlock2, '1')
      console.log('zzz', eiInfo1)
      //--------------------------------------------------------------
      //调用服务
      EIManager.callService(formPartition, 'pssm10cllcf3_move', eiInfo1).then((res) => {
        //getData();//刷新

        console.log('调用结果', res);
        if (res.status >= 0) {
          erFormHelper.messageSuccess('铸顺调整成功!!');
          getData();//刷新
        }
      });
    };

    // 取消审核
    const f4Cancel = () => { };

    // 恢复前判断
    const f5PreDo = (e: any) => {
      // selectedDataItems = [];
      // const selectedRows = erFormHelper.getGridSelectRows(gridView1);
      // selectedRows.forEach((tr: any) => {
      //   const json = tr.toJSON();
      //   selectedDataItems.push(json);
      // });
      // if (selectedDataItems.length === 0) {
      //   erFormHelper.messageWarning('请选择一条数据进行审核');
      //   return false;
      // }
    };

    // 确认恢复
    // const f5Do = async () => {
    //   const eiInfo = new EI.EIInfo();
    //   const eiBlock = EI.EiBlock.build('Table0', selectedDataItems);
    //   eiInfo.addBlock(eiBlock);
    //   erFormHelper.callService('qxsmbt0a_res', eiInfo, true, true).then((res) => {
    //     const platonicResData = res.blocks['Table0'].data;
    //     nextTick(() => {
    //       erFormHelper.mergeDataToGrid(platonicResData, gridView1);
    //     });
    //     getData();
    //   });
    // };

    //重引锭
    const f5Do = async (e: any) => {
      //--------------------------------------------------------
      //先定义 eiInfo，依次获取Block
      const eiInfo = new EI.EIInfo();
      const eiBlock = new EI.EiBlock();

      const selectedRows = erFormHelper.getGridCheckedRows('gridView1');
      if (selectedRows.length > 0) {
        const rows: any = [];
        selectedRows.forEach((tr: any) => {
          const json = tr.toJSON();
          rows.push(json);
        });

        eiBlock.pushData(rows, true);
        eiBlock.addColumn("MOVE_TYPE");
        eiBlock.data[0]["MOVE_TYPE"] = 'T';

        console.log('eiBlock--2', eiBlock);
        eiInfo.addBlock(eiBlock, 'Table0');

        erFormHelper.callService('pssm10ccf10_restrd', eiInfo, true, true).then((res) => {
          f2Do();

          console.log('调用结果', res);
          if (res.status >= 0) {
            erFormHelper.messageSuccess('重引锭成功!!');
          }
        });
      }
      else {
        erFormHelper.messageWarning('请选择数据!!');
      }
    };

    // 取消恢复
    const f5Cancel = () => { };


    return {
      erFormHelper,
      initializeFlag,
      gridView1,
      erGrid1Ready,
      efFormReady,
      gridView1Api,
      f2Do,
      f3Do,
      f3PreDo,
      f3Cancel,
      f4Do,
      f4PreDo,
      f4Cancel,
      f5Do,
      f5PreDo,
      f5Cancel
    };
  }
});
