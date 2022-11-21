import { ApiProperty } from '@nestjs/swagger';

export class IncomeExpenditureRating {
  @ApiProperty({
    example: 'C',
    description:
      'The Grade assigned to a user based on their expenditure to income ratio.',
  })
  grade: string;

  @ApiProperty({
    example: '50%',
    description:
      'The Expenditure-to-Income ratio of a user based on their Income and Expenditure.',
  })
  ratio: string;

  @ApiProperty({
    example: 1000,
    description: "The users' disposable income.",
  })
  disposable: number;
}
