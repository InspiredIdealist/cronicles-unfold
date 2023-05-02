/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { StoryFragment } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StoryFragmentUpdateFormInputValues = {
    fragment?: string;
    createdAt?: string;
    originType?: string;
    originId?: string;
    prevId?: string;
};
export declare type StoryFragmentUpdateFormValidationValues = {
    fragment?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    originType?: ValidationFunction<string>;
    originId?: ValidationFunction<string>;
    prevId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StoryFragmentUpdateFormOverridesProps = {
    StoryFragmentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fragment?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    originType?: PrimitiveOverrideProps<TextFieldProps>;
    originId?: PrimitiveOverrideProps<TextFieldProps>;
    prevId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StoryFragmentUpdateFormProps = React.PropsWithChildren<{
    overrides?: StoryFragmentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    storyFragment?: StoryFragment;
    onSubmit?: (fields: StoryFragmentUpdateFormInputValues) => StoryFragmentUpdateFormInputValues;
    onSuccess?: (fields: StoryFragmentUpdateFormInputValues) => void;
    onError?: (fields: StoryFragmentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StoryFragmentUpdateFormInputValues) => StoryFragmentUpdateFormInputValues;
    onValidate?: StoryFragmentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StoryFragmentUpdateForm(props: StoryFragmentUpdateFormProps): React.ReactElement;
