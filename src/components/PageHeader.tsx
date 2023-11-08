import { Button, Card, Col, Row, Typography } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import BreadCumb from "./BreadCumb";

export default function PageHeader({ title }: { title: string }) {
  return (
    <Row className="site-page-header">
      <Col span={24}>
        <BreadCumb path={title} />
      </Col>
      <Col span={24}>
        <Card>
          <Row>
            <Col span={12}>
              <Typography.Title level={4}> {title} </Typography.Title>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
