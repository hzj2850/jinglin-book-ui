

export const rules = {
    user1: [{ required: true, message: '请选择鉴定人', trigger: 'change' }],
    user1: [{ required: true, message: '请选择审核人', trigger: 'change' }],
    user1: [{ required: true, message: '请选择授权签字人', trigger: 'change' }],
    user1: [{ required: true, message: '请选择签发人', trigger: 'change' }],
}

export const validate = (_this) => {
    _this.$refs.ruleForm.validate((valid, res) => {
        if (valid) {
            alert('submit!');
        } else {
            const key = Object.keys(res)[0];
            const obj = (res[key] || [])[0] || {};
            _this.$message.destroy();
            _this.$message.warning(obj.message);
            return false;
        }
    });
}

export const columns = [
    {
        title: '序号',
        style: 'width: 5em;',
        customRender({ i }) {
            return { value: [i + 1] };
        }
    },
    {
        title: '检材编号',
        key: 'name',
        style: 'min-width: 12em;',
    },
    {
        title: '检材文书鉴定编号',
        key: 'age',
    },
    {
        title: '检验简称',
        key: 'sex',
    },
    {
        title: '检验名称',
        key: 'age',
        style: 'width: 12em;',
    },
];