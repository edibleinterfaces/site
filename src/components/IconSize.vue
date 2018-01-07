<template>
    <div class="icon-size">
        <div 
            class="option full"
            v-bind:class="{selected: iconSize === 'full'}"
            @click="setIconSize('full')">
            <div class="row">
                <div class="pane"></div>
            </div>
        </div>
        <div 
            class="option half"
            v-bind:class="{selected: iconSize === 'half'}"
            @click="setIconSize('half')">
            <div class="row">
                <div class="pane"></div>
                <div class="pane"></div>
            </div>
        </div>
        <div 
            class="option quarter"
            v-bind:class="{selected: iconSize === 'quarter'}"
            @click="setIconSize('quarter')">
            <div class="row">
                <div class="pane"></div>
                <div class="pane"></div>
            </div>
            <div class="row">
                <div class="pane"></div>
                <div class="pane"></div>
            </div>
        </div>
    </div>
</template>

<style>
    .icon-size {
        height: 40px;
        width: 120px;
        background: whitesmoke;
        display: flex;
    }
    .option {
        border: 2px solid transparent;
        display: grid;
        width: 33.3333333%;
        height: 100%;
        padding: 5px;
    }
    .option.selected {
        border: 2px solid rgba(127,255,212,0.5);
    }
    .option:hover {
        border: 2px solid rgba(127,255,212,1);
    }
    .pane {
        margin-left: 1px;
        margin-right: 1px;
        background: lightgray; 
    }
    .icon-size .row {
        display: inline-flex;
    }
    .icon-size > .full > .row,
    .icon-size > .full > .row > .pane {
        width: 100%;
        height: 100%;
    }
    .icon-size > .half > .row {
        width: 100%;
        height: 100%;
    }
    .icon-size > .half > .row > .pane {
        width: 100%;
        height: 100%;
    }
    .icon-size > .quarter > .row {
        width: 100%;
        height: 100%;
        padding: 1px;
    }
    .icon-size > .quarter > .row > .pane  {
        width: 50%;
        height: 100%;
    }
</style>

<script>
    export default {
        name: 'IconSize',
        data: function() {
            return {};
        },
        methods: {
            setIconSize(size) {
                this.$store.dispatch('updateIconSize', size);
            }
        },
        mounted: function() {
            //console.log(this);
        },
        computed: {
            iconSize() {
               return this.$store.getters.iconSize;
            }
        }
    }
</script>
