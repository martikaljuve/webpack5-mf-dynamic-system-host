import { Panel } from '@pipedrive/convention-ui-react';
import React, { Suspense } from 'react';
import moment from 'moment';

const RemoteWidget = React.lazy(() => import('app3/WidgetC1'));

export default function WidgetB1() {
	return (
		<Panel variant="info">
			<h2>app2/WidgetB1</h2>
			<p>
				moment <strong>v{moment.version}</strong>: {moment().format('MMMM Do YYYY, h:mm:ss a')}
			</p>
			<p>
				App3 remote (<strong>Suspense + React.lazy</strong>):
			</p>
			<Suspense fallback="Loading remote widget...">
				<RemoteWidget />
			</Suspense>
		</Panel>
	);
}
