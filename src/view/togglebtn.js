import { Switch } from "antd";

const ToggleBtn = ({isCardView,setIsCardView}) => {

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
        setIsCardView(checked);
      };
    return(
        <div>
            <Switch defaultChecked={isCardView} onChange={onChange} />
        </div>
    )
}
export default ToggleBtn;