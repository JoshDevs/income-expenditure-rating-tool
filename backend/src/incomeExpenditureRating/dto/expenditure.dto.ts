import { ApiPropertyOptional } from '@nestjs/swagger';

export class Expenditure {
  @ApiPropertyOptional({
    example: 200,
    description: "The mortgage portion of a users' expenditure.",
    type: Number,
  })
  readonly mortgage: number | undefined;

  @ApiPropertyOptional({
    example: 210,
    description: "The rent portion of a users' expenditure.",
    type: Number,
  })
  readonly rent: number | undefined;

  @ApiPropertyOptional({
    example: 70,
    description: "The utilities portion of a users' expenditure.",
    type: Number,
  })
  readonly utilities: number | undefined;

  @ApiPropertyOptional({
    example: 50,
    description: "The travel portion of a users' income.",
    type: Number,
  })
  readonly travel: number | undefined;

  @ApiPropertyOptional({
    example: 210,
    description: "The food portion of a users' income.",
    type: Number,
  })
  readonly food: number | undefined;
}
