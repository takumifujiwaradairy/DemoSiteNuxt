<template>
  <div class="container py-4">
    <div>
      <label>検索</label>
      <input type="text" class="form-control" @focus="set_flg">
      <button @click="find">検索</button>
    </div>
    <ul>
      <li v-for="(article,index) in articles" :key="index.id" class="container">
        <p>{{article.title}}</p>
        <p>{{article.content}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapState} from 'vuex';

export default {
  data: () => {
    return{
      title: '',
      content: '',
      findFlag: false 
    } 
  },
  computed: {
    ...mapState(['articles']),
    display_articles: function(){
      if(this.findFlag){
        let obj = [];
        let data = this.articles;
        console.log("AAA");
        data.forEach(element =>{
          if(element.articles.toLowerCase() == this.articles.toLowerCase()){
            obj.push(element)
          }
        });
        return obj;
      } else {
        return this.articles;
      }
    }
  },
  methods: {
    find: function(){
      this.findFlag = true;
    },
    setFlag: function(){
      if(this.findFlag){
        this.findFlag = false;
        this.articles = '';
      }
    }
  }
}
</script>