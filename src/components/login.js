import { Button, Form, Input } from "antd";
import "./signup_login.css"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleFinish = (values) => {
        let existingUsers = JSON.parse(localStorage.getItem("users"));

        let user = null;
        existingUsers.forEach((x) => {
            if(x.username === values.username && x.password === values.password){
                user = x;
            }
        })

        if(user){
            //redirecting to another page.
            navigate("/dashboard",{state:{username:values.username}});
            console.log("American android");
        }
        else{
            alert("Invalid User ans Password");
        }
    }
    return(
        <div className="form-container">
           <Form className="form" layout="vertical" onFinish={handleFinish}>
            <h3>Login</h3>
            <Form.Item name="username" label="Username" rules={[{required:true, message:"username is required"}]}>
                <Input placeholder="username" />
            </Form.Item>

            <Form.Item name="password" label="Password" rules={[{required:true, message:"password is required"}]}>
                <Input.Password placeholder="password"/>
            </Form.Item>

            <Button className="btn" type="primary" htmlType="submit">Login</Button>
           </Form>
        </div>
    )
}
export default Login;

