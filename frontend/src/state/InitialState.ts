import { PersonalDetailState } from "../interfaces/PersonalDetailState";

export const InitialState: PersonalDetailState = {
  person: {
    name: {
      first: "",
      last: "",
    },
    address: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
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
  },
  incomeExpenditureRating: {
    disposableIncome: undefined,
    rating: {
      grade: undefined,
      ratio: undefined,
    },
  },
};
