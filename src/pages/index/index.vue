<template>
	<view class="root">
		<view>
			<van-search :value="searchValue" shape="round" placeholder="请输入搜索关键词" />
		</view>
		<view>
			<view>111ss</view>
			<van-button type="primary">主要按钮</van-button>
			<van-button type="success">成功按钮</van-button>
			<van-button type="default">默认按钮</van-button>
			<van-button type="danger">危险按钮</van-button>
			<van-button type="warning">警告按钮</van-button>
		</view>
		<view>
			<van-cell-group inset>
				<van-cell title="设置1" value="内容" is-link />
				<van-cell title="设置2" value="内容" is-link />
			</van-cell-group>
			<van-cell-group inset>
				<van-cell title="单元格" value="内容" is-link />
			</van-cell-group>
		</view>

		<view>
			<van-calendar :show="show" @close="onClose" />
			<van-switch :checked="true" active-color="#07c160" inactive-color="#ee0a24" />
			<van-rate :value="3" />
		</view>
	</view>
</template>

<script setup lang="ts">
	import { onLoad } from '@dcloudio/uni-app';
	import { ref } from 'vue'
	const show = ref(true)
	onLoad((_e) => {
		// dicAll().then((res) => { });
	});
	const onClose = () => {
		show.value = false;
	}
</script>

<style>
</style>