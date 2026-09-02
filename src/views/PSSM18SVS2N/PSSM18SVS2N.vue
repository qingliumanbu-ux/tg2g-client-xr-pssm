<template>
 <div style="height: 100%">
    <xr-ef-form @ready="efFormReady" :f2-do="F2_DO">
   <er-layout
        v-if="initializeFlag"
        :er-form-helper-prop="erFormHelper"
        :config-id="'LayoutGroupFilter'"
        :show-query-button="false"
      ></er-layout>

    <!-- <xr-ef-panel title="是否回退"
      padding="5px">
      <template #customButtonSlot>
           <kendo-button @kendo-click="linkTo" >是</kendo-button>
      </template>
    </xr-ef-panel> -->

  </xr-ef-form>
  </div>
</template>

<style lang="scss">
  @import './PSSM18SVS2N.scss';
</style>
<script lang="ts"
  src="./PSSM18SVS2N.ts">
</script>
