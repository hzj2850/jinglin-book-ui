<template>
  <div class="left-tree">
    <a-input-search
      allowClear
      size="large"
      placeholder="请输入内容"
      enter-button
      @search="onSearch"
    />
    <div class="tree-title">目录</div>
    <a-tree
      :show-line="showLine"
      :show-icon="showIcon"
      :default-expanded-keys="['0-0-0', '0-0-1', '0-0-2']"
      @select="onSelect"
    >
      <a-tree-node key="0-0-0" title="parent 1-0">
        <a-icon slot="icon" type="carry-out" />
        <a-tree-node key="0-0-0-0" title="leaf">
          <a-icon slot="icon" type="carry-out" />
        </a-tree-node>
        <a-tree-node key="0-0-0-1" title="leaf">
          <a-icon slot="icon" type="carry-out" />
        </a-tree-node>
        <a-tree-node key="0-0-0-2" title="leaf">
          <a-icon slot="icon" type="carry-out" />
        </a-tree-node>
      </a-tree-node>
      <a-tree-node key="0-0-1" title="parent 1-1">
        <a-icon slot="icon" type="carry-out" />
        <a-tree-node key="0-0-1-0" title="leaf">
          <a-icon slot="icon" type="carry-out" />
        </a-tree-node>
      </a-tree-node>
      <a-tree-node key="0-0-2" title="parent 1-2">
        <a-icon slot="icon" type="carry-out" />
        <a-tree-node key="0-0-2-0" title="leaf">
          <a-icon slot="icon" type="carry-out" />
        </a-tree-node>
        <a-tree-node key="0-0-2-1" title="leaf">
          <a-icon slot="icon" type="carry-out" />
          <a-icon slot="switcherIcon" type="form" />
        </a-tree-node>
      </a-tree-node>
    </a-tree>
  </div>
</template>
  
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showLine: true,
      showIcon: false,
    };
  },
  methods: {
    onSelect(keys, info) {
      console.log("selected", keys, info);
    },
    onSearch() {},
  },
};
</script>

<style lang="less" scoped>
.left-tree {
  width: 500px;
  background: #fff;
  height: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
}

.tree-title {
  font-size: @font-size-title;
  margin-top: 10px;
}

.ant-tree {
  flex: 1;
  .hidScrollBar();
}
</style>