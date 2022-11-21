import { Injectable } from '@nestjs/common';
import { calculateSum } from './calculateSum';
import { IncomeAndExpenditureDto } from './dto/incomeAndExpenditure.dto';
import { IncomeExpenditureRating } from './entities/incomeExpenditureRating.entity';
import { generateExpenditureToIncomeRatio } from './generateExpenditureToIncomeRatio';
import { generateGrade } from './generateGrade';

@Injectable()
export class IncomeExpenditureRatingService {
  calculateRating({
    income,
    debtPayments,
    expenditure,
  }: IncomeAndExpenditureDto): IncomeExpenditureRating {
    const totalIncome: number = calculateSum(income);
    const totalExpenditure: number = calculateSum(expenditure);
    const totalDebtPayments: number = calculateSum(debtPayments);

    const ratio = generateExpenditureToIncomeRatio(
      totalIncome,
      totalExpenditure,
      totalDebtPayments,
    );

    const disposableIncome =
      totalIncome - (totalExpenditure + totalDebtPayments);

    return {
      grade: generateGrade(ratio),
      ratio: `${ratio.toFixed(0)}%`,
      disposable: disposableIncome,
    };
  }
}
