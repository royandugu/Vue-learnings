<script setup>
import { ref, watch } from 'vue';
const emit = defineEmits(['value-changed'])
const testValue = ref(0)

const changeTestValue = (value) => {
    testValue.value=value;
}

watch(testValue, (newValue) => {
    const event = new CustomEvent("custom-event",{detail:newValue})
    window.dispatchEvent(event);
})

</script>
<template>
    <section>
        <div class="container">
            <h5> Current image is : {{ testValue }}</h5>
            <button @click="changeTestValue()" id="change-image-btn" class="btn-cta"> Change to image one</button>
            <button @click="changeTestValue()" id="change-image-btn" class="btn-cta"> Change to image two</button>
            <button @click="changeTestValue()" id="change-image-btn" class="btn-cta"> Change to image three</button>
        </div>
    </section>
</template>