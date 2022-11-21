import { DebtPayments } from './debtPayments.dto';
import { Expenditure } from './expenditure.dto';
import { Income } from './income.dto';
import { ApiProperty } from '@nestjs/swagger';

export class IncomeAndExpenditureDto {
  @ApiProperty({
    type: Income,
    description: 'The income of a user.',
  })
  readonly income: Income;
  @ApiProperty({
    description: 'The expenditure of a user.',
  })
  readonly expenditure: Expenditure;
  @ApiProperty({
    description: 'The debt payments of a user.',
  })
  readonly debtPayments: DebtPayments;
}
