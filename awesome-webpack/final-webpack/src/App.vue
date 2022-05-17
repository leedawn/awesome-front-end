<template>
  <div id="container">
    <h1>{{ initData }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      initData: "Vue 开发",
    };
  },
};
</script>
<style>
#container {
  color: red;
  display: flex;
}
</style>
