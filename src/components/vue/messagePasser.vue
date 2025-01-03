<script setup>
import { ref, watch } from 'vue';

const testValue = ref(0)

const changeTestValue = () => {
    testValue.value++;
}

watch(testValue, (newValue) => {
    const event = new CustomEvent("custom-event",{detail:newValue})
    window.dispatchEvent(event);
})

</script>
<template>
    <section>
        <div class="container">
            <h5> Ref value is (the value in console is the message received from astro) : {{ testValue }}</h5>
            <button @click="changeTestValue" id="change-image-btn" class="btn-cta"> Change to image one</button>
        </div>
    </section>
</template>