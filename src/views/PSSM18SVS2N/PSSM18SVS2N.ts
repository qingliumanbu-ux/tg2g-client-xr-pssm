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
  name: 'PSSM18SVS2N',
  components: {
    xrEfForm,
    xrEfPanel,
    erLayout,
    erGrid,
  },
  setup: () => {
    // 获取画面的分区信息及设置画面初始化service
    const editable = ref(false);
    const route = useRoute(); //获取跳转参数
    const erFormHelper: ER.FormHelper = new ER.FormHelper()
    let selectedDataItems: any[] = [];
    let initializeFlag = ref(false);
    // 画面相关数据初始化定义
    const efFormInfo = ref<{ [key: string]: any }>({});
    // const efFormIsReady = ref(false);
    let formPartition: string;
    let formName  = 'PSSM18SV';
    let PROGRAM_NAME: string;

    // xr-ef-form提供了ready事件, 在这里获取画面配置信息
    const efFormReady = (e: any) => {
      efFormInfo.value = e.formInfo;
      // efFormIsReady.value = true;
      formPartition = efFormInfo.value.formPartition; // 分区
      Initialize();
    };
    // eslint-disable-next-line no-undef
    let gridView1!: any;

    // 画面相关数据初始化
    const Initialize = async () => {
      const initialResult = await erFormHelper.Initialize(
        formPartition,
        formName,
        '',
        ' '
      );
      if (initialResult.flag > 0) {
        initializeFlag.value = true;
        // 初始化工具栏
        nextTick(() => {
          //gridView1 = erFormHelper.getKendoGrid('gridView1');
          console.log('跳转参数', route.query);
          //console.log('q1', route.query.HEAT_NO);

          if (route.query.HEAT_NO)
          {
            erFormHelper.setControlValueEx('LayoutGroupFilter', route.query);
          }

          //  erFormHelper.setControlValue(
          //   'LayoutGroupFilter',
          //   'FACTORY_DIV',
          //   route.query.FACTORY_DIV
          // );

        });
      } else {
        erFormHelper.messageError(
          'ErFormHelper initialize faild, error msg is [' + initialResult.msg + ']!'
        );
      }
    };

    onMounted(() => {});

    //主表查询
    const queryData = async () => {
      //1.压入查询条件
      const eiInfo = new EI.EIInfo();
      const eiBlock = erFormHelper.getAllControlValueAsEiBlock('LayoutGroupFilter');
      eiInfo.addBlock(eiBlock, 'Table0');

      //控制台日志
      await erFormHelper.callService('pssm18_sk_upd', eiInfo, true, false).then((res) => {
        nextTick(() => {


          console.log('调用结果', res);
          if (res.status >= 0)
          {
            erFormHelper.messageSuccess('回退成功!!');
          }
          else{
            erFormHelper. messageError('回退失败!!，失败原因:'+res.sys.msg);
          }

        });
      });
    };

    //暂不用
   
    //查询
    const F2_DO = (e: any) => {
      queryData();
    };

    return {
      erFormHelper,
      initializeFlag,
      F2_DO,
      efFormReady
    };
  }
});
