import { load } from 'bare-amd-loader';

window.__remotes__ = {
	app1: 'http://localhost:3001/remote-entry.app1.js',
	app2: 'http://localhost:3002/remote-entry.app2.js',
	app3: 'http://localhost:3003/remote-entry.app3.js',
	// app4: 'http://localhost:3003/remote-entry.app4.js',
};

window.app = {
	componentLoader: {
		load(name) {
			return load(name, {
				paths: window.__remotes__,
			});
		},
	},
};

import('./bootstrap');
