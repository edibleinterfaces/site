<template>
    <div class="app-icon">
    </div>
</template>

<style>
    .app-icon {
        width: 50px;
        height: 50px;
        border: 1px solid black;
        border-radius: 5%;
    }
</style>

<script>
    export default {
        props: ['height','width'],
        name: 'AppIcon',
        data: function() {
            return {}
        }
    }        
</script>
