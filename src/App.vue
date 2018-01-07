<template>
    <div id="app">
        <HeaderLogo 
            title="Edible Interfaces"
            subtitle="a suite of delicious progressive Web Apps" />
        <div class="controls-container">
            <AppFilter />
            <IconSize selected="full" />
        </div>
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
    .app-list {
        width: 80%;
        margin: 0 auto;
    }
    .controls-container {
        display: inline-flex;
        align-items: flex-end;
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
