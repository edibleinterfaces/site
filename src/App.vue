<template>
    <div id="app">
        <HeaderLogo 
            title="Edible Interfaces | a suite of delicious progressive Web Apps">
        </HeaderLogo>
        <div class="controls-container">
            <AppFilter></AppFilter>
            <IconSize selected="full"></IconSize>
        </div>
        <AppIcon app="no-task" />
        <AppIcon app="no-task" />
        <AppIcon app="no-task" />
        <AppIcon app="no-task" />
        <AppIcon app="no-task" />
        <AppIcon app="no-task" />
        <AppIcon app="no-task" />
    </div>
</template>

<style>
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
        }
    }

</script>
