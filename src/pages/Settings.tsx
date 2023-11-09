import { Row, Col, Card, Tabs } from "antd";
import PageHeader from "../components/PageHeader";
import ThemeSettings from "../components/Settings/ThemeSettings";
import CompanySettings from "../components/Settings/CompanySettings";

function Settings() {
  const items = [
    {
      key: "1",
      label: `Company settings`,
      children: <CompanySettings />,
    },
    {
      key: "2",
      label: `Theme settings`,
      children: <ThemeSettings />,
    },
  ];

  return (
    <Row>
      <Col span={24}>
        <PageHeader title="Settings" />
      </Col>
      <Col span={24}>
        <Card>
          <Tabs type="card" items={items} />
        </Card>
      </Col>
    </Row>
  );
}

export default Settings;
