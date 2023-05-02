/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewStoryInputValues = {
    Field0?: string;
    Field1?: string;
    Field2?: boolean;
};
export declare type NewStoryValidationValues = {
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    Field2?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewStoryOverridesProps = {
    NewStoryGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Field2?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type NewStoryProps = React.PropsWithChildren<{
    overrides?: NewStoryOverridesProps | undefined | null;
} & {
    onSubmit: (fields: NewStoryInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: NewStoryInputValues) => NewStoryInputValues;
    onValidate?: NewStoryValidationValues;
} & React.CSSProperties>;
export default function NewStory(props: NewStoryProps): React.ReactElement;
