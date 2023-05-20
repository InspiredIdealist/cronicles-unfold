/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Guidance } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GuidanceUpdateFormInputValues = {
    instructions?: string;
    codename?: string;
};
export declare type GuidanceUpdateFormValidationValues = {
    instructions?: ValidationFunction<string>;
    codename?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GuidanceUpdateFormOverridesProps = {
    GuidanceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    instructions?: PrimitiveOverrideProps<TextFieldProps>;
    codename?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GuidanceUpdateFormProps = React.PropsWithChildren<{
    overrides?: GuidanceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    guidance?: Guidance;
    onSubmit?: (fields: GuidanceUpdateFormInputValues) => GuidanceUpdateFormInputValues;
    onSuccess?: (fields: GuidanceUpdateFormInputValues) => void;
    onError?: (fields: GuidanceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GuidanceUpdateFormInputValues) => GuidanceUpdateFormInputValues;
    onValidate?: GuidanceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GuidanceUpdateForm(props: GuidanceUpdateFormProps): React.ReactElement;
