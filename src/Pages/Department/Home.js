import React from "react";
import { Link, Route } from "react-router-dom";
import { DepartmentList } from "./DepartmentList";
import { DepartmentCreate } from "./DepartmentCreate";
import { DepartmentUpdate } from "./DepartmentUpdate";

export class DepartmentHome extends React.Component{
    
    render(){
        return (
            <div>
                <h2>Welcome to Department page</h2>

                <div className="container">
                    <div class="row">
                        <div className="col-sm-3">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link to="/department/list">Department list</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="/department/create">Add new department</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-9">
                            <Route path="/department/list" component={DepartmentList} />
                            <Route path="/department/create" component={DepartmentCreate} />
                            <Route path="/department/edit/:id" component={DepartmentUpdate} />
                        </div>
                    </div>
                </div>

                

            </div>
        )
    }
}