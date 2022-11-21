import React from "react";
import styles from "./ProgressiveForm.module.css"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import { PersonalDetailState } from "../../interfaces/PersonalDetailState";
import { DetailPanelKeys } from "../../enums/DetailPanelKeys";
import { FinanceDetailTextFieldKeys, PersonalDetailTextFieldKeys } from "../../enums/TextFieldKeys";
import { useImmer } from "use-immer";
import { Summary } from "../summary/Summary";
import { fetchIncomeExpenditureRating } from "../../api/fetchIncomeExpenditureRating";
import { IncomeExpenditureRequestBody } from "../../api/dto/IncomeExpenditureRequestBody";

const inputProps = {style: {backgroundColor: "white", borderRadius: "0.5rem"}};

export const ProgressiveForm: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const [expanded, setExpanded] = React.useState(DetailPanelKeys.PERSONAL)
    const [newState, setNewState] = useImmer(location.state as PersonalDetailState);

    const onProcessClickHandler = async () => {
        const requestBody: IncomeExpenditureRequestBody = {
            income: newState.income,
            expenditure: newState.expenditure,
            debtPayments: newState.debtPayments
        }
        
        const response = await fetchIncomeExpenditureRating(requestBody);
    }

    const onBackButtonHandler = () => {
        if (expanded === DetailPanelKeys.SUMMARY) setExpanded(DetailPanelKeys.FINANCIAL);
        if (expanded === DetailPanelKeys.FINANCIAL) setExpanded(DetailPanelKeys.PERSONAL);
    }
    
    const onPersonalNextClickHandler = () => {
        navigate(".", {state: newState})
        setExpanded(DetailPanelKeys.FINANCIAL);
    }

    const onFinancesNextClickHandler = () => {
        navigate(".", {state: newState})
        setExpanded(DetailPanelKeys.SUMMARY);
    }

    const onInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        switch(event.target.name) {
            case PersonalDetailTextFieldKeys.FIRST_NAME: {
                setNewState(draft => {
                    draft.person.name.first = event.target.value;
                });
                break;
            }
            case PersonalDetailTextFieldKeys.LAST_NAME: {
                setNewState(draft => {
                    draft.person.name.last = event.target.value;
                });
                break;
            }
            case PersonalDetailTextFieldKeys.EMAIL: {
                setNewState(draft => {
                    draft.person.email = event.target.value;
                });
                break;
            }
            case PersonalDetailTextFieldKeys.PHONE: {
                setNewState(draft => {
                    draft.person.phoneNumber = event.target.value;
                });
                break;
            }
            case PersonalDetailTextFieldKeys.DOB: {
                setNewState(draft => {
                    draft.person.dateOfBirth = event.target.value;
                });
                break;
            }
            case PersonalDetailTextFieldKeys.ADDRESS: {
                setNewState(draft => {
                    draft.person.address = event.target.value;
                });
                break;
            }
            case FinanceDetailTextFieldKeys.LOANS: {
                setNewState(draft => {
                    draft.debtPayments.loans = Number(event.target.value);
                });
                break;
            }
            case FinanceDetailTextFieldKeys.CREDIT_CARDS: {
                setNewState(draft => {
                    draft.debtPayments.creditCards = Number(event.target.value);
                });
                break;
            }
            case FinanceDetailTextFieldKeys.FOOD: {
                setNewState(draft => {
                    draft.expenditure.food = Number(event.target.value);
                });
                break;
            }
            case FinanceDetailTextFieldKeys.TRAVEL: {
                setNewState(draft => {
                    draft.expenditure.travel = Number(event.target.value);
                });
                break;
            }
            case FinanceDetailTextFieldKeys.UTILITIES: {
                setNewState(draft => {
                    draft.expenditure.utilities = Number(event.target.value);
                });
                break;
            }
            case FinanceDetailTextFieldKeys.RENT: {
                setNewState(draft => {
                    draft.expenditure.rent = Number(event.target.value);
                });
                break;
            }
            case FinanceDetailTextFieldKeys.MORTGAGE: {
                setNewState(draft => {
                    draft.expenditure.mortgage = Number(event.target.value);
                });
                break;
            }
            case FinanceDetailTextFieldKeys.OTHER: {
                setNewState(draft => {
                    draft.income.other = Number(event.target.value);
                });
                break;
            }
            case FinanceDetailTextFieldKeys.SALARY: {
                setNewState(draft => {
                    draft.income.salary = Number(event.target.value);
                });
                break;
            }
            default: {
                break;
            }
        }
    }

    return (
        <>
            <Accordion expanded={expanded === DetailPanelKeys.PERSONAL} sx={{background: "inherit", color: "inherit", border: "0.1rem grey solid"}}>
                <AccordionSummary id="details-panel-header" aria-controls="details-panel-content">
                    <Typography fontSize="large">Personal Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box className="progressive-form-person-container" component="form" sx={{ width: 500, maxWidth: "100%" }}>
                        <TextField type="text" name={PersonalDetailTextFieldKeys.FIRST_NAME} key={PersonalDetailTextFieldKeys.FIRST_NAME} required fullWidth autoComplete="off" variant="outlined" placeholder="First Name" margin="normal" inputProps={inputProps} onChange={onInputHandler} />
                        <TextField type="text" name={PersonalDetailTextFieldKeys.LAST_NAME} key={PersonalDetailTextFieldKeys.LAST_NAME} required fullWidth autoComplete="off" variant="outlined" placeholder="Last Name" margin="normal" inputProps={inputProps} onChange={onInputHandler} />
                        <TextField type="text" name={PersonalDetailTextFieldKeys.EMAIL} key={PersonalDetailTextFieldKeys.EMAIL} required fullWidth autoComplete="off" variant="outlined" placeholder="Email" margin="normal" inputProps={inputProps} onChange={onInputHandler} />
                        <TextField type="text" name={PersonalDetailTextFieldKeys.PHONE} key={PersonalDetailTextFieldKeys.PHONE} required fullWidth autoComplete="off" variant="outlined" placeholder="Phone Number" margin="normal" inputProps={inputProps} onChange={onInputHandler} />
                        <TextField type="text" name={PersonalDetailTextFieldKeys.DOB} key={PersonalDetailTextFieldKeys.DOB} required fullWidth autoComplete="off" variant="outlined" placeholder="Date of Birth (DD/MM/YYYY)" margin="normal" inputProps={inputProps} onChange={onInputHandler} />
                        <TextField type="text" name={PersonalDetailTextFieldKeys.ADDRESS} key={PersonalDetailTextFieldKeys.ADDRESS} required fullWidth autoComplete="off" variant="outlined" placeholder="Address" margin="normal" inputProps={inputProps} onChange={onInputHandler} />
                        <Button size='large' variant="outlined" color="inherit" fullWidth onClick={onPersonalNextClickHandler}>Next</Button>
                    </Box>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === DetailPanelKeys.FINANCIAL} sx={{background: "inherit", color: "inherit", border: "0.1rem grey solid"}}>
                <AccordionSummary id="finances-panel-header" aria-controls="finances-panel-content">
                    <Typography fontSize="large">Financial Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box className="progressive-form-finance-container" component="form" sx={{ width: 500, maxWidth: "100%" }}>
                        <div className="finance-breakdown-container">
                            <Typography fontSize="large">Income £</Typography>
                            <TextField type="number" name={FinanceDetailTextFieldKeys.SALARY} key={FinanceDetailTextFieldKeys.SALARY} required autoComplete="off" variant="outlined" placeholder="Salary" margin="normal" inputProps={inputProps} onChange={onInputHandler} />
                            <TextField type="number" name={FinanceDetailTextFieldKeys.OTHER} key={FinanceDetailTextFieldKeys.OTHER} autoComplete="off" variant="outlined" placeholder="Other" margin="normal" inputProps={inputProps} onChange={onInputHandler} />
                        </div>
                        <div className={styles["finance-breakdown-container"]}>
                            <Typography fontSize="large">Expenditure £</Typography> 
                            <TextField type="number" name={FinanceDetailTextFieldKeys.MORTGAGE} key={FinanceDetailTextFieldKeys.MORTGAGE} autoComplete="off" variant="outlined" placeholder="Mortgage" margin="normal" inputProps={inputProps} onChange={onInputHandler} />
                            <TextField type="number" name={FinanceDetailTextFieldKeys.RENT} key={FinanceDetailTextFieldKeys.RENT} autoComplete="off" variant="outlined" placeholder="Rent" margin="normal" inputProps={inputProps} onChange={onInputHandler} />
                            <TextField type="number" name={FinanceDetailTextFieldKeys.UTILITIES} key={FinanceDetailTextFieldKeys.UTILITIES} autoComplete="off" variant="outlined" placeholder="Utilities" margin="normal" inputProps={inputProps} onChange={onInputHandler} />
                            <TextField type="number" name={FinanceDetailTextFieldKeys.TRAVEL} key={FinanceDetailTextFieldKeys.TRAVEL} autoComplete="off" variant="outlined" placeholder="Travel" margin="normal" inputProps={inputProps} onChange={onInputHandler} />
                            <TextField type="number" name={FinanceDetailTextFieldKeys.FOOD} key={FinanceDetailTextFieldKeys.FOOD} autoComplete="off" variant="outlined" placeholder="Food" margin="normal" inputProps={inputProps} onChange={onInputHandler} />
                        </div>
                        <div className={styles["finance-breakdown-container"]}>
                            <Typography fontSize="large">Debt Payments £</Typography>
                            <TextField type="number" name={FinanceDetailTextFieldKeys.LOANS} key={FinanceDetailTextFieldKeys.LOANS} autoComplete="off" variant="outlined" placeholder="Loans" margin="normal" inputProps={inputProps} onChange={onInputHandler} />
                            <TextField type="number" name={FinanceDetailTextFieldKeys.CREDIT_CARDS} key={FinanceDetailTextFieldKeys.CREDIT_CARDS} autoComplete="off" variant="outlined" placeholder="Credit Card" margin="normal" inputProps={inputProps} onChange={onInputHandler} />
                        </div>
                        <div className={styles["control-button-container"]}>
                            <Button size='large' variant="outlined" color="inherit" onClick={onBackButtonHandler}>Back</Button>
                            <Button size='large' variant="outlined" color="inherit" onClick={onFinancesNextClickHandler}>Next</Button>
                        </div>
                    </Box>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === DetailPanelKeys.SUMMARY} disabled={expanded !== DetailPanelKeys.SUMMARY} sx={{background: "inherit", color: "inherit", border: "0.1rem grey solid"}}>
                <AccordionSummary id="summary-panel-header" aria-controls="summary-panel-content">
                    <Typography fontSize="large">Summary</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <Summary {...location.state} />
                    </div>
                    <div className={styles["control-button-container"]}>
                        <Button size='large' variant="outlined" color="inherit" onClick={onBackButtonHandler}>Back</Button>
                        <Button size='large' variant="outlined" color="inherit" onClick={onProcessClickHandler}>Process</Button>
                    </div>
                </AccordionDetails>
            </Accordion>
        </>
    )
}
