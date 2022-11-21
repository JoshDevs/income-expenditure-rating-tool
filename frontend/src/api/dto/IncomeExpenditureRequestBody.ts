import { PersonalDetailState } from "../../interfaces/PersonalDetailState";

export type IncomeExpenditureRequestBody = Omit<PersonalDetailState, "person">;
