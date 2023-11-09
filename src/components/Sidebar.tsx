import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  ReconciliationOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; // Import Link from react-router-dom instead of NavLink
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { CommonState } from "../types";
import { toggleCollapse } from "../reducers/commonReducer";
import img from "../assets/images/logo.gif";

interface SidebarItem {
  name: string;
  icon: React.ReactNode;
  path: string;
  display: boolean;
  isActive?: boolean;
  external?: boolean;
}

export default function Sidebar() {
  const dispatch = useDispatch();
  const { collapsed, settings } = useSelector(
    (state: CommonState) => state.common
  );
  const theme = settings.theme ? settings.theme : "light";
  const { Sider } = Layout;
  const SidebarJson: SidebarItem[] = [
    {
      name: "Dashboard",
      icon: <DashboardOutlined />,
      path: "/Dashboard", // Use the correct path format
      display: true,
      isActive: true,
    },
    {
      name: "Shopping cart",
      icon: <ReconciliationOutlined />,
      path: "/Shop", // Use the correct path format
      display: true,
    },
    {
      name: "Settings",
      icon: <SettingOutlined />,
      path: "/Settings",
      display: true,
    },
  ];
  const menuItems = SidebarJson.map((el, i) => (
    <Menu.Item key={`sidebar-item-${i}`} icon={el.icon}>
      {el.external ? (
        <a href={el.path} target="_blank" rel="noreferrer">
          {el.name}
        </a>
      ) : (
        <Link to={el.path}>{el.name}</Link>
      )}
    </Menu.Item>
  ));

  return (
    <Sider
      theme={theme}
      width={220}
      collapsible
      collapsed={collapsed}
      collapsedWidth={60}
    >
      <span
        className="toggle-collapse"
        onClick={() => dispatch(toggleCollapse())}
      >
        {collapsed ? <RightOutlined /> : <LeftOutlined />}
      </span>
      <div className="logo">
        <img alt="logo" src={img} />
      </div>
      <Menu theme={theme} mode="inline" defaultSelectedKeys={["1"]}>
        {menuItems}
      </Menu>
    </Sider>
  );
}
