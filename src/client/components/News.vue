<template>
	<div>
		<Header></Header>
        <div id="range"></div>
        <div id="filter"></div>
    </div>
</template>
<!--远程登陆密码800941-->
<!--账号root密码Lsy642977047<<-->
<script>
import Header from './header.vue';
export default {
  data() {
    return {
    }
  },
  components: {
  	Header
  }
}
</script>

<style>
	body{
		background: #f4f4f4;
		margin:0;
	}
	#banner{
		height: 400px;
		justify-content: center;
        width: 100%;
        align-items: flex-end;
		background: center center url('../static/banner2.jpg') no-repeat;
		background-size: cover;
		display: flex;
	}
	.banner-font{
		width: 15%;
		height: 55px;
		justify-content: center;
		position: relative;
		color: #fff;  
        font-size: 32px; 
        text-align: center;
        cursor: pointer;
	}
	.banner-font:hover {
	    height:60px;
	}
    .banner-font:hover::before { 
    	content: "/";
    	left: 0px;
    	position: absolute;
    	font-weight: lighter;
    } 
    .banner-font:hover::after { 
    	content: "/";
    	right:  0px;
    	position: absolute;
    	font-weight: lighter;
    }
	.banner-font img{
		width: auto;
		height: 40px;
	}
	#footer{
		height: 50px;
		width: 100%;
		margin-top: 50px;
		background: #e6e7ea;
		border-top: 1px solid #e5e5e5; 
	}
</style>
