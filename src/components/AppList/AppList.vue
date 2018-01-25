<template>
    <div class="app-list">
        <div 
            class="app-icon" 
            v-for="(icon, index) in apps" 
            :style="{ 'background-image': 'url(' + icon.src + ')' }">
        </div>
    </div>
</template>
<style>
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
		height: 100vh;
		flex-wrap: wrap;
		flex-grow: 2;
	}

	@media (max-width: 700px) {
		.app-icon {
			margin: 0;
			flex-basis: 100%;
			padding-bottom: 100%;
		}
	}
	@media (min-width: 701px) {
		.app-icon {
			flex-basis: 50%;
			padding-bottom: 50%;
		}
	}
	@media (min-width: 1100px) {
		.app-icon {
			flex-basis: calc(100%/3);
			padding-bottom: calc(100%/3 - 40px);
		}
	}
</style>
<script>
    import { IconSize, AppFilter, AppIcon } from './index';
    export default {
        data: function() {
            return {
                apps: [
                    { src: '/static/assets/img/1.png'},
                    { src: '/static/assets/img/2.png'},
                    { src: '/static/assets/img/3.png'},
                    { src: '/static/assets/img/4.png'},
                    { src: '/static/assets/img/5.png'},
                    { src: '/static/assets/img/6.png'},
                    { src: '/static/assets/img/7.png'},
                    { src: '/static/assets/img/8.png'}
                ]
            };
        },
        name: 'AppList',
        components: { AppIcon, IconSize, AppFilter },
        computed: {
            bgImg(index) {
                console.log(arguments);
                return this.apps[index].src;
            },
            iconSize() {
                return this.$store.getters.iconSize;
            }
        }
    }

</script>
