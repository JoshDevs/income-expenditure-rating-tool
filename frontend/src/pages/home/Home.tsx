import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { InitialState } from "../../state/InitialState";

export const Home: React.FC = () => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate("/details", {state: InitialState});
    };

    return (
        <div>
            <h1>Welcome to your I&E statement generator</h1>
            <Button size="large" color="inherit" variant="outlined" onClick={onClickHandler}>Click to Start</Button>
        </div>
    )
}
