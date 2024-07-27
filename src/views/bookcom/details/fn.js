import { getApi } from '@/api/index'

// 获取头部【任务列表】
export const getTasks = (_this) => {
    return new Promise((resolve) => {
        getApi().then(res => {
            if (res.code == 20000) {
                const list = [
                    { label: 'G520100-40-22000', value: 'a1' },
                    { label: 'J520100-40-22002', value: 'b2' },
                    { label: 'G520100-40-22003', value: 'c3' },
                    { label: 'J520100-40-22004', value: 'd4' },
                ];
                const total = 254;
                resolve({ total, list });
            } else {
                _this.$message.destroy();
                _this.$message.error(res.message || '获取任务列表失败');
                resolve({ total: 0, list: [] });
            }
        })
    })
}

// 获取【任务详情】
export const getTask = (_this) => {
    return getApi().then(res => {
        if (res.code == 20000) {
            const list = [
                { label: 'G520100-40-22000', value: 'a1' },
                { label: 'J520100-40-22002', value: 'b2' },
                { label: 'G520100-40-22003', value: 'c3' },
                { label: 'J520100-40-22004', value: 'd4' },
            ];
            const total = 254;
            resolve({ total, list });
        } else {
            _this.$message.destroy();
            _this.$message.error(res.message || '获取任务列表失败');
        }
    })

}


// 默认选中任务
export const setTask = (that, params = {}) => {
    const list = params.list || [];
    const total = params.total || 0;
    const id = that.$route.query.id;
    // 1、默认选中第一个任务
    if (!id && list[0]) {
        that.tasks = list;
        that.total = total;
        that.onTask(list[0]);
        return false;
    }
    // 2、任务回显
    const item = list.find(f => f.value == id);
    if (item) {
        that.tasks = list;
        that.total = total;
        that.onTask(item);
        return false;
    }
    // 3、记录回显
    if (!item) {
        const obj = { label: '何志军', value: 'hzj' };
        that.tasks = [obj, ...list];
        that.total = total;
        that.onTask(obj);
        return false;
    }
}
