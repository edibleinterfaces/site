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
			<AppIcon 
                :img-src="app.imgSrc" 
                v-for="app in apps"/>
        </div>
    </div>
</template>

<style>
    .app-list {
	  display: -webkit-box;
	  display: -ms-flexbox;
	  display: flex;
	  -ms-flex-wrap: wrap;
		  flex-wrap: wrap;
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
        data: function() {
            return {
                apps: [
                    { img: 'static/assets/img/bf.webp'},
                    { img: 'static/assets/img/ca.png'},
                ]
            }; 
        },
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
