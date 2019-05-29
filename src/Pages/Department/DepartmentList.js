import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import api from '../../Service/apiConfig'

export class DepartmentList extends React.Component{
    
    state = {
        departmentList: []
    }

    GetDepartment = () => {
        axios.get(api.apiUrl + 'Department')
            .then((rec)=>{
                this.setState({departmentList: rec.data})

            })
    }

    componentDidMount(){
        this.GetDepartment();
    }

    DeleteDepartment = (_id) =>{
        
        if (window.confirm('Do you want to delete?')) {
            axios.delete( api.apiUrl + `Department/${_id}`)
            .then((rec)=>{
                alert('successfully Delete!!!')
                this.GetDepartment();
            }, (e)=>{
                alert(e);
            })
        }
    }

    render(){
        
        return (
            <div>
                <h4>Department list</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Department</th>
                            <th>Faculty</th>
                            <th colSpan="2">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.departmentList.map((item)=>{
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.faculty.name}</td>
                                    <td>
                                        <Link className="nav-link" to={`/department/edit/${item.id}`}>Edit</Link>
                                    </td>
                                    <td>
                                        <button onClick={ () => {this.DeleteDepartment(item.id)} }>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                
            </div>
        )
    }
}
