<template>
  <div>
    <label for="">検索</label>
    <input type="text" v-model="serachTitle">
    <button @click="find">検索</button>
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
      console.log("AAAA");
    },
    setFlag: function() {
      if(this.findFlag){
        this.findFlag = false;
        this.serachTitle = '';
        console.log("BBBB")
      }
    }
  }
}
</script>