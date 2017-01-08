<style scoped>
.login-box{
    width:60%;
    flex: 1 0 auto;
    display:flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
}

.login-box .title-area{
    flex:1 0 auto;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width:50%;
}

.login-box .title-area .title-text{
    color:#fff;
    font-weight: lighter;
}

.login-box .title-area .title-img{
    width: 150px;
}

.login-box .input-area{
    flex: 2 0 auto;
    width:40%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
}

.login-box .input-area input.input-login{
    height:2.3em;
    width:100%;
    background-color: #eee;
    color:#000;
	box-shadow: none;
	font-size: 1.5em;
	border-radius: 0px;
	border-left: 0px;
	border-right: 0px;
	border-top: 0px;
	border-bottom: 0px;
    padding: 10px;
}

.login-box .input-area input.input-login-top{
    border-top:2px solid rgb(150, 150, 150);
    border-left:2px solid rgb(150, 150, 150);
    border-right:2px solid rgb(150, 150, 150);
    border-bottom: 1px solid rgb(150, 150, 150);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.login-box .input-area input.input-login-bottom{
    border-bottom:2px solid rgb(150, 150, 150);
    border-left:2px solid rgb(150, 150, 150);
    border-right:2px solid rgb(150, 150, 150);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}

.login-box .input-area input.input-login:focus{
    outline: none;
}

.login-box .footer-area{
    width:50%;
    flex: 1 0 auto;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid rgba(170, 170, 170, 0.502);
    padding:5px;
}

.login-box .footer-area .footer-item{
    flex: 1 0 auto;
    color:#fff;
}
</style>

<template>
    <div class="login-box">
        <div class="title-area">
            <img src="../assets/logo_white_small.png" alt="" class="title-img responsive-img">
            <h2 class="title-text">登录仨同学</h2>
        </div>
        <div class="input-area">
            <input type="text" class="input-login input-login-top">
            <input type="password" class="input-login input-login-bottom">
        </div>
        <div class="footer-area">
            <div class="footer-item">
                <a href="" class="plain-link">忘记密码？</a>
            </div>
            <div class="footer-item">
                <span>没有账户? <a href="" class="plain-link">注册一个</a> / <a href="" class="plain-link">Continue as a guest</a></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        }
    }
</script>