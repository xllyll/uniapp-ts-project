<template>
	<view>

		<view>
			<van-cell-group inset>
				<van-cell title="设置1" value="内容" is-link />
				<van-cell title="设置2" value="内容" is-link />
			</van-cell-group>
			<van-cell-group inset>
				<van-cell title="单元格" value="内容" is-link />
			</van-cell-group>
			<van-cell-group inset>
				<van-cell title="单元格" value="内容" is-link />
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
			</van-cell-group>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { onLoad } from '@dcloudio/uni-app';

	onLoad((_e) => {

	});
</script>

<style lang="less">
	page {
		background-color: #d0d0d0;
	}
	.van-cell-group {
		margin-top: 20rpx !important;
	}
</style>