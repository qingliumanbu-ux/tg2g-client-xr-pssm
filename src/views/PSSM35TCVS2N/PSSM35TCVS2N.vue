<template>
 <div style="height: 100%">
    <xr-ef-form @ready="efFormReady" :f2-do="F2_DO">
      <er-layout
      v-if="initializeFlag"
      :er-form-helper-prop="erFormHelper"
      :config-id="'LayoutGroupFilter'"
      :show-query-button="false"
    ></er-layout>
    </xr-ef-form>
  </div>
</template>

<style lang="scss">
  @import './PSSM35TCVS2N.scss';
</style>
<script lang="ts"
  src="./PSSM35TCVS2N.ts">
</script>
