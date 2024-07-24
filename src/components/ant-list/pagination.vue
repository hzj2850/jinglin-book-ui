<template>
    <a-pagination size="small" show-size-changer :total="50" :show-total="total => `共${total}条`" />
</template>

<style lang="less" scoped>
.ant-pagination{
    background: #fff;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
</style>