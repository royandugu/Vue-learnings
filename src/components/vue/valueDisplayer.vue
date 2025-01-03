<script setup>
import { inject } from 'vue';
const variableToShare = inject("variableToShare");
</script>
<template>
    <div>
        <p>Value is {{ variableToShare }}</p>
    </div>
</template>