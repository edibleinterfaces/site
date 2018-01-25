<template>
    <div class="logo-container">
        <h1>{{title}}</h1>
        <h2>{{subtitle}}</h2>
    </div>
</template>

<style>
    .logo-container {
        width: 100%;
        text-align: left;
        border: 20px solid white;
    }
</style>

<script>
    export default {
        name: 'HeaderLogo',
        props: ['title','subtitle'],
        data: function() {
            return {}
        }
    }        
</script>
