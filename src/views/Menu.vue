<template>
    

  
<h1>kjdsjkdsjkhlsdjkhlds</h1>
    
</template>

<script>
import MenuService from '../services/menu.service'

export default {
    name: 'MenuList',
    data() {
        return {
            products: [],
        };
    },
    created() {
        this.retrieveproducts();
    },

    methods: {
        retrieveproducts() {
            MenuService.getAll().then(response => {
                this.employees = response.data;
                    console.log(response.data)
            })
            .catch(e => {
                console.log(e);
            });
        },
    }
}
</script>