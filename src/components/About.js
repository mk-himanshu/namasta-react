// import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return(
        <div className="m-4 p-4">
            <h1 className="font-bold m-5">About</h1>
            <h2 className="m-4">Founder and team members</h2>
            {/* <User name ="Himanshu Kumar" location="Sherghati" email="himanshu@gmail.com"/> */}
            <UserClass name ="Rishu Kumar" location="Bhagalpur" email="rishu@gmail.com"/>
        </div>
    )
};
export default About;