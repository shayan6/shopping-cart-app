import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ItemForm from '../components/Shop/ItemForm';
import { addItem } from '../reducers/cartReducer';
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
  shop: {
    shops: { id: number; name: string }[];
  };
}

const mockRootState: RootState = {
  shop: {
    shops: [
      { id: 1, name: 'Shop 1' },
      { id: 2, name: 'Shop 2' },
    ],
  },
};


jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

test('ItemForm handles form submission correctly', async () => {
  (useSelector as jest.Mock).mockImplementation((selector: (state: RootState) => any) =>
    selector(mockRootState)
  );

  const mockStore = configureStore();
  const store = mockStore({});

  const dispatchMock = jest.fn();
  (useDispatch as jest.Mock).mockReturnValue(dispatchMock);

  const { getByPlaceholderText, getByText } = render(
    <Provider store={store}>
      <ItemForm />
    </Provider>
  );

  // Fill in the form fields
  fireEvent.change(getByPlaceholderText('Item name'), { target: { value: 'Test Item' } });

  // Submit the form
  fireEvent.click(getByText('Add'));
});
