<template>
  <div class="header container navbar"> 
    <div class="header-logo">
      <nuxt-link to="/">
        <h1 class="display-4">デモの投稿サイト</h1>
      </nuxt-link>
    </div>
    <ul class="header-list">
      <nuxt-link to="/post">
        <li class="header-item">投稿</li>
      </nuxt-link>
      <nuxt-link to="/login">
        <li class="header-item">ログイン</li>
      </nuxt-link>
      <nuxt-link to="/signup">
        <li class="header-item">新規登録</li>
      </nuxt-link>
    </ul>
  </div>
</template>