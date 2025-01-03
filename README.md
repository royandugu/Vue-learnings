## Integrating VUE js in astro. 
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
In this code when client is inside script to access the value we must do client.value but when inside template we cam simply do client. For example:
<button @click="count++"> </button>
and

const incrementCount=()=>{
    count.value ++
}

## When to use Vue and when to use Astro
Astro generally static site generation ko laagi ho. So therefore contents that don't require frequent changes can be done using Astro, for example the header, footer, layout. Whereas some components that need state management, need to be dynamic and all that, we can go with Vue. Remember: Astro vitra Vue auxa Vue vitra Astro audaina.