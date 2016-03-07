import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

import 'css/master.scss';

render(<App />, document.getElementById('root'));

const message = 'hello from index.js';
console.log(message);
