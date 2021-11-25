<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ book.title }}/{{ book.author }}/{{ book.year }}</h1>
    <h1>{{ message }}</h1>
    <h1>{{ userInfo.id }}:{{ fullName }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Book, User } from '@/interface'

type VACCINE = 'pfizer' | 'moderna' | 'astrazeneca'

export default defineComponent({
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello TypeScript' as string,
      user: {
        id: 0,
        firstName: 'daisuke',
        familyName: 'asada'
      } as User,
      book: {
        title: 'Vue 3 Guide',
        author: 'Vue Team',
        year: 2020
      } as Book
    }
  },
  props: {
    message: {
      type: String as PropType<string>
    },
    userInfo: {
      type: Object as PropType<User>,
      required: true
    }
  },
  computed: {
    msgLength (): number {
      return this.msg.length
    },
    fullName (): string {
      return this.userInfo.firstName + ' ' + this.userInfo.familyName
    }
  },
  methods: {
    changeMsg (msg: string): string {
      this.msg = msg
      return msg
    },
    changeYear () {
      this.book.year = 2021
      const inject: VACCINE = 'pfizer'
      console.log(inject)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
