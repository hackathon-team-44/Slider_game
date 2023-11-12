import style from "./NavBar.module.css";
import { useState } from "react";
import { Menu } from "antd";
const items = [
  // {
  //   label: '?',
  //   key: 'mail',
  // },
  {
    label: "Рейтинг игроков",
    key: "NavBar",
  },
  {
    label: "Личный кабинет",
    key: "lk",
    children: [
      {
        label: "Вход",
        key: "setting:1",
      },
      {
        label: "Регистрация",
        key: "setting:2",
      },
    ],
  },
  {
    label: "Выбрать картинку",
    key: "SubMenu",
    children: [
      {
        type: "group",
        children: [
          {
            label: "Магия",
            key: "setting:5",
          },
          {
            label: "Герои",
            key: "setting:6",
          },
          {
            label: "Нежность",
            key: "setting:7",
          },
          {
            label: "Загрузить свою",
            key: "setting:8",
          },
        ],
      },
    ],
  },
  // {
  //   label: (
  //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
  //       Navigation Four - Link
  //     </a>
  //   ),
  //   key: 'alipay',
  // },
];
const NavBar = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      className={style.navbar}
    />
  );
};
export default NavBar;
