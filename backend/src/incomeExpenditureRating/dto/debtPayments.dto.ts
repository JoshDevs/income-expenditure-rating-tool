import { ApiPropertyOptional } from '@nestjs/swagger';

export class DebtPayments {
  @ApiPropertyOptional({
    example: 300,
    description: "The loan portion of a users' debt payments.",
    type: Number,
  })
  loans: number | undefined;

  @ApiPropertyOptional({
    example: 90,
    description: "The loan portion of a users' debt payments.",
    type: Number,
  })
  creditCards: number | undefined;
}
