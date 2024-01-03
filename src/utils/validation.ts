import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export const validationPipe = async (
  schema: new () => {},
  requestObject: object,
) => {
  const transformedClass: any = plainToInstance(schema, requestObject);
  const errors = await validate(transformedClass);
  if (errors.length > 0) {
    return errors.map(error => {
      return {
        property: error.property,
        value: error.value,
        constraints: error.constraints,
      };
    });
  }
  return true;
};
