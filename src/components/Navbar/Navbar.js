import Item from 'antd/lib/list/Item';
import React, { Component } from 'react';
import { MenuItems} from "./MenuItems"
// import { PlusCircleOutlined } from '@ant-design/icons';
import Icon from '../../images/logo-icon.svg'
import { Link, animateScroll as scroll } from "react-scroll";


class Navbar extends Component {
    state = { clicked: false}

    handleClick = () => {
        console.log('click')
        this.setState({clicked: !this.state.clicked})
    }



    render() {
        return (
            <nav className="NavbarItems">
                    <h4 className="navbar-logo">
                  
                        <i className="fab navbar-icon" ></i>
                    </h4>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) =>{
                        return (
                                <Link
                                    activeClass="active"
                                    to={item.link}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <li key={index}>
                                        <a className={item.cName} href={item.url}>
                                            {item.title}
                                        </a>
                                    </li>
                                </Link>

                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export {Navbar}