import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { IncomeAndExpenditureDto } from './dto/incomeAndExpenditure.dto';
import { IncomeExpenditureRating } from './entities/incomeExpenditureRating.entity';
import { IncomeExpenditureRatingService } from './incomeExpenditureRating.service';

@ApiTags('incomeAndExpenditureRating')
@Controller('incomeAndExpenditureRating')
export class IncomeExpenditureRatingController {
  constructor(
    private readonly incomeExpenditureRatingService: IncomeExpenditureRatingService,
  ) {}

  @Post('calculate')
  @ApiOperation({ summary: 'Calculate I&E Rating and disposable income.' })
  @ApiResponse({
    status: 201,
    description: 'The calculated values',
    type: IncomeExpenditureRating,
  })
  @ApiBody({
    type: IncomeAndExpenditureDto,
    description: 'Contains the income and expenditures of the request.',
  })
  async calculate(
    @Body() incomeAndExpenditureDto: IncomeAndExpenditureDto,
  ): Promise<IncomeExpenditureRating> {
    return this.incomeExpenditureRatingService.calculateRating(
      incomeAndExpenditureDto,
    );
  }
}
