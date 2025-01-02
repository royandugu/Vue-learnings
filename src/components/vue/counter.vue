<script setup>
    import { ref } from 'vue';
    const count = ref(0);

    const incrementCount = () => {
        count.value++;
    }
</script>

<template>
    <button @click="incrementCount"> I am clicked my value {{ count }}</button>
</template>
