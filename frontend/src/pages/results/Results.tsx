import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import { IncomeExpenditureRating } from "../../interfaces/IncomeExpenditureRating";
import { IncomeExpenditureRequestBody } from "../../api/dto/IncomeExpenditureRequestBody";
import { fetchIncomeExpenditureRating } from "../../api/fetchIncomeExpenditureRating";
import { PersonalDetailState } from "../../interfaces/PersonalDetailState";
import { InitialState } from "../../state/InitialState";

export const Results: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as PersonalDetailState;
    const [incomeExpenditureRating, setIncomeExpenditureRating] = React.useState(state.incomeExpenditureRating as IncomeExpenditureRating);

    React.useEffect(() => {
        const requestBody: IncomeExpenditureRequestBody = {
            income: {...state.income},
            expenditure: {...state.expenditure},
            debtPayments: {...state.debtPayments}
        }

        fetchIncomeExpenditureRating(requestBody).then(response => response && setIncomeExpenditureRating({...response}));

        // NOTE: React hooks dependency array empty to only run effect once on component mount
    }, [])

    const onClickHandler = () => {
        navigate("/", {state: InitialState});
    }

    return (
        <>
            {incomeExpenditureRating.rating.grade && incomeExpenditureRating.rating.ratio && incomeExpenditureRating.disposableIncome ? 
                <Fade in={true}>
                    <div className="income-expenditure-rating">
                        <Typography variant="h3" margin="1rem">
                            Income & Expenditure Rating
                        </Typography>
                        <Typography variant="h4" margin="1rem">
                            {state.person.name.first} {state.person.name.last}
                        </Typography>
                        <Typography variant="h5" component="div" margin="1rem">
                            I&E Rating: {incomeExpenditureRating.rating.grade}
                            <br />
                            Expenditure-to-Income Ratio: {incomeExpenditureRating.rating.ratio}
                        </Typography>
                        <Typography variant="h5" component="div" margin="1rem">
                            Disposable Income: £{incomeExpenditureRating.disposableIncome}
                        </Typography>
                        <Button size="large" onClick={onClickHandler} color="inherit" variant="outlined">OK</Button>
                    </div>
                </Fade> :
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress color="inherit"/>
                </Box>
            }
        </>
    )
}