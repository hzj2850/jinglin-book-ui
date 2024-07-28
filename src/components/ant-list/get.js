
import { getMajorList, getEntrustingPartyList, getReceiverList, getSurveyorList, getOperatorList } from '@/api/index'

// 鉴定专业
export const getMajor = (id, _this) => {
    return getMajorList({ id }).then(res => {
        if (res.code == 20000) {
            const obj = { id, list: res.data || [] };
            _this.$store.commit('set_major', obj);
        } else {
            _this.$message.destroy();
            _this.$message.error(res.message);
        }
    })
}

// 委托单位
export const getPartyList = (id, _this) => {
    return getEntrustingPartyList({ majorId: id }).then(res => {
        if (res.code == 20000) {
            const obj = { id, list: res.data || [] };
            _this.$store.commit('set_party', obj);
        } else {
            _this.$message.destroy();
            _this.$message.error(res.message);
        }
    })
}

// 受理人
export const getReceiver = (id, _this) => {
    return getReceiverList({ majorId: id }).then(res => {
        if (res.code == 20000) {
            const obj = { id, list: res.data || [] };
            _this.$store.commit('set_receiver', obj);
        } else {
            _this.$message.destroy();
            _this.$message.error(res.message);
        }
    })
}

// 检验人
export const getSurveyor = (id, _this) => {
    return getSurveyorList({ majorId: id }).then(res => {
        if (res.code == 20000) {
            const obj = { id, list: res.data || [] };
            _this.$store.commit('set_surveyor', obj);
        } else {
            _this.$message.destroy();
            _this.$message.error(res.message);
        }
    })
}

// 操作人
export const getOperator = (params, _this) => {
    return getOperatorList(params).then(res => {
        if (res.code == 20000) {
            const obj = { id: params.majorId, list: res.data || [] };
            _this.$store.commit('set_operator', obj);
        } else {
            _this.$message.destroy();
            _this.$message.error(res.message);
        }
    })
}

// 高级筛选配置
export const getCfig = () => {
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

// 打印情况
export const getPrint = () => {
    return [
        { label: '已打印', value: '1' },
        { label: '未打印', value: '0' },
    ]
}