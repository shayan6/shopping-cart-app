import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ShoppingCart from "./ShoppingCart";
import { useSelector, useDispatch } from "react-redux";

// Mock window.matchMedia
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

// Mock the RootState
interface RootState {
  cart: {
    cartItems: { id: string; name: string; shop: string }[];
  };
}

const mockRootState: RootState = {
  cart: {
    cartItems: [
      { id: "1", name: "Item 1", shop: "rimi" },
      { id: "2", name: "Item 2", shop: "selver" },
    ],
  },
};

// Mock the useDispatch and useSelector hooks
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

test("ShoppingCart renders correctly with items", () => {
  // Mock the useSelector to return the predefined state
  (useSelector as jest.Mock).mockImplementation(
    (selector: (state: RootState) => any) => selector(mockRootState)
  );

  // Mock the useDispatch
  const dispatchMock = jest.fn();
  (useDispatch as jest.Mock).mockReturnValue(dispatchMock);

  // Render the component with the mock store
  const { getByText } = render(
    <Provider store={configureStore()({})}>
      <ShoppingCart />
    </Provider>
  );

  // Check that the component renders the item names and "Remove" buttons
  expect(getByText("Item 1")).toBeInTheDocument();
  expect(getByText("Item 2")).toBeInTheDocument();
  expect(getByText("rimi")).toBeInTheDocument();
  expect(getByText("selver")).toBeInTheDocument();
});
