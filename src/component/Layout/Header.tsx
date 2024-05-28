import { CloseOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Input, MenuProps, Space } from "antd";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logos/logo.svg";
import DashboardIcon from "../../assets/sidebar-icons/DashboardIcon";
import DexAIIcon from "../../assets/sidebar-icons/DexAIIcon";
import MailIcon from "../../assets/sidebar-icons/MailIcon";
import NotificationIcon from "../../assets/sidebar-icons/NotificationIcon";
import PortfolioMapIcon from "../../assets/sidebar-icons/PortfolioMapIcon";
import PulseCockpitIcon from "../../assets/sidebar-icons/PulseCockpitIcon";
import SearchIcon from "../../assets/sidebar-icons/SearchIcon";
import SettingIcon from "../../assets/sidebar-icons/SettingIcon";
import VaultIcon from "../../assets/sidebar-icons/VaultIcon";

const headerLinks = [
  {to: "/dashboard", title: "Dashboard", icon: <DashboardIcon />},
  {to: "/pulse-cockpit", title: "Pulse cockpit", icon: <PulseCockpitIcon />},
  {to: "/portfolio-map", title: "Portfolio Map", icon: <PortfolioMapIcon />},
  {to: "/vault", title: "Vault", icon: <VaultIcon />},
  {to: "/dex-aI", title: "Dex AI", icon: <DexAIIcon />},
];

const Header = () => {
  const [isSearching, setIsSearching] = useState(false);
  const items: MenuProps["items"] = [
    {
      key: "1",
      danger: true,
      label: <Link to="/">Log Out</Link>,
    },
  ];

  const location = useLocation();

  return (
    <header className="flex justify-between items-center border-b border-border-color">
      <div className="flex gap-10 justify-center items-center">
        <Link
          to="/dashboard"
          className="px-4 my-2 flex justify-center items-center gap-2">
          <img src={Logo} width={40} />
          <span className="text-lg font-medium">PULSE.ai</span>
        </Link>
        <div className="px-4 my-2 border-l border-border-color">
          <ul className="flex justify-center gap-x-4 font-medium text text-border-color ">
            {headerLinks.map((headerLink) => {
              return (
                <li
                  key={headerLink.to}
                  className={`hover:text-white border-b-2 border-transparent hover:border-b-2 hover:border-white py-2 ${
                    location.pathname == headerLink.to
                      ? "border-b-2 border-white text-white"
                      : ""
                  }`}>
                  <Link
                    to={headerLink.to}
                    className="flex gap-2 justify-center items-center">
                    {headerLink.icon}
                    {headerLink.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="px-4 my-2 flex justify-evenly items-center gap-4">
        <div className="flex justify-center items-center">
          {isSearching && <Input placeholder="search..."></Input>}
          <span
            className="cursor-pointer pointer-events-auto"
            onClick={() => setIsSearching(!isSearching)}>
            {!isSearching ? <SearchIcon /> : <CloseOutlined className="text-[28px] px-2 py-2" />}
          </span>
        </div>
        <div>
          <MailIcon />
        </div>
        <Link to="/setting">
          <SettingIcon />
        </Link>
        <div>
          <NotificationIcon />
        </div>
        <div>
          <Dropdown menu={{items}}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Avatar size={24} icon={<UserOutlined size={12} />} />
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default Header;
