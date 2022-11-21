export interface IncomeExpenditureRating {
  rating: {
    grade: string | undefined;
    ratio: string | undefined;
  };
  disposableIncome: number | undefined;
}
