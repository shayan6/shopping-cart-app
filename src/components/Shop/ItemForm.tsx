// src/components/ItemForm/ItemForm.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../reducers/cartReducer";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../store/store";
import { Button, Form, Input, Select, Row, Col, Typography } from "antd";
import type { FormInstance } from "antd/es/form";
const { Option } = Select;

const ItemForm = () => {
  const formRef = React.useRef<FormInstance>(null);
  const dispatch = useDispatch();
  const shops = useSelector((state: RootState) => state.shop.shops);

  const onFinish = (values: any) => {
    const { name, shop } = values;
    if (name && shop) {
      dispatch(addItem({ id: uuidv4(), name, shop }));
      formRef.current?.resetFields(); // Reset form fields
    }
  };

  return (
    <Form
      ref={formRef}
      name="shop-ref"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Typography.Title level={4}> Add to cart: </Typography.Title>
      <Row gutter={16}>
        <Col span={10}>
          <Form.Item name="name" rules={[{ required: true }]}>
            <Input placeholder="Item name" />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item name="shop" rules={[{ required: true }]}>
            <Select placeholder="Select a shop">
              {shops?.map((shop) => (
                <Option key={shop.id} value={shop.id}>
                  {shop.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default ItemForm;
