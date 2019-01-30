<template>
  <div class="logo-wrapper">
    <router-link :to="{name:'home'}">
      <img src="@/assets/logo2.jpg" alt>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.logo-wrapper {
  width: 80px;
  height: 80px; 

  img {
    width: 80px;
  }
}
</style>
