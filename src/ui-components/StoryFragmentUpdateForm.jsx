/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { StoryFragment } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function StoryFragmentUpdateForm(props) {
  const {
    id: idProp,
    storyFragment: storyFragmentModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    fragment: "",
    createdAt: "",
    originType: "",
    originId: "",
    prevId: "",
  };
  const [fragment, setFragment] = React.useState(initialValues.fragment);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [originType, setOriginType] = React.useState(initialValues.originType);
  const [originId, setOriginId] = React.useState(initialValues.originId);
  const [prevId, setPrevId] = React.useState(initialValues.prevId);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = storyFragmentRecord
      ? { ...initialValues, ...storyFragmentRecord }
      : initialValues;
    setFragment(cleanValues.fragment);
    setCreatedAt(cleanValues.createdAt);
    setOriginType(cleanValues.originType);
    setOriginId(cleanValues.originId);
    setPrevId(cleanValues.prevId);
    setErrors({});
  };
  const [storyFragmentRecord, setStoryFragmentRecord] = React.useState(
    storyFragmentModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(StoryFragment, idProp)
        : storyFragmentModelProp;
      setStoryFragmentRecord(record);
    };
    queryData();
  }, [idProp, storyFragmentModelProp]);
  React.useEffect(resetStateValues, [storyFragmentRecord]);
  const validations = {
    fragment: [{ type: "Required" }],
    createdAt: [{ type: "Required" }],
    originType: [{ type: "Required" }],
    originId: [{ type: "Required" }],
    prevId: [],
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
          fragment,
          createdAt,
          originType,
          originId,
          prevId,
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
          await DataStore.save(
            StoryFragment.copyOf(storyFragmentRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "StoryFragmentUpdateForm")}
      {...rest}
    >
      <TextField
        label="Fragment"
        isRequired={true}
        isReadOnly={false}
        value={fragment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fragment: value,
              createdAt,
              originType,
              originId,
              prevId,
            };
            const result = onChange(modelFields);
            value = result?.fragment ?? value;
          }
          if (errors.fragment?.hasError) {
            runValidationTasks("fragment", value);
          }
          setFragment(value);
        }}
        onBlur={() => runValidationTasks("fragment", fragment)}
        errorMessage={errors.fragment?.errorMessage}
        hasError={errors.fragment?.hasError}
        {...getOverrideProps(overrides, "fragment")}
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
              fragment,
              createdAt: value,
              originType,
              originId,
              prevId,
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
        label="Origin type"
        isRequired={true}
        isReadOnly={false}
        value={originType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fragment,
              createdAt,
              originType: value,
              originId,
              prevId,
            };
            const result = onChange(modelFields);
            value = result?.originType ?? value;
          }
          if (errors.originType?.hasError) {
            runValidationTasks("originType", value);
          }
          setOriginType(value);
        }}
        onBlur={() => runValidationTasks("originType", originType)}
        errorMessage={errors.originType?.errorMessage}
        hasError={errors.originType?.hasError}
        {...getOverrideProps(overrides, "originType")}
      ></TextField>
      <TextField
        label="Origin id"
        isRequired={true}
        isReadOnly={false}
        value={originId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fragment,
              createdAt,
              originType,
              originId: value,
              prevId,
            };
            const result = onChange(modelFields);
            value = result?.originId ?? value;
          }
          if (errors.originId?.hasError) {
            runValidationTasks("originId", value);
          }
          setOriginId(value);
        }}
        onBlur={() => runValidationTasks("originId", originId)}
        errorMessage={errors.originId?.errorMessage}
        hasError={errors.originId?.hasError}
        {...getOverrideProps(overrides, "originId")}
      ></TextField>
      <TextField
        label="Prev id"
        isRequired={false}
        isReadOnly={false}
        value={prevId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fragment,
              createdAt,
              originType,
              originId,
              prevId: value,
            };
            const result = onChange(modelFields);
            value = result?.prevId ?? value;
          }
          if (errors.prevId?.hasError) {
            runValidationTasks("prevId", value);
          }
          setPrevId(value);
        }}
        onBlur={() => runValidationTasks("prevId", prevId)}
        errorMessage={errors.prevId?.errorMessage}
        hasError={errors.prevId?.hasError}
        {...getOverrideProps(overrides, "prevId")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || storyFragmentModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || storyFragmentModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
