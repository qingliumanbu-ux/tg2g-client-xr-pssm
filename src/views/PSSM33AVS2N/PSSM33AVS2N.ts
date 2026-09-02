
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
  name: 'PSSM33CVS2N',
  components: {
    xrEfForm,
    xrEfPanel,
    erLayout,
    erGrid,
  },
  setup: () => {
    // 获取画面的分区信息及设置画面初始化service
    const erFormHelper: ER.FormHelper = new ER.FormHelper()
    let selectedDataItems: any[] = [];
    const bunker_H1 = reactive(new Array);
    const bunker_H1_CF = reactive(new Array);
    const bunker_H2 = reactive(new Array);
    const bunker_H2_CF = reactive(new Array);
    const bunker_T1 = reactive(new Array);
    const bunker_T1_CF = reactive(new Array);
    const bunker_T2 = reactive(new Array);
    const bunker_T2_CF = reactive(new Array);
    const bunker_T3 = reactive(new Array);
    const bunker_T3_CF = reactive(new Array);
    const bunker_B1 = reactive(new Array);
    const bunker_B1_CF = reactive(new Array);
    const bunker_B2 = reactive(new Array);
    const bunker_B2_CF = reactive(new Array);
    const bunker_B0 = reactive(new Array);
    const bunker_B0_CF = reactive(new Array);
    const bunker_L3 = reactive(new Array);
    const bunker_L3_CF = reactive(new Array);
    const bunker_L4 = reactive(new Array);
    const bunker_L4_CF = reactive(new Array);
    const bunker_L5 = reactive(new Array);
    const bunker_L5_CF = reactive(new Array);
    const bunker_L6 = reactive(new Array);
    const bunker_L6_CF = reactive(new Array);
    const bunker_R1 = reactive(new Array);
    const bunker_R1_CF = reactive(new Array);
    const bunker_R2 = reactive(new Array);
    const bunker_R2_CF = reactive(new Array);
    const bunker_R3 = reactive(new Array);
    const bunker_R3_CF = reactive(new Array);
    const bunker_R4 = reactive(new Array);
    const bunker_R4_CF = reactive(new Array);
    const bunker_C3 = reactive(new Array);
    const bunker_C3_CF = reactive(new Array);
    const bunker_C4 = reactive(new Array);
    const bunker_C4_CF = reactive(new Array);
    const bunker_H1_CF_act = reactive(new Array);
    const bunker_H2_CF_act = reactive(new Array);
    const bunker_T1_CF_act = reactive(new Array);
    const bunker_T2_CF_act = reactive(new Array);
    const bunker_T3_CF_act = reactive(new Array);
    const bunker_B1_CF_act = reactive(new Array);
    const bunker_B2_CF_act = reactive(new Array);
    const bunker_B0_CF_act = reactive(new Array);
    const bunker_L3_CF_act = reactive(new Array);
    const bunker_L4_CF_act = reactive(new Array);
    const bunker_L5_CF_act = reactive(new Array);
    const bunker_L6_CF_act = reactive(new Array);
    const bunker_R1_CF_act = reactive(new Array);
    const bunker_R2_CF_act = reactive(new Array);
    const bunker_R3_CF_act = reactive(new Array);
    const bunker_R4_CF_act = reactive(new Array);
    const bunker_C3_CF_act = reactive(new Array);
    const bunker_C4_CF_act = reactive(new Array);
    const bunker_Z1 = reactive(new Array);
    const bunker_Z1_CF = reactive(new Array);
    const bunker_Z2 = reactive(new Array);
    const bunker_Z2_CF = reactive(new Array);
    const bunker_Z3 = reactive(new Array);
    const bunker_Z3_CF = reactive(new Array);
    const bunker_Z4 = reactive(new Array);
    const bunker_Z4_CF = reactive(new Array);
    const bunker_Z5 = reactive(new Array);
    const bunker_Z5_CF = reactive(new Array);
    const bunker_Z6 = reactive(new Array);
    const bunker_Z6_CF = reactive(new Array);
    const bunker_Z7 = reactive(new Array);
    const bunker_Z7_CF = reactive(new Array);
    const bunker_Z8 = reactive(new Array);
    const bunker_Z8_CF = reactive(new Array);
    const bunker_E1 = reactive(new Array);
    const bunker_E1_CF = reactive(new Array);
    const bunker_E2 = reactive(new Array);
    const bunker_E2_CF = reactive(new Array);
    const bunker_A0 = reactive(new Array);
    const bunker_A0_CF = reactive(new Array);
    const bunker_A1 = reactive(new Array);
    const bunker_A1_CF = reactive(new Array);
    const bunker_A2 = reactive(new Array);
    const bunker_A2_CF = reactive(new Array);
    const bunker_V1 = reactive(new Array);
    const bunker_V1_CF = reactive(new Array);
    const bunker_V2 = reactive(new Array);
    const bunker_V2_CF = reactive(new Array);
    const bunker_L1 = reactive(new Array);
    const bunker_L1_CF = reactive(new Array);
    const bunker_L2 = reactive(new Array);
    const bunker_L2_CF = reactive(new Array);
    const bunker_S1 = reactive(new Array);
    const bunker_S1_CF = reactive(new Array);
    const bunker_S2 = reactive(new Array);
    const bunker_S2_CF = reactive(new Array);
    const bunker_S3 = reactive(new Array);
    const bunker_S3_CF = reactive(new Array);
    const bunker_C0 = reactive(new Array);
    const bunker_C0_CF = reactive(new Array);
    const bunker_C1 = reactive(new Array);
    const bunker_C1_CF = reactive(new Array);
    const bunker_C2 = reactive(new Array);
    const bunker_C2_CF = reactive(new Array);
    const bunker_Z1_CF_act = reactive(new Array);
    const bunker_Z2_CF_act = reactive(new Array);
    const bunker_Z3_CF_act = reactive(new Array);
    const bunker_Z4_CF_act = reactive(new Array);
    const bunker_Z5_CF_act = reactive(new Array);
    const bunker_Z6_CF_act = reactive(new Array);
    const bunker_Z7_CF_act = reactive(new Array);
    const bunker_Z8_CF_act = reactive(new Array);
    const bunker_E1_CF_act = reactive(new Array);
    const bunker_E2_CF_act = reactive(new Array);
    const bunker_A0_CF_act = reactive(new Array);
    const bunker_A1_CF_act = reactive(new Array);
    const bunker_A2_CF_act = reactive(new Array);
    const bunker_V1_CF_act = reactive(new Array);
    const bunker_V2_CF_act = reactive(new Array);
    const bunker_L1_CF_act = reactive(new Array);
    const bunker_L2_CF_act = reactive(new Array);
    const bunker_S1_CF_act = reactive(new Array);
    const bunker_S2_CF_act = reactive(new Array);
    const bunker_S3_CF_act = reactive(new Array);
    const bunker_C0_CF_act = reactive(new Array);
    const bunker_C1_CF_act = reactive(new Array);
    const bunker_C2_CF_act = reactive(new Array);
    // 画面相关数据初始化定义
    const efFormInfo = ref<{ [key: string]: any }>({});
    let time_span;
    // const efFormIsReady = ref(false);
    let formPartition: string;
    let PROGRAM_NAME: string;

    // xr-ef-form提供了ready事件, 在这里获取画面配置信息
    const efFormReady = (e: any) => {
      efFormInfo.value = e.formInfo;
      // efFormIsReady.value = true;
      formPartition = efFormInfo.value.formPartition; // 分区
      queryData();
      setInterval(() => {
        queryData();
      }, 5*60000);
    };
    const initializeService = '';
    let selectedMainGridRow: any = []; //焦点行数据
    let initializeFlag = ref(false);

    onMounted(() => { });
    const queryData = async () => {
      queryData_H1();
      queryData_DEV_CODE();
    };
    //主表查询
    const queryData_DEV_CODE = async () => {
      const inInfo = new EI.EIInfo();
      const eiBlock = inInfo.addBlock(new EI.EiBlock());
      EIManager.callService(formPartition, 'pssm33_jst_inq', inInfo)
        .then((res: EI.EIInfo) => {
          for (let i = 0; i < res.getBlock(0).data.length; i++) {
            if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "Z1") {
              if (bunker_Z1[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_Z1[0] = ' ';
                }
                else {
                  bunker_Z1[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_Z1[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_Z1[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_Z1[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_Z1[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_Z1[3] != time_span) {
                  bunker_Z1[3] = time_span;
                }
              }
              else {
                bunker_Z1[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_Z1[4] != time_span) {
                  bunker_Z1[4] = time_span;
                }
              }
              else {
                bunker_Z1[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                  if (bunker_Z1[5] != time_span) {
                    bunker_Z1[5] = time_span;
                  }
              }
              else {
                bunker_Z1[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_Z1[6] != time_span) {
                  bunker_Z1[6] = time_span;
                }
              }
              else {
                bunker_Z1[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_Z1[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_Z1[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_Z1[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_Z1[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_Z1[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_Z1[9] = res.getBlock(0).data[i]['TEMP'];
              }
              if (bunker_Z1[10] != res.getBlock(0).data[i]['TC_FLAG']) {
                bunker_Z1[10] = res.getBlock(0).data[i]['TC_FLAG'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "Z2"){
              if (bunker_Z2[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_Z2[0] = ' ';
                }
                else {
                  bunker_Z2[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_Z2[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_Z2[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_Z2[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_Z2[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_Z2[3] != time_span) {
                  bunker_Z2[3] = time_span;
                }
              }
              else {
                bunker_Z2[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_Z2[4] != time_span) {
                  bunker_Z2[4] = time_span;
                }
              }
              else {
                bunker_Z2[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                  if (bunker_Z2[5] != time_span) {
                    bunker_Z2[5] = time_span;
                  }
              }
              else {
                bunker_Z2[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_Z2[6] != time_span) {
                  bunker_Z2[6] = time_span;
                }
              }
              else {
                bunker_Z2[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_Z2[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_Z2[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_Z2[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_Z2[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_Z2[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_Z2[9] = res.getBlock(0).data[i]['TEMP'];
              }
              if (bunker_Z2[10] != res.getBlock(0).data[i]['TC_FLAG']) {
                bunker_Z2[10] = res.getBlock(0).data[i]['TC_FLAG'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "Z3") {
              if (bunker_Z3[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_Z3[0] = ' ';
                }
                else {
                  bunker_Z3[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_Z3[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_Z3[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_Z3[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_Z3[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_Z3[3] != time_span) {
                  bunker_Z3[3] = time_span;
                }
              }
              else {
                bunker_Z3[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_Z3[4] != time_span) {
                  bunker_Z3[4] = time_span;
                }
              }
              else {
                bunker_Z3[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                  if (bunker_Z3[5] != time_span) {
                    bunker_Z3[5] = time_span;
                  }
              }
              else {
                bunker_Z3[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_Z3[6] != time_span) {
                  bunker_Z3[6] = time_span;
                }
              }
              else {
                bunker_Z3[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_Z3[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_Z3[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_Z3[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_Z3[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_Z3[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_Z3[9] = res.getBlock(0).data[i]['TEMP'];
              }
              if (bunker_Z3[10] != res.getBlock(0).data[i]['TC_FLAG']) {
                bunker_Z3[10] = res.getBlock(0).data[i]['TC_FLAG'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "Z4") {
              if (bunker_Z4[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_Z4[0] = ' ';
                }
                else {
                  bunker_Z4[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_Z4[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_Z4[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_Z4[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_Z4[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_Z4[3] != time_span) {
                  bunker_Z4[3] = time_span;
                }
              }
              else {
                bunker_Z4[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_Z4[4] != time_span) {
                  bunker_Z4[4] = time_span;
                }
              }
              else {
                bunker_Z4[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                  if (bunker_Z4[5] != time_span) {
                    bunker_Z4[5] = time_span;
                  }
              }
              else {
                bunker_Z4[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_Z4[6] != time_span) {
                  bunker_Z4[6] = time_span;
                }
              }
              else {
                bunker_Z4[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_Z4[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_Z4[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_Z4[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_Z4[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_Z4[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_Z4[9] = res.getBlock(0).data[i]['TEMP'];
              }
              if (bunker_Z4[10] != res.getBlock(0).data[i]['TC_FLAG']) {
                bunker_Z4[10] = res.getBlock(0).data[i]['TC_FLAG'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "Z5") {
              if (bunker_Z5[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_Z5[0] = ' ';
                }
                else {
                  bunker_Z5[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_Z5[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_Z5[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_Z5[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_Z5[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_Z5[3] != time_span) {
                  bunker_Z5[3] = time_span;
                }
              }
              else {
                bunker_Z5[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_Z5[4] != time_span) {
                  bunker_Z5[4] = time_span;
                }
              }
              else {
                bunker_Z5[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                  if (bunker_Z5[5] != time_span) {
                    bunker_Z5[5] = time_span;
                  }
              }
              else {
                bunker_Z5[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_Z5[6] != time_span) {
                  bunker_Z5[6] = time_span;
                }
              }
              else {
                bunker_Z5[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_Z5[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_Z5[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_Z5[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_Z5[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_Z5[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_Z5[9] = res.getBlock(0).data[i]['TEMP'];
              }
              if (bunker_Z5[10] != res.getBlock(0).data[i]['TC_FLAG']) {
                bunker_Z5[10] = res.getBlock(0).data[i]['TC_FLAG'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "Z6") {
              if (bunker_Z6[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_Z6[0] = ' ';
                }
                else {
                  bunker_Z6[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_Z6[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_Z6[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_Z6[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_Z6[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_Z6[3] != time_span) {
                  bunker_Z6[3] = time_span;
                }
              }
              else {
                bunker_Z6[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_Z6[4] != time_span) {
                  bunker_Z6[4] = time_span;
                }
              }
              else {
                bunker_Z6[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                  if (bunker_Z6[5] != time_span) {
                    bunker_Z6[5] = time_span;
                  }
              }
              else {
                bunker_Z6[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_Z6[6] != time_span) {
                  bunker_Z6[6] = time_span;
                }
              }
              else {
                bunker_Z6[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_Z6[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_Z6[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_Z6[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_Z6[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_Z6[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_Z6[9] = res.getBlock(0).data[i]['TEMP'];
              }
              if (bunker_Z6[10] != res.getBlock(0).data[i]['TC_FLAG']) {
                bunker_Z6[10] = res.getBlock(0).data[i]['TC_FLAG'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "Z7") {
              if (bunker_Z7[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_Z7[0] = ' ';
                }
                else {
                  bunker_Z7[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_Z7[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_Z7[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_Z7[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_Z7[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_Z7[3] != time_span) {
                  bunker_Z7[3] = time_span;
                }
              }
              else {
                bunker_Z7[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_Z7[4] != time_span) {
                  bunker_Z7[4] = time_span;
                }
              }
              else {
                bunker_Z7[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                  if (bunker_Z7[5] != time_span) {
                    bunker_Z7[5] = time_span;
                  }
              }
              else {
                bunker_Z7[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_Z7[6] != time_span) {
                  bunker_Z7[6] = time_span;
                }
              }
              else {
                bunker_Z7[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_Z7[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_Z7[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_Z7[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_Z7[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_Z7[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_Z7[9] = res.getBlock(0).data[i]['TEMP'];
              }
              if (bunker_Z7[10] != res.getBlock(0).data[i]['TC_FLAG']) {
                bunker_Z7[10] = res.getBlock(0).data[i]['TC_FLAG'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "Z8"){
              if (bunker_Z8[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_Z8[0] = ' ';
                }
                else {
                  bunker_Z8[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_Z8[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_Z8[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_Z8[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_Z8[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_Z8[3] != time_span) {
                  bunker_Z8[3] = time_span;
                }
              }
              else {
                bunker_Z8[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_Z8[4] != time_span) {
                  bunker_Z8[4] = time_span;
                }
              }
              else {
                bunker_Z8[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                  if (bunker_Z8[5] != time_span) {
                    bunker_Z8[5] = time_span;
                  }
              }
              else {
                bunker_Z8[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_Z8[6] != time_span) {
                  bunker_Z8[6] = time_span;
                }
              }
              else {
                bunker_Z8[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_Z8[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_Z8[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_Z8[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_Z8[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_Z8[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_Z8[9] = res.getBlock(0).data[i]['TEMP'];
              }
              if (bunker_Z8[10] != res.getBlock(0).data[i]['TC_FLAG']) {
                bunker_Z8[10] = res.getBlock(0).data[i]['TC_FLAG'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "E1") {
              if (bunker_E1[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_E1[0] = ' ';
                }
                else {
                  bunker_E1[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_E1[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_E1[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_E1[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_E1[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_E1[3] != time_span) {
                  bunker_E1[3] = time_span;
                }
              }
              else {
                bunker_E1[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_E1[4] != time_span) {
                  bunker_E1[4] = time_span;
                }
              }
              else {
                bunker_E1[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_E1[5] != time_span) {
                  bunker_E1[5] = time_span;
                }
              }
              else {
                bunker_E1[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_E1[6] != time_span) {
                  bunker_E1[6] = time_span;
                }
              }
              else {
                bunker_E1[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_E1[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_E1[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_E1[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_E1[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_E1[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_E1[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "E2") {
              if (bunker_E2[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_E2[0] = ' ';
                }
                else {
                  bunker_E2[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_E2[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_E2[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_E2[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_E2[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_E2[3] != time_span) {
                  bunker_E2[3] = time_span;
                }
              }
              else {
                bunker_E2[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_E2[4] != time_span) {
                  bunker_E2[4] = time_span;
                }
              }
              else {
                bunker_E2[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_E2[5] != time_span) {
                  bunker_E2[5] = time_span;
                }
              }
              else {
                bunker_E2[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_E2[6] != time_span) {
                  bunker_E2[6] = time_span;
                }
              }
              else {
                bunker_E2[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_E2[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_E2[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_E2[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_E2[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_E2[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_E2[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "A0") {
              if (bunker_A0[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_A0[0] = ' ';
                }
                else {
                  bunker_A0[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_A0[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_A0[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_A0[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_A0[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_A0[3] != time_span) {
                  bunker_A0[3] = time_span;
                }
              }
              else {
                bunker_A0[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_A0[4] != time_span) {
                  bunker_A0[4] = time_span;
                }
              }
              else {
                bunker_A0[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_A0[5] != time_span) {
                  bunker_A0[5] = time_span;
                }
              }
              else {
                bunker_A0[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_A0[6] != time_span) {
                  bunker_A0[6] = time_span;
                }
              }
              else {
                bunker_A0[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_A0[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_A0[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_A0[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_A0[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_A0[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_A0[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "A1") {
              if (bunker_A1[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_A1[0] = ' ';
                }
                else {
                  bunker_A1[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_A1[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_A1[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_A1[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_A1[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_A1[3] != time_span) {
                  bunker_A1[3] = time_span;
                }
              }
              else {
                bunker_A1[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_A1[4] != time_span) {
                  bunker_A1[4] = time_span;
                }
              }
              else {
                bunker_A1[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_A1[5] != time_span) {
                  bunker_A1[5] = time_span;
                }
              }
              else {
                bunker_A1[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_A1[6] != time_span) {
                  bunker_A1[6] = time_span;
                }
              }
              else {
                bunker_A1[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_A1[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_A1[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_A1[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_A1[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_A1[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_A1[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "A2") {
              if (bunker_A2[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_A2[0] = ' ';
                }
                else {
                  bunker_A2[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_A2[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_A2[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_A2[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_A2[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_A2[3] != time_span) {
                  bunker_A2[3] = time_span;
                }
              }
              else {
                bunker_A2[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_A2[4] != time_span) {
                  bunker_A2[4] = time_span;
                }
              }
              else {
                bunker_A2[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_A2[5] != time_span) {
                  bunker_A2[5] = time_span;
                }
              }
              else {
                bunker_A2[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_A2[6] != time_span) {
                  bunker_A2[6] = time_span;
                }
              }
              else {
                bunker_A2[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_A2[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_A2[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_A2[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_A2[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_A2[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_A2[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "V1") {
              if (bunker_V1[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_V1[0] = ' ';
                }
                else {
                  bunker_V1[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_V1[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_V1[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_V1[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_V1[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_V1[3] != time_span) {
                  bunker_V1[3] = time_span;
                }
              }
              else {
                bunker_V1[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_V1[4] != time_span) {
                  bunker_V1[4] = time_span;
                }
              }
              else {
                bunker_V1[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_V1[5] != time_span) {
                  bunker_V1[5] = time_span;
                }
              }
              else {
                bunker_V1[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_V1[6] != time_span) {
                  bunker_V1[6] = time_span;
                }
              }
              else {
                bunker_V1[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_V1[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_V1[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_V1[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_V1[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_V1[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_V1[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "V2") {
              if (bunker_V2[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_V2[0] = ' ';
                }
                else {
                  bunker_V2[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_V2[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_V2[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_V2[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_V2[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_V2[3] != time_span) {
                  bunker_V2[3] = time_span;
                }
              }
              else {
                bunker_V2[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_V2[4] != time_span) {
                  bunker_V2[4] = time_span;
                }
              }
              else {
                bunker_V2[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_V2[5] != time_span) {
                  bunker_V2[5] = time_span;
                }
              }
              else {
                bunker_V2[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_V2[6] != time_span) {
                  bunker_V2[6] = time_span;
                }
              }
              else {
                bunker_V2[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_V2[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_V2[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_V2[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_V2[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_V2[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_V2[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "F1") {
              if (bunker_L1[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_L1[0] = ' ';
                }
                else {
                  bunker_L1[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_L1[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_L1[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_L1[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_L1[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_L1[3] != time_span) {
                  bunker_L1[3] = time_span;
                }
              }
              else {
                bunker_L1[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_L1[4] != time_span) {
                  bunker_L1[4] = time_span;
                }
              }
              else {
                bunker_L1[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_L1[5] != time_span) {
                  bunker_L1[5] = time_span;
                }
              }
              else {
                bunker_L1[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_L1[6] != time_span) {
                  bunker_L1[6] = time_span;
                }
              }
              else {
                bunker_L1[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_L1[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_L1[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_L1[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_L1[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_L1[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_L1[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "F2") {
              if (bunker_L2[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_L2[0] = ' ';
                }
                else {
                  bunker_L2[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_L2[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_L2[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_L2[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_L2[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_L2[3] != time_span) {
                  bunker_L2[3] = time_span;
                }
              }
              else {
                bunker_L2[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_L2[4] != time_span) {
                  bunker_L2[4] = time_span;
                }
              }
              else {
                bunker_L2[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_L2[5] != time_span) {
                  bunker_L2[5] = time_span;
                }
              }
              else {
                bunker_L2[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_L2[6] != time_span) {
                  bunker_L2[6] = time_span;
                }
              }
              else {
                bunker_L2[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_L2[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_L2[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_L2[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_L2[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_L2[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_L2[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "S1") {
              if (bunker_S1[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_S1[0] = ' ';
                }
                else {
                  bunker_S1[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_S1[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_S1[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_S1[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_S1[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_S1[3] != time_span) {
                  bunker_S1[3] = time_span;
                }
              }
              else {
                bunker_S1[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_S1[4] != time_span) {
                  bunker_S1[4] = time_span;
                }
              }
              else {
                bunker_S1[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_S1[5] != time_span) {
                  bunker_S1[5] = time_span;
                }
              }
              else {
                bunker_S1[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_S1[6] != time_span) {
                  bunker_S1[6] = time_span;
                }
              }
              else {
                bunker_S1[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_S1[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_S1[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_S1[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_S1[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_S1[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_S1[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "S2") {
              if (bunker_S2[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_S2[0] = ' ';
                }
                else {
                  bunker_S2[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_S2[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_S2[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_S2[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_S2[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_S2[3] != time_span) {
                  bunker_S2[3] = time_span;
                }
              }
              else {
                bunker_S2[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_S2[4] != time_span) {
                  bunker_S2[4] = time_span;
                }
              }
              else {
                bunker_S2[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_S2[5] != time_span) {
                  bunker_S2[5] = time_span;
                }
              }
              else {
                bunker_S2[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_S2[6] != time_span) {
                  bunker_S2[6] = time_span;
                }
              }
              else {
                bunker_S2[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_S2[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_S2[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_S2[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_S2[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_S2[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_S2[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "S3") {
              if (bunker_S3[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_S3[0] = ' ';
                }
                else {
                  bunker_S3[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_S3[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_S3[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_S3[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_S3[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_S3[3] != time_span) {
                  bunker_S3[3] = time_span;
                }
              }
              else {
                bunker_S3[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_S3[4] != time_span) {
                  bunker_S3[4] = time_span;
                }
              }
              else {
                bunker_S3[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_S3[5] != time_span) {
                  bunker_S3[5] = time_span;
                }
              }
              else {
                bunker_S3[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_S3[6] != time_span) {
                  bunker_S3[6] = time_span;
                }
              }
              else {
                bunker_S3[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_S3[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_S3[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_S3[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_S3[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_S3[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_S3[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "C0") {
              if (bunker_C0[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_C0[0] = ' ';
                }
                else {
                  bunker_C0[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_C0[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_C0[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_C0[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_C0[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_C0[3] != time_span) {
                  bunker_C0[3] = time_span;
                }
              }
              else {
                bunker_C0[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_C0[4] != time_span) {
                  bunker_C0[4] = time_span;
                }
              }
              else {
                bunker_C0[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_C0[5] != time_span) {
                  bunker_C0[5] = time_span;
                }
              }
              else {
                bunker_C0[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_C0[6] != time_span) {
                  bunker_C0[6] = time_span;
                }
              }
              else {
                bunker_C0[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_C0[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_C0[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_C0[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_C0[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_C0[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_C0[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "C1") {
              if (bunker_C1[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_C1[0] = ' ';
                }
                else {
                  bunker_C1[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_C1[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_C1[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_C1[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_C1[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_C1[3] != time_span) {
                  bunker_C1[3] = time_span;
                }
              }
              else {
                bunker_C1[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_C1[4] != time_span) {
                  bunker_C1[4] = time_span;
                }
              }
              else {
                bunker_C1[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_C1[5] != time_span) {
                  bunker_C1[5] = time_span;
                }
              }
              else {
                bunker_C1[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_C1[6] != time_span) {
                  bunker_C1[6] = time_span;
                }
              }
              else {
                bunker_C1[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_C1[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_C0[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_C1[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_C0[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_C1[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_C1[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "C2") {
              if (bunker_C2[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_C2[0] = ' ';
                }
                else {
                  bunker_C2[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_C2[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_C2[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_C2[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_C2[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_C2[3] != time_span) {
                  bunker_C2[3] = time_span;
                }
              }
              else {
                bunker_C2[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_C2[4] != time_span) {
                  bunker_C2[4] = time_span;
                }
              }
              else {
                bunker_C2[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_C2[5] != time_span) {
                  bunker_C2[5] = time_span;
                }
              }
              else {
                bunker_C2[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_C2[6] != time_span) {
                  bunker_C2[6] = time_span;
                }
              }
              else {
                bunker_C2[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_C2[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_C2[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_C2[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_C2[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_C2[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_C2[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "H1") {
              if (bunker_H1[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_H1[0] = ' ';
                }
                else {
                  bunker_H1[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_H1[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_H1[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_H1[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_H1[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_H1[3] != time_span) {
                  bunker_H1[3] = time_span;
                }
              }
              else {
                bunker_H1[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_H1[4] != time_span) {
                  bunker_H1[4] = time_span;
                }
              }
              else {
                bunker_H1[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_H1[5] != time_span) {
                  bunker_H1[5] = time_span;
                }
              }
              else {
                bunker_H1[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_H1[6] != time_span) {
                  bunker_H1[6] = time_span;
                }
              }
              else {
                bunker_H1[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_H1[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_H1[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_H1[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_H1[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_H1[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_H1[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "H2") {
              if (bunker_H2[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_H2[0] = ' ';
                }
                else {
                  bunker_H2[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_H2[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_H2[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_H2[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_H2[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_H2[3] != time_span) {
                  bunker_H2[3] = time_span;
                }
              }
              else {
                bunker_H2[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_H2[4] != time_span) {
                  bunker_H2[4] = time_span;
                }
              }
              else {
                bunker_H2[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_H2[5] != time_span) {
                  bunker_H2[5] = time_span;
                }
              }
              else {
                bunker_H2[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_H2[6] != time_span) {
                  bunker_H2[6] = time_span;
                }
              }
              else {
                bunker_H2[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_H2[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_H2[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_H2[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_H2[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_H2[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_H2[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "D1") {
              if (bunker_T1[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_T1[0] = ' ';
                }
                else {
                  bunker_T1[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_T1[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_T1[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_T1[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_T1[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_T1[3] != time_span) {
                  bunker_T1[3] = time_span;
                }
              }
              else {
                bunker_T1[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_T1[4] != time_span) {
                  bunker_T1[4] = time_span;
                }
              }
              else {
                bunker_T1[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_T1[5] != time_span) {
                  bunker_T1[5] = time_span;
                }
              }
              else {
                bunker_T1[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_T1[6] != time_span) {
                  bunker_T1[6] = time_span;
                }
              }
              else {
                bunker_T1[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_T1[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_T1[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_T1[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_T1[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_T1[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_T1[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "D2") {
              if (bunker_T2[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_T2[0] = ' ';
                }
                else {
                  bunker_T2[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_T2[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_T2[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_T2[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_T2[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_T2[3] != time_span) {
                  bunker_T2[3] = time_span;
                }
              }
              else {
                bunker_T2[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_T2[4] != time_span) {
                  bunker_T2[4] = time_span;
                }
              }
              else {
                bunker_T2[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_T2[5] != time_span) {
                  bunker_T2[5] = time_span;
                }
              }
              else {
                bunker_T2[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_T2[6] != time_span) {
                  bunker_T2[6] = time_span;
                }
              }
              else {
                bunker_T2[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_T2[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_T2[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_T2[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_T2[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_T2[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_T2[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "D3") {
              if (bunker_T3[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_T3[0] = ' ';
                }
                else {
                  bunker_T3[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_T3[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_T3[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_T3[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_T3[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_T3[3] != time_span) {
                  bunker_T3[3] = time_span;
                }
              }
              else {
                bunker_T3[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_T3[4] != time_span) {
                  bunker_T3[4] = time_span;
                }
              }
              else {
                bunker_T3[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_T3[5] != time_span) {
                  bunker_T3[5] = time_span;
                }
              }
              else {
                bunker_T3[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_T3[6] != time_span) {
                  bunker_T3[6] = time_span;
                }
              }
              else {
                bunker_T3[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_T3[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_T3[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_T3[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_T3[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_T3[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_T3[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "B0") {
              if (bunker_B0[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_B0[0] = ' ';
                }
                else {
                  bunker_B0[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_B0[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_B0[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_B0[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_B0[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_B0[3] != time_span) {
                  bunker_B0[3] = time_span;
                }
              }
              else {
                bunker_B0[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_B0[4] != time_span) {
                  bunker_B0[4] = time_span;
                }
              }
              else {
                bunker_B0[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_B0[5] != time_span) {
                  bunker_B0[5] = time_span;
                }
              }
              else {
                bunker_B0[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_B0[6] != time_span) {
                  bunker_B0[6] = time_span;
                }
              }
              else {
                bunker_B0[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_B0[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_B0[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_B0[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_B0[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_B0[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_B0[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "B1") {
              if (bunker_B1[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_B1[0] = ' ';
                }
                else {
                  bunker_B1[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_B1[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_B1[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_B1[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_B1[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_B1[3] != time_span) {
                  bunker_B1[3] = time_span;
                }
              }
              else {
                bunker_B1[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_B1[4] != time_span) {
                  bunker_B1[4] = time_span;
                }
              }
              else {
                bunker_B1[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_B1[5] != time_span) {
                  bunker_B1[5] = time_span;
                }
              }
              else {
                bunker_B1[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_B1[6] != time_span) {
                  bunker_B1[6] = time_span;
                }
              }
              else {
                bunker_B1[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_B1[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_B1[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_B1[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_B1[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_B1[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_B1[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "B2") {
              if (bunker_B2[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_B2[0] = ' ';
                }
                else {
                  bunker_B2[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_B2[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_B2[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_B2[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_B2[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_B2[3] != time_span) {
                  bunker_B2[3] = time_span;
                }
              }
              else {
                bunker_B2[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_B2[4] != time_span) {
                  bunker_B2[4] = time_span;
                }
              }
              else {
                bunker_B2[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_B2[5] != time_span) {
                  bunker_B2[5] = time_span;
                }
              }
              else {
                bunker_B2[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_B2[6] != time_span) {
                  bunker_B2[6] = time_span;
                }
              }
              else {
                bunker_B2[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_B2[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_B2[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_B2[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_B2[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_B2[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_B2[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "F3") {
              if (bunker_L3[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_L3[0] = ' ';
                }
                else {
                  bunker_L3[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_L3[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_L3[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_L3[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_L3[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_L3[3] != time_span) {
                  bunker_L3[3] = time_span;
                }
              }
              else {
                bunker_L3[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_L3[4] != time_span) {
                  bunker_L3[4] = time_span;
                }
              }
              else {
                bunker_L3[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_L3[5] != time_span) {
                  bunker_L3[5] = time_span;
                }
              }
              else {
                bunker_L3[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_L3[6] != time_span) {
                  bunker_L3[6] = time_span;
                }
              }
              else {
                bunker_L3[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_L3[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_L3[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_L3[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_L3[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_L3[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_L3[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "F4") {
              if (bunker_L4[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_L4[0] = ' ';
                }
                else {
                  bunker_L4[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_L4[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_L4[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_L4[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_L4[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_L4[3] != time_span) {
                  bunker_L4[3] = time_span;
                }
              }
              else {
                bunker_L4[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_L4[4] != time_span) {
                  bunker_L4[4] = time_span;
                }
              }
              else {
                bunker_L4[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_L4[5] != time_span) {
                  bunker_L4[5] = time_span;
                }
              }
              else {
                bunker_L4[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_L4[6] != time_span) {
                  bunker_L4[6] = time_span;
                }
              }
              else {
                bunker_L4[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_L4[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_L4[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_L4[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_L4[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_L4[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_L4[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "F5") {
              if (bunker_L5[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_L5[0] = ' ';
                }
                else {
                  bunker_L5[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_L5[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_L5[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_L5[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_L5[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_L5[3] != time_span) {
                  bunker_L5[3] = time_span;
                }
              }
              else {
                bunker_L5[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_L5[4] != time_span) {
                  bunker_L5[4] = time_span;
                }
              }
              else {
                bunker_L5[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_L5[5] != time_span) {
                  bunker_L5[5] = time_span;
                }
              }
              else {
                bunker_L5[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_L5[6] != time_span) {
                  bunker_L5[6] = time_span;
                }
              }
              else {
                bunker_L5[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_L5[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_L5[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_L5[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_L5[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_L5[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_L5[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "F6") {
              if (bunker_L6[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_L6[0] = ' ';
                }
                else {
                  bunker_L6[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_L6[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_L6[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_L6[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_L6[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_L6[3] != time_span) {
                  bunker_L6[3] = time_span;
                }
              }
              else {
                bunker_L6[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_L6[4] != time_span) {
                  bunker_L6[4] = time_span;
                }
              }
              else {
                bunker_L6[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_L6[5] != time_span) {
                  bunker_L6[5] = time_span;
                }
              }
              else {
                bunker_L6[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_L6[6] != time_span) {
                  bunker_L6[6] = time_span;
                }
              }
              else {
                bunker_L6[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_L6[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_L6[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_L6[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_L6[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_L6[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_L6[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "R1") {
              if (bunker_R1[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_R1[0] = ' ';
                }
                else {
                  bunker_R1[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_R1[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_R1[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_R1[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_R1[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_R1[3] != time_span) {
                  bunker_R1[3] = time_span;
                }
              }
              else {
                bunker_R1[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_R1[4] != time_span) {
                  bunker_R1[4] = time_span;
                }
              }
              else {
                bunker_R1[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_R1[5] != time_span) {
                  bunker_R1[5] = time_span;
                }
              }
              else {
                bunker_R1[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_R1[6] != time_span) {
                  bunker_R1[6] = time_span;
                }
              }
              else {
                bunker_R1[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_R1[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_R1[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_R1[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_R1[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_R1[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_R1[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "R2") {
              if (bunker_R2[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_R2[0] = ' ';
                }
                else {
                  bunker_R2[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_R2[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_R2[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_R2[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_R2[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_R2[3] != time_span) {
                  bunker_R2[3] = time_span;
                }
              }
              else {
                bunker_R2[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_R2[4] != time_span) {
                  bunker_R2[4] = time_span;
                }
              }
              else {
                bunker_R2[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_R2[5] != time_span) {
                  bunker_R2[5] = time_span;
                }
              }
              else {
                bunker_R2[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_R2[6] != time_span) {
                  bunker_R2[6] = time_span;
                }
              }
              else {
                bunker_R2[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_R2[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_R2[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_R2[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_R2[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_R2[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_R2[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "R3") {
              if (bunker_R3[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_R3[0] = ' ';
                }
                else {
                  bunker_R3[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_R3[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_R3[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_R3[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_R3[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_R3[3] != time_span) {
                  bunker_R3[3] = time_span;
                }
              }
              else {
                bunker_R3[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_R3[4] != time_span) {
                  bunker_R3[4] = time_span;
                }
              }
              else {
                bunker_R3[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_R3[5] != time_span) {
                  bunker_R3[5] = time_span;
                }
              }
              else {
                bunker_R3[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_R3[6] != time_span) {
                  bunker_R3[6] = time_span;
                }
              }
              else {
                bunker_R3[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_R3[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_R3[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_R3[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_R3[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_R3[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_R3[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "R4") {
              if (bunker_R4[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_R4[0] = ' ';
                }
                else {
                  bunker_R4[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_R4[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_R4[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_R4[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_R4[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_R4[3] != time_span) {
                  bunker_R4[3] = time_span;
                }
              }
              else {
                bunker_R4[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_R4[4] != time_span) {
                  bunker_R4[4] = time_span;
                }
              }
              else {
                bunker_R4[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_R4[5] != time_span) {
                  bunker_R4[5] = time_span;
                }
              }
              else {
                bunker_R4[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_R4[6] != time_span) {
                  bunker_R4[6] = time_span;
                }
              }
              else {
                bunker_R4[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_R4[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_R4[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_R4[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_R4[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_R4[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_R4[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "C3") {
              if (bunker_C3[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_C3[0] = ' ';
                }
                else {
                  bunker_C3[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_C3[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_C3[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_C3[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_C3[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_C3[3] != time_span) {
                  bunker_C3[3] = time_span;
                }
              }
              else {
                bunker_C3[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_C3[4] != time_span) {
                  bunker_C3[4] = time_span;
                }
              }
              else {
                bunker_C3[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_C3[5] != time_span) {
                  bunker_C3[5] = time_span;
                }
              }
              else {
                bunker_C3[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_C3[6] != time_span) {
                  bunker_C3[6] = time_span;
                }
              }
              else {
                bunker_C3[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_C3[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_C3[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_C3[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_C3[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_C3[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_C3[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
            else if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "C4") {
              if (bunker_C4[0] === res.getBlock(0).data[i]['PLAN_NO']) {

              }
              else {
                if (res.getBlock(0).data[i]['PLAN_NO']?.toString() == " ") {
                  bunker_C4[0] = ' ';
                }
                else {
                  bunker_C4[0] = res.getBlock(0).data[i]['PLAN_NO'];
                }
              }
              if (bunker_C4[1] != res.getBlock(0).data[i]['HEAT_NO']) {
                bunker_C4[1] = res.getBlock(0).data[i]['HEAT_NO'];
              }
              if (bunker_C4[2] != res.getBlock(0).data[i]['ST_NO']) {
                bunker_C4[2] = res.getBlock(0).data[i]['ST_NO'];
              }
              if (res.getBlock(0).data[i]['START_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME']?.toString().slice(12, 14);
                if (bunker_C4[3] != time_span) {
                  bunker_C4[3] = time_span;
                }
              }
              else {
                bunker_C4[3] = res.getBlock(0).data[i]['START_TIME'];
              }
              if (res.getBlock(0).data[i]['END_TIME'] != " ") {
                time_span = "PLAN:" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME']?.toString().slice(12, 14);
                if (bunker_C4[4] != time_span) {
                  bunker_C4[4] = time_span;
                }
              }
              else {
                bunker_C4[4] = res.getBlock(0).data[i]['END_TIME'];
              }
              if (res.getBlock(0).data[i]['START_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_C4[5] != time_span) {
                  bunker_C4[5] = time_span;
                }
              }
              else {
                bunker_C4[5] = res.getBlock(0).data[i]['START_TIME_REAL'];
              }
              if (res.getBlock(0).data[i]['END_TIME_REAL'] != " ") {
                time_span = "ACT:" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['END_TIME_REAL']?.toString().slice(12, 14);
                if (bunker_C4[6] != time_span) {
                  bunker_C4[6] = time_span;
                }
              }
              else {
                bunker_C4[6] = res.getBlock(0).data[i]['END_TIME_REAL'];
              }
              if (bunker_C4[7] != res.getBlock(0).data[i]['STATUS_NAME']) {
                bunker_C4[7] = res.getBlock(0).data[i]['STATUS_NAME'];
              }
              if (bunker_C4[8] != res.getBlock(0).data[i]['EVENT_ID']) {
                bunker_C4[8] = res.getBlock(0).data[i]['EVENT_ID'];
              }
              if (bunker_C4[9] != res.getBlock(0).data[i]['TEMP']) {
                bunker_C4[9] = res.getBlock(0).data[i]['TEMP'];
              }
            }
          }
        });
    };
    //主表查询

    const queryData_H1 = async () => {
      bunker_H1_CF.length = 0;
      bunker_H1_CF_act.length = 0;
      bunker_H1_CF.length = 0;
      bunker_H2_CF.length = 0;
      bunker_T1_CF.length = 0;
      bunker_T2_CF.length = 0;
      bunker_T3_CF.length = 0;
      bunker_B1_CF.length = 0;
      bunker_B2_CF.length = 0;
      bunker_B0_CF.length = 0;
      bunker_L3_CF.length = 0;
      bunker_L4_CF.length = 0;
      bunker_L5_CF.length = 0;
      bunker_L6_CF.length = 0;
      bunker_R1_CF.length = 0;
      bunker_R2_CF.length = 0;
      bunker_R3_CF.length = 0;
      bunker_R4_CF.length = 0;
      bunker_C3_CF.length = 0;
      bunker_C4_CF.length = 0;
      bunker_H1_CF_act.length = 0;
      bunker_H2_CF_act.length = 0;
      bunker_T1_CF_act.length = 0;
      bunker_T2_CF_act.length = 0;
      bunker_T3_CF_act.length = 0;
      bunker_B1_CF_act.length = 0;
      bunker_B2_CF_act.length = 0;
      bunker_B0_CF_act.length = 0;
      bunker_L3_CF_act.length = 0;
      bunker_L4_CF_act.length = 0;
      bunker_L5_CF_act.length = 0;
      bunker_L6_CF_act.length = 0;
      bunker_R1_CF_act.length = 0;
      bunker_R2_CF_act.length = 0;
      bunker_R3_CF_act.length = 0;
      bunker_R4_CF_act.length = 0;
      bunker_C3_CF_act.length = 0;
      bunker_C4_CF_act.length = 0;
      bunker_Z1_CF_act.length = 0;
      bunker_Z2_CF_act.length = 0;
      bunker_Z3_CF_act.length = 0;
      bunker_Z4_CF_act.length = 0;
      bunker_Z5_CF_act.length = 0;
      bunker_Z6_CF_act.length = 0;
      bunker_Z7_CF_act.length = 0;
      bunker_Z8_CF_act.length = 0;
      bunker_E1_CF_act.length = 0;
      bunker_E2_CF_act.length = 0;
      bunker_A0_CF_act.length = 0;
      bunker_A1_CF_act.length = 0;
      bunker_A2_CF_act.length = 0;
      bunker_V1_CF_act.length = 0;
      bunker_V2_CF_act.length = 0;
      bunker_L1_CF_act.length = 0;
      bunker_L2_CF_act.length = 0;
      bunker_S1_CF_act.length = 0;
      bunker_S2_CF_act.length = 0;
      bunker_S3_CF_act.length = 0;
      bunker_C0_CF_act.length = 0;
      bunker_C1_CF_act.length = 0;
      bunker_C2_CF_act.length = 0;
      bunker_Z1_CF.length = 0;
      bunker_Z2_CF.length = 0;
      bunker_Z3_CF.length = 0;
      bunker_Z4_CF.length = 0;
      bunker_Z5_CF.length = 0;
      bunker_Z6_CF.length = 0;
      bunker_Z7_CF.length = 0;
      bunker_Z8_CF.length = 0;
      bunker_E1_CF.length = 0;
      bunker_E2_CF.length = 0;
      bunker_A0_CF.length = 0;
      bunker_A1_CF.length = 0;
      bunker_A2_CF.length = 0;
      bunker_V1_CF.length = 0;
      bunker_V2_CF.length = 0;
      bunker_L1_CF.length = 0;
      bunker_L2_CF.length = 0;
      bunker_S1_CF.length = 0;
      bunker_S2_CF.length = 0;
      bunker_S3_CF.length = 0;
      bunker_C0_CF.length = 0;
      bunker_C1_CF.length = 0;
      bunker_C2_CF.length = 0;
      const inInfo = new EI.EIInfo();
      EIManager.callService(formPartition, 'pssm33_jst_cf_inq', inInfo)
        .then((res: EI.EIInfo) => {
          console.log(res);
          for (let i = 0; i < res.getBlock('H1').data.length; i++) {

            bunker_H1_CF.push(res.getBlock('H1').data[i]['ELM_NAME']);
            bunker_H1_CF_act.push(res.getBlock('H1').data[i]['ELM_ACT']);
          }
          /*  for (let i = 0; i < res.getBlock('H2').data.length; i++) {
 
             bunker_H2_CF.push(res.getBlock('H2').data[i]['ELM_NAME']);
             bunker_H2_CF_act.push(res.getBlock('H2').data[i]['ELM_ACT']);
           }
           for (let i = 0; i < res.getBlock('D1').data.length; i++) {
 
             bunker_T1_CF.push(res.getBlock('D1').data[i]['ELM_NAME']);
             bunker_T1_CF_act.push(res.getBlock('D1').data[i]['ELM_ACT']);
           }
           for (let i = 0; i < res.getBlock('D2').data.length; i++) {
 
             bunker_T2_CF.push(res.getBlock('D2').data[i]['ELM_NAME']);
             bunker_T2_CF_act.push(res.getBlock('D2').data[i]['ELM_ACT']);
           }
           for (let i = 0; i < res.getBlock('D3').data.length; i++) {
 
             bunker_T3_CF.push(res.getBlock('D3').data[i]['ELM_NAME']);
             bunker_T3_CF_act.push(res.getBlock('D3').data[i]['ELM_ACT']);
           } */
          for (let i = 0; i < res.getBlock('B0').data.length; i++) {

            bunker_B0_CF.push(res.getBlock('B0').data[i]['ELM_NAME']);
            bunker_B0_CF_act.push(res.getBlock('B0').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('B1').data.length; i++) {

            bunker_B1_CF.push(res.getBlock('B1').data[i]['ELM_NAME']);
            bunker_B1_CF_act.push(res.getBlock('B1').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('B2').data.length; i++) {

            bunker_B2_CF.push(res.getBlock('B2').data[i]['ELM_NAME']);
            bunker_B2_CF_act.push(res.getBlock('B2').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('F3').data.length; i++) {

            bunker_L3_CF.push(res.getBlock('F3').data[i]['ELM_NAME']);
            bunker_L3_CF_act.push(res.getBlock('F3').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('F4').data.length; i++) {

            bunker_L4_CF.push(res.getBlock('F4').data[i]['ELM_NAME']);
            bunker_L4_CF_act.push(res.getBlock('F4').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('F5').data.length; i++) {

            bunker_L5_CF.push(res.getBlock('F5').data[i]['ELM_NAME']);
            bunker_L5_CF_act.push(res.getBlock('F5').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('F6').data.length; i++) {

            bunker_L6_CF.push(res.getBlock('F6').data[i]['ELM_NAME']);
            bunker_L6_CF_act.push(res.getBlock('F6').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('R1').data.length; i++) {

            bunker_R1_CF.push(res.getBlock('R1').data[i]['ELM_NAME']);
            bunker_R1_CF_act.push(res.getBlock('R1').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('R2').data.length; i++) {

            bunker_R2_CF.push(res.getBlock('R2').data[i]['ELM_NAME']);
            bunker_R2_CF_act.push(res.getBlock('R2').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('R3').data.length; i++) {

            bunker_R3_CF.push(res.getBlock('R3').data[i]['ELM_NAME']);
            bunker_R3_CF_act.push(res.getBlock('R3').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('R4').data.length; i++) {

            bunker_R4_CF.push(res.getBlock('R4').data[i]['ELM_NAME']);
            bunker_R4_CF_act.push(res.getBlock('R4').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('C3').data.length; i++) {

            bunker_C3_CF.push(res.getBlock('C3').data[i]['ELM_NAME']);
            bunker_C3_CF_act.push(res.getBlock('C3').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('C4').data.length; i++) {

            bunker_C4_CF.push(res.getBlock('C4').data[i]['ELM_NAME']);
            bunker_C4_CF_act.push(res.getBlock('C4').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('Z1').data.length; i++) {

            bunker_Z1_CF.push(res.getBlock('Z1').data[i]['ELM_NAME']);
            bunker_Z1_CF_act.push(res.getBlock('Z1').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('Z2').data.length; i++) {

            bunker_Z2_CF.push(res.getBlock('Z2').data[i]['ELM_NAME']);
            bunker_Z2_CF_act.push(res.getBlock('Z2').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('Z3').data.length; i++) {

            bunker_Z3_CF.push(res.getBlock('Z3').data[i]['ELM_NAME']);
            bunker_Z3_CF_act.push(res.getBlock('Z3').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('Z4').data.length; i++) {

            bunker_Z4_CF.push(res.getBlock('Z4').data[i]['ELM_NAME']);
            bunker_Z4_CF_act.push(res.getBlock('Z4').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('Z5').data.length; i++) {

            bunker_Z5_CF.push(res.getBlock('Z5').data[i]['ELM_NAME']);
            bunker_Z5_CF_act.push(res.getBlock('Z5').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('Z6').data.length; i++) {

            bunker_Z6_CF.push(res.getBlock('Z6').data[i]['ELM_NAME']);
            bunker_Z6_CF_act.push(res.getBlock('Z6').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('Z7').data.length; i++) {

            bunker_Z7_CF.push(res.getBlock('Z7').data[i]['ELM_NAME']);
            bunker_Z7_CF_act.push(res.getBlock('Z7').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('Z8').data.length; i++) {

            bunker_Z8_CF.push(res.getBlock('Z8').data[i]['ELM_NAME']);
            bunker_Z8_CF_act.push(res.getBlock('Z8').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('E1').data.length; i++) {

            bunker_E1_CF.push(res.getBlock('E1').data[i]['ELM_NAME']);
            bunker_E1_CF_act.push(res.getBlock('E1').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('E2').data.length; i++) {

            bunker_E2_CF.push(res.getBlock('E2').data[i]['ELM_NAME']);
            bunker_E2_CF_act.push(res.getBlock('E2').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('A0').data.length; i++) {

            bunker_A0_CF.push(res.getBlock('A0').data[i]['ELM_NAME']);
            bunker_A0_CF_act.push(res.getBlock('A0').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('A1').data.length; i++) {

            bunker_A1_CF.push(res.getBlock('A1').data[i]['ELM_NAME']);
            bunker_A1_CF_act.push(res.getBlock('A1').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('A2').data.length; i++) {

            bunker_A2_CF.push(res.getBlock('A2').data[i]['ELM_NAME']);
            bunker_A2_CF_act.push(res.getBlock('A2').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('V1').data.length; i++) {

            bunker_V1_CF.push(res.getBlock('V1').data[i]['ELM_NAME']);
            bunker_V1_CF_act.push(res.getBlock('V1').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('V2').data.length; i++) {

            bunker_V2_CF.push(res.getBlock('V2').data[i]['ELM_NAME']);
            bunker_V2_CF_act.push(res.getBlock('V2').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('F1').data.length; i++) {

            bunker_L1_CF.push(res.getBlock('F1').data[i]['ELM_NAME']);
            bunker_L1_CF_act.push(res.getBlock('F1').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('F2').data.length; i++) {

            bunker_L2_CF.push(res.getBlock('F2').data[i]['ELM_NAME']);
            bunker_L2_CF_act.push(res.getBlock('F2').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('S1').data.length; i++) {

            bunker_S1_CF.push(res.getBlock('S1').data[i]['ELM_NAME']);
            bunker_S1_CF_act.push(res.getBlock('S1').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('S2').data.length; i++) {

            bunker_S2_CF.push(res.getBlock('S2').data[i]['ELM_NAME']);
            bunker_S2_CF_act.push(res.getBlock('S2').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('S3').data.length; i++) {

            bunker_S3_CF.push(res.getBlock('S3').data[i]['ELM_NAME']);
            bunker_S3_CF_act.push(res.getBlock('S3').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('C0').data.length; i++) {

            bunker_C0_CF.push(res.getBlock('C0').data[i]['ELM_NAME']);
            bunker_C0_CF_act.push(res.getBlock('C0').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('C1').data.length; i++) {

            bunker_C1_CF.push(res.getBlock('C1').data[i]['ELM_NAME']);
            bunker_C1_CF_act.push(res.getBlock('C1').data[i]['ELM_ACT']);
          }
          for (let i = 0; i < res.getBlock('C2').data.length; i++) {

            bunker_C2_CF.push(res.getBlock('C2').data[i]['ELM_NAME']);
            bunker_C2_CF_act.push(res.getBlock('C2').data[i]['ELM_ACT']);
          }
        }
        );
    };

    const f2Do = () => {
      queryData();
    };
    return {
      erFormHelper,
      initializeFlag,
      efFormReady, f2Do,
      bunker_H1,
      bunker_H1_CF,
      bunker_H2,
      bunker_H2_CF,
      bunker_T1,
      bunker_T1_CF,
      bunker_T2,
      bunker_T2_CF,
      bunker_T3,
      bunker_T3_CF,
      bunker_B1,
      bunker_B1_CF,
      bunker_B2,
      bunker_B2_CF,
      bunker_L5,
      bunker_L5_CF,
      bunker_L6,
      bunker_L6_CF,
      bunker_L3,
      bunker_L3_CF,
      bunker_L4,
      bunker_L4_CF,
      bunker_R1,
      bunker_R1_CF,
      bunker_R2,
      bunker_R2_CF,
      bunker_R3,
      bunker_R3_CF,
      bunker_R4,
      bunker_R4_CF,
      bunker_C3,
      bunker_C3_CF,
      bunker_C4,
      bunker_C4_CF,
      bunker_H1_CF_act,
      bunker_H2_CF_act,
      bunker_T1_CF_act,
      bunker_T2_CF_act,
      bunker_T3_CF_act,
      bunker_B1_CF_act,
      bunker_B2_CF_act,
      bunker_B0_CF_act,
      bunker_L3_CF_act,
      bunker_L4_CF_act,
      bunker_L5_CF_act,
      bunker_L6_CF_act,
      bunker_R1_CF_act,
      bunker_R2_CF_act,
      bunker_R3_CF_act,
      bunker_R4_CF_act,
      bunker_C3_CF_act,
      bunker_C4_CF_act,
      bunker_B0,
      bunker_B0_CF,
      bunker_Z1,
      bunker_Z1_CF,
      bunker_Z2,
      bunker_Z2_CF,
      bunker_Z3,
      bunker_Z3_CF,
      bunker_Z4,
      bunker_Z4_CF,
      bunker_Z5,
      bunker_Z5_CF,
      bunker_Z6,
      bunker_Z6_CF,
      bunker_Z7,
      bunker_Z7_CF,
      bunker_Z8,
      bunker_Z8_CF,
      bunker_E1,
      bunker_E1_CF,
      bunker_E2,
      bunker_E2_CF,
      bunker_A0,
      bunker_A0_CF,
      bunker_A1,
      bunker_A1_CF,
      bunker_A2,
      bunker_A2_CF,
      bunker_V1,
      bunker_V1_CF,
      bunker_V2,
      bunker_V2_CF,
      bunker_L1,
      bunker_L1_CF,
      bunker_L2,
      bunker_L2_CF,
      bunker_S1,
      bunker_S1_CF,
      bunker_S2,
      bunker_S2_CF,
      bunker_S3,
      bunker_S3_CF,
      bunker_C0,
      bunker_C0_CF,
      bunker_C1,
      bunker_C1_CF,
      bunker_C2,
      bunker_C2_CF,
      bunker_Z1_CF_act,
      bunker_Z2_CF_act,
      bunker_Z3_CF_act,
      bunker_Z4_CF_act,
      bunker_Z5_CF_act,
      bunker_Z6_CF_act,
      bunker_Z7_CF_act,
      bunker_Z8_CF_act,
      bunker_E1_CF_act,
      bunker_E2_CF_act,
      bunker_A0_CF_act,
      bunker_A1_CF_act,
      bunker_A2_CF_act,
      bunker_V1_CF_act,
      bunker_V2_CF_act,
      bunker_L1_CF_act,
      bunker_L2_CF_act,
      bunker_S1_CF_act,
      bunker_S2_CF_act,
      bunker_S3_CF_act,
      bunker_C0_CF_act,
      bunker_C1_CF_act,
      bunker_C2_CF_act,
    };
  }
});
