<template>
    <div class="logo-container">
        <h1>{{title}}</h1>
    </div>

</template>

<style>
    .logo-container {
        width: 100%;
        text-align: left;
    }
</style>

<script>
    export default {
        name: 'HeaderLogo',
        props: ['title'],
        data: function() {
            return {}
        }
    }        
</script>
