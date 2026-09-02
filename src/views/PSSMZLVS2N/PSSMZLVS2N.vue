<template>
  <div style="height: 100%">
    <xr-ef-form @ready="efFormReady" :f2-do="f2_DO" :f3-do="f3_DO">
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
                :er-form-helper-prop="erFormHelper"
                :config-id="'gridView1'"
                @erGridReady="erGrid1Ready"
                @focus-changed="GridView1FocusChanged"
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
  </div>
</template>

<script lang="ts" src="./PSSMZLVS2N.ts"></script>

<style lang="scss">
@import "./PSSMZLVS2N.scss";
</style>
