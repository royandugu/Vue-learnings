<script setup>
    import { useCounterStore } from '../pinia/store';
    const store = useCounterStore();
</script>
<template>
    <h5> This is where we call the store </h5>
</template>