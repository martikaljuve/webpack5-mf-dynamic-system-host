import { Panel } from '@pipedrive/convention-ui-react';
import React, { useEffect } from 'react';
import moment from 'moment';

export default function WidgetC1() {
	useEffect(() => {
		console.log('app3 hook');
	}, []);

	return (
		<Panel variant="positive">
			<h2>app3/WidgetC1</h2>
			<p>
				moment <strong>v{moment.version}</strong>: {moment().format('MMMM Do YYYY, h:mm:ss a')}
			</p>
		</Panel>
	);
}
