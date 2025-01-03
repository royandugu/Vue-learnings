<script setup>
const moveSliderLeft=()=>{
    const leftMoveEvent = new CustomEvent("move-left-event");
    if(document){
        document.dispatchEvent(leftMoveEvent);
    }
}
const moveSliderRight=()=>{
    const rightMoveEvent = new CustomEvent("move-right-event");
    if(document){
        document.dispatchEvent(rightMoveEvent);
    }
}
</script>

<template>
    <div class="container">
        <div class="anchor-wrapper">
            <button class="btn-one" @click="moveSliderLeft"> <p> Button one </p> </button>
            <button class="btn-two" @click="moveSliderRight"> <p> Button two </p> </button>
        </div>
    </div> 
</template>

<style>
    .anchor-wrapper{
        display: flex;
        gap:20px;
    }
    .btn-one,.btn-two{
        cursor:pointer;
    }
</style>