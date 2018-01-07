<template>
    <div id="app">
        <HeaderLogo 
            title="Edible Interfaces"
            subtitle="a suite of delicious progressive Web Apps" />
        <div class="controls-container">
            <AppFilter />
            <IconSize selected="full" />
        </div>
        <div class="app-list-menu"></div>
        <div class="app-list">
            <AppIcon app-name="no-task" />
            <AppIcon app-name="no-task" />
            <AppIcon app-name="no-task" />
            <AppIcon app-name="no-task" />
            <AppIcon app-name="no-task" />
            <AppIcon app-name="no-task" />
            <AppIcon app-name="no-task" />
        </div>
    </div>
</template>

<style>
    .app-list,
    .app-list-menu {
        width: 49%;
        display:inline-block;
    }
    .app-list-menu {
        height: 400px;
            widt:49%;
        background: lightyellow;
    }
    .app-list {
        padding: 50px;
        margin: 0 auto;
        text-align: center;
    }
    .controls-container {
        width: 100%;
    }

</style>
<script>

    import AppIcon from './components/AppIcon';
    import IconSize from './components/IconSize';
    import HeaderLogo from './components/HeaderLogo';
    import AppFilter from './components/AppFilter';

    export default {
        name: 'app',
        components: {
            HeaderLogo,
            AppIcon,
            IconSize,
            AppFilter
        },
        computed: {
            iconSize() {
                return this.$store.getters.iconSize;
            }
        }
    }

</script>
