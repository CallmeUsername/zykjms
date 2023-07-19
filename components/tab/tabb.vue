<template>
	<view class="tabbar-container">
		<block>
			<view class="tabbar-item" v-for="(item, index) in tabbarList" :class="[item.centerItem ? ' center-item' : '']" @click="changeItem(item)">
				<view class="item-top"><image :src="currentItem == item.id ? item.selectIcon : item.icon"></image></view>
				<view class="item-bottom" :class="[currentItem == item.id ? 'item-active' : '']">
					<text>{{ item.text }}</text>
				</view>
			</view>
		</block>
	</view>
</template>
 
<script>
export default {
	props: {
		currentPage: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			currentItem: 0,
			tabbarList: [
				{
					id: 0,
					path: '/pages/index/index',
					icon: '/static/icon/购物车空.png',
					selectIcon: '/static/icon/购物车满.png',
					text: '工作',
					centerItem: false
				},
				{
					id: 1,
					path: '/pages/goods/goods',
					icon: '/static/icon/会员.png',
					selectIcon: '/static/icon/会员1.png',
					text: '助手',
					centerItem: false
				},
				{
					id: 2,
					path: '/pages/cat/cat',
					icon: '/static/icon/首页.png',
					selectIcon: '/static/icon/首页1.png',
					text: '常用',
					centerItem: true
				},
				{
					id: 3,
					path: '/pages/member/member',
					icon: '/static/icon/咨询.png',
					selectIcon: '/static/icon/资讯1.png',
					text: '分析',
					centerItem: false
				},
				{
					id: 4,
					path: '/pages/news/news',
					icon: '/static/icon/咨询.png',
					selectIcon: '/static/icon/资讯1.png',
					text: '我',
					centerItem: false
				}
			]
		};
	},
	mounted() {
		this.currentItem = this.currentPage;
		uni.hideTabBar();
	},
	methods: {
		changeItem(item) {
			let _this = this;
			console.log(item)
			uni.switchTab({
				url: item.path
			});
		}
	}
};
</script>
<style>
view {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
.tabbar-container {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 130rpx;
	box-shadow: 0 0 5px #999;
	display: flex;
	align-items: center;
	padding: 5rpx 0;
	color: #999999;
}
.tabbar-container .tabbar-item {
	width: 20%;
	height: 100rpx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
}
.tabbar-container .item-active {
	color: #78bd00;
}
.tabbar-container .center-item {
	display: block;
	position: relative;
}
.tabbar-container .tabbar-item .item-top {
	width: 70rpx;
	height: 70rpx;
	padding: 10rpx;
}
.tabbar-container .center-item .item-top {
	flex-shrink: 0;
	width: 100rpx;
	height: 100rpx;
	position: absolute;
	top: -50rpx;
	left: calc(50% - 50rpx);
	border-radius: 50%;
	box-shadow: 0 0 5px #999;
	background-color: #ffffff;
}
.tabbar-container .tabbar-item .item-top image {
	width: 100%;
	height: 100%;
}
.tabbar-container .tabbar-item .item-bottom {
	font-size: 28rpx;
	width: 100%;
}
.tabbar-container .center-item .item-bottom {
	position: absolute;
	bottom: 5rpx;
}
</style>