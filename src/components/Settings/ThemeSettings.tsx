import React, { useState } from "react";
import { Row, Col, Card, Form, Input, Button, message } from "antd";
import { Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setSettings } from "../../reducers/commonReducer";
import debounce from "lodash/debounce";

function ThemeSettings() {
  const [form] = Form.useForm();
  const settings: any = useSelector((state: RootState) => state.common.settings);
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(settings && settings.theme === "dark");
  const colorKeys = [
    "colorPrimary",
    "colorSecondary",
    "colorWarning",
    "colorSuccess",
    "colorDanger",
    "colorYellow",
    "colorPurple",
    "colorPink",
    "colorBlack",
    "colorWhite",
  ];

  const onFinish = (el: any) => {
    const newSettings = {
      theme: theme ? "dark" : "light",
      color: {
        colorPrimary: el.colorPrimary || settings?.color?.colorPrimary,
        colorSecondary: el.colorSecondary || settings?.color?.colorSecondary,
        colorWarning: el.colorWarning || settings?.color?.colorWarning,
        colorSuccess: el.colorSuccess || settings?.color?.colorSuccess,
        colorDanger: el.colorDanger || settings?.color?.colorDanger,
        colorYellow: el.colorYellow || settings?.color?.colorYellow,
        colorPurple: el.colorPurple || settings?.color?.colorPurple,
        colorPink: el.colorPink || settings?.color?.colorPink,
        colorBlack: el.colorBlack || settings?.color?.colorBlack,
        colorWhite: el.colorWhite || settings?.color?.colorWhite,
      },
    };

    dispatch(setSettings(newSettings));
    message.success("Saved successfully!");
  };

  const debouncedFinish = debounce(onFinish, 1000);

  const handleThemeChange = (checked: boolean) => {
    setTheme(checked);
  };

  const resetSettings = () => {
    localStorage.removeItem("settings");
    window.location.reload();
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Row gutter={[18, 18]}>
        <Col span={24}>
          <Card>
            <Row>
              <Col span={4}>
                <Form.Item name="theme" label="Dark Sidebar">
                  <Switch
                    defaultChecked={settings?.theme === "dark"}
                    onChange={handleThemeChange}
                  />
                </Form.Item>
              </Col>
              {colorKeys.map((colorKey: string) => (
                <Col span={4} key={colorKey}>
                  <Form.Item name={colorKey} label={colorKey.charAt(5).toUpperCase() + colorKey.slice(6)}>
                    <Input
                      type={"color"}
                      defaultValue={settings?.color?.[colorKey]}
                      onChange={e => debouncedFinish({ [colorKey]: e.target.value })}
                    />
                    <span className="colorHex">
                      {settings?.color?.[colorKey].toUpperCase()}
                    </span>
                  </Form.Item>
                </Col>
              ))}
            </Row>
            <Form.Item
              wrapperCol={{ offset: 8, span: 16 }}
              style={{ textAlign: "right" }}
            >
              <Button
                type="primary"
                onClick={resetSettings}
                style={{ marginRight: "1rem" }}
              >
                Reset
              </Button>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Card>
        </Col>
      </Row>
    </Form>
  );
}

export default ThemeSettings;
