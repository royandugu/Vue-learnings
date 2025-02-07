<script setup>
    import { useCounterStore } from '../pinia/store';

    const counterStore = useCounterStore();

    const increase=()=>{
        console.log("increase has been called")
    }
    const decrease=()=>{
        console.log("decrease has been called");
    }
</script>
<template>
    <section>
        <button @click="increase"> Increase </button>
        <button @click="decrease"> Decrease </button>
    </section>
</template>