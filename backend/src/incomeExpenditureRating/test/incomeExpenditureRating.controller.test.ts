import { Test, TestingModule } from '@nestjs/testing';
import { IncomeAndExpenditureDto } from '../dto/incomeAndExpenditure.dto';
import { IncomeExpenditureRating } from '../entities/incomeExpenditureRating.entity';
import { IncomeExpenditureRatingController } from '../incomeExpenditureRating.controller';
import { IncomeExpenditureRatingService } from '../incomeExpenditureRating.service';

describe('AppController', () => {
  let incomeExpenditureRatingController: IncomeExpenditureRatingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [IncomeExpenditureRatingController],
      providers: [IncomeExpenditureRatingService],
    }).compile();

    incomeExpenditureRatingController =
      app.get<IncomeExpenditureRatingController>(
        IncomeExpenditureRatingController,
      );
  });

  describe('/calculateRating', () => {
    it('should return a rating of C, a ratio of 50% and disposable income of 100', async () => {
      const testData: IncomeAndExpenditureDto = {
        income: {
          salary: 1000,
          other: undefined,
        },
        expenditure: {
          food: 50,
          mortgage: 100,
          rent: undefined,
          travel: 50,
          utilities: 50,
        },
        debtPayments: {
          loans: 100,
          creditCards: 50,
        },
      };

      const expected: IncomeExpenditureRating = {
        disposable: 600,
        grade: 'C',
        ratio: '40%',
      };

      expect(
        await incomeExpenditureRatingController.calculate(testData),
      ).toStrictEqual(expected);
    });
  });
});
