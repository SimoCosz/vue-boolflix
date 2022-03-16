<template>
  <div id="app">
    <div class="container">
    
      <input type="text" v-model="search" @keyup.enter='getMovie(), getSeries()'>
      <button @click="getMovie(), getSeries()">Search</button>
      
      <h2>Movies</h2>
      <div class="info-movie">

        <div class="card-movie" v-for="movie in movies" :key="movie.id">
          <h3 class="title">{{movie.title}}</h3>
          <p class="original-title">{{movie.original_title}}</p>
          <p>{{getFlag(movie.original_language)}}</p>
          <p class="vote">{{movie.vote_average}}</p>
        </div>
      </div>

      <h2>Series</h2>
      <div class="info-movie">

        <div class="card-movie" v-for="serie in series" :key="serie.id">
          <h3 class="title">{{serie.name}}</h3>
          <h4 class="original-title">{{serie.original_name}}</h4>
          <p>{{getFlag(serie.original_language)}}</p>
          <p class="vote">{{serie.vote_average}}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import { hasFlag } from 'country-flag-icons'


export default {
  name: 'App',
  components: {

  },
  
  data() {
    return {
      search: '',
      movies: [],
      series: [],
      baseURL: 'https://api.themoviedb.org/3/search/',
      flags: {
        en: require('./assets/img/en.png'),
        it: require('./assets/img/it.png'),
        es: require('./assets/img/es.png'),
        no: require('./assets/img/no.png'),
        pt: require('./assets/img/pt.png')
      }
    }
  },

  created() {

    this.getMovie
    this.getSeries

  },

  methods: {
    getFlag: function(unicode){
      if (unicode == 'en'){
        unicode = 'gb';
      }
      if (hasFlag(unicode.toUpperCase())) {
        return getUnicodeFlagIcon(unicode);
      } else {
        return unicode
      }
    },

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
  background-color: #141414;
  min-height: 100vh;
  padding: 20px 0;

  .container{
    color: white;
  }
}

.info-movie{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;

  .card-movie{
    border: 1px solid white;
    width: calc((100% / 5) - 10px);
    padding: 10px;

    .flag{
      width: 20px;
    }
  }

}
</style>
