import React from "react";

class AddContact extends React.Component{
    state={
        name:"",
        email:"",

    };
       add=(e)=>{
        e.preventDefault();
        if(this.state.name===""&&this.state.email===""){
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""});
        console.log(this.props);
        //this.props.history.push("/");
    };           
    render(){
        return(
            <div className="ui main"onSubmit={this.add}>
                <h2>AddContact</h2>
                <form className="ui form">
                    <div className="feild">
                        <label>Name</label>
                        <input type="text"name="name"placeholder="Name" 
                        value={(this.state.name)}
                        onChange={ (e)=>this.setState({name:e.target.value})
                    }/>

                    </div>
                    <div className="feild">
                        <label>Email</label>
                        <input type="text"name="email"placeholder="Email"value={(this.state.email)}
                        onChange={ (e)=>this.setState({email:e.target.value})}/>
                        <div>
                            <button className="ui button blue">Add</button>
                        </div>

                    </div>
                </form>
                    

            </div>
        );
    }

}
export default AddContact