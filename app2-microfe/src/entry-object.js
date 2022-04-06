import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

function wrapComponent(Component) {
	return {
		mount({ props, el }) {
			ReactDOM.render(<Component {...props} />, el);
		},
		update({ props, el }) {
			ReactDOM.render(<Component {...props} />, el);
		},
		unmount({ el }) {
			ReactDOM.unmountComponentAtNode(el);
		},
	};
}

export default wrapComponent(App);
