import mockResponse from './app/data/mock-data';
const functions = require('firebase-functions');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const express = require('express');
const path = require('path');
const Cardlist = require('./app/CardList/index').default;

const app = express();

app.use(express.static(path.resolve(__dirname, './dist')));

app.get('/index', (req, res) => {
  const html = ReactDOMServer.renderToString(<Cardlist data={mockResponse} />);
  res.set('Cache-Control', 'public, max-age=600, s-max-age=1200');
  const template = `
        <div id="card-list">${html}</div>
        <script src="./products/products.app.js"></script>
    `;
  res.send(template);
});
export const n2productsPubSub = functions.https.onRequest(app);
