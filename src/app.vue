<style scoped>
div#app{
    display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 100%;
}
div#container{
    width: 100%;
    height:100%; 
    flex: 1 1 auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px; 
}
</style>

<template>
    <div id="app">
    <app-header title="Satongxue" v-bind:tools="tools"></app-header>
    <div id="container">
        <login-box></login-box>
    </div>
    </div>
</template>

<script>
    import AppHeader from "./components/header.vue"
    import LoginBox from "./components/loginbox.vue"
    import AppFooter from "./components/footer.vue"
    export default {
        data(){
            return {
                tools:[
                    {text:'Sign in', handle_click:this.handle_login},
                    {text:'Sign up', handle_click:this.handle_signup}
                ],
                footers:[
                    {title:"1",subs:[{is_link:false,text:"Hello"},{is_link:false,text:"Hello"},{is_link:false,text:"Hello"}]},
                    {title:"2",subs:[{is_link:true,link:"google.com",text:"Hello"},{is_link:false,text:"Hello"}]}
                ],
                isSignup:false,
                footer_has_img:true
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
            AppHeader,
            LoginBox,
            AppFooter
        }
    }
</script>