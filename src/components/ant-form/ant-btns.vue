<script>
export default {
  functional: true,
  props: {
    tabs: {
      type: Array,
      default: () => [
        { label: "资料列表", value: "1" },
        { label: "案件信息", value: "2" },
      ],
    },
    tabId: {
      type: [String, Number],
      default: "1",
    },
  },
  render(h, c) {
    const getObj = (f) => ({
      class: { btnActive: c.props.tabId == f.value },
      on: { click: () => c.listeners.change && c.listeners.change(f) },
    });
    const arr = c.props.tabs.map((f) => h("div", getObj(f), f.label));
    return h("div", { class: "ant-btns" }, arr);
  },
};
</script>

<style lang="less" scoped>
.ant-btns {
  display: flex;
  align-items: center;
  line-height: @input-height;
  font-size: @font-size-base;
  > div {
    background: @active-default;
    padding: 0 12px;
    min-width: 88px;
    text-align: center;
    margin-left: 1PX;
    cursor: pointer;
    &:first-child {
      margin-left: 0;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  > .btnActive {
    background: @active-color;
    color: #fff;
  }
}
</style>