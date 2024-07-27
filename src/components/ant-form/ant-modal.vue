<script>
export default {
    functional: true,
    render(h, c) {
        const tag = c.props.tag || 'modal';
        if(tag === 'modal') {
            return h('a-modal', {...c.data}, c.scopedSlots['default']);
        } else {
            return h('div', {}, c.scopedSlots['default']());
        }
    }
}
</script>
