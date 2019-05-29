import React from "react";
import { Link } from "react-router-dom";

export class NavBar extends React.Component{
    
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">React App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            {/* <a className="nav-link" href="#">Faculty <span className="sr-only">(current)</span></a> */}
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Department</a> */}
                            <Link className="nav-link" to="/faculty">Faculty</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Department</a> */}
                            <Link className="nav-link" to="/department">Department</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

