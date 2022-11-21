import { IncomeExpenditureRating } from "../interfaces/IncomeExpenditureRating";
import { IncomeExpenditureRequestBody } from "./dto/IncomeExpenditureRequestBody";
import { IncomeExpenditureResultBody } from "./dto/IncomeExpenditureResultBody";

export const fetchIncomeExpenditureRating = async (
  incomeExpenditureRequestBody: IncomeExpenditureRequestBody,
): Promise<IncomeExpenditureRating | undefined> => {
  const response = await fetch("http://localhost:10000/incomeAndExpenditureRating/calculate", {
    method: "POST",
    body: JSON.stringify(incomeExpenditureRequestBody),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });

  if (response.ok) {
    const incomeExpenditureResult: IncomeExpenditureResultBody = await response.json();

    return {
      rating: {
        grade: incomeExpenditureResult.grade,
        ratio: incomeExpenditureResult.ratio,
      },
      disposableIncome: incomeExpenditureResult.disposable,
    };
  }

  return;
};
