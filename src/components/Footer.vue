<template>
        <footer class="footer">
            <p class="company-name">
                &copy; 2022, ALL Rights Reserved
            </p>
        
    </footer>


</template>

<style>
.footer{
    bottom: 0;
    left: 0;
    width: 100%;
    background: crimson;
    text-align: center;
    color: #f4f4f4;
}


.company-name{
    font-size: 1.6rem;
    margin-top: 0.5rem;
}

@media (max-width: 500px){
    html{
        font-size: 50%;
    }
}    

@media(min-width: 501px) and (max-width: 768px){
    html{
    font-size: 50%;
    }
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