<template>
   <div id="form-sec">
      <div class="contact-form-wrapper d-flex justify-content-center">
        <form class="contact-form" @submit.prevent="submitForm">
            <h5 class="title">Contact us</h5>
            <p class="description">Feel free to contact us if you need any assistance, any help or another question.
              </p>
      <div>
            <input type="text" class="form-control rounded border-white mb-3 form-input" id="fullname" placeholder="Name" required name="name"/>
      </div>
      <div>
        <input type="email" id="email" class="form-control rounded border-white mb-3 form-input" placeholder="Email" required name="email">
      </div>
      <div>
        <textarea id="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required name="message"></textarea>
      </div>
      <div class="submit-button-wrapper">
        <input type="submit" value="Send">
      </div>
    </form>
  </div>
  </div>

</template>

<script>

import axios from 'axios'
import { warn } from '@vue/runtime-core'

export default {
  data(){
      return {
        form : {
          fullname: '',
          email: '',
          message: ''
        }
      }
       
  },
  // mounted() {
  //   axios.post('https://pizzaplanet-capstone.herokuapp.com/api/test/users')
  //     .then((response) => {
  //       this.form=response.data;
  //       console.warn(response.data)
  //     })



  // },
  methods: {
   submitForm() {
      fetch('https://pizzaplanet-capstone.herokuapp.com/api/test/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify ({
          fullname: this.fullname,
          email: this.email,
          message: this.message
        })
      }).then(function(response) {
        return response.text();
      }).then(function (text) {
        console.log(text);
      }) .then(alert('Form Successfully Submitted'))
      .catch (function (error) {
        console.error(error)
      })
    }


  },








}
 


</script>

<style>

.contact-form-wrapper {
  padding: 100px 0;
}

.contact-form {
  padding: 30px 40px;
  background-color: #ffffff;
  border-radius: 12px;
  max-width: 400px;
}

.contact-form textarea {
  resize: none;
}

.contact-form .form-input,
.form-text-area {
  background-color: #f0f4f5;
  height: 50px;
  padding-left: 16px;
}

.contact-form .form-text-area {
  background-color: #f0f4f5;
  height: auto;
  padding-left: 16px;
}

.contact-form .form-control::placeholder {
  color: #aeb4b9;
  font-weight: 500;
  opacity: 1;
}

.contact-form .form-control:-ms-input-placeholder {
  color: #aeb4b9;
  font-weight: 500;
}

.contact-form .form-control::-ms-input-placeholder {
  color: #aeb4b9;
  font-weight: 500;
}

.contact-form .form-control:focus {
  border-color: crimson;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.07), 0 0 8px crimson;
}

.contact-form .title {
  text-align: center;
  font-size: 24px;
  font-weight: 500;
}

.contact-form .description {
  color: #aeb4b9;
  font-size: 14px;
  text-align: center;
}

.contact-form .submit-button-wrapper {
  text-align: center;
}

.contact-form .submit-button-wrapper input {
  border: none;
  border-radius: 4px;
  background-color: crimson;
  color: white;
  text-transform: uppercase;
  padding: 10px 60px;
  font-weight: 500;
  letter-spacing: 2px;
}

.contact-form .submit-button-wrapper input:hover {
  background-color: crimson;
}


</style>