<template>
    <div class="content">
        <h1 class="text-center"> Cart </h1>
        <p v-if="cart.length <=0">Cart is Empty</p>
        <div v-for="(c, index) of cart" :key="c._id">
        <p>{{ c.title }} - R {{ c.price }}</p>
        <img :src="c.img" />
        <button @click="removeFromCart(index)">remove from cart</button>
      </div>
      <h5> Total: R {{ totalPrice }}</h5>
      <div class='bottom-btns'>
      <button class="ui red button" @click="clearCart">Clear cart</button>
      <button class="ui green button" v-if="cart.length >= 1" @click="checkout">Checkout</button>
      </div>
    </div>

    
</template>

<style scoped>
.content {
  height: 250vh;
}
.bottom-btns {
  padding-bottom: 25px;
}
</style>



<script>
  export default {
    name: "Cart",
    data() {
      return {
        cart: [],
      };
    },
    computed : {
        totalPrice() {
            let total = 0;

            total += this.cart.reduce((left,cur) => left + cur.price, 0);
            return total;
        }
    },
    methods: {
        removeFromCart(itemId) {
        const cartItems = JSON.parse(localStorage.getItem("cart"));
        // const index = cartItems.findIndex(({ _id }) => _id === itemId);
        // console.log(itemId);
        cartItems.splice(itemId, 1);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        this.cart = JSON.parse(localStorage.getItem("cart"));
      },
      clearCart() {
        localStorage.cart = []
        this.cart = []
      },
      getCart() {
        if (!localStorage.getItem("cart")) {
          localStorage.setItem("cart", JSON.stringify([]));
        }
        this.cart = JSON.parse(localStorage.getItem("cart"));
      },
      checkout() {
        
        setTimeout(() => {
        alert('Order received. Order will be delivered to your doorstep within 30 - 60 minutes')
        localStorage.cart = []
        this.$router.push("/Home");
        }, 2500)
      },
    },
    beforeMount() {
      this.getCart();
    },
  };
  </script>