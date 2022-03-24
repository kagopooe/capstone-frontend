<template>
<div id="nav">
 <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
    <a class="navbar-brand logo-nav" href="/"> 
        <img src="../assets/logo.png" alt="pw" width="30" height="24" class="d-inline-block -top">
            Pizza Planet
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav ms-auto ">
            <router-link to="/" class="nav-item nav-link">Home</router-link>
            <router-link to="/Menu" class="nav-item nav-link">Menu</router-link>
            <router-link to="/Order" class="nav-link">Order Now <span class="iconify" data-icon="charm:rocket"></span></router-link>
            <router-link to="/Contact" class="nav-link">Contact</router-link>
            <router-link to="/profile" class="nav-link" v-if="currentUser"><span class="iconify" data-icon="gg:profile"></span> {{ currentUser.fullname  }}</router-link>
            <router-link to="/Home" class="nav-link" v-if="currentUser" @click="logOut">Logout</router-link>
            <router-link to="/login" class="nav-link" v-if="!currentUser"> Login</router-link>
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
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_ADMIN');
      }
      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/');
      alert("Successfully logged out")
    }
  }

};
</script>