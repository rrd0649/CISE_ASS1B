import { render, screen } from '@testing-library/react';
import App from './App';
 
describe('CreateArticle', () => {
  test('renders App component', () => {
    render(<App />);
  screen.debug();
    expect(screen.getByText('+ Add New Article')).toBeInTheDocument();
  });
});

/*
test('Article List in toBeInTheDocument', () => {
  render(<App />);
  //screen.debug();
  const linkElement = screen.getByText("Article List");
  expect(linkElement).toBeInTheDocument();
});
*/