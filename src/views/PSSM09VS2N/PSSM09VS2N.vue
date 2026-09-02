<template>
  <div style="height: 100%">
    <xr-ef-form @ready="efFormReady" :f2-do="f2_DO" :f3-do="f3_DO" :f4-do="f4_DO"  :f4-pre-do="F4_PRE_DO"
    :f4-cancel="F4_CANCEL">
      <er-layout
        v-if="initializeFlag"
        :er-form-helper-prop="erFormHelper"
        :config-id="'LayoutGroupFilter'"
      ></er-layout>
      <v-splitter horizontal style="height: 100%" class="default-theme">
        <v-splitter-pane size="50">
          <xr-ef-panel title="制造命令信息" style="height: 100%" padding="5px">
            <template #customButtonSlot> </template>
            <template #contentSlot>
              <er-grid
                v-if="initializeFlag_A===0"
                :er-form-helper-prop="erFormHelper"
                :config-id="'gridView1'"
                @erGridReady="erGrid1Ready"
                @focus-changed="GridView1FocusChanged"
              >
              </er-grid>
              <er-grid
                v-if="initializeFlag_A===1"
                :er-form-helper-prop="erFormHelper"
                :config-id="'gridView3'"
                @erGridReady="erGrid3Ready"
                @focus-changed="GridView3FocusChanged"
              >
              </er-grid>
            </template>
          </xr-ef-panel>
        </v-splitter-pane>
        <v-splitter-pane size="50">
          <xr-ef-panel title="命令板坯信息" style="height: 100%" padding="5px">
            <template #customButtonSlot> </template>
            <template #contentSlot>
              <er-grid
                v-if="initializeFlag"
                :er-form-helper-prop="erFormHelper"
                :config-id="'gridView2'"
                @erGridReady="erGrid2Ready"
              >
              </er-grid>
            </template>
          </xr-ef-panel>
        </v-splitter-pane>
      </v-splitter>
    </xr-ef-form>
     <xr-ef-dialog v-model:visible="dialogVisible"
        :title="dialogFormName"
        height="80%"
        width="80%"
        @click-close-icon="closeXrEfDialog"
        :default-footer="false">
        <PSSM09ADDS2N :openInDialog="true"
          :dialogFormName="dialogFormName"
          :parentInfo="parentInfo"
          @getChildInfo="getChildInfo"></PSSM09ADDS2N>
      </xr-ef-dialog>
  </div>
</template>

<script lang="ts" src="./PSSM09VS2N.ts"></script>

<style lang="scss">
@import "./PSSM09VS2N.scss";
</style>
