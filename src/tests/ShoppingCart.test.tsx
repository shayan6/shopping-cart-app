import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ShoppingCart from "../components/Shop/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";


window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

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

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

test("ShoppingCart renders correctly with items", () => {
  (useSelector as jest.Mock).mockImplementation(
    (selector: (state: RootState) => any) => selector(mockRootState)
  );


  const dispatchMock = jest.fn();
  (useDispatch as jest.Mock).mockReturnValue(dispatchMock);

  const screen = render(
    <Provider store={configureStore()({})}>
      <ShoppingCart />
    </Provider>
  );

  expect(screen.getByText("Item 1")).toBeInTheDocument();
  expect(screen.getByText("Item 2")).toBeInTheDocument();
  expect(screen.getByText("rimi")).toBeInTheDocument();
  expect(screen.getByText("selver")).toBeInTheDocument();
});
