<script setup>
    import { ref,provide } from 'vue';
    import ValueDisplayer from './valueDisplayer.vue';
    const variableToShare = ref(1);
    provide('variableToShare',variableToShare);
    const increaseValue = () => {
        variableToShare.value++;
    }
</script>
<template>
    <button class="btn-cta" @click="increaseValue"> Increase value </button>
    <ValueDisplayer/>
</template>
<style></style>