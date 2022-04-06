import { load } from 'bare-amd-loader';

async function fakeFetchFromConsul({ sleep = 0 } = {}) {
	await new Promise((resolve) => setTimeout(resolve, sleep));

	return {
		app1: 'http://localhost:3001/remote-entry.app1.js',
		app2: 'http://localhost:3002/remote-entry.app2.js',
		app3: 'http://localhost:3003/remote-entry.app3.js',
	};
}

function createFakeComponentLoader(config) {
	return {
		load(name) {
			return load(name, { paths: config });
		},
	};
}

(async () => {
	const config = await fakeFetchFromConsul();

	window.app = {
		componentLoader: createFakeComponentLoader(config),
	};

	import('./bootstrap');
})();
