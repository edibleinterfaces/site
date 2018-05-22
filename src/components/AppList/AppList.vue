<template>
    <div class="app-list">
        <a 
            :href="`https://${app.name}.edibleinterfaces.com`" 
            :style="{ 'background-image': 'url(' + app.src + ')' }"
            class="app-icon border"
            v-for="(app, index) in apps">
        </a>
    </div>
</template>
<style>
    .border {
        border: 20px solid white; 
    }
	.app-icon {
		height: 0;
		font-family: sans-serif;
		font-size: 4em;
		text-align: center;
		text-shadow: 4px 4px 4px black;
        background-size: cover;
	}
	.app-list {
		justify-content: left;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		flex-grow: 2;
	}

	@media (max-width: 400px) {
		.app-icon {
            flex-basis: calc(100%/3);
            padding-bottom: calc(100%/3) !important;
			margin: 0;
		}
        .border {
            border: 0px solid white; 
        }
    }
	@media (max-width: 700px) and (min-width:401px) {
		.app-icon {
            flex-basis: calc(100%/3);
            padding-bottom: calc(calc(100%/3) - 40px);
			margin: 0;
		}
	}
	@media (min-width: 701px) {
		.app-icon {
			flex-basis: 50%;
			padding-bottom: calc(50% - 40px);
		}
	}
	@media (min-width: 1100px) {
		.app-icon {
			flex-basis: calc(100%/3);
			padding-bottom: calc(100%/3 - 80px);
		}
        .border {
            border: 40px solid white; 
        }
	}
</style>
<script>
    import { IconSize, AppFilter, AppIcon } from './index';
    export default {
        data: function() {
            return {
                apps: [
                    { src: '/static/assets/img/ei_notask.svg', name: 'notask'},
                    { src: '/static/assets/img/ei_tempo.svg', name: 'tempo'},
                    { src: '/static/assets/img/ei_game.svg', name: 'gamelog'},
                    { src: '/static/assets/img/ei_readinglist.svg', name: 'reading-list'}
                ]
            };
        },
        name: 'AppList',
        components: { AppIcon, IconSize, AppFilter },
        computed: {
            iconSize() {
                return this.$store.getters.iconSize;
            }
        }
    }

</script>
