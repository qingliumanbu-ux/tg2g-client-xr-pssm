<template>
  <div style="height: 100%">
    <xr-ef-form @ready="efFormReady" :f2-do="F2_DO">
      <er-layout
        v-if="initializeFlag"
        :er-form-helper-prop="erFormHelper"
        :config-id="'LayoutGroupFilter'"
        :show-query-button="false"
      ></er-layout>
      <xr-ef-panel
        style="height: 100%"
        title="综合信息-------时刻说明：黑色(未开始) ;蓝色(开始); 红色(结束)"
        padding="5px"
      >
        <template #customButtonSlot> </template>
        <template #contentSlot>
          <er-grid
            v-if="initializeFlag"
            :er-form-helper-prop="erFormHelper"
            :config-id="'gridView1'"
            :options="{viewType: 'BandView'}"
            @erGridReady="erGrid1Ready"
          >
          </er-grid>
        </template>
      </xr-ef-panel>
    </xr-ef-form>
  </div>
</template>

<script lang="ts" src="./PSSM13VS2N.ts"></script>

