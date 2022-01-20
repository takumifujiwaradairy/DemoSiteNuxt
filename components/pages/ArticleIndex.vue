<template>
  <ul>
    <li v-for="(article,index) in articles" :key="index.id">
      <p>{{article.title}}</p>
      <p>{{article.content}}</p>
    </li>
  </ul>
</template>
<script>
import {mapState} from 'vuex';

export default {
  data: function(){
    return{
      title: '',
      content: '' 
    } 
  },
  computed:{
    ...mapState(['articles'])
  }
}
</script>