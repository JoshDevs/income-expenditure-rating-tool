export const generateExpenditureToIncomeRatio = (
  totalIncome: number,
  totalExpenditure: number,
  totalDebtPayments: number,
): number => {
  const ratio = ((totalExpenditure + totalDebtPayments) / totalIncome) * 100;

  return ratio;
};
