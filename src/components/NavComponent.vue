<template>
  <div class="container-fluid">
    <figure class="logo">
      <img src="../assets/img/Boolflix.svg" alt="">
    </figure>
    <div class="search">
      <input type="text" v-model="search" @keyup.enter='setSearch'>
      <button @click="setSearch">Search</button>
    </div>
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
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: linear-gradient(to bottom, #454545, rgba(black, 0));

    .logo{
      width: 150px;
    }

    .search{
      margin-right: 50%;
      transform: translateX(+50%);

      input{
        background-color: #727272;
        border: none;
        border-radius: 3px;
        padding: 5px;
        width: 300px;
        color: white;
      }

      button{
        background-color: #454545;
        border: 1px solid black;
        border-radius: 3px;
        padding: 5px;
        width: 100px;
        margin-left: 5px;
        color: white;
      }
    }
  }
</style>