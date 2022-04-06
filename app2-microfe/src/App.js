import '@pipedrive/convention-ui-react/dist/convention-ui-react.css';
import '@pipedrive/convention-ui-react/dist/fonts/source-sans-pro.css';
import './styles.css';

import React from 'react';

import LocalWidget from './WidgetB1';

// Circular dependency?
// const LocalWidget = React.lazy(() => import("app2/WidgetB1"));

// import RemoteWidget from 'app3/WidgetC1';
// const RemoteWidget = React.lazy(() => import("app3/WidgetC1"));

const App = () => (
	<div>
		<h1>App 2</h1>
		<LocalWidget />
		{/* <React.Suspense fallback="Loading...">
			App2 remote widget
			<LocalWidget />
		</React.Suspense> */}
		{/* <React.Suspense fallback="Loading...">
			App3 remote widget
			<RemoteWidget />
		</React.Suspense> */}
	</div>
);

export default App;
