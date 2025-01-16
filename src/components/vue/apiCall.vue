<script setup>
import { ref } from 'vue';

const isLoading = ref(true);
const mappedItems = ref([]);

const fetchData = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon");
    const finalData = await data.json();
    if (finalData && finalData.results) {
        mappedItems.value = finalData.results.map((data) => {
            return data;
        });
        isLoading.value = false;
    }
}
fetchData();
</script>

<template>
    <section class="p-list">
        <div class="container">
            <div v-if="isLoading"> Loading </div>
            <div v-else>
                <div v-for="item in mappedItems">
                    <p> {{ item.name }} </p>
                </div>
            </div>
        </div>
    </section>
</template>