import { getTaskList } from '@/api/index'

export const getTabs = () => {
    return [
        { label: "待制作", value: "1" },
        { label: "案件信息", value: "2" },
    ]
}

// 表格头部配置
export const columns = (_this) => {
    return [
        {
            title: '序号',
            class: 'td-fixed fixed-last',
            style: 'width: 5em;min-width: 5em;left: 0;',
            customRender({ checkbox, i }) {
                return {
                    value: [checkbox, i + 1]
                }
            }
        },
        {
            title: '姓名',
            key: 'name',
            style: 'min-width: 12em;',
        },
        {
            title: '年龄',
            key: 'age',
            style: 'min-width: 500px;',
            child: [
                {
                    title: '年龄1',
                    key: 'age',
                },
                {
                    title: '年龄2',
                    key: 'age',
                },
            ]
        },
        {
            title: '性别',
            key: 'sex',
            style: 'min-width: 32em;',
            // customRender: ({ item }) => {
            //     return {
            //         style: { color: item.sex == 1 ? '#0f0' : '#f0f' },
            //         value: item.sex == 1 ? '男' : '女',
            //     }
            // }
        },
        {
            title: '操作',
            slot: 'action',
            class: 'td-fixed fixed-first',
            style: 'min-width: 10em;right: 0;',
        },
    ];
}


// 获取列表数据
export const getList = (_this) => {
    _this.spinning = true;
    return getTaskList(_this.form).then(res => {
        console.log('kkkkkkjjjjjjjjjjjjjjjjjjjjjjjjj', res)
        if (res.code == 20000) {
            console.log(res, 'jjjjjjjjjjjjjjjjjj')
        } else {
            _this.$message.destroy();
            _this.$message.error(res.message);
        }
    })
}