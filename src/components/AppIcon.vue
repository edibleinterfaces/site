<template>
    <div 
        class="app-icon"
        v-bind:class="{
            full: iconSize === 'full',
            half: iconSize === 'half',
            quarter: iconSize === 'quarter'
        }"> 
        <h1 class="app-icon-header">{{appName}}</h1>
        <div class="app-icon-body"></div>
    </div>
</template>

<style>
    .app-icon {
        display: inline-block;
        border: 1px solid black;
        margin-left: -4px;
            margin: 15px;
        height: 200px;
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
    .app-icon.full {
        width: 100%;
    }
    .app-icon.half {
        width: 50%;
    }
    .app-icon.quarter {
        width: 25%;
    }
</style>

<script>
    export default {
        data: function() {
            return {
            }
        },
        props: ['appName'],
        name: 'AppIcon',
        computed: {
            iconSize() {
                return this.$store.getters.iconSize;
            }
        },
        data: function() {
            return {}
        }
    }        
</script>
