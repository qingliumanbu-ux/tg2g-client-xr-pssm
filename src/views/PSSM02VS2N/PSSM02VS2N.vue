<template>
  <div style="height: 100%">
    <xr-ef-form @ready="efFormReady" :f2-do="F2_DO">
      <er-layout
        v-if="initializeFlag"
        :er-form-helper-prop="erFormHelper"
        :config-id="'LayoutGroupFilter'"
        :show-query-button="false"
        @query-click="getData"
      ></er-layout>
      <v-splitter style="height: 100%" class="default-theme">
        <v-splitter-pane size="70">
          <v-splitter horizontal style="height: 100%" class="default-theme">
            <v-splitter-pane size="50">
              <xr-ef-panel title="浇铸信息" style="height: 100%" padding="5px">
                <template #customButtonSlot> </template>
                <template #contentSlot>
                  <er-grid
                    v-if="initializeFlag === 1"
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
              <xr-ef-panel title="制造命令信息" style="height: 100%" padding="5px">
                <template #customButtonSlot> </template>
                <template #contentSlot>
                  <er-grid
                    v-if="initializeFlag === 1"
                    :er-form-helper-prop="erFormHelper"
                    :config-id="'gridView2'"
                    @erGridReady="erGrid2Ready"
                    @focus-changed="GridView2FocusChanged"
                  >
                  </er-grid>
                </template>
              </xr-ef-panel>
            </v-splitter-pane>
          </v-splitter>
        </v-splitter-pane>
        <v-splitter-pane size="30">
          <xr-ef-panel title="命令板坯信息" style="height: 100%" padding="5px">
            <template #customButtonSlot> </template>
            <template #contentSlot>
              <er-grid
                v-if="initializeFlag === 1"
                :er-form-helper-prop="erFormHelper"
                :config-id="'gridView3'"
                @erGridReady="erGrid3Ready"
              >
              </er-grid>
            </template>
          </xr-ef-panel>
        </v-splitter-pane>
      </v-splitter>
    </xr-ef-form>
  </div>
</template>

<script lang="ts" src="./PSSM02VS2N.ts"></script>

<style lang="scss">
@import "./PSSM02VS2N.scss";
</style>
