<script setup>
    import { useCounterStore } from '../pinia/store';
    
    const store=useCounterStore();

    const increase=()=>{
        

        console.log("increase has been called");
    }
</script>

<template>
<section>
    <button> Number </button>
    <button @click="increase"> Add </button>
    <button> Subtract </button>
    <div>
    </div>
</section>
</template>
<style>
</style>