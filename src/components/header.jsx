import React from 'react'
import {Link} from "react-router-dom";
import { FaHome,FaQuestion,FaDatabase } from 'react-icons/fa';


export default function Header() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to={"/"}>Home<FaHome/></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/why"}>Why<FaQuestion/></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/pass"}>Passing<FaDatabase/></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
