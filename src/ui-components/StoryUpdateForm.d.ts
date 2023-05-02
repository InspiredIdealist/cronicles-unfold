/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Story } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StoryUpdateFormInputValues = {
    currentMessageId?: string;
    storyRootId?: string;
    prevStoryId?: string;
    createdAt?: string;
    lastAddedToAt?: string;
    name?: string;
};
export declare type StoryUpdateFormValidationValues = {
    currentMessageId?: ValidationFunction<string>;
    storyRootId?: ValidationFunction<string>;
    prevStoryId?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    lastAddedToAt?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StoryUpdateFormOverridesProps = {
    StoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    currentMessageId?: PrimitiveOverrideProps<TextFieldProps>;
    storyRootId?: PrimitiveOverrideProps<TextFieldProps>;
    prevStoryId?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    lastAddedToAt?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: StoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    story?: Story;
    onSubmit?: (fields: StoryUpdateFormInputValues) => StoryUpdateFormInputValues;
    onSuccess?: (fields: StoryUpdateFormInputValues) => void;
    onError?: (fields: StoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StoryUpdateFormInputValues) => StoryUpdateFormInputValues;
    onValidate?: StoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StoryUpdateForm(props: StoryUpdateFormProps): React.ReactElement;
