<template>
  <div id="app">
      <header>
        <NavComponent />
        <h2>{{search}}</h2>
      </header>
    <div class="container">
      
      <h2>Movies</h2>
      <div class="movie-wrapper">
        <CardItem v-for="movie in movies" :key="movie.id" :element='movie' />
      </div>
      <!-- <h2>Series</h2>
      <div class="movie-wrapper">
        <CardItem v-for="serie in series" :key="serie.id" :element='serie' />
      </div> -->
    </div>
  </div>
</template>

<script>
import CardItem from './components/CardItem.vue'
import NavComponent from './components/NavComponent.vue'
import state from './store.js'


export default {
  name: 'App',
  components: {
    CardItem,
    NavComponent,
  },
  
  data() {
    return {
      
    }
  },

  computed: {
    movies: function(){
      return state.movies
    },
    search: function() {
      return state.search
    }
  },   
    
}

</script>

<style lang="scss">
@import './assets/scss/common.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #141414;
  min-height: 100vh;


  .container{
    color: white;
  }
}

.movie-wrapper{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
}
</style>
