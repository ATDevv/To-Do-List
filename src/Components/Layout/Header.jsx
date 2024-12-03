import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd"
import { UserOutlined, SearchOutlined, AppstoreOutlined } from '@ant-design/icons'
import { useState } from "react"

const Header = () => {
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const items = [
        {
            label: <NavLink to='/'>About Me</NavLink>,
            key: 'mail',
            icon: <SearchOutlined />,
        },
        {
            label: <NavLink to='/users'>Users</NavLink>,
            key: 'users',
            icon: <UserOutlined />,
        },
        {
            label: <NavLink to='/todo'>To Do</NavLink>,
            key: 'todo',
            icon: <AppstoreOutlined />
        }
    ];

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items} 
        />
    )

}

export default Header