import * as React from 'react';
import { hydrate } from 'react-dom';
import CardList from './CardList';
import mockResponse from './data/mock-data';

hydrate(<CardList data={mockResponse} />, document.getElementById('card-list'));
