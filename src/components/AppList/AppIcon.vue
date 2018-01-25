<template>
    <img 
        v-bind:src="imgSrc"
        class="app-icon"
        v-bind:class="{
            full: iconSize === 'full',
            half: iconSize === 'half',
            quarter: iconSize === 'quarter'
            }">
    </img> 
</template>

<style>
	.app-icon {
	  width: 100%;
	  margin-top: 2%;
	}
	@media (min-width: 48rem) {
	  .app-icon {
		width: 49%;
	  }
	  .app-icon:nth-child(odd) {
		margin-right: 2%;
	  }
	}
	@media (min-width: 62rem) {
	  .app-icon {
		width: 23.5%;
	  }
	  .app-icon:not(:nth-child(4n)) {
		margin-right: 2%;
	  }
	}
	.app-icon:before {
	  content: "";
	  float: left;
	  padding-top: 100%;
	}
</style>

<script>
    export default {
        data: function() {
            return {
            }
        },
        props: ['appName','imgSrc'],
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
