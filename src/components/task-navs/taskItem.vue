<script>
export default {
  functional: true,
  render(h, c) {
    const obj = {
      class: {
        "task-item": true,
        "task-item-active": c.props.taskId == c.props.item.value,
      },
      on: { click: () => c.listeners.click && c.listeners.click() },
    };
    return h("div", obj, [
      h("span", {}, c.props.index),
      h("div", {}, c.props.item.label),
    ]);
  },
};
</script>

<style lang="less" scoped>
.task-item {
  border: 1px solid @active-default;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  white-space: nowrap;
  cursor: pointer;
  height: @input-height;
  line-height: calc(@input-height - 2px);
  &:hover {
    border-color: @active-color;
  }
  > span {
    text-align: center;
    font-size: @font-size-title;
    background: @active-default;
    min-width: @input-height;
  }
  > div {
    font-size: @font-size-base;
    padding: 0 10px;
  }
}

.task-item-active {
  border-color: @active-color;
  > span {
    background: @active-color;
    color: #fff;
  }
  > div {
    color: @active-color;
  }
}
</style>