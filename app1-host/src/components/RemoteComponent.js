import { Panel } from '@pipedrive/convention-ui-react';
import React from 'react';

import { loadMicroFEComponent } from '../utils/loadMicroFEComponent';

export function RemoteComponent({ path }) {
	if (!path) {
		return <Panel>No remote component specified</Panel>;
	}

	const Component = React.lazy(loadMicroFEComponent(path));

	return (
		<React.Suspense fallback="Loading...">
			<Component />
		</React.Suspense>
	);
}
