<template>
	<div>
		<Header title="个人中心"></Header>
    	<div class="main">
        	<div class="menu">
                <div class="avatar"></div>
                <div class="username">的决定是否大师风</div>
                <div :class="[menu==1? 'menu-item active':'menu-item']" @click="menu=1;title='我的资料'">个人资料</div>
                <div :class="[menu==2? 'menu-item active':'menu-item']" @click="menu=2;title='我的帖子'">我的帖子</div>
                <div :class="[menu==3? 'menu-item active':'menu-item']" @click="menu=3;title='我的消息'">我的消息</div>
            </div>
        	<div class="content">
        		<div class="content-title">{{title}}</div>
        		<Info v-if="menu==1"></Info>
        		<my-post v-if="menu==2"></my-post>
        		<my-message v-if="menu==3"></my-message>
        	</div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from './header.vue';
import Footer from './footer.vue';
import Info from './info.vue';
import MyPost from './myPost.vue';
import MyMessage from './myMessage.vue';
export default {
  data() {
    return {
    	menu: 1,
    	title: '我的资料',
    }
  },
  components: {
  	Header,
  	Footer,
  	Info,
  	MyPost,
  	MyMessage
  }
}
</script>

<style>
	body{
		background: #f7f9fb;
		margin:0;
	}
	.main {
		display: flex;
		width: 90%;
		margin: 10px auto;
	}
	.menu{
		width: 280px;
		background: #73BAB2;
		height: calc(100vh - 115px);
	}
	.menu-item {
		line-height: 50px;
		margin: 10px 30px;
		text-align: center;
		color: #fff;
	}
	.active{
		font-size: 18px;
		font-weight: bold;
		border-bottom: 1px solid #fff;
	}
	.menu-item:hover{
		border-bottom: 1px solid #fff;
		font-size: 18px;
	}
	.content{
		margin-left: 30px;
		width: 70%;
		min-height: calc(100vh - 115px);
		background: #fff;
	}
	.content-title{
		padding-left: 20px;
		line-height: 50px;
		border-top: 3px solid #606266;
		border-bottom: 1.5px solid #e6e7ea;
	}
	.form {
		line-height: 40px;
		width: 500px;
		margin: 50px auto;
		vertical-align: middle;
	}
	.form-label{
		text-align: right;
		color: #606266;
	}
	.avatar {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		margin: 30px auto;
		background: #aaa;
	}
	.username{
		line-height: 30px;
		font-size: 20px;
		text-align: center;
		color: #fff;
	}
</style>
