import React, { Component } from 'react';
import { MenuItems} from "./MenuItems"
import { Link } from "react-scroll";


class Navbar extends Component {
    state = { clicked: false}
    handleClick = () => {
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
                            <li key={index}>
                                <Link
                                    activeClass="active"
                                    className={item.cName}
                                    href={item.url}
                                    to={item.link}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    key={item.key}
                                >
                                            {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
export {Navbar}