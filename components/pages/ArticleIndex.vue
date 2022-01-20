<template>
  <div class="container py-4">
    <div>
      <label></label>
      <input type="text" v-model="title" @focus="setFlag">
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
  data: function() {
    return {
      title: '',
      content: '',
      findFlag: false
    } 
  },
  computed: {
    ...mapState(['articles']),
    searchTitle: function() {
      if(this.findFlag){
        let obj = [];
        let data = this.articles;
        data.forEach(element => {
          if(element.title.toLowerCase() == this.title.toLowerCase()){
            obj.push(elemet);
          }
        });
      return obj;
      } else {
        return this.articles;
      }
    }
  },
  methods: {
    find: function() {
      this.findFlag = true;
      console.log("AAAA");
    },
    setFlag: function() {
      if(this.findFlag){
        this.findFlag = false;
        this.title = '';
        console.log("BBBB")
      }
    }
  }
}
</script>