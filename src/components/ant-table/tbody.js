import { ckIcon } from './tree'

const fn = (h, c, e, i, f, k) => {
    // 回显插槽
    if (f.slot) {
        const slots = c.parent.$scopedSlots;
        return slots[f.slot] ? slots[f.slot]({ e, i }) : '插槽';
    }
    // 自定义回显值
    if (f.customRender) {
        const obj = f.customRender({ e, i, f, k, checkbox: ckIcon(h, c, e, f) });
        return h('span', { style: obj.style, attrs: { class: obj.class } }, obj.value);
    }
    // 根据配置回显值
    if (f.key) return h('span', {}, e[f.key] || c.parent.seat || '');
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