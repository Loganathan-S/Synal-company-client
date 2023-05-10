import React, { memo } from "react";
import { TextField } from "@mui/material";
import { useController, UseControllerProps } from "react-hook-form";
import { InputBaseComponentProps } from "@mui/material/InputBase/InputBase";
import { SxProps } from "@mui/system";

type inputType = "text" | "email" | "password" | "number";

interface Props {
  label: string | React.ReactNode;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  inputType?: inputType;
  inputValue?: unknown;
  sx?: SxProps;
  inputProps: UseControllerProps;
  inputBaseProps?: InputBaseComponentProps;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  id?: string;
  placeHolder?: string;
}

const InputController = ({
  inputProps,
  inputBaseProps,
  label,
  startAdornment,
  endAdornment,
  sx,
  inputType = "text",
  disabled = false,
  readOnly = false,
  className = "",
  id = "",
  placeHolder = "",
}: Props) => {
  const {
    field: { onChange, value, name },
    fieldState: { error },
  } = useController(inputProps);
  console.log(error, "error");

  return (
    <>
      <TextField
        onChange={onChange}
        value={value}
        name={name}
        variant='outlined'
        sx={{
          "& .MuiInputLabel-root": {
            fontSize: "16px !important",
          },
          ...sx,
        }}
        fullWidth
        label={label}
        type={inputType}
        error={!!error}
        helperText={error?.message?.trim()}
        inputProps={inputBaseProps}
        disabled={disabled}
        className={className}
        id={id}
        placeholder={placeHolder}
        InputProps={{
          startAdornment: startAdornment,
          endAdornment: endAdornment,
          readOnly: readOnly,
        }}
      />
    </>
  );
};

export default memo(InputController);
