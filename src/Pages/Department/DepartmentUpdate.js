import React from "react";
import axios from "axios";
import api from "../../Service/apiConfig";

export class DepartmentUpdate extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            primaryId: '',
            facultyList: [],
            formData: {
                Name: '',
                FacultyId: "",
                Code: ""
            }
        }
    }

    componentDidMount(){
        const Id = this.props.match.params.id;
        this.setState({primaryId: Id});


        axios.get( api.apiUrl + 'Faculty')
        .then((rec)=>{
            this.setState({facultyList: rec.data});
        })

        axios.get( api.apiUrl + 'Department/' + Id)
        .then((rec)=>{
            const data = rec.data;
            this.setState({formData: 
                {
                    Name: data.name,
                    FacultyId: data.facultyId,
                    Code: data.code
                }
            });
        })

        
    }

    UpdateState = (_newObject) => {
        var margedData = Object.assign({}, this.state.formData, _newObject);
        this.setState({formData:margedData})
    };

    UpdateDepartment = () => {
        axios.put( `${api.apiUrl}Department/${this.state.primaryId}`, this.state.formData)
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
                <form>
                    <div className="form-group">
                        <label>Department Name</label>
                        <input type="text" value={this.state.formData.Name} onChange={(e) => this.UpdateState({Name: e.target.value}) }
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
                        <input type="text" className="form-control" value={this.state.formData.Code} onChange={(e) => this.UpdateState({Code: e.target.value}) }
                         aria-describedby="emailHelp" placeholder="Enter Department Code" />
                    </div>
                    <pre>
                    </pre>
                    <button type="button" onClick={this.UpdateDepartment} className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
