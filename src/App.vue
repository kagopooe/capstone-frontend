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
  background-image: url("https://3.bp.blogspot.com/-SOdRjw6o8bk/Wc5M4xtgCpI/AAAAAAAAY5A/OoLXIrGP2yEuTE7MPD_33UwQDPo05mF7ACLcBGAs/s1600/pizza-planet-wood-sign.jpg");
  background-repeat: no-repeat;
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
