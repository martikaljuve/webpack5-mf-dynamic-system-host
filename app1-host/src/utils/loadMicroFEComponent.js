import { loadRemoteModule } from './loadRemoteModule';
import { mountToComponent } from './mountToComponent';

export function loadMicroFEComponent(path) {
	return async function () {
		// "app2/Widget" -> ["app2", "Widget"]
		const [remoteName, moduleName] = path.split(/\/(.+)/);
		const module = await loadRemoteModule(remoteName, `./${moduleName}`);

		if (module.default?.mount) {
			return { default: mountToComponent(module.default, path) };
		} else {
			return module;
		}
	};
}
