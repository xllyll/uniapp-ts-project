<script setup lang="ts">
	import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
	onLaunch(() => {
		console.log("App Launch");
	});
	onShow(() => {
		console.log("App Show");
	});
	onHide(() => {
		console.log("App Hide");
	});
</script>
<style>
	/*每个页面公共css */
	/* 引入vant样式 */
	/* #ifdef MP-WEIXIN */
	@import "@/wxcomponents/vant/dist/common/index.wxss";
	/* #endif */
</style>