<template>
    <div id="app">
        <HeaderLogo title="Edible Interfaces" subtitle="a suite of delicious progressive Web Apps" />
        <AppList />
    </div>
</template>

<style>
html, body {
    height: 100%;
    width: 100%;
}
html, body, body * {
    box-sizing: border-box;
    flex-wrap: wrap;
}
</style>
<script>

    import HeaderLogo from './components/HeaderLogo';
    import { AppList } from './components/AppList';

    export default {
        data: function() {
            return {
                apps: [
                    { imgSrc: '/static/assets/img/1.png'},
                    { imgSrc: '/static/assets/img/2.png'},
                    { imgSrc: '/static/assets/img/3.png'},
                    { imgSrc: '/static/assets/img/4.png'},
                    { imgSrc: '/static/assets/img/5.png'},
                    { imgSrc: '/static/assets/img/6.png'},
                    { imgSrc: '/static/assets/img/7.png'},
                    { imgSrc: '/static/assets/img/8.png'}
                ]
            };
        },
        name: 'app',
        components: {
            HeaderLogo,
            AppList
        },
        computed: {
            iconSize() {
                return this.$store.getters.iconSize;
            }
        }
    }

</script>
