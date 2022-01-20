<template>
  <div class="submitform container">
    <label class="form-label">タイトル</label>
    <input type="text" name="title" class="form-control">
    <label class="form-label">記事</label>
    <textarea name="content" class="form-control" rows="3"></textarea>
    <div>
      <button @click="insert">save</button> 
      <button>find</button> 
    </div>
  </div>
</template>
    
<script>
export default {
 methods:{
   insert: function(){
     console.log("AAA")
     this.$store.commit('insert',{title: this.title});
     this.title = '';
    //  this.content = '';
    console.log("BBB")
   }
 } 
}
</script>