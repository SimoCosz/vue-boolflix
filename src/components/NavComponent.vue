<template>
  <div class="container-fluid">
    <input type="text" v-model="search" @keyup.enter='setSearch'>
    <button @click="setSearch">Search</button>
  </div>
</template>

<script>
import state from '../store.js'
import { getMovie } from '../store.js'

export default {
  data() {
    return {
      search: '',
    }
  },
  methods: {
    setSearch: function(){
      state.search = this.search;
      getMovie()
    }
  }
}
</script>

<style lang="scss" scoped>
  .container-fluid{
    padding: 20px;
  }
</style>