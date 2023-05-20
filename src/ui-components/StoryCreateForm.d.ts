/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StoryCreateFormInputValues = {
    createdAt?: string;
    lastAddedToAt?: string;
    name?: string;
};
export declare type StoryCreateFormValidationValues = {
    createdAt?: ValidationFunction<string>;
    lastAddedToAt?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StoryCreateFormOverridesProps = {
    StoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    lastAddedToAt?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StoryCreateFormProps = React.PropsWithChildren<{
    overrides?: StoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StoryCreateFormInputValues) => StoryCreateFormInputValues;
    onSuccess?: (fields: StoryCreateFormInputValues) => void;
    onError?: (fields: StoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StoryCreateFormInputValues) => StoryCreateFormInputValues;
    onValidate?: StoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function StoryCreateForm(props: StoryCreateFormProps): React.ReactElement;
