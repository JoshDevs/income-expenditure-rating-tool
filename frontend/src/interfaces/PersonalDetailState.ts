import { DebtPayments } from "./DebtPayments";
import { Expenditure } from "./Expenditure";
import { Income } from "./Income";
import { IncomeExpenditureRating } from "./IncomeExpeditureRating";
import { Person } from "./Person";

export interface PersonalDetailState {
  person: Person;
  income: Income;
  expenditure: Expenditure;
  debtPayments: DebtPayments;
  incomeExpenditureRating?: IncomeExpenditureRating;
}
