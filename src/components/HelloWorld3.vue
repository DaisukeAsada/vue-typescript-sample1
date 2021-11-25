<template>
  <div class="app">
    {{ msg }}
  </div>
  <h2>{{ book.title }}/{{ book.author }}/{{ book.year }}</h2>
  <h3
    v-for="book in books"
    :key="book.title"
  >
    {{ book.title }}/{{ book.author }}/{{ book.year }}
  </h3>
  <h3>{{ message }}</h3>
  <button @click="changeMsg">Change</button>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import { Book } from '@/interface'

export default defineComponent({
  setup () {
    const msg = ref<string>('Hello Ref')
    const book = ref<Book>({
      title: 'Vue3 Guide',
      author: 'Vue Team',
      year: 2020
    })
    const books = ref<Book[]>([
      {
        title: 'Vue 3 Guide',
        author: 'Vue Team',
        year: 2020
      },
      {
        title: 'Vite Guide',
        author: 'Vue Team',
        year: 2021
      }
    ])
    const changeMsg = () => {
      msg.value = 'Hello Ref aaaa'
    }
    return {
      msg,
      book,
      books,
      changeMsg
    }
  },
  props: {
    message: {
      type: String as PropType<string>
    }
  }
})
</script>
