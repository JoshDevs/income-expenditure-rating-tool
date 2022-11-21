import { IncomeExpenditureRequestBody } from "./dto/IncomeExpenditureRequestBody";
import { IncomeExpenditureResultBody } from "./dto/IncomeExpenditureResultBody";

export const fetchIncomeExpenditureRating = async (
  incomeExpenditureRequestBody: IncomeExpenditureRequestBody,
): Promise<IncomeExpenditureResultBody | undefined> => {
  const incomeExpenditureResult = await fetch("http://localhost:10000/incomeAndExpenditureRating/calculate", {
    method: "POST",
    body: JSON.stringify(incomeExpenditureRequestBody),
  });

  if (incomeExpenditureResult.ok) return await incomeExpenditureResult.json();

  return;
};
