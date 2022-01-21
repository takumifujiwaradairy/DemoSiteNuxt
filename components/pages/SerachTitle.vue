<template>
  <div>
    <label for="">検索</label>
    <input type="text" v-model="searchWord">
    <button @click.prevent="search">検索</button>
  </div>
</template>

<script>
export default {
  data() {
    return  {
    }  
  },
  methods: {
    search: function() {
      this.$store.commit('search', this.searchWord)
    }
  }
}
</script>