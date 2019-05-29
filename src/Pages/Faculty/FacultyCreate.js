import React from "react";
import axios from "axios";
import api from "../../Service/apiConfig";

export class FacultyCreate extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            formData: {
                Name: ''
            }
        }
    }


    handleChange = (e) => {
        this.setState({formData:{Name: e.target.value}})
    };

    SaveData = () => {
        axios.post( api.apiUrl + "Faculty", this.state.formData)
            .then(()=>{
                alert('success!!')
            }, 
                (e)=>{
                    alert(e)
                }
            )
    }

    render(){
        
        return (
            <div>
                <h4>Add New Faculty</h4>
                <form onSubmit={this.SaveData}>
                    <div className="form-group">
                        <label>Faculty Name</label>
                        <input type="text" className="form-control" onChange={this.handleChange}  aria-describedby="emailHelp" placeholder="Enter faculty name" />
                    </div>
                    <pre>
                    {/* {this.state.formData.Name} */}
                    </pre>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
