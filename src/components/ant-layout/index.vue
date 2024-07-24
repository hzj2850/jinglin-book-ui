<script>
import { render } from './layout'
export default {
    functional: true,
    render,
}
</script>

<style lang="less" scoped>
.flex-center{
    display: flex;
    align-items: center;
}
.flex-center-between{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>