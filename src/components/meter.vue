<template>
    <progress :value="value" :max="max"></progress>
</template>

<script>
export default {
    props: {
        value: Number,
        max: Number,
    }
}
</script>

<style lang="scss">
@import "bulma";

progress::-webkit-progress-value {
    background-image:
        -webkit-linear-gradient(left, rgb(145, 15, 145), rgb(241, 37, 71));
    border-radius: 5px; 
}
progress::-webkit-progress-bar {
    border-radius: 5px;
}
</style>
