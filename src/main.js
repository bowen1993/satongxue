var Vue = require('../node_modules/vue/dist/vue.js')
var App = require('./app.vue')

new Vue({
    el:'#main',
    components:{
        app:App
    }
})