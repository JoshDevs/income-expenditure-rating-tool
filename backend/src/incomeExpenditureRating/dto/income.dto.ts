import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Income {
  @ApiProperty({
    description: "The salary portion of a users' income.",
    example: 1000,
    type: Number,
  })
  readonly salary: number | undefined;
  @ApiPropertyOptional({
    example: 1000,
    description: "The other portion of a users' income.",
    type: Number,
  })
  readonly other: number | undefined;
}
