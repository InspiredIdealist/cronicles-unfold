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
export declare type StoryFragmentCreateFormInputValues = {
    fragment?: string;
    createdAt?: string;
    originType?: string;
    originId?: string;
    prevId?: string;
};
export declare type StoryFragmentCreateFormValidationValues = {
    fragment?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    originType?: ValidationFunction<string>;
    originId?: ValidationFunction<string>;
    prevId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StoryFragmentCreateFormOverridesProps = {
    StoryFragmentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fragment?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    originType?: PrimitiveOverrideProps<TextFieldProps>;
    originId?: PrimitiveOverrideProps<TextFieldProps>;
    prevId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StoryFragmentCreateFormProps = React.PropsWithChildren<{
    overrides?: StoryFragmentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StoryFragmentCreateFormInputValues) => StoryFragmentCreateFormInputValues;
    onSuccess?: (fields: StoryFragmentCreateFormInputValues) => void;
    onError?: (fields: StoryFragmentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StoryFragmentCreateFormInputValues) => StoryFragmentCreateFormInputValues;
    onValidate?: StoryFragmentCreateFormValidationValues;
} & React.CSSProperties>;
export default function StoryFragmentCreateForm(props: StoryFragmentCreateFormProps): React.ReactElement;
