import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { IncomeExpenditureRatingModule } from './../src/incomeExpenditureRating/incomeExpenditureRating.module';
import { IncomeAndExpenditureDto } from 'src/incomeExpenditureRating/dto/incomeAndExpenditure.dto';

describe('IncomeExpenditureRatingController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [IncomeExpenditureRatingModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/calculate (Post)', () => {
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

    return request(app.getHttpServer())
      .post('/incomeAndExpenditureRating/calculate')
      .send(testData)
      .expect(201)
      .expect({
        disposable: 600,
        grade: 'C',
        ratio: '40%',
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
