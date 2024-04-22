<template>
  <a-result status="error" title="No internet ">
    <template #icon>
      <IconFaceFrownFill />
    </template>
    <template #subtitle> DNS_PROBE_FINISHED_NO_INTERNET </template>
    <template #extra>
      <a-button type="primary" @click="handleRetry">Retry</a-button>
    </template>
    <a-typography style="background: var(--color-fill-2); padding: 24px">
      <a-typography-paragraph>Try:</a-typography-paragraph>
      <ul>
        <li>Checking the network cables, modem, and router</li>
        <li>Reconnecting to Wi-Fi</li>
      </ul>
    </a-typography>
  </a-result>
</template>

<script lang="ts" setup>
const handleRetry = () => {
  // 获取 coresite 对象
  const { coresite } = window as any;
  coresite && coresite.checkNet();
};
</script>

<style lang="less">
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
