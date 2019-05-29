import React from "react";
import axios from "axios";
import api from "../../Service/apiConfig";

export class DepartmentCreate extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            facultyList: [],
            formData: {
                Name: '',
                FacultyId: "",
                Code: null
            }
        }
    }


    componentDidMount(){
        axios.get( api.apiUrl + 'Faculty')
        .then((rec)=>{
            this.setState({facultyList: rec.data});
        })
    }

    UpdateState = (_newObject) => {
        var margedData = Object.assign({}, this.state.formData, _newObject);
        this.setState({formData:margedData})
    };

    SaveData = () => {
        axios.post( api.apiUrl + "Department", this.state.formData)
            .then(()=>{
                alert('success!!')
            }, 
                (e)=>{
                    alert(e)
                }
            )
        // console.log(this.state.formData);
    }

    render(){
        return (
            <div>
                <h4>Add New Department</h4>
                <form>
                    <div className="form-group">
                        <label>Department Name</label>
                        <input type="text" onChange={(e) => this.UpdateState({Name: e.target.value}) }
                        className="form-control"  aria-describedby="emailHelp" placeholder="Enter Department name" />
                    </div>
                    <div className="form-group">
                        <label>Faculty</label>
                        <select className="custom-select" 
                        onChange={(e) => this.UpdateState({FacultyId: e.target.value}) }
                        value={this.state.formData.FacultyId}>
                            {this.state.facultyList.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Code</label>
                        <input type="text" className="form-control" onChange={(e) => this.UpdateState({Code: e.target.value}) }
                         aria-describedby="emailHelp" placeholder="Enter Department Code" />
                    </div>
                    <pre>
                    {/* {this.state.formData.Name} */}
                    </pre>
                    <button type="button" onClick={this.SaveData} className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
