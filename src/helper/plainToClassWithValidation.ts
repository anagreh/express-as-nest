import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

export async function plainToClassWithValidation<T, V>(
  cls: ClassConstructor<T>,
  plain: V,
): Promise<[T, ValidationError[]]> {
  const instance = plainToInstance(cls, plain, {
    excludeExtraneousValues: true,
  });

  const validationError = await validate(instance as unknown as object, {
    whitelist: true,
  });

  return [instance, validationError];
}
