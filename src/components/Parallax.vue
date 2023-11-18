<script lang="ts">
import Rellax from 'rellax'

export default defineComponent({
  props: {
    speed: {
      type: Number,
      default: 3,
    },
  },
  setup(props, context) {
    const id = 'rellax_v_' + (Math.random() * 100000).toFixed()

    onMounted(() => {
      new Rellax(`.${id}`)
    })

    return () =>
      h(
        'div',
        {
          ...context.attrs,
          class: id,
          'data-rellax-speed': props.speed ?? 3,
        },
        context.slots,
      )
  },
})
</script>
