import { ckIcon } from './tree'

// 省略号
const getellipsis = (h, c, e, f) => {
    const v = (e.value || '').trim();
    const str = v ? (v.length >= f.ellipsis ? `${v.substring(0, f.ellipsis * 1)}...` : v) : (c.parent.seat || '');
    return h('a-tooltip', {
        attrs: {
            title: v || undefined,
            getPopupContainer: r => r.parentNode,
        }
    }, str)
}

const fn = (h, c, e, i, f, k) => {
    // 回显插槽
    if (f.slot) {
        const slots = c.parent.$scopedSlots;
        return slots[f.slot] ? slots[f.slot]({ e, i }) : '插槽';
    }
    let obj = {};
    // 自定义回显值
    if (f.customRender) {
        obj = f.customRender({ e, i, f, k, checkbox: ckIcon(h, c, e, f) });
    } else {
        obj = { value: e[f.key] };
    }
    // 省略号
    if (f.ellipsis) return getellipsis(h, c, obj, f);
    // 根据配置回显值
    return h('span', { style: obj.style, attrs: { class: obj.class } }, obj.value || c.parent.seat || '');
}

// 表格配置
const get = (a, b = []) => {
    for (let e of a) {
        if (e.child) b.push(...e.child);
        else b.push(e);
    }
    return b;
}

// 列循环
const colMap = (h, c, e, i) => {
    const a = get(c.parent.columns || []);
    return a.map((f, k) => h('td', {
        style: f.style,
        attrs: {
            class: f.class
        }
    }, [fn(h, c, e, i, f, k)]));
}

// 行循环
const rowMap = (h, c) => {
    const a = c.parent.listdata || [];
    return a.map((e, i) => h('tr', {}, colMap(h, c, e, i)));
}

export const tbodyRender = (h, c) => {
    return h('tbody', {}, rowMap(h, c));
}