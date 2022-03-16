<template>
  <div class="card-movie">
    <figure>
      <img :src="`http://image.tmdb.org/t/p/w342${element.poster_path}`" alt="">
    </figure>
    <h3 class="title">{{element.title}}</h3>
    <p class="original-title">{{element.original_title}}</p>
    <p>{{getFlag(element.original_language)}}</p>
    <div class="star-wrapper">
      <p class="vote" :class="i<stars(element) ?  'star' : '' " v-for="(el, i) in 5" :key="i">
        <span v-if="i<stars(element)" >&starf;</span>
        <span v-else>&star;</span>
      </p>
    </div>
  </div>
</template>

<script>
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import { hasFlag } from 'country-flag-icons'


export default {
  props: {
    element: {
      type: Object,
      required: true
    }
  },

  methods: {

    stars: function (element){
      return Math.ceil((element.vote_average / 2))
    },
    
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

  },
}
</script>

<style lang="scss" scoped>
  .card-movie{
    border: 1px solid white;
    width: calc((100% / 5) - 10px);
    padding: 10px;

    .flag{
      width: 20px;
    }

    .star-wrapper{
      display: flex;
    
      .star{
        color: orange;
      }
    }

  }
</style>