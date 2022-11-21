import styles from "./Summary.module.css";
import Typography from "@mui/material/Typography";
import { PersonalDetailState } from "../../interfaces/PersonalDetailState";

export const Summary: React.FC<PersonalDetailState> = ({person, income, expenditure, debtPayments}) => {
    return (
        <div className={styles["details-summary"]}>
            <Typography>Full Name: {person.name.first} {person.name.last}</Typography>
            <Typography>Email: {person.email}</Typography>
            <Typography>Phone: {person.phoneNumber}</Typography>
            <Typography>Date of Birth: {person.dateOfBirth}</Typography>
            <Typography>Address: {person.address}</Typography>
            <Typography>Total Income: £ {(income.salary || 0) + (income.other || 0)}</Typography>
            <Typography>Total Expenditure: £ {(expenditure.food || 0) + (expenditure.mortgage || 0) + (expenditure.rent || 0) + (expenditure.travel || 0) + (expenditure.utilities || 0)}</Typography>
            <Typography>Total Debt Payments: £ {(debtPayments.loans || 0) + (debtPayments.creditCards || 0)}</Typography>
        </div>
    )
};
