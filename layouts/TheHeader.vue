<template>
  <div class="header container"> 
    <div class="header-logo">
      <nuxt-link to="/">
        <h1>デモの投稿サイト</h1>
      </nuxt-link>
    </div>
    <ul class="header-list">
      <nuxt-link to="/post">
        <li>投稿</li>
      </nuxt-link>
      <nuxt-link to="/login">
      <li>ログイン</li>
      </nuxt-link>
      <nuxt-link to="/signup">
      <li>新規登録</li>
      </nuxt-link>
    </ul>
  </div>
</template>