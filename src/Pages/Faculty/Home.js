import React from "react";
import { Link, Route } from "react-router-dom";
import { FacultyList } from "./FacultyList";
import { FacultyCreate } from "./FacultyCreate";
import { FacultyUpdate } from "./FacultyUpdate";

export class FacultyHome extends React.Component{
    
    render(){
        return (
            <div>
                <h2>Welcome to Faculty page</h2>

                <div className="container">
                    <div class="row">
                        <div className="col-sm-3">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link to="/faculty/list">Faculty list</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="/faculty/create">Add new faculty</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-9">
                            <Route path="/faculty/list" component={FacultyList} />
                            <Route path="/faculty/create" component={FacultyCreate} />
                            <Route path="/faculty/edit/:id" component={FacultyUpdate} />
                        </div>
                    </div>
                </div>

                
                
                
            </div>
        )
    }
}