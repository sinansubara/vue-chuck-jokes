<template>
  <div id="app">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header.vue';
import Content from './components/content.vue';
import Footer from './components/footer.vue';


export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer
  },
  mounted() {
    // eslint-disable-next-line
    M.AutoInit();
  },
  created() {
    this.$store.dispatch('getCategories');
  }
}
</script>

<style>
#app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  
</style>
