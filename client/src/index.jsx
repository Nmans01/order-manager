/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import express from 'express';

import './index.css';
import expressAPI from './api';
import App from './App';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

// Start express API layer
const app = express();
const port = 3000;

app.use('/api', api); // Add the API to application

app.use(express.static('public'));
app.get('/', (req, res) => {
  const html = render(() => <Router><App/></Router>, root);
  res.send(`<!DOCTYPE html>${html}`);
});

expressAPI();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});