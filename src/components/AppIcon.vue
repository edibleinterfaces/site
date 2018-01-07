<template>
    <div 
        class="app-icon"
        v-bind:class="{
            full: iconSize === 'full',
            half: iconSize === 'half',
            quarter: iconSize === 'quarter'
        }"> 
        <div class="app-icon-body">
            <h1 class="app-icon-header">{{appName}}</h1>
        </div>
    </div>
</template>

<style>
    .app-icon:nth-child(odd) {
        background: whitesmoke;
    }
    .app-icon:nth-child(even) {
        background: limegreen;
    }
    .app-icon {
        margin: 0;
        padding: 0;
        display: inline-flex;
        height: 0;
    }
    .app-icon-header {
    }
    .app-icon-body {
    }
    .app-icon-header,
    .app-icon-body {
    }
    .app-icon.full {
        width: 100%;
        padding-bottom: 100%;
    }
    .app-icon.half {
        width: 50%;
        padding-bottom: 50%;
    }
    .app-icon.quarter {
        width: 25%;
        padding-bottom: 25%;
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
