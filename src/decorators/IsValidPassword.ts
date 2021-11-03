import { buildMessage, ValidationOptions, ValidateBy } from "class-validator";

export const IS_VALID_PASSWORD = 'isValidPassword';

export function isValidPassword(value: string): boolean {
    return /\d/.test(value);
}

/**
 * Checks if given value contain digits or not.
 */
export function IsValidPassword(validationOptions?: ValidationOptions): PropertyDecorator {
    return ValidateBy(
        {
            name: IS_VALID_PASSWORD,
            validator: {
                validate: (value, args): boolean => isValidPassword(value),
                defaultMessage: buildMessage(eachPrefix => eachPrefix + '$property should not be empty', validationOptions),
            },
        },
        validationOptions
    );
}