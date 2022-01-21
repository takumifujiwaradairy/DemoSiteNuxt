<template>
  <div>
    <SubmitForm/>
    <ArticleIndex/>
  </div>
</template>

<script>
import SubmitForm from '~/components/pages/SubmitForm.vue';
import ArticleIndex from '~/components/pages/ArticleIndex.vue';

export default {
  components:{
    SubmitForm,
    ArticleIndex
  },
  name: 'IndexPage'
}
</script>
