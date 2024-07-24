// 计算rowspan
export const rowspan = (o, k, v = 0) => {
    for (let e of o) {
        if ((e[k] || []).length > 0) return v + 1;
    }
    return v;
}

// 计算colspan
export const colspan = (a, k, b = []) => {
    for (let e of a) {
        if ((e[k] || []).length > 0) colspan(e[k], k, b);
        else b.push(e.title);
    }
    return b.length;
}

// 自定义列的内容
const fn = (e, c) => {
    if (e.slot) {
        const slots = c.parent.$scopedSlots;
        const key = e.slot + '_head';
        return slots[key] ? slots[key](e) : e.title;
    } else {
        return e.title;
    }
}

// 列循环
const colMap = (h, c, a) => {
    return a.map(e => h('th', {
        style: e.style,
        attrs: {
            class: e.class,
            rowspan: rowspan([e], 'child'),
            colspan: colspan([e], 'child'),
        },
    }, [fn(e, c)]))
}

// 行循环
const rowMap = (h, c, a, b = []) => {
    const arr = a.filter(v => v.child);
    const list = [].concat(...arr.map(e => e.child));
    if (list.length) rowMap(h, c, list, b);
    b.unshift(h('tr', {}, colMap(h, c, a)))
    return b;
}

export function headRender(h, c) {
    const a = c.parent.columns || [];
    return rowMap(h, c, a);
}
