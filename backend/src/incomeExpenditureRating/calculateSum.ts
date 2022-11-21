import { DebtPayments } from './dto/debtPayments.dto';
import { Expenditure } from './dto/expenditure.dto';
import { Income } from './dto/income.dto';

export const calculateSum = (
  dataObject: Income | Expenditure | DebtPayments,
): number => {
  return Object.values(dataObject).reduce(
    (sum: number | undefined, currentValue: number | undefined) =>
      (sum || 0) + (currentValue || 0),
    0,
  );
};
