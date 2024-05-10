<template>
	<view>
		<van-search :value="searchValue" shape="round" placeholder="请输入搜索关键词" />
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>
		<van-grid :gutter="0" :border="false">
			<van-grid-item icon="photo-o" text="文字1" />
			<van-grid-item icon="photo-o" text="文字2" />
			<van-grid-item icon="photo-o" text="文字3" />
			<van-grid-item icon="photo-o" text="文字4" />
			<van-grid-item icon="photo-o" text="文字1" />
			<van-grid-item icon="photo-o" text="文字2" />
			<van-grid-item icon="photo-o" text="文字3" />
			<van-grid-item icon="photo-o" text="文字4" />
		</van-grid>
	</view>
</template>

<script setup lang="ts">

</script>

<style>

</style>