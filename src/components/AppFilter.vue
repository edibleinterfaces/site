<template>
    <input class="app-filter" />
</template>

<style>
    .app-filter {
        height: 50px;
        width: 200px; 
        border: 0; 
        border-bottom: 2px solid aquamarine; 
        outline: none;
    }
    .app-filter:focus {
        outline: red;
    }
</style>

<script>
    export default {
        name: 'AppFilter',
        props: [],
        data: function() {
            return {}
        }
    }        
</script>
