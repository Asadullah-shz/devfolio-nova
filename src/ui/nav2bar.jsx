import React from 'react'
import { MoveLeft } from 'lucide-react';
import { Divider, Dropdown, Space, theme } from "antd";
const { useToken } = theme;

const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        English
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        French
      </a>
    ),
    disabled: false,
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        Spanish
      </a>
    ),
    disabled: false,
  },
];


const nav2bar = () => {

  const { token } = useToken();
  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };
  const menuStyle = {
    boxShadow: "none",
  };


  return (
    <>
      <div className=" ">
        <nav className="flex items-center justify-between  flex-wrap p-7  text-white align-center">
          <a
            href="http://localhost:3000"
            className="items-center text-lg pl-5 "
          >
            <h2 className="font-audiowide text-4xl pl-5 ">   <MoveLeft /></h2>
          </a>
          <li className="flex space-x-8  items-center text-neutral-500 font-medium">
            <ul>
              <a href="/">Home</a>
            </ul>
            <ul>
              <a href="/about">About</a>
            </ul>
            <ul>
              <a href="/">Project</a>
            </ul>
            <ul>
              <a href="/">Experience</a>
            </ul>
            <div className="pl-9">
              <Dropdown
                className=""
                menu={{ items }}
                popupRender={(menu) => (
                  <div style={contentStyle}>
                    {React.cloneElement(menu, { style: menuStyle })}
                    <Divider style={{ margin: 0 }} />
                  </div>
                )}
                X
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="hover:underline">EN</Space>
                </a>
              </Dropdown>
            </div>

            <button className="border border-gray-600 text-white px-6 py-2 rounded-sm hover:bg-white/10 transition-colors">
              <a href="mailto:asadshzdev@gmail.com">asadshzdev@gmail.com</a>
            </button>
          </li>
        </nav>
      </div>
    </>
  )
}

export default nav2bar
