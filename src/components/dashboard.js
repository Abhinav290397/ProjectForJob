
import { useEffect, useState } from "react";
import Cards from "../view/card";
import Grids from "../view/grid";
import Navbar from "../view/navbar";
import { useLocation } from "react-router-dom";
import Loader from "./loader";
import { Button, Input } from "antd";

import "./style.css";


const Dashboard = () => {

    const location = useLocation();
    const username = location.state ? location.state.username : "Guest";

    const[info,setInfo] = useState([]);
    const[modelInfo,setModelInfo] = useState([]);
    const[isLoading,setIsLoading] = useState(false);

    const[isCardView,setIsCardView] = useState(true); 

    useEffect(() => {
        setIsLoading(true);
        fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
            return response.json();
        }).then((data) => {
            setIsLoading(false);
            setInfo(data);
            setModelInfo(data); 
            console.log(data);
        }).catch((err) => {
            setIsLoading(false);
            console.log(err);
        })
    },[]);

    return(
        <div>
            <Navbar username={username} info={info} isCardView={isCardView} setIsCardView={setIsCardView}/>
            {
                isLoading ? <Loader/>  : (
                    <div >
                        {
                            isCardView ? <Cards info={info} setInfo={setInfo} modelInfo={modelInfo} setModelInfo={setModelInfo} /> : <Grids info={info}/>
                        }
                    </div>
                )
            }
        </div>
    )
}
export default Dashboard;