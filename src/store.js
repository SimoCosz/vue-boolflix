import Vue from 'vue'
import axios from 'axios'

const state = Vue.observable({
  search: '',
  movies: [],
  baseURI: 'https://api.themoviedb.org/3/search/',
})

export default state

export function getMovie(){
  axios.get(`${state.baseURI}movie`,{
  params: {
    api_key: '9857cfb37fc41b760e69c70f6d75b517',
    query: state.search,
  }
  })
  .then(res => {
    console.log(res.data)
    state.movies = res.data.results
  })
  .catch(error => {
    console.log(error.response)
  })

  axios.get(`${state.baseURI}tv`,{
    params: {
      api_key: '9857cfb37fc41b760e69c70f6d75b517',
      query: state.search,
    }
  })
  .then(res => {
    console.log(res.data)
    state.series = res.data.results
  })
  .catch(error => {
    console.log(error.response)
  })
  state.search= ''
}