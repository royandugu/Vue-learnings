<script setup>
    import { ref, watch } from 'vue';
    const email = ref(""); 
    const emailInput = ref("")

    const submitForm=(e)=>{
        e.preventDefault();
        if(email.value.trim()===""){
            emailInput.value.classList.add("error")
        }
    }

    watch(email,(newValue)=>{
        if(newValue.trim()!==""){
            emailInput.value.classList.remove("error");
        }
    })

    const emailEntered=(e)=>{
        email.value=e.target.value;
    }

</script>

<template>
    <form @submit="submitForm">
        <input ref="emailInput" type="text" placeholder="Your email" @change="emailEntered"/>
        <button type="submit" class="btn-cta"> Submit </button>
    </form>
</template>

<style>
    input{
        padding:12px;
        margin-right:12px;
    }
    input.error{
        border:1px solid red;
    }
</style>