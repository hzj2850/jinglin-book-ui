// 获取头部任务列表
export const getTasks = (_this) => {
    _this.total = 222;
    _this.tasks = [
        { label: 'G520100-40-22000', value: 'a1' },
        { label: 'J520100-40-22002', value: 'b2' },
        { label: 'G520100-40-22003', value: 'c3' },
        { label: 'J520100-40-22004', value: 'd4' },
    ]
}


// 刚进入页面时，选中第一个任务
export const setTask = (_this) => {
    const query = _this.$route.query;
    const taskId = query.taskId;
    const list = _this.tasks || [];
    // 默认查看第一个任务
    if (!taskId) {
        const task1 = list[0];
        if (task1) _this.onTask(task1);
    }
    // 查看记录
    if (taskId) {
        const task2 = list.find(f => f.value == taskId);
        if (task2) _this.onTask(task2);
    }
}
