import { useState } from "react"

const User = (props) =>{
    const [count ,set_count] = useState(0);
    const [count1 , set_count1] = useState(1);
    return(
        <div className="user_card">
            <h1>{"count " + count}</h1>
            <h1>count: {count1}</h1>
            <h2>Name:{props.name}</h2>
            <h2>Location: {props.location}</h2>
            <h2>gmail:{props.email}</h2>
        </div>
    )
}
export default User