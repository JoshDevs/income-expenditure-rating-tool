import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { PersonalDetailState } from "../../interfaces/PersonalDetailState";

const initialState: PersonalDetailState = {
  person: {
    name: {
      first: "",
      last: ""
    },
    address: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: ""
  },
  income: {
    salary: undefined,
    other: undefined,
},
  expenditure: {
    food: undefined,
    mortgage: undefined,
    rent: undefined,
    travel: undefined,
    utilities: undefined,
  },
  debtPayments: {
    loans: undefined,
    creditCards: undefined,
  }
};

export const Home: React.FC = () => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate("/details", {state: initialState});
    };

    return (
        <div>
            <h1>Welcome to your I&E statement generator</h1>
            <Button size="large" color="inherit" variant="outlined" onClick={onClickHandler}>Click to Start</Button>
        </div>
    )
}
