import { Module } from '@nestjs/common';
import { IncomeExpenditureRatingModule } from './incomeExpenditureRating/incomeExpenditureRating.module';

@Module({
  imports: [IncomeExpenditureRatingModule],
})
export class AppModule {}
