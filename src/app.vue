<template>
    <app-header title="Satongxue" v-bind:tools="tools"></app-header>
    <div id="container">
    </div>
</template>

<script>
    import AppHeader from "./components/header.vue"
    export default {
        data(){
            return {
                tools:[
                    {text:'Sign in', handle_click:this.handle_login},
                    {text:'Sign up', handle_click:this.handle_signup}
                ]
            }
        },
        methods(){
            return{
                handle_login:function(){
                    console.log('sign in');
                },
                handle_signup:function(){
                    console.log('sign up');
                }
            }
        },
        components:{
            AppHeader
        }
    }
</script>