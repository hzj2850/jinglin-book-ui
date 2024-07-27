import { getApi } from '@/api/index'

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
            style: 'width: 12em;',
            ellipsis: 10,
        },
        {
            title: '页数',
            key: 'age',
            slot: 'page',
            style: 'width: 10em;',
        },
        {
            title: '起止页码',
            key: 'sex',
            slot: 'page2',
            style: 'width: 10em;',
        },
        {
            title: '文档类型',
            key: 'age',
            style: 'width: 12em;',
            ellipsis: 10,
        },
        {
            title: '生成/上传时间',
            key: 'age',
            style: 'width: 10em;',
        },
        {
            title: '操作',
            key: 'age',
            slot: 'action',
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
            style: 'width: 12em;',
            ellipsis: 10,
        },
        {
            title: '操作状态',
            key: 'age',
            style: 'width: 12em;',
            ellipsis: 10,
        },
        {
            title: '操作时间',
            key: 'sex',
            style: 'width: 12em;',
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

// 案(事)件信息
const info1 = () => {
    return [
        {
            label: '案件编号',
            text: '11111111111111111111'
        },
        {
            label: '现勘编号',
            text: '11111111111111111111'
        },
        {
            label: '案件名称',
            text: '11111111111111111111'
        },
        {
            label: '案件类型',
            text: '11111111111111111111'
        },
        {
            label: '案件性质',
            text: '11111111111111111111'
        },
        {
            label: '案发日期',
            text: '11111111111111111111'
        },
        {
            label: '案发地点',
            text: '11111111111111111111'
        },
        {
            label: '简要案情',
            text: '11111111111111111111'
        },
    ]
}

// 委托信息
const info2 = () => {
    return [
        {
            label: '鉴定编号',
            text: '11111111111111111111'
        },
        {
            label: '委托编号',
            text: '11111111111111111111'
        },
        {
            label: '委托次数',
            text: '11111111111111111111'
        },
        {
            label: '鉴定专业',
            text: '11111111111111111111'
        },
        {
            label: '鉴定要求',
            text: '11111111111111111111'
        },
        {
            label: '送检人',
            text: '11111111111111111111'
        },
        {
            label: '受理人',
            text: '11111111111111111111'
        },
        {
            label: '检验人',
            text: '11111111111111111111'
        },
    ]
}

// 文书经办人
const info3 = () => {
    return [
        {
            label: '制作人',
            text: '11111111111111111111'
        },
        {
            label: '审核人',
            text: '11111111111111111111'
        },
        {
            label: '审批人',
            text: '11111111111111111111'
        },
        {
            label: '签发人',
            text: '11111111111111111111'
        },
    ]
}

export const caseInfo = () => {
    return [
        { title: '案(事)件信息', data: info1() },
        { title: '委托信息', data: info2() },
        { title: '文书经办人', data: info3() },
    ]
}

// 检材/样本列表
export const getList = (_this) => {
    _this.$loading(true);
    getApi().then(res => {
        if (res.code == 20000) {
            _this.$loading(false);
            _this.listdata.push({ name: 'jjjjj' })
            console.log("获取列表", _this.tabId);
        } else {
            _this.$message.destroy();
            _this.$message.error(res.message || '获取【检材/样本列表】失败');
        }
    })

}