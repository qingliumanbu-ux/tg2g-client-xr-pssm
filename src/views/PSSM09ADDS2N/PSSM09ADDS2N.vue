<template>
  <div style="height: 100%">
    <xr-ef-form
      @ready="efFormReady"
      :f2-do="f2_DO"
      @closeClick="closeClick"
      :in-dialog-form-name="openInDialog ? dialogFormName : null"
    >
      <er-layout
        v-if="initializeFlag"
        :er-form-helper-prop="erFormHelper"
        :config-id="'LayoutGroupFilter'"
        :auto-bind="true"
      ></er-layout>
      <xr-ef-panel title="命令板坯信息" style="height: 100%" padding="5px">
        <template #customButtonSlot> </template>
        <template #contentSlot>
          <er-grid
            v-if="initializeFlag"
            :er-form-helper-prop="erFormHelper"
            :config-id="'gridView1'"
            @erGridReady="erGrid1Ready"
          >
          </er-grid>
        </template>
      </xr-ef-panel>
    </xr-ef-form>
  </div>
</template>

<script lang="ts" src="./PSSM09ADDS2N.ts"></script>

<style lang="scss">
@import "./PSSM09ADDS2N.scss";
</style>
