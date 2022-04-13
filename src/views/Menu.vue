<template>
    <div>
  <h1 class="header">Menu</h1>
           <!-- container -->
           <div class="container mb-5 mt-5" v-for="item in list" v-bind:key="item._id">
               <div class="row">
                   <!-- card -->
                   <div class="col">
                       <div class="card mt-3">
                           <div class="product align-items-center p-2 text-center">
                               <img :src="item.img" alt="" class="rounded" width="335">
                               <h5> {{ item.title }} </h5>
                              <!-- card info -->
                               <div class="mt-3 info">
                                   <span class="text1 d-block"> {{ item.category}} </span>
                                   <span class="text1"> {{item.description}}</span>
                                </div>
                                <div class="cost mt-3 text-dark">
                                    <span> R {{ item.price }}</span>
                                </div>
                                <!-- button for cards -->
                                <div class="p-3 shoe text-center text-white mt-3 cursor" @click="removeFromCart(item._id)" v-if="isInCart(item._id)">
                                    <span> Remove from cart</span>
                                </div>
                                <div class="p-3 shoe text-center text-white mt-3 cursor" @click="addToCart(item._id)" v-else>
                                    <span>Add to cart</span>
                                </div>
                           </div>
                       </div>
                    </div>
                    
                </div>
            </div>



    
    
    </div> 

</template>

<style>
.header {
    text-align: center;
}

.container {
    margin-top: 110px !important;
}

.card {
    border: none;
    outline:none;
    background-color: #fff;
    border-radius: 20px;
}

.card:hover {
    transform: translateY(-15px);
    transition: transform .3s;
    
}

.text1 {
    font-size: 13px;
    color: #cbcbcb
}

.info {
    line-height: 17px;
}

.cost span {
    color: #fb3531;
    font-weight: bold;
    font-size: 20px;
}

.shoe {
    background: #dc3545 ;
}

.cursor {
    cursor:pointer;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}

.cartBtn {
    background-color: #dc3545;

}
</style>













<script>
import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
    name: 'Menu',
    data() {
        return {
            list: null,
            cart: [],
        }
    },
    mounted() {
        axios.get('https://pizzaplanet-capstone.herokuapp.com/api/test/products')
            .then((response) => {
                this.list=response.data;
                console.warn(response.data)
            })
    },
    computed: {
      currentUser() {
      return this.$store.state.auth.user;
    }
     },
    methods: {
      isInCart(itemId) {
        if (!localStorage.getItem("cart")) {
          localStorage.setItem("cart", JSON.stringify([]));
        }
        const cartItem = this.cart.find(({ _id }) => _id === itemId);
        return Boolean(cartItem);
      },
      addToCart(itemId) {
        const item = this.list.find(({ _id }) => _id === itemId);
        if (!localStorage.getItem("cart")) {
          localStorage.setItem("cart", JSON.stringify([]));
        }
        if(!this.currentUser) {
            alert("Please log-in to begin making an order")
            this.$router.push("/login");
        }
        const cartItems = JSON.parse(localStorage.getItem("cart"));
        cartItems.push(item);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        this.cart = JSON.parse(localStorage.getItem("cart"));
      },
      removeFromCart(itemId) {
        const cartItems = JSON.parse(localStorage.getItem("cart"));
        const index = cartItems.findIndex(({ _id }) => _id === itemId);
        cartItems.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        this.cart = JSON.parse(localStorage.getItem("cart"));
      },

    },
  
}


</script>