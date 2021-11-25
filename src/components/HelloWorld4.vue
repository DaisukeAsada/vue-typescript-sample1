<template>
  <div class="app">
    <p>{{ x }} + {{ y }}</p>
    <p>=</p>
    <p>{{ result }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Calc } from '@/classes/calc'

export default defineComponent({
  setup (props, _contexts) {
    const result = ref<number>(0)
    const c: Calc = new Calc(props.x, props.y)
    result.value = c.plus()

    return {
      result
    }
  },
  props: {
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    }
  }
})
</script>
