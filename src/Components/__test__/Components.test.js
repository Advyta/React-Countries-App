import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import SearchBar from "../SearchBar";

const MockComponents = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <SearchBar />
      </BrowserRouter>
    </Provider>
  )
}

describe('Navbar', () => {
  test('should render the heading', () => {
    render(<MockComponents />);
    const title = screen.getByText(/Where in the world?/i);
    expect(title).toBeInTheDocument();
  });

  test('should toggle dark mode', () => {
    render(<MockComponents/>)
    const themeButton = screen.getByTestId(/themeToggler/i)
    fireEvent.click(themeButton);
    const state = store.getState();
    expect(state.countries.darkmode).toBe(true)
  })
  
})

test('should update input value when changed', () => {
  render(<MockComponents/>)
  const searchComponent = screen.getByPlaceholderText(/Search for a country.../i);
  fireEvent.change(searchComponent, {target: {value: 'India'}})
  expect(searchComponent.value).toBe('India');
})

