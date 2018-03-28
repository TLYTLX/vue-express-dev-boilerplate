<template>
	<div>
        <div id="banner"></div>
        <div class="para">
        	<div id="profess" class="block1"></div>
        	<div id="news" class="block1"></div>
        </div>
        <div class="para">
            <div class="block2" style="background: #e6eaea"></div>
            <div class="block2" style="background: #e6e7ea"></div>
            <div class="block2" style="background: #e9e6ea"></div>
            <div class="block2" style="background: #eae6e7"></div>
        </div>
        <div id="footer"></div>
    </div>
</template>
<!--远程登陆密码800941-->
<!--账号root密码Lsy642977047<<-->
<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style>
	body{
		background: #f1f2f2;
		margin:0;
	}
	#banner{
		height: 400px;
		width:100%;
		background: center center url('../static/banner2.jpg') no-repeat;
		background-size: cover;
	}
	#footer{
		height: 50px;
		width: 100%;
		margin-top: 60px;
		background: #fff;
	}
	.para{
		display: flex;
		justify-content: center;
	}
	.block1{
		width: 40%;
		height: 500px;
		margin: 20px 4%;
        box-shadow: 3px 3px 10px #a1a1a1;
	}
	.block2{
		width: 23%;
		margin:20px;
		height: 300px;
	}
	#profess{
		background: #fdf1ed;
	}
	#news{
		background: #d9eee7;
	}
</style>
