import { Module } from '@nestjs/common';
import { IncomeExpenditureRatingController } from './incomeExpenditureRating.controller';
import { IncomeExpenditureRatingService } from './incomeExpenditureRating.service';

@Module({
  controllers: [IncomeExpenditureRatingController],
  providers: [IncomeExpenditureRatingService],
})
export class IncomeExpenditureRatingModule {}
