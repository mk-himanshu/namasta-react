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
            
            <div className="flex ">
                <div className="user_card m-3 w-[250px] h-[300px] bg-gray-200   hover:bg-pink-200 rounded-md">
                
                <img className=" w-28 rounded-full  m-auto p-2" src={this.state.user_info.avatar_url}></img>
                <h2 className="m-auto p-2">Name: {this.state.user_info.name}</h2>
                <h2 className="m-auto p-2">Location: {this.state.user_info.location}</h2>
                <h2 className="m-auto p-2">gmail:{this.state.user_info.email}</h2>
                <h2 className="m-auto p-2">college: BCE Bhagalpur</h2>
            </div>
            <div className="user_card m-3 w-[250px] h-[300px] bg-gray-200   hover:bg-pink-200 rounded-md">
                
                <img className=" w-28 rounded-full  m-auto p-2" src={this.state.user_info.avatar_url}></img>
                <h2 className="m-auto p-2">Name: {this.state.user_info.name}</h2>
                <h2 className="m-auto p-2">Location: {this.state.user_info.location}</h2>
                <h2 className="m-auto p-2">gmail:{this.state.user_info.email}</h2>
                <h2 className="m-auto p-2">college: BCE Bhagalpur</h2>
            </div>
            </div>
         )
}
}
export default UserClass;