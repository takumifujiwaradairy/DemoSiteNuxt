<template>
  <div class="submitform container">
    <label class="form-label">タイトル</label>
    <input type="text" name="title" class="form-control" v-model="title">
    <label class="form-label">記事</label>
    <textarea name="content" class="form-control" rows="3" v-model="content"></textarea>
    <div>
      <button @click="insert">save</button> 
    </div>
  </div>
</template>
    
<script>
export default {
  return { 
    methods:{
      insert: function(){
        let obj =  {title: this.title, content: this.content}
        this.$store.commit('insert',obj)
        this.title = '';
        this.content = '';
      }
    }
  }
}
</script>
