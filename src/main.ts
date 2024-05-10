import { createSSRApp } from "vue";
import App from "./App.vue";

// #ifndef MP-WEIXIN
import vant from 'vant';
import 'vant/lib/index.css';
// #endif

export function createApp() {
	const app = createSSRApp(App);

	// #ifndef MP-WEIXIN
	app.use(vant)
	// #endif

	return {
		app,
	};
}