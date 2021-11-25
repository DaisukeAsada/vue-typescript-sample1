<template>
  <div class="about">
    <h1>This is an about page</h1>
    <hello-world1 message="Helllo" :userInfo="user"></hello-world1>
    <hello-world2></hello-world2>
    <hello-world3 :message="message"></hello-world3>
    <hello-world4 :x="1" :y="2"></hello-world4>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import HelloWorld1 from '@/components/HelloWorld1.vue'
import HelloWorld2 from '@/components/HelloWorld2.vue'
import HelloWorld3 from '@/components/HelloWorld3.vue'
import HelloWorld4 from '@/components/HelloWorld4.vue'
import { User } from '@/interface'

export default defineComponent({
  components: {
    HelloWorld1,
    HelloWorld2,
    HelloWorld3,
    HelloWorld4
  },
  setup () {
    const person: User = reactive<User>({
      id: 5,
      firstName: 'taro',
      familyName: 'yamada'
    })
    const message = ref<string>('aabbcc')

    const user = computed(() => person)
    return {
      person,
      message,
      user
    }
  }
})
</script>
