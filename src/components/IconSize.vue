<template>
    <div class="icon-size">
        <div class="option full-size">
            <div class="row">
                <div class="pane"></div>
            </div>
                
        </div>
        <div class="option half-size">
            <div class="row">
                <div class="pane"></div>
                <div class="pane"></div>
            </div>
        </div>
        <div class="option quarter-size">
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
        height: 80px;
        width: calc(240px);
        background: whitesmoke;
        display: flex;
    }
    .option {
        display: grid;
        width: 33.3333333%;
        height: 100%;
        padding: 5px;
    }
    .pane {
        margin-left: 1px;
        margin-right: 1px;
        background: lightgray; 
    }
    .icon-size .row {
        display: inline-flex;
    }
    .icon-size > .full-size > .row,
    .icon-size > .full-size > .row > .pane {
        width: 100%;
        height: 100%;
    }
    .icon-size > .half-size > .row {
        width: 100%;
        height: 100%;
    }
    .icon-size > .half-size > .row > .pane {
        width: 100%;
        height: 100%;
    }
    .icon-size > .quarter-size > .row {
        width: 100%;
        height: 100%;
        padding: 1px;
    }
    .icon-size > .quarter-size > .row > .pane  {
        width: 50%;
        height: 100%;
    }
</style>

<script>
    export default {
        name: 'IconSize',
        props: ['full'],
        data: function() {
            return {
                selectionOptions : [
                    'full',
                    'half',
                    'quarter'
                ]
            }
        },
    }        
</script>
