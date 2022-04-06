import { Panel } from '@pipedrive/convention-ui-react';
import React from 'react';
import moment from 'moment';

import RemoteWidget from 'app3/WidgetC1';

export default function WidgetB2() {
	return (
		<Panel variant="info">
			<h2>app2/WidgetB2</h2>
			<p>
				moment <strong>v{moment.version}</strong>: {moment().format('MMMM Do YYYY, h:mm:ss a')}
			</p>
			<p>
				App3 remote (<strong>import</strong>):
			</p>
			<RemoteWidget />
		</Panel>
	);
}
