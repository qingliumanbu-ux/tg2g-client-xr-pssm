
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
    let time_span ;
    // 画面相关数据初始化定义
    const efFormInfo = ref<{ [key: string]: any }>({});
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
            if (res.getBlock(0).data[i]['DEV_CODE']?.toString() == "H1") {
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
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
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
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
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
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
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
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
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
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
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
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
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
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
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
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
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
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
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
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
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
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
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
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
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
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
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
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
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
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
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
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
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
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
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
                time_span ="ACT:" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(8, 10) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(10, 12) + ":" + res.getBlock(0).data[i]['START_TIME_REAL']?.toString().slice(12, 14);
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
      const inInfo = new EI.EIInfo();
      EIManager.callService(formPartition, 'pssm33_jst_cf_inq', inInfo)
        .then((res: EI.EIInfo) => {
          for (let i = 0; i < res.getBlock('H1').data.length; i++) {

            bunker_H1_CF.push(res.getBlock('H1').data[i]['ELM_NAME']);
            bunker_H1_CF_act.push(res.getBlock('H1').data[i]['ELM_ACT']);
          }
          /* for (let i = 0; i < res.getBlock('H2').data.length; i++) {

            bunker_H2_CF.push(res.getBlock('H2').data[i]['ELM_NAME']);
            bunker_H2_CF_act.push(res.getBlock('H2').data[i]['ELM_ACT']);
          }   for (let i = 0; i < res.getBlock('D1').data.length; i++) {

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
          }*/
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
      bunker_B0_CF
    };
  }
});
