import { buildMessage, ValidationOptions, ValidateBy } from "class-validator";

export const IS_NOT_EMPTY = 'isValidPassword';

export function isValidPassword(value: string): boolean {
    return /\d/.test(value);
}

/**
 * Checks if given value is not empty (!== '', !== null, !== undefined).
 */
export function IsValidPassword(validationOptions?: ValidationOptions): PropertyDecorator {
    return ValidateBy(
        {
            name: IS_NOT_EMPTY,
            validator: {
                validate: (value, args): boolean => isValidPassword(value),
                defaultMessage: buildMessage(eachPrefix => eachPrefix + '$property should not be empty', validationOptions),
            },
        },
        validationOptions
    );
}