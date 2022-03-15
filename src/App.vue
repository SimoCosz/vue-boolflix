<template>
  <div id="app">
    <div class="container">
    
      <input type="text" v-model="search">
      <button @click="getMovie(), getSeries()">Search</button>
      
      <h2>Movies</h2>
      <div class="info-movie">

        <div class="card-movie" v-for="movie in movies" :key="movie.id">
          <h3 class="title">{{movie.title}}</h3>
          <h4 class="original-title">{{movie.original_title}}</h4>
          <figure>
            <img :src="`./assets/img/${require(movie.original_language)}.png`" alt="">
          </figure>
          <p class="vote">{{movie.vote_average}}</p>
        </div>
      </div>

      <h2>Series</h2>
      <div class="info-movie">

        <div class="card-movie" v-for="serie in series" :key="serie.id">
          <h3 class="title">{{serie.name}}</h3>
          <h4 class="original-title">{{serie.original_name}}</h4>
          <p class="language">{{serie.original_language}}</p>
          <p class="vote">{{serie.vote_average}}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  components: {

  },
  
  data() {
    return {
      search: '',
      movies: [],
      series: [],
      baseURL: 'https://api.themoviedb.org/3/search/'
    }
  },

  created() {

    this.getMovie
    this.getSeries

  },

  methods: {
    getMovie: function(){
      axios.get(`${this.baseURL}movie`,{
      params: {
        api_key: '9857cfb37fc41b760e69c70f6d75b517',
        query: this.search,
      }
    })
    .then(res => {
      console.log(res.data)
      this.movies = res.data.results
    })
    .catch(error => {
      console.log(error.response)
    })
    },

    getSeries: function(){
        axios.get(`${this.baseURL}tv`,{
        params: {
          api_key: '9857cfb37fc41b760e69c70f6d75b517',
          query: this.search,
        }
      })
      .then(res => {
        console.log(res.data)
        this.series = res.data.results
      })
      .catch(error => {
        console.log(error.response)
      })
    }
  }
}

</script>

<style lang="scss">
@import './assets/scss/common.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.info-movie{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;

  .card-movie{
    border: 1px solid black;
    width: calc((100% / 6) - 10px);
    padding: 10px;
  }

}
</style>
