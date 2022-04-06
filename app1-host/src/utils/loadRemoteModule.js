export async function loadRemoteModule(remote, module) {
	// Initializes the share scope. This fills it with known provided modules from this build and all remotes
	await __webpack_init_sharing__('default');

	const container = await app.componentLoader.load(remote);
	await container.init(__webpack_share_scopes__.default);

	console.log('share scope', __webpack_share_scopes__);

	const factory = await container.get(module);
	return factory();
}
