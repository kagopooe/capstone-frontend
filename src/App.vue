<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="content">




      </div>
    
    
    <Footer></Footer>
  </div>

</template>

<style>
  .content {
  height: 110vh;
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
  }
}



</script>
