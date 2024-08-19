import {Card, Input, Button,Pagination} from "antd";
import "./style.css";
import { useState } from "react";

const Cards = ({info,setInfo,modelInfo,setModelInfo}) => {

    const[text,setText] = useState("");
    const[isSorted,setIsSorted] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Change this to your desired number of items per page

    const handleChange = (e) => {
        setText(e.target.value);
        if(e.target.value === ""){
            setInfo(modelInfo);
        }
        else{
            let newArr = modelInfo.filter((x) => {
                if(x.title.toLowerCase().startsWith(text.toLowerCase()))return x;
            });
            setInfo(newArr);
        }
    }

    const handleSorting = () => {
        console.log("clicked fosil");
        
        if(isSorted){
            setInfo(modelInfo);
            setIsSorted(false);
        }
        else{
            let sortedArray = [...info].sort((a,b) => {
                if(a.title > b.title)return 1;
                if(a.title < b.title)return -1;
                return 0;
            });
            setInfo(sortedArray);
            setIsSorted(true);
        }        
    }

    const createPageItems = () => {
        let itemsForCurrentPage = info.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
        return itemsForCurrentPage.map((x, i) => {
            return (
                <Card className={i%2 === 0 ? "blue" : "red"} key={i}  bordered={false} style={{ width: 350 , margin:"10px"}}>
                    <p >{x.id}</p>
                    <p style={{fontSize:"16px", fontWeight:"600"}}>{x.title.toUpperCase()}</p>
                    <p>{x.body}</p>
                </Card>
            );
        });
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    return(
        <div>
            <div className="main-container">
                <div className="container" >
                    <Input style={{width:"40%",boxShadow:"2px 2px 8px black"}} placeholder="search by title" onChange={(e) => handleChange(e)}/>   
                    <Button style={{boxShadow:"2px 2px 8px black"}} onClick={handleSorting}>Sort</Button>
                </div>
            </div>

            <div className="card-container">
                {
                    createPageItems()
                }
            </div>
            <div>
                <Pagination current={currentPage} onChange={handlePageChange} total={info.length} pageSize={itemsPerPage} />
            </div>
        </div>
    )
}
export default Cards;



