<template>
  <div class="card-movie">
    <figure class="poster">
      <img v-if="element.poster_path" :src="`http://image.tmdb.org/t/p/w500${element.poster_path}`" alt="">
      <img v-else src="https://www.ncenet.com/wp-content/uploads/2020/04/no-image-png-2.png" alt="">
    </figure>
    <div class="info-movie">
      <p class="title"><span>Titolo: </span> {{title}}</p>
      <p class="original-title"><span>Titolo originale: </span> {{originalTitle}}</p>
      <p class="language"><span>Lingua: </span> {{getFlag(element.original_language)}}</p>
      <div class="star-wrapper">
        <span>Voto: </span> 
        <p class="vote" :class="i<stars(element) ?  'star' : '' " v-for="(el, i) in 5" :key="i">
          <span v-if="i<stars(element)" > &starf;</span>
          <span v-else>&star;</span>
        </p>
      </div>
      <p class="overview"><span>Overview: </span> {{element.overview}}</p>
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

  computed: {
    title: function(){
      if (this.element.name !== undefined){
        return this.element.name
      } else {
        return this.element.title
      }
    },
    originalTitle: function(){
      if (this.element.original_name !== undefined){
        return this.element.original_name
      } else {
        return this.element.original_title
      }
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
    width: calc((100% / 5) - 5px);
    position: relative;
    overflow: auto;
    box-shadow: 0 0 3px white;

    .title{
      font-size: 15px;
    }

    .original-title{
      font-size: 12px;
    }

    &:hover .info-movie{
      display: block;
      position: absolute;
      color: white;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(black, 0.9);
      padding: 10px;
    }

    .info-movie{
      display: none;

      span{
        font-weight: 700;
      }
    }

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