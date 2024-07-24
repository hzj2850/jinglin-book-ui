// tag：生成的元素
// obj: 元素的配置
// child：生成子元素
// slot：插槽
// content：内容 
// scope: 插槽传外部的数据

const arr = [
    {
        tag: 'div',
        obj: {
            class: {
                'flex-center-between': true
            },
            style: {
                border: '1px solid red'
            },
            attrs: {
                title: '行内样式不推荐使用px，防止后期做分辨率兼容'
            },
            on: {
                click: () => alert('绑定点击事件')
            }
        },
        child: [
            {
                tag: 'div',
                content: '左边',
            },
            {
                tag: 'div',
                content: '中间标题',
                slot: 'title',
            },
            {
                tag: 'div',
                content: '右边',
            },
        ]
    }
]

// 元素内容渲染：slot > content
const fn2 = (e, o) => [e.slot && o[e.slot] ? o[e.slot](e) : e.content];

// 递归循环数组
const fn = (h, a, o) => a.map(e => h(e.tag, e.obj || {}, e.child ? fn(h, e.child, o) : fn2(e, o)));

export const render = function (h, context) {
    const list = context.props.layout || arr || [], slots = context.scopedSlots;
    return fn(h, list, slots);
}
