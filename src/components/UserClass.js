import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
         user_info: {  name:"xyz",
            location:"dafault",
            email:"xyz@gamil.com"}
             
        }
    }
    async componentDidMount()
        {console.log("mount did called")
        const data = await fetch("https://api.github.com/users/mk-himanshu")
        const json = await data.json();

        this.setState({
            user_info : json,
        })
        
        

        
    }
        

    
    render(){
       
        return(
            
            <div className="user_card">
                
                <img src={this.state.user_info.avatar_url}></img>
                <h2>Name: {this.state.user_info.name}</h2>
                <h2>Location: {this.state.user_info.location}</h2>
                <h2>gmail:{this.state.user_info.email}</h2>
            </div>
         )
}
}
export default UserClass;