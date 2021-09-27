import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SubmitArticle from './pages/Submit-Article';

test('renders submit page', () => {
  render(<BrowserRouter><SubmitArticle/></BrowserRouter>);
  const linkElement = screen.getByText(/Submit Article/i);
  expect(linkElement).toBeInTheDocument();
});