<template>
<div>
  <SearchTitle/>
  <SubmitForm/>
  <ArticleIndex/>
</div>
</template>

<script>
import SearchTitle from '~/components/pages/SearchTitle.vue';
import SubmitForm from '~/components/pages/SubmitForm.vue';
import ArticleIndex from '~/components/pages/ArticleIndex.vue';

export default {
  components:{
    SearchTitle,
    SubmitForm,
    ArticleIndex
  },
  name: 'IndexPage'
}
</script>
