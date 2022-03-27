<template>
    <section style="background-color: #eee;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-7">

        <div class="card" style="border-radius: 15px;">
          <div class="card-body text-center">
            <div class="mt-3 mb-4">
              <img
                id="profile-img"
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                class="profile-img-card"
              />
            </div>
            <p class="text-muted"> Name: </p>
            <input type="text" v-model="currentUser.fullname" disabled>
            <div class="modal fade" id="nameChange" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                 <div class="modal-content">
                    <div class="modal-header">
                       <h5 class="modal-title" id="nameChangeLabel">Update your name below</h5>
                       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                      <div class="modal-body">
                          <input type="text" placeholder="Enter new name">

                      </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                       <button type="button" class="btn btn-primary">Update</button> 
                    </div>
                  </div>
              </div>
          </div>
            <p class="text-muted mb-4">Email address:</p>
            <input type="text" v-model="currentUser.email" disabled>
            <p class="text-muted mb-4"> Phone Number: </p>
            <input type="text" v-model="currentUser.phone_number" disabled><br><br>
            <p style="text-decoration:underline blue; color:blue; cursor:pointer" @click="n" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Update password</p>
            
            
            
            
            
            
            
            <button type="button" class="btn btn-primary btn-rounded btn-lg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Update details
              <div style="font-size: 12px">
                (or change password)
              </div>
            </button>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Profile Update</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary">Update</button> 
      </div>
    </div>
  </div>
</div>

           

          </div>
        </div>

      </div>
    </div>
  </div>
</section>



    
</template>

<script>

const baseURL = 'https://pizzaplanet-capstone.herokuapp.com/api/test/user'

export default {
  data() {
    putResult: null
  },
computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  methods: {
    formatResponse(res) {
      return JSON.stringify(res,null,2)
    },
    async putData() {
      const { put_fullname, put_email, put_phone_number, put_password } = this.$refs
      if (id) {
        const putData = {
          fullname: pu
        }
      }
    }
  },

}}




</script>






<style>
.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>