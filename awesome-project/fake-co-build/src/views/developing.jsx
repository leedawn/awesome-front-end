/* eslint-disable */
// import { createModal } from '@triascloud/x-components';
import { Button } from 'ant-design-vue';
import Vue from 'vue';
import { ConfigProvider, Modal } from 'ant-design-vue';

function createDevelopingModal() {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const modal = createModal(h => h(DevelopingModal), {
    title: '标题',
    width: 440,
    footer: () => <Button>test</Button>,
    //   h(
    //     Button,
    //     {
    //       props: { type: 'primary' },
    //       on: { click: () => modal.handleClose() },
    //     },
    //     ['退出'],
    //   ),
  });
}

function createModal(Component, options, extraVueOptions) {
  const dom = document.createElement('div');
  document.body.appendChild(dom);
  // eslint-disable-next-line no-new
  return new Vue({
    //   ...commonExtraVueOptions,
    watch: {
      '$route.path'() {
        if (!this.visible) return;
        if (typeof this.modalOptions.onClose === 'function') {
          this.modalOptions.onClose();
        }
        this.handleClose();
      },
    },
    ...extraVueOptions,
    el: dom,
    data() {
      return {
        visible: true,
        modalOptions: options,
      };
    },
    render(h) {
      const { className, footer, ...props } = this.modalOptions;
      return h(ConfigProvider, { props: { locale: { zh_CN: 'zh_CN' } } }, [
        h(
          Modal,
          {
            props: {
              // maskClosable: false,
              destroyOnClose: true,
              footer: footer || null,
              afterClose: this.handleClosed,
              ...props,
              keyboard: props.closable !== false, // 不展示关闭按钮时，也不允许键盘esc关闭弹窗
              visible: this.visible,
            },
            on: {
              cancel: async () => {
                if (typeof this.modalOptions.onClose === 'function') {
                  await this.modalOptions.onClose();
                }
                this.handleClose();
              },
            },
            ref: 'dialog',
            class: className,
          },
          [createVNode(h, Component, 'instance')],
        ),
      ]);
    },
    methods: {
      handleClose() {
        this.visible = false;
      },
      handleClosed() {
        this.$destroy();
        this.$el.parentElement && this.$el.parentElement.removeChild(this.$el);
      },
      getInstance() {
        const modal = this.$refs.dialog?.$slots.default;
        return modal?.[0]?.componentInstance || null;
      },
    },
  });
}

function createVNode(h, Component, name) {
  if (!Component) return null;
  let instance = null;
  if (typeof Component === 'function') {
    instance = Component(h);
  } else {
    instance = h(Component);
  }
  instance.data = instance.data || {};
  instance.key = name;
  return instance;
}

export default class DevelopingModal extends Vue {
  static createModal = createDevelopingModal;
  render() {
    return (
      <div class="x-coming-soon">
        <div class="x-coming-soon-image"></div>
        <p>开发中</p>
      </div>
    );
  }
}
