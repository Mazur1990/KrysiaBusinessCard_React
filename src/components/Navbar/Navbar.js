import Item from 'antd/lib/list/Item';
import React, { Component } from 'react';
import { MenuItems} from "./MenuItems"
// import { PlusCircleOutlined } from '@ant-design/icons';
import {Button} from '../Button'


class Navbar extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }



    render() {
        return (
            <nav className="NavbarItems">
                <h4 className="navbar-logo">Śmieszniak<i className="fab fa-react"></i></h4>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) =>{
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                {/* <Button>Sign up</Button> */}
            </nav>
        )
    }
}

export {Navbar}