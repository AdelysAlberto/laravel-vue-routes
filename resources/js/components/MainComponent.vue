<template>
    <div class="container">
        <navigation></navigation>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
