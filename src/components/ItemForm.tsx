// src/components/ItemForm/ItemForm.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../reducers/cartReducer';
import { v4 as uuidv4 } from 'uuid'; // Import uuid
import { RootState } from '../store/store';
import { Button, Form, Input, Select } from 'antd';
import type { FormInstance } from 'antd/es/form';
const { Option } = Select;

const ItemForm = () => {
  const formRef = React.useRef<FormInstance>(null);
  const [name, setName] = useState<string>('');
  const [selectedShop, setSelectedShop] = useState<string>('');

  const dispatch = useDispatch();
  const shops = useSelector((state: RootState) => state.shop.shops);

  const handleAddItem = () => {
  };

  const onFinish = () => {
    if (name && selectedShop) {
      dispatch(addItem({ id: uuidv4(), name, shop: selectedShop }));
      setName('');
      setSelectedShop('');
    }
  };

  useEffect(() => {
    console.log(shops);
  }, [shops]);

  return (
    <Form 
      layout="inline"
      ref={formRef}
      name="shop-ref"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item rules={[{ required: true }]}>
        <Input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Item>
      <Form.Item rules={[{ required: true }]}>
        <Select value={selectedShop} onChange={(value) => setSelectedShop(value)}>
          <Option value="">Select a shop</Option>
          {shops?.map((shop) => (
            <Option key={shop.id} value={shop.id}>
              {shop.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          + Add
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ItemForm;
