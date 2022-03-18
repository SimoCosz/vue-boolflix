<template>
  <div id="app">
      <header>
        <NavComponent />
      </header>
    <div class="container-fluid">
      <div class="movie-wrapper">
        <CardItem v-for="movie in movies" :key="movie.id" :element='movie' />
      </div>
      <div class="movie-wrapper">
        <CardItem v-for="serie in series" :key="serie.id" :element='serie' />
      </div>
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

  computed: {
    movies: function(){
      return state.movies
    },
    series: function(){
      return state.series
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

  header{
    position: sticky;
    top: 0;
    z-index: 9999;
  }

  .container{
    color: white;

    .category{
      width: 100%;
      margin-bottom: 20px;
    }
  }
}

.movie-wrapper{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  margin: 40px 0;
  padding: 20px;
}
</style>
