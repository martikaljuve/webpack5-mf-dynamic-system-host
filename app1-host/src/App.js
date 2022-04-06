import '@pipedrive/convention-ui-react/dist/convention-ui-react.css';
import '@pipedrive/convention-ui-react/dist/fonts/inter.css';
import '@pipedrive/convention-ui-react/dist/themes/modern.css';
import './styles.css';

import { Button } from '@pipedrive/convention-ui-react';
import React from 'react';

import { RemoteComponent } from './components/RemoteComponent';

function App() {
	const [path, setPath] = React.useState(null);

	const loadPath = (path) => () => setPath(path);

	return (
		<div>
			<h1>App 1</h1>
			<Button variant="ghost-link" onClick={loadPath('app3/WidgetC1')}>
				app3/WidgetC1
			</Button>
			<Button variant="ghost-link" onClick={loadPath('app2/WidgetB1')}>
				app2/WidgetB1
			</Button>
			<Button variant="ghost-link" onClick={loadPath('app2/WidgetB2')}>
				app2/WidgetB2
			</Button>
			<Button variant="ghost-link" onClick={loadPath('app2/entry-react')}>
				app2/entry-react
			</Button>
			<Button variant="ghost-link" onClick={loadPath('app2/entry-object')}>
				app2/entry-object
			</Button>

			<div style={{ marginTop: '2em' }}>
				<RemoteComponent path={path} />
			</div>
		</div>
	);
}

export default App;
