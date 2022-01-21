<template>
  <div>
    <label for="">検索</label>
    <input type="text" v-model="searchWord" @focus="setFlag">
    <button @click.prevent="search">検索</button>
    <p>{{ serachTitle }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return  {
      serachTitle: '',
      findFlag: false
    }  
  },
  methods: {
    find: function() {
      this.findFlag = true;
    },
    search: function() {
      this.$store.commit('search', this.searchWord)
    },
    setFlag: function() {
      if(this.findFlag){
        this.findFlag = false;
        this.searchTitle = '';
      }
    }
  }
}
</script>