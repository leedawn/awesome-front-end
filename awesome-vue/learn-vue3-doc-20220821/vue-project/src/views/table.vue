<template>
  <div :class="$style.wrap">
    <div :class="$style.operation">
      <APopover trigger="click">
        <IconFont :class="$style.icon" type="icon-setting" />
        <template #content>
          <ACheckbox v-model:checked="allColumns">列展示</ACheckbox>
          <ACheckbox v-model:checked="showIndex">序号列</ACheckbox>
          <ACheckbox v-model:checked="bordered">边框</ACheckbox>
          <AButton>重置</AButton>
        </template>
      </APopover>

      <ADropdown trigger="click">
        <ColumnHeightOutlined :class="$style.icon" />
        <template #overlay>
          <AMenu @click="clickMenu">
            <AMenuItem v-for="(v, k) in tableSize" :key="k">{{ v }}</AMenuItem>
          </AMenu>
        </template>
      </ADropdown>
    </div>

    <ATable
      :dataSource="dataSource"
      :columns="showIndex ? indexColumns : columns"
      :size="size"
      :bordered="bordered"
    />
  </div>
</template>

<script lang="tsx" setup>
import { ref } from "vue";
import type { MenuInfo } from "ant-design-vue";
import { dataSource, useTableColumns } from "./utils";
import { ColumnHeightOutlined } from "@ant-design/icons-vue";

const tableSize = {
  default: "默认",
  middle: "中等",
  small: "紧凑",
};

const { columns, indexColumns } = useTableColumns();
const size = ref("default");
const settingVisible = ref(false);
const allColumns = ref(false);
const showIndex = ref(false);
const bordered = ref(false);

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
    text-align: right;
    .icon {
      margin-left: 20px;
      font-size: 14px;
    }
  }
}
.redText {
  color: red;
}
</style>
