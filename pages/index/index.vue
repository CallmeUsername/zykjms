<template>
	<view class="home">
		<tabb :current-page="0"></tabb>
		<view class="top">
			<!-- <uni-icons type="notification-filled" size="30"></uni-icons> -->
			<text>早上好！张三先生</text>
		</view>
		<swiper class="uni-swiper-wrapper" indicator-active-color="#78bd00"  indicator-dots circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.image_src" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" >
				<view  v-if="item.icon" :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<view class="navs">
			<view class="nav_items" v-for="(item,index) in navss" :key="index" @click="navItemClick(item)">
				<view   v-if="item.icon" :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<view v-if="shows" class="overlay" @click="hideMaskLayer">
			<view class="funb">
				<view class="titles">功能B</view>
				<view class="navs" style="margin-top: 0; border-bottom-right-radius: 30rpx;
border-bottom-left-radius: 30rpx;">
					<view class="nav_items"  style="border: none;" v-for="(item,index) in navss" :key="index">
						<view   v-if="item.icon" :class="item.icon"></view>
						<text>{{item.title}}</text>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers: [],
				goods: [],
				shows: false,
				//功能列表1
				navs: [
					{
						icon: 'iconfont icon-ziyuan',
						title: '功能1',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						title: '功能2',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-tupian',
						title: '功能3',
						path: '/pages/pics/pics'
					},
					{
						icon: 'iconfont icon-shipin',
						title: '功能4',
						path: '/pages/viedeos/videos'
					},
					{
						icon: 'iconfont icon-shipin',
						title: '功能5',
						path: '/pages/viedeos/videos'
					}
				],
				//功能列表2
				navss: [
				       {
				       	icon: 'iconfont icon-ziyuan',
				       	title: '功能1',
				       	path: '/pages/goods/goods'
				       },
				       {
				       	icon: 'iconfont icon-guanyuwomen',
				       	title: '功能B',
				       	path: '/pages/contact/contact'
				       },
				       {
				       	icon: 'iconfont icon-tupian',
				       	title: '功能3',
				       	path: '/pages/pics/pics'
				       },
				       {
				       	icon: 'iconfont icon-shipin',
				       	title: '功能4',
				       	path: '/pages/viedeos/videos'
				       },
				       {
				       	icon: 'iconfont icon-shipin',
				       	title: '功能5',
				       	path: '/pages/viedeos/videos'
				       },
					   {
					   	icon: 'iconfont icon-ziyuan',
					   	title: '功能1',
					   	path: '/pages/goods/goods'
					   },
					   {
					   	icon: 'iconfont icon-guanyuwomen',
					   	title: '功能2',
					   	path: '/pages/contact/contact'
					   },
					   {
					   	icon: 'iconfont icon-tupian',
					   	title: '功能3',
					   	path: '/pages/pics/pics'
					   },
					   {
					   	icon: 'iconfont icon-shipin',
					   	title: '功能4',
					   	path: '/pages/viedeos/videos'
					   },
					   {
					   	icon: 'iconfont icon-shipin',
					   	title: '功能5',
					   	path: '/pages/viedeos/videos'
					   },
				        {
				          title: '',
				          path: ''
				        },
				        {
				          title: '',
				          path: ''
				        }
				      ]
			}
		},
		onLoad() {
			this.getSwipers()
		},
		methods: {
			// 获取轮播图数据
			getSwipers() {
				uni.request({
					url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
					success:res=>{
						console.log(res)
						this.swipers = res.data.message
					}
				})
			},
			// 点击遮罩层关闭
			  hideMaskLayer() {
			    this.shows = false;
			  },
			navItemClick(url){
				if(url.title === '功能B'){
					this.shows = true
				}
				
			}
		}
	}
</script>

<style lang="scss">
	
	.home{
		height: 100%;
		width: 100%;
		background: #ccc;
		.top{
			width:100%;
			height: 160rpx;
			line-height: 160rpx;
			font-size: 40rpx;
			color:#78bd00;
			text-align: center;
			background-color: #272a3b;
			padding-top: 40rpx;
			// display: flex;
			// flex-direction: row;
			// image{
			// 	margin-right: 20%;
			// }
		}
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				height: 100%;
				width: 100%;
			}
		}
	}
	.overlay {
	  position: absolute;
	  top: 0;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  background-color: rgba(0, 0, 0, 0.5);
	  z-index: 99;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	.funb{
		border-radius: 30rpx;
		width: 80%;
		background: #ccc;
	}
	.titles{
		 background: #272a3b;
		 text-align: center;
		 height: 80rpx;
		 line-height: 80rpx;
		 color: #78bd00;
		 border-top-left-radius: 30rpx;
		 border-top-right-radius: 30rpx;
	}
	.nav {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		background-color: #272a3b;
		height: 200rpx;
		align-items: center;
		.nav_item{
			// flex: 20%;
			text-align: center;
			view{
				width: 120rpx;
				height: 120rpx;
				background: $shop-color;
				border-radius: 60rpx;
				margin: 5rpx auto;
				line-height: 120rpx;
				color: #fff;
				font-size: 50rpx
			}
			.icon-tupian{
				font-size: 45rpx;
			}
			text{
				color: #fff;
				font-size: 35rpx
			}
		}
	 }
	 .navs {
		margin-top: 10rpx;
	 	display: flex;
	 	flex-direction: row;
		flex-wrap: wrap;
	 	background-color: #fff;
	 	height: 600rpx;
	 	
	 	.nav_items{
			border-bottom:1rpx solid #ccc;
			border-right: 1rpx solid #ccc;
			padding-top: 10rpx;
			padding-bottom: 5rpx;
	 		flex: 25%;
	 		text-align: center;
			justify-content: center;
	 		view{
	 			width: 120rpx;
	 			height: 120rpx;
	 			background: #78bd00;
	 			border-radius: 60rpx;
	 			margin: 5rpx auto;
	 			line-height: 120rpx;
	 			color: #fff;
	 			font-size: 50rpx
	 		}
	 		text{
	 			color: #ccc;
	 			font-size: 35rpx
	 		}
	 	}
	  }
</style>
