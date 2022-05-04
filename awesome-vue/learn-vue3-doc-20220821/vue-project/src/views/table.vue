<template>
  <div :class="$style.wrap">
    <div :class="$style.operation">
      <ADropdown>
        <ColumnHeightOutlined />
        <template #overlay>
          <AMenu @click="clickMenu">
            <AMenuItem v-for="(v, k) in tableSize" :key="k">{{ v }}</AMenuItem>
          </AMenu>
        </template>
      </ADropdown>
    </div>

    <ATable :dataSource="dataSource" :columns="columns" :size="size" />
  </div>
</template>

<script lang="tsx" setup>
import { useCssModule, ref } from "vue";
import type { MenuInfo } from "ant-design-vue";
import { Tag } from "ant-design-vue";
import { ColumnHeightOutlined } from "@ant-design/icons-vue";

interface TableType {
  key: string;
  name: string;
  sex: string;
  cloth: string;
  price: number;
  status: "热卖中" | "已售罄";
}
const tableSize = {
  default: "默认",
  middle: "中等",
  small: "紧凑",
};

const cssModule = useCssModule();
const size = ref("default");
const dataSource = [
  {
    key: "1",
    name: "路飞",
    sex: "男",
    cloth: "西装",
    price: 600,
    status: "热卖中",
  },
  {
    key: "2",
    name: "佐罗",
    sex: "男",
    cloth: "领带",
    price: 640,
    status: "已售罄",
  },
  {
    key: "3",
    name: "路飞",
    sex: "男",
    cloth: "西装",
    price: 600,
    status: "热卖中",
  },
  {
    key: "4",
    name: "路飞",
    sex: "男",
    cloth: "西装",
    price: 600,
    status: "热卖中",
  },
];
const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    customRender: ({ text }: { text: string }) => {
      return (
        <div>
          {text}
          <span class={cssModule.redText}>[测试bodyCell]</span>
        </div>
      );
    },
  },
  {
    title: "性别",
    dataIndex: "sex",
    key: "sex",
  },
  {
    title: "衣服",
    dataIndex: "cloth",
    key: "cloth",
  },
  {
    title: "价格",
    dataIndex: "price",
    key: "price",
    sorter: (a: TableType, b: TableType) => a.price - b.price,
  },
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
    customRender: ({ text }: { text: string }) => {
      if (text === "热卖中") {
        return <Tag color="red">{text}</Tag>;
      } else {
        return <Tag color="default">{text}</Tag>;
      }
    },
  },
];

const clickMenu = ({ _, key }: MenuInfo) => {
  size.value = key;
};
</script>
<style lang="less" module>
.wrap {
  margin: 20px;
  width: 800px;
  .operation {
    margin-bottom: 20px;
  }
}
.redText {
  color: red;
}
</style>
