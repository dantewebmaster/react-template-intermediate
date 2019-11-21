import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from './store';
import Root from './pages/Root';

ReactDOM.render(<Root store={Store} />, document.getElementById('root'));
