<template>
    <div>
        子组件计数器:{{$store.state.counter.total}}
    </div>
</template>

<script>
    export default {
        name: "counter"
    }
</script>

<style scoped>

</style>