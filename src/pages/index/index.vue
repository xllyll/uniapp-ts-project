<template>
	
</template>

<script setup lang="ts">
	import { onLoad } from '@dcloudio/uni-app';
	
	onLoad((_e) => {
		uni.reLaunch({
			url:'/pages/home/index/index'
		})
	});
</script>

<style>
</style>