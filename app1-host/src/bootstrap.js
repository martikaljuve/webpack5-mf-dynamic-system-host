import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

console.log('share scope', __webpack_share_scopes__.default);

ReactDOM.render(<App />, document.getElementById('root'));
