import { Row, Col, Card, Tabs } from "antd";
import PageHeader from "../components/PageHeader";
// import ThemeSettings from "./components/ThemeSettings";
// import CompanySettings from "./components/CompanySettings";
// import SystemSettings from "./components/SystemSettings";
// import FailedRecordsTable from "./components/FailedRecordsTable";

function Settings() {
  const items = [
    {
      key: "1",
      label: `Company settings`,
    //   children: <CompanySettings />,
    },
    {
      key: "2",
      label: `Theme settings`,
    //   children: <ThemeSettings />,
    },
  ];

  const onChange = (key: any) => {
    console.log(key);
  };

  return (
    <Row>
      <Col span={24}>
        <PageHeader title="Settings" />
      </Col>
      <Col span={24}>
        <Card>
          <Tabs onChange={onChange} type="card" items={items} />
        </Card>
      </Col>
    </Row>
  );
}

export default Settings;
