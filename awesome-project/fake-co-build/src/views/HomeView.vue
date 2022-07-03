<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <a-button @click="open">打开</a-button>
  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
// import developing from './developing';
import { createModal, XIcon } from '@triascloud/x-components';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  methods: {
    open() {
      //   developing.createModal();
      //   XComponents.Developing.createModal();
      createModal(
        () => (
          <div>
            <XIcon type="tc-icon-warning" />
            <p>hello</p>
          </div>
        ),
        {
          title: 'b',
          width: 440,
          className: 'logout-modal',
          closable: false,
          maskClosable: false,
          footer: () => (
            <Button type="primary" onClick={() => ssoClient.logout()}>
              confirm
            </Button>
          ),
        },
      );
    },
  },
};
</script>
