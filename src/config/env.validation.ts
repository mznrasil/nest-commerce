import {
  IsBoolean,
  IsNumber,
  Max,
  Min,
  MinLength,
  validateSync,
} from 'class-validator';
import { plainToInstance } from 'class-transformer';

export class EnvironmentVariables {
  @IsNumber()
  @Min(0)
  @Max(65535)
  APPLICATION_PORT: number;

  @MinLength(1)
  DB_HOST: string;

  @IsNumber()
  @Min(0)
  @Max(65535)
  DB_PORT: number;

  @MinLength(1)
  POSTGRES_USER: string;

  @MinLength(1)
  POSTGRES_PASSWORD: string;

  @MinLength(1)
  POSTGRES_DB: string;

  @IsBoolean()
  DB_SYNCHRONIZE: boolean;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
