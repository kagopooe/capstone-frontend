<template>
  <div class="content-home">
    
  </div>
</template>

<script>
import UserService from "../services/user.service";

export default {
  name: "Home",
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>

<style s>
.content-home {
 
  background-image: url("https://3.bp.blogspot.com/-SOdRjw6o8bk/Wc5M4xtgCpI/AAAAAAAAY5A/OoLXIrGP2yEuTE7MPD_33UwQDPo05mF7ACLcBGAs/s1600/pizza-planet-wood-sign.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}


</style>
