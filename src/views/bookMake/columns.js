import { getTaskList } from '@/api/index'
import moment from 'moment'

export const getDate = v => v ? moment(v).format('YYYY年MM月DD日') : '';

// 文书状态
const bookState = [
    {
        label: "待制作",
        value: 0,
    },
    {
        label: "制作中",
        value: 1,
    },
    {
        label: "审核中",
        value: 2,
    },
    {
        label: "审批中",
        value: 3,
    },
    {
        label: "制作人签字",
        value: 4,
    },
    {
        label: "审核人签字",
        value: 5,
    },
    {
        label: "审批人签字",
        value: 6,
    },
    {
        label: "签发人签章",
        value: 7,
    },
    {
        label: "签发中",
        value: 8,
    },
    {
        label: "已签发",
        value: 9,
    },
    {
        label: "驳回",
        value: 10,
    },
    {
        label: "重做",
        value: 11,
    },
    {
        label: "签收",
        value: 12,
    },
]

// 列表状态回显
export const getState = function (e = {}, list = []) {
    const t = e.type;
    if (t == 2) {
        return { value: '已审核', style: "color: red;" };
    }
    if (t == 3) {
        return { value: '已审批', style: "color: red;" };
    }
    if (t == 7) {
        return { value: '驳回', style: "color: red;" };
    }
    const obj = list.find(f => f.value == e.state) || {};
    return {
        value: obj.label,
        style: { color: obj.color || '#000' }
    }
}

// 文书制作列表导航
export const getTabs = () => {
    return [
        {
            label: '待制作',
            value: 0
        },
        {
            label: '待提审',
            value: 1
        },
        {
            label: '审核中',
            value: 2
        },
        {
            label: '审批中',
            value: 3
        },
        {
            label: '签发中',
            value: 8
        },
        {
            label: '已签发',
            value: 9
        },
        {
            label: '已签收',
            value: 12
        },
        {
            label: '驳回',
            value: 10
        },
        {
            label: '全部',
            value: ''
        }
    ]
}

// 表格头部配置
export const columns = (_this) => {
    return [
        {
            title: '序号',
            style: 'width: 5em;',
            customRender({ i }) {
                return {
                    value: [i + 1]
                }
            }
        },
        {
            title: '鉴定编号',
            key: 'identificationNumber',
            style: 'width: 13em;',
            ellipsis: 20,
        },
        {
            title: '案件名称',
            key: 'caseName',
            style: 'width: 16em;',
            ellipsis: 13,
        },
        {
            title: '委托单位',
            key: 'entrustDeptName',
            style: 'width: 16em;',
            ellipsis: 13,
        },
        {
            title: '案件性质',
            key: 'casePropertyValueByDict',
            style: 'width: 8em;',
        },
        {
            title: '检验人',
            key: 'surveyor',
            style: 'width: 10em;',
            ellipsis: 8,
            customRender({ e }) {
                return {
                    value: [e.oneSurveyorName, e.twoSurveyorName].filter(f => f).join(',')
                }
            }
        },
        {
            title: '检验完成日期',
            key: 'inspectionCompletionTime',
            style: 'width: 10em;',
            customRender({ e, f }) {
                return {
                    value: getDate(e[f.key])
                }
            }
        },
        {
            title: '备注',
            key: 'remark',
            style: 'width: 12em;',
            ellipsis: 10,
        },
        {
            title: '状态',
            key: 'state',
            style: 'width: 8em;',
            customRender({ e, f }) {
                return getState(e, bookState);
            }
        },
        {
            title: '操作',
            slot: 'action',
            style: 'width: 6em;',
        },
    ];
}

export const getFormList = () => {
    return [
        { label: '打印情况', key: 'print', type: 'select', placeholder: '请选择打印情况', data: 'printList' },
        { label: '制作时间', key: 'rangePicker', type: 'range', placeholder: '请选择制作时间' },
        { label: '委托单位', key: 'entrustingParty', type: 'select', placeholder: '请选择委托单位', data: 'partyList' },
        { label: '受理人', key: 'acceptor', type: 'select', placeholder: '请选择受理人', data: 'receiverList' },
        { label: '检验人', key: 'surveyor', type: 'select', placeholder: '请选择检验人', data: 'surveyorList' },
        { label: '制作人', key: 'producer', type: 'select', placeholder: '请选择制作人', data: 'userlist1' },
        { label: '审核人', key: 'reviewedBy', type: 'select', placeholder: '请选择审核人', data: 'userlist2' },
        { label: '审批人', key: 'approvedBy', type: 'select', placeholder: '请选择审批人', data: 'userlist3' },
        { label: '签发人', key: 'issuer', type: 'select', placeholder: '请选择签发人', data: 'userlist4' },
    ]
}

// 获取列表数据
export const getList = (_this) => {
    _this.spinning = true;
    return getTaskList(_this.form).then(res => {
        _this.spinning = false;
        if (res.code == 20000) {
            const obj = res.data || {};
            _this.listdata = obj.records || [];
            _this.total = obj.total || 0;
        } else {
            _this.$message.destroy();
            _this.$message.error(res.message);
        }
    })
}