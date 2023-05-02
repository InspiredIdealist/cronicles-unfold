/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Story } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function StoryCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    currentMessageId: "",
    storyRootId: "",
    prevStoryId: "",
    createdAt: "",
    lastAddedToAt: "",
    name: "",
  };
  const [currentMessageId, setCurrentMessageId] = React.useState(
    initialValues.currentMessageId
  );
  const [storyRootId, setStoryRootId] = React.useState(
    initialValues.storyRootId
  );
  const [prevStoryId, setPrevStoryId] = React.useState(
    initialValues.prevStoryId
  );
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [lastAddedToAt, setLastAddedToAt] = React.useState(
    initialValues.lastAddedToAt
  );
  const [name, setName] = React.useState(initialValues.name);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCurrentMessageId(initialValues.currentMessageId);
    setStoryRootId(initialValues.storyRootId);
    setPrevStoryId(initialValues.prevStoryId);
    setCreatedAt(initialValues.createdAt);
    setLastAddedToAt(initialValues.lastAddedToAt);
    setName(initialValues.name);
    setErrors({});
  };
  const validations = {
    currentMessageId: [{ type: "Required" }],
    storyRootId: [{ type: "Required" }],
    prevStoryId: [],
    createdAt: [{ type: "Required" }],
    lastAddedToAt: [{ type: "Required" }],
    name: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          currentMessageId,
          storyRootId,
          prevStoryId,
          createdAt,
          lastAddedToAt,
          name,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Story(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "StoryCreateForm")}
      {...rest}
    >
      <TextField
        label="Current message id"
        isRequired={true}
        isReadOnly={false}
        value={currentMessageId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currentMessageId: value,
              storyRootId,
              prevStoryId,
              createdAt,
              lastAddedToAt,
              name,
            };
            const result = onChange(modelFields);
            value = result?.currentMessageId ?? value;
          }
          if (errors.currentMessageId?.hasError) {
            runValidationTasks("currentMessageId", value);
          }
          setCurrentMessageId(value);
        }}
        onBlur={() => runValidationTasks("currentMessageId", currentMessageId)}
        errorMessage={errors.currentMessageId?.errorMessage}
        hasError={errors.currentMessageId?.hasError}
        {...getOverrideProps(overrides, "currentMessageId")}
      ></TextField>
      <TextField
        label="Story root id"
        isRequired={true}
        isReadOnly={false}
        value={storyRootId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currentMessageId,
              storyRootId: value,
              prevStoryId,
              createdAt,
              lastAddedToAt,
              name,
            };
            const result = onChange(modelFields);
            value = result?.storyRootId ?? value;
          }
          if (errors.storyRootId?.hasError) {
            runValidationTasks("storyRootId", value);
          }
          setStoryRootId(value);
        }}
        onBlur={() => runValidationTasks("storyRootId", storyRootId)}
        errorMessage={errors.storyRootId?.errorMessage}
        hasError={errors.storyRootId?.hasError}
        {...getOverrideProps(overrides, "storyRootId")}
      ></TextField>
      <TextField
        label="Prev story id"
        isRequired={false}
        isReadOnly={false}
        value={prevStoryId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currentMessageId,
              storyRootId,
              prevStoryId: value,
              createdAt,
              lastAddedToAt,
              name,
            };
            const result = onChange(modelFields);
            value = result?.prevStoryId ?? value;
          }
          if (errors.prevStoryId?.hasError) {
            runValidationTasks("prevStoryId", value);
          }
          setPrevStoryId(value);
        }}
        onBlur={() => runValidationTasks("prevStoryId", prevStoryId)}
        errorMessage={errors.prevStoryId?.errorMessage}
        hasError={errors.prevStoryId?.hasError}
        {...getOverrideProps(overrides, "prevStoryId")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={createdAt && convertToLocal(new Date(createdAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              currentMessageId,
              storyRootId,
              prevStoryId,
              createdAt: value,
              lastAddedToAt,
              name,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <TextField
        label="Last added to at"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={lastAddedToAt && convertToLocal(new Date(lastAddedToAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              currentMessageId,
              storyRootId,
              prevStoryId,
              createdAt,
              lastAddedToAt: value,
              name,
            };
            const result = onChange(modelFields);
            value = result?.lastAddedToAt ?? value;
          }
          if (errors.lastAddedToAt?.hasError) {
            runValidationTasks("lastAddedToAt", value);
          }
          setLastAddedToAt(value);
        }}
        onBlur={() => runValidationTasks("lastAddedToAt", lastAddedToAt)}
        errorMessage={errors.lastAddedToAt?.errorMessage}
        hasError={errors.lastAddedToAt?.hasError}
        {...getOverrideProps(overrides, "lastAddedToAt")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currentMessageId,
              storyRootId,
              prevStoryId,
              createdAt,
              lastAddedToAt,
              name: value,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
