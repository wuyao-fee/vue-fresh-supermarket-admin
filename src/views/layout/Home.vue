<template>
  <div class="home">
    <left-menu :key="key" />
    <div :class="{ 'main-app': true, 'extend-app': $store.state.collapsed }">
      <header-nav />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftMenu from './components/menu.vue';
import HeaderNav from './components/header.vue';

export default {
  data() {
    return {
      key: new Date().getTime(),
    };
  },
  watch: {
    $route() {
      this.key = new Date().getTime();
    },
  },
  components: {
    LeftMenu,
    HeaderNav,
  },
  methods: {},
};
</script>

<style lang="less">
@import url("~@/assets/css/home.less");
</style>
