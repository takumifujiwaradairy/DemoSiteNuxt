<template>
  <div class="container py-4">
    <SerachTitle/>
    <ul>
      <li v-for="(article,index) in display" :key="index.id" class="container">
        <p>{{article.title}}</p>
        <p>{{article.content}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import SerachTitle from './SerachTitle.vue';

export default { 
  data: function() {
    return {
      title: '',
      content: '',
    } 
  },
  components: {
    SerachTitle
  },
  computed: {
    ...mapState(['articles', 'selected']),
    display: function() {
      console.log(this.selected)
      if(this.selected.length === 0){
        return this.articles;
      } else {
        return this.selected;
      }
    }
  },
  methods:{
  }
}
</script>