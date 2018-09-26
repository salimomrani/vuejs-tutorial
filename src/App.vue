<template>
  <div class="row margin">
    <div class="container col-md-2 col-md-offset-5">
      <h1>Hello App!</h1>
      <p>
        <!-- use router-link component for navigation. -->
        <!-- specify the link by passing the `to` prop. -->
        <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
        <router-link :to="{name : 'Home'}">Go to home</router-link>
        <router-link to="/about">Go to about</router-link>
      </p>
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
  .margin {
    margin-top: 40px;
  }
</style>
