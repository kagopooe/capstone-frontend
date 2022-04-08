<template>
   <section class="ui two column centered grid">
      <div class="column">
         <form class="ui segment large form">
            <div class="field">
               <div class="ui right icon input large">
                  <input
                     type="text"
                     placeholder="Enter your address"
                     v-model="address"
                     ref="autocomplete"
                     />
                     <button class="ui icon button" @click="addressHandle">
  <i class="arrow alternate circle right outline icon"></i>
</button>
                  
               </div>
            </div>
         </form>
      </div>
   </section>
</template>

<script>
   export default {
     data() {
       return {
         address: "",
       };
     },
     computed: {
      currentUser() {
      return this.$store.state.auth.user;
    }
     },
     created () {
        if (!this.currentUser) {
           alert("Please sign-in to make an order")
            this.$router.push("/login");
        }
     },
     methods: {
         addressHandle() {
            if (this.address.length <= 10) {
               alert("Please enter a valid address")
               return false
            } else {
             alert(`Your current address - ${this.address} was successfully stored. Press ok to continue with your order!`)
             this.$router.push("/Menu");
         }}
     }
   };
</script>

<style>
section {
   height: 100vh;
}
</style>