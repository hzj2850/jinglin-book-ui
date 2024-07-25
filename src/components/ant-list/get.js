
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