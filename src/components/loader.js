import { Flex, Spin } from "antd";
const Loader = () => {  //Taken from antd library.
    return(
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Flex align="center" gap="middle">
            <Spin size="large" />
                <Spin />
            <Spin size="large" />
            </Flex>
        </div>
    )
}
export default Loader;