import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import api from "../../Service/apiConfig";

export class FacultyList extends React.Component{

    constructor(){
        super();

        this.state = {
            facultyList: []
        }
    }

    GetFatulty = () => {
        axios.get( api.apiUrl + 'Faculty')
        .then((rec)=>{
            this.setState({facultyList: rec.data});
        })
    }

    componentDidMount(){
        this.GetFatulty();
    }

    DeleteFaculty = (_id) =>{
        
        if (window.confirm('Do you want to delete?')) {
            axios.delete( api.apiUrl + `Faculty/${_id}`)
            .then((rec)=>{
                alert('successfully Delete!!!')
                this.GetFatulty();
            }, (e)=>{
                alert(e);
            })
        }
    }



    render(){
        return (
            <div>
                <h4>Faculty list</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Faculty</th>
                            <th colSpan="2">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.facultyList.map((item)=>{
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>
                                        <Link className="nav-link" to={`/faculty/edit/${item.id}`}>Edit</Link>
                                    </td>
                                    <td>
                                        <button onClick={ () => {this.DeleteFaculty(item.id)} }>Delete</button>
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