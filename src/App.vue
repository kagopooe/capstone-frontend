<template>
  <div id="app">
    
    <Navbar></Navbar>
    <div class="content">



    <div class="fixed-bottom" v-if="currentUser">
        <button class="circular ui icon red button right-floated" @click="$router.push('/cart')">
            <i class="shopping cart icon"></i>
        </button>
    </div>
      </div>
    
    
    <Footer></Footer>
  </div>

</template>

<style>
  .content {
  width: 100%;
  
}



</style>

<script>
import Navbar from "./components/Navbar.vue"
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar: Navbar,
    Footer: Footer
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  }
}



</script>
