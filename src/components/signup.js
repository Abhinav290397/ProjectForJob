import { Button, Form, Input } from "antd";
import "./signup_login.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Signup = () => {

    const navigate = useNavigate();

    const[form] = Form.useForm(); 
    //In the case of Ant Design’s Form component, it provides its own useForm hook to create a reference to the form.
    //a form instance that provides several methods to interact with the form, such as resetFields to reset all fields to their initial values
    //When you call Form.useForm(), you get an array with the form instance as the first element. 
    //You can then pass this instance to the form prop of the Form component to connect the form instance with the Form component. 
    //This allows you to call the methods provided by the form instance anywhere in your component, such as inside your handleFinish function.

    const handleFinish = (values) => {  //values is the obj having username,email & password , it comes when we submitted the forrm.
        //checking password.
        let passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{6,}$/; //regular expreession.regex
        if(!passwordPattern.test(values.password)){
            alert("Password must contain atleast one digit,one character and one special character and have a minimum length of 6");
            return;
        }

        let existingUsers = JSON.parse(localStorage.getItem("users")) || [];    //Data is stored in localStorage as - users : [{username,email,password},{},{}...]

        let userExists = false;

        existingUsers.forEach((x) => {
            if(x.username === values.username || x.email === values.email){
                alert("User with this username or email already exists");
                userExists = true;
            }
        })  
        if(!userExists){
            existingUsers.push(values);
            localStorage.setItem("users", JSON.stringify(existingUsers)); //again set the value of "users" as [{},{},{}] in local storage
            form.resetFields();
            navigate("/dashboard",{state:{username: values.username}});
        }
    }
    useEffect(() => {
        let AlllUsers = JSON.parse(localStorage.getItem("users"));
        console.log(AlllUsers);
            
    },[]);
    return(
        <div className="form-container">
            <Form form={form} className="form" layout="vertical" onFinish={handleFinish}>
            <h3>SignUp</h3>
                <Form.Item name="username" label="Username" rules={[{required:true,message:"username is required"}]}>
                    <Input placeholder="username" />
                </Form.Item>

                <Form.Item name="email" label="Email" rules={[{type:"email", message:"invalid email"}, {required:true, message:"email is required"}]}>
                    <Input placeholder="email"/>
                </Form.Item>

                <Form.Item name="password" label="Password" rules={[{required:true, message:"password is required"}]}>
                    <Input.Password placeholder="password"/>
                </Form.Item>

                <Button className="btn" type="primary" htmlType="submit">SignUp</Button>
                <Button className="btn" type="primary">
                    <Link to="/login">Already have an account</Link>
                </Button>
            </Form>.
        </div>
    )
}
export default Signup;