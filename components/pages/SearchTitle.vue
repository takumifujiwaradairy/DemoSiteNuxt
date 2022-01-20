<template>
 <div>
    <input type="text" @focus="setFlg">
    <button @click="find">find</button> 
  </div> 
</template>

<script>
export default {
  data: function(){
    return{
      find_flag: false 
    } 
  },
  computed:{
    searchTitle: function(){
      // if(this.find_flag){
        // let obj = [];
        // let data = this.articles;
        // console.log(this.articles.title);
      // }
    }
  },
  methods:{
    find: function(){
      this.find_flag = true;
    },
    setFlag: function(){
      this.find_flag = true;
    }
  }
}
</script>