import React from "react";
import axios from "axios";
import api from "../../Service/apiConfig";

export class FacultyUpdate extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            primaryId: null,
            formData: {
                id: null,
                name: ''
            }
        }

        // this.handleChange = this.handleChange.bind(this);
        // this.UpdateData = this.UpdateData.bind(this);
    }

    componentDidMount(){
        var Id = this.props.match.params.id;
        this.state.primaryId = Id;
        //console.log(this.state);
        axios.get(`${api.apiUrl}Faculty/${Id}`)
            .then((res)=>{
                console.log(res.data)
                this.setState({ formData: res.data })
            })
    }

    handleChange = (e) => {
        const current = Object.assign({}, this.state.formData, {name: e.target.value });
        this.setState({
            formData: current
        })
    };

    UpdateData = () => {
        axios.put(`${api.apiUrl}Faculty/${this.state.primaryId}`, this.state.formData)
            .then(()=>{
                alert('Updated!!')
            }, 
                (e)=>{
                    alert(e)
                }
            )
        // console.log(this.state.formData)
    }

    render(){
        
        return (
            <div>
                <form onSubmit={this.UpdateData}>
                    <div className="form-group">
                        <label>Faculty Name</label>
                        <input type="text" value={this.state.formData.name} className="form-control" onChange={this.handleChange}  aria-describedby="emailHelp" placeholder="Enter faculty name" />
                    </div>
                    <pre>
                    {/* {this.state.formData} */}
                    </pre>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
