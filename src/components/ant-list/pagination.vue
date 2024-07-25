<template>
  <a-pagination
    size="small"
    show-size-changer
    :current="pagination.current || 0"
    :pageSize="pagination.pageSize || 0"
    :total="pagination.total || 0"
    :show-total="(total) => `共${total}条`"
    @change="onChange"
    @showSizeChange="onChange"
  />
</template>

<script>
export default {
  props: {
    pagination: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    onChange(v, s) {
      this.$emit("change", v, s);
    },
  },
};
</script>

<style lang="less" scoped>
.ant-pagination {
  background: #fff;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>