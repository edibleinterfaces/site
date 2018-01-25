<template>
    <div class="logo-container bg-banana">
        <h1>{{title}}</h1>
        <h2>{{subtitle}}</h2>
    </div>
</template>

<style>
    .logo-container {
        margin-bottom: 20px;
        width: 100%;
        text-align: left;
            padding: 20px;
    }
    .bg-banana {
            border-bottom: 2px solid #ffeb3b;
    }
    .logo-container h1 {
        font-weight: 100;
    }
    .logo-container h2 {
        font-size: 1.7em;
        font-weight: 100;
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
