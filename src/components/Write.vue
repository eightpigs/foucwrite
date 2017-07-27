<template>
  <div class="write">
    <textarea name="" id="" @keyup="refresh($event)">

    </textarea>
  </div>
</template>

<script>
import store from '@/store/store'

export default {
  name: 'write',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    refresh: function (event) {
      store.commit('setContent', event.currentTarget.value)
    }
  }
}
</script>

<style scoped>
textarea{
  width: 97%;
  height: 100%;
  border:0px; 
  font-size: 16px;
  font-weight: normal;
  outline: none;
  padding: 10px 10px 5px 16px;
  letter-spacing: 1px;
  resize: none;
}
</style>
