import { Button } from "antd";
import "./navbar.css";
import ToggleBtn from "./togglebtn";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "../components/loader";

const Navbar = ({username,isCardView,setIsCardView}) => {

    const[isLoading,setIsLoading] = useState(false);

    const navigate = useNavigate();
    const logout = () => {
        setIsLoading(true);
        navigate("/loading");
        setTimeout(() => {
            setIsLoading(false);
            navigate("/")
        },2000);
    }
    return(
        <div className="nav-container">
            <div className="nav">
                <p>Welcome  {username}</p>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"50px"}}>
                <ToggleBtn isCardView={isCardView} setIsCardView={setIsCardView}/>
                <Button type="link" style={{fontSize:"24px"}} onClick={logout} >Log Out</Button>
                </div>
            </div>
        </div>
    )
}
export default Navbar;