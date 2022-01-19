<template>
  <div>
    <TheHeader/>
    <Nuxt />
    <TheFooter/>
  </div>
</template>

<script>
  import TheHeader from './TheHeader.vue'
  import TheFooter from './TheFooter.vue'
  
export default {
  components:{
    TheHeader,
    TheFooter
  }
}
</script>