<script setup>
import { createPinia } from 'pinia';
import { useCounterStore } from '../pinia/store';

const pinia = createPinia();
const myStore=useCounterStore();


console.log(pinia);
console.log(myStore);

</script>

<template>
<section>
    <button> Number </button>
    <button> Add </button>
    <button> Subtract </button>
</section>
</template>