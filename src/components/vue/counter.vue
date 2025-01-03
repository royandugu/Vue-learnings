<script setup>
    import { ref } from 'vue';
    const count = ref(0);

    const incrementCount = () => {
        count.value++;
    }
</script>

<template>
    <section>
        <div class="container">
            <button @click="incrementCount" class="btn-cta"> I am clicked my value {{ count }}</button>
        </div>
    </section>
</template>
