/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StoryCardOverridesProps = {
    StoryCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    name?: PrimitiveOverrideProps<FlexProps>;
    title?: PrimitiveOverrideProps<TextProps>;
    subtext?: PrimitiveOverrideProps<TextProps>;
    characters?: PrimitiveOverrideProps<FlexProps>;
    icon?: PrimitiveOverrideProps<ViewProps>;
    count?: PrimitiveOverrideProps<TextProps>;
    groupName?: PrimitiveOverrideProps<TextProps>;
    readButton?: PrimitiveOverrideProps<FlexProps>;
    label?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type StoryCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    name?: String;
    description?: String;
    onClick?: (event: SyntheticEvent) => void;
    count?: String;
} & {
    overrides?: StoryCardOverridesProps | undefined | null;
}>;
export default function StoryCard(props: StoryCardProps): React.ReactElement;
