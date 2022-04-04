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
                  <i class="arrow alternate circle right outline icon" @click="storeLocation"></i>
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
     methods: {

     }
   };
</script>