<template>
    <div class="app-icon">
        <h1 class="app-icon-header">{{app}}</h1>
        <div class="app-icon-body"></div>
    </div>
</template>

<style>
    .app-icon {
        width: 50px;
        height: 50px;
        border: 1px solid black;
        border-radius: 5%;
    }
    .app-icon-header {
        font-size: 20%;
            text-align: center;
    }
    .app-icon-header,
    .app-icon-body {
        display: block;
        width: 100%;
    }
</style>

<script>
    export default {
        props: ['app'],
        name: 'AppIcon',
        data: function() {
            return {}
        }
    }        
</script>
