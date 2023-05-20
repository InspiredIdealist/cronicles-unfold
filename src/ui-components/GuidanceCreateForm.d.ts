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
export declare type GuidanceCreateFormInputValues = {
    instructions?: string;
    codename?: string;
};
export declare type GuidanceCreateFormValidationValues = {
    instructions?: ValidationFunction<string>;
    codename?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GuidanceCreateFormOverridesProps = {
    GuidanceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    instructions?: PrimitiveOverrideProps<TextFieldProps>;
    codename?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GuidanceCreateFormProps = React.PropsWithChildren<{
    overrides?: GuidanceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GuidanceCreateFormInputValues) => GuidanceCreateFormInputValues;
    onSuccess?: (fields: GuidanceCreateFormInputValues) => void;
    onError?: (fields: GuidanceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GuidanceCreateFormInputValues) => GuidanceCreateFormInputValues;
    onValidate?: GuidanceCreateFormValidationValues;
} & React.CSSProperties>;
export default function GuidanceCreateForm(props: GuidanceCreateFormProps): React.ReactElement;
