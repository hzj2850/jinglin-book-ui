

// 创建复选框
export const ckIcon = (h, c, e, f) => {
    const keys = c.props.selectRowKeys || [];
    const key = c.props.rowKey;
    const idx = keys.indexOf(e[key]);
    const icon = idx == -1 ? 'icon-check1' : 'icon-check3';
    return h('i', {
        class: ['iconfont', 'iconcheck', icon],
        on: {
            click() {
                if (idx >= 0) {
                    keys.splice(idx, 1);
                } else {
                    keys.push(e[key]);
                }
            }
        }
    })
}
