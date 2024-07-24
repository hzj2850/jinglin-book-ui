
// 检材/样本列表
export const columns1 = (_this) => {
    return [
        {
            title: '序号',
            style: 'width: 5em;',
            customRender({ checkbox, i }) {
                return {
                    value: [checkbox, i + 1]
                }
            }
        },
        {
            title: '检材/样本编号',
            key: 'name',
            style: 'min-width: 12em;',
        },
        {
            title: '检材/样本名称',
            key: 'age',
        },
        {
            title: '检验结果',
            key: 'sex',
        },
        {
            title: '检验日期',
            key: 'age',
            style: 'width: 12em;',
        },
        {
            title: '检验人',
            key: 'age',
            style: 'width: 10em;',
        },
    ];
}

// 鉴定材料列表
export const columns2 = (_this) => {
    return [
        {
            title: '序号',
            style: 'width: 5em;',
            customRender({ checkbox, i }) {
                return {
                    value: [checkbox, i + 1]
                }
            }
        },
        {
            title: '鉴定材料',
            key: 'name',
            style: 'min-width: 12em;',
        },
        {
            title: '页数',
            key: 'age',
        },
        {
            title: '起止页码',
            key: 'sex',
        },
        {
            title: '文档类型',
            key: 'age',
            style: 'width: 12em;',
        },
        {
            title: '生成/上传时间',
            key: 'age',
            style: 'width: 10em;',
        },
        {
            title: '操作',
            key: 'age',
            style: 'width: 10em;',
        },
    ];
}

// 文书操作日志
export const columns3 = (_this) => {
    return [
        {
            title: '序号',
            style: 'width: 5em;',
            customRender({ checkbox, i }) {
                return {
                    value: [checkbox, i + 1]
                }
            }
        },
        {
            title: '操作人',
            key: 'name',
            style: 'min-width: 12em;',
        },
        {
            title: '操作状态',
            key: 'age',
        },
        {
            title: '操作时间',
            key: 'sex',
        },
        {
            title: '操作模块',
            key: 'age',
            style: 'width: 12em;',
        },
        {
            title: '操作',
            key: 'age',
            style: 'width: 10em;',
        },
    ];
}

// 列表数据
export const listData = [
    { name: '王二', age: 23, sex: 1, id: 1 },
    { name: '小红', age: 23, sex: 0, id: 2 },
    { name: '张三', age: 23, sex: 1, id: 3 },
    {
        name: '李四', age: 23, sex: 2, id: 4, children: [
            { name: '111', age: 11, sex: 1, id: 5 },
            { name: '111', age: 11, sex: 1, id: 6 },
            { name: '111', age: 11, sex: 1, id: 7 },
        ]
    },
    { name: '小红', age: 23, sex: 0, id: 8 },
]
