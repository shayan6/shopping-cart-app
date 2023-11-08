import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const ShopList = () => {
  const shops = useSelector((state: RootState) => state.shop.shops);

  return (
    <div className="shop-list">
      <h2>Shops</h2>
      <ul>
        {shops?.map((shop) => (
          <li key={shop.id}>{shop.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShopList;
