import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ItemForm from './ItemForm';
import { addItem } from '../../reducers/cartReducer';
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

// Mock the useDispatch and useSelector hooks
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// Mock the antd FormInstance
const mockFormInstance = {
  current: {
    resetFields: jest.fn(),
  },
};

test('ItemForm handles form submission correctly', async () => {
  // Mock the useSelector to return the predefined state
  (useSelector as jest.Mock).mockImplementation((selector: (state: RootState) => any) =>
    selector(mockRootState)
  );

  // Create a mock store
  const mockStore = configureStore();
  const store = mockStore({});

  // Mock the useDispatch to dispatch the addItem action
  const dispatchMock = jest.fn();
  (useDispatch as jest.Mock).mockReturnValue(dispatchMock);

  // Render the component with the mock store and formRef
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
