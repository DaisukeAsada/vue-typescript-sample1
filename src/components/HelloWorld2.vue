<template>
  <div class="app">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

interface State {
  msg: string,
}
export default defineComponent({
  setup () {
    // const state = reactive<{ msg: string}>({
    // msg: "Hello Reactive",
    // });
    const state: State = reactive({
      msg: 'Hello Reactive'
    })

    state.msg = 'Hello Reactive 222'
    return {
      // state,
      ...toRefs(state)
    }
  }
})
</script>
