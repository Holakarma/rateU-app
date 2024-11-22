import React from 'react';
import { App } from 'app/App';
import 'bootstrap/dist/css/bootstrap.css';
import 'app/style/style.css';
import { createRoot } from 'react-dom/client';

BX24.init(function() {
	const root = createRoot(document.getElementById('app'));

	root.render(<App />);
});
