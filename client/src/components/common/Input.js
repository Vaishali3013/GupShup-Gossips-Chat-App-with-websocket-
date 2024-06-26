import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import Icon from "@mui/material/Icon";

const Input = ({ value, handleChange, label, type, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="filled"
      className="w-full"
      value={value}
      onChange={handleChange}
      type={type === "password" && showPassword ? "text" : type}
      InputProps={{
        ...(type === "password" && {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={(e) => e.preventDefault()}
                edge="end"
              >
                {showPassword ? <Icon>visibility</Icon> : <Icon>visibility_off</Icon>}
              </IconButton>
            </InputAdornment>
          ),
        }),
      }}
      {...rest}
    />
  );
};

export default Input;
