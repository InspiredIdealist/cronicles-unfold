/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Guidance } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function GuidanceUpdateForm(props) {
  const {
    id: idProp,
    guidance: guidanceModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    instructions: "",
    codename: "",
  };
  const [instructions, setInstructions] = React.useState(
    initialValues.instructions
  );
  const [codename, setCodename] = React.useState(initialValues.codename);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = guidanceRecord
      ? { ...initialValues, ...guidanceRecord }
      : initialValues;
    setInstructions(cleanValues.instructions);
    setCodename(cleanValues.codename);
    setErrors({});
  };
  const [guidanceRecord, setGuidanceRecord] = React.useState(guidanceModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Guidance, idProp)
        : guidanceModelProp;
      setGuidanceRecord(record);
    };
    queryData();
  }, [idProp, guidanceModelProp]);
  React.useEffect(resetStateValues, [guidanceRecord]);
  const validations = {
    instructions: [],
    codename: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          instructions,
          codename,
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
            Guidance.copyOf(guidanceRecord, (updated) => {
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
      {...getOverrideProps(overrides, "GuidanceUpdateForm")}
      {...rest}
    >
      <TextField
        label="Instructions"
        isRequired={false}
        isReadOnly={false}
        value={instructions}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instructions: value,
              codename,
            };
            const result = onChange(modelFields);
            value = result?.instructions ?? value;
          }
          if (errors.instructions?.hasError) {
            runValidationTasks("instructions", value);
          }
          setInstructions(value);
        }}
        onBlur={() => runValidationTasks("instructions", instructions)}
        errorMessage={errors.instructions?.errorMessage}
        hasError={errors.instructions?.hasError}
        {...getOverrideProps(overrides, "instructions")}
      ></TextField>
      <TextField
        label="Codename"
        isRequired={false}
        isReadOnly={false}
        value={codename}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instructions,
              codename: value,
            };
            const result = onChange(modelFields);
            value = result?.codename ?? value;
          }
          if (errors.codename?.hasError) {
            runValidationTasks("codename", value);
          }
          setCodename(value);
        }}
        onBlur={() => runValidationTasks("codename", codename)}
        errorMessage={errors.codename?.errorMessage}
        hasError={errors.codename?.hasError}
        {...getOverrideProps(overrides, "codename")}
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
          isDisabled={!(idProp || guidanceModelProp)}
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
              !(idProp || guidanceModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
