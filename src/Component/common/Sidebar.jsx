import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import DashBoard from "../DashBoard";
import ProductPage from "../ProductPage";
import BillPage from "../BillPage";
import FoodComp from "./FoodComp";
import ReviewPage from "../ReviewPage";

const { Header, Sider, Content } = Layout;

const Sidebar = () => {
  const location = useLocation();
  const showSidebar = !["/register", "/"].includes(location.pathname); // Exclude sidebar from register and login pages

  const [collapsed, setCollapsed] = useState(true); // Start with collapsed sidebar
  const [selectedMenuItem, setSelectedMenuItem] = useState("1");

  const navigate = useNavigate();

  const menuItems = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Dashboard",
      path: "/home",
      component: <DashBoard />,
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: "Menu",
      path: "/home/product",
      component: <ProductPage />,
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: "Bill",
      path: "/home/bill",
      component: <BillPage />,
    },
    {
      key: "4",
      icon: <UploadOutlined />,
      label: "Review",
      path: "/home/review",
      component: <ReviewPage />,
    },
  ];
  

  const handleMenuClick = (e) => {
    const menuItem = menuItems.find((item) => item.key === e.key);
    setSelectedMenuItem(e.key);
    if (menuItem) {
      navigate(menuItem.path);
    }
  };

  // Toggle sidebar collapse state
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setCollapsed(false); // Expand sidebar on larger screens
      } else {
        setCollapsed(true); // Collapse sidebar on smaller screens
      }
    };
    handleResize(); // Initial resize check
    window.addEventListener("resize", handleResize); // Listen for window resize events
    return () => window.removeEventListener("resize", handleResize); // Clean up event listener
  }, []);

  return (
    <>
      {showSidebar && (
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical mt-5 " />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              selectedKeys={[selectedMenuItem]}
              onClick={handleMenuClick}
            >
              {menuItems.map((item) => (
                <Menu.Item key={item.key} icon={item.icon} className="mt-3 fs-6">
                  {item.label}
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ padding: 0 , borderBottomLeftRadius: '5%'}}>
          {  window.innerWidth > 768 ? 
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={toggleSidebar}
                className="navclr"
                style={{ display: "block", marginRight: "auto", marginBottom: "8px" , marginTop: "19px"}} // Adjust button position
              />
          :""}
            </Header>
            <Content style={{ margin: "24px 16px", padding: 24, minHeight: 690 ,minWidth:"90%"}}>
              {menuItems.find((item) => item.key === selectedMenuItem)?.component}
            </Content>
          </Layout>
        </Layout>
      )}
    </>
  );
};

export default Sidebar;
