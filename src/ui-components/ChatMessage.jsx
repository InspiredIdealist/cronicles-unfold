/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function ChatMessage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="278px"
      height="94px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ChatMessage")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="225px"
        height="64px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="17px"
        left="23px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Message"
        {...getOverrideProps(overrides, "Message")}
      ></Text>
      <Icon
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="69px"
        left="254px"
        padding="0px 0px 0px 0px"
        type="info"
        fontSize="24px"
        visibility={false}
        {...getOverrideProps(overrides, "\uD83D\uDD12Icon")}
      ></Icon>
    </View>
  );
}
