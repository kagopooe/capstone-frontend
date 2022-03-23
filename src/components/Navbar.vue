<template>
<div id="nav">
 <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
    <a class="navbar-brand logo-nav" href="#">
        <img src="../assets/logo.png" alt="pw" width="30" height="24" class="d-inline-block -top">
            Pizza Planet
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
        <!-- replacing the ul with a div tag -->
        <!-- <ul class="navbar-nav me-auto mb-2 mb-lg-0">   -->
        <div class="navbar-nav ms-auto ">
            <!-- on each of the li tag , there is a class named *nav item*, copy it and place it on the a tag & delete the li -->
            <!-- <a class=" nav-item nav-link active" aria-current="page" href="#">Home</a> -->
            <!-- replace the a tag with the router link -->
            <router-link to="/" class="nav-item nav-link">Home</router-link>
            <router-link to="/About" class="nav-item nav-link">Menu</router-link>
            <router-link to="/Careers" class="nav-link">Order Now <span class="iconify" data-icon="charm:rocket"></span></router-link>
            <router-link to="/Contact" class="nav-link">Contact</router-link>
        </div>
        </div>
    </div>
</nav>
 </div>
  <router-view/>


</template>
<style>
#nav {
  padding: 30px;
  text-align: center;
  width: 100%;
    /* font-size: 3vh; */
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: whitesmoke;
  background: crimson;
  border-radius: .5rem;
}

.navbar-brand {
    font-size: 3vh;
}
</style>




<script>
export default {
  data() {
    return {
      
    };
  },
};
</script>