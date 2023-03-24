import "./CustomInput.scss";
import { useTranslation } from "react-i18next";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { FormControl, InputLabel, FilledInput, InputAdornment, IconButton } from "@mui/material";
import React from "react";
import CustomInputProps from "../../../interfaces/CustomInputProps";
import { Controller } from "react-hook-form";

export default function CustomInput(props: CustomInputProps) {

    const { t } = useTranslation();
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return <>
        <div className="custom-input-container flex--column">
            <InputLabel>
                {t(props.label)}
                {props.required && <p className="error">*</p>}
            </InputLabel>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                <Controller
                    name={props.label}
                    control={props.control}
                    render={({ field }) =>
                        <FilledInput
                            {...field}
                            type={props.visibilityToggle ? (showPassword ? 'text' : 'password') : "text"}
                            placeholder={t(props.label) ?? ""}
                            endAdornment={props.visibilityToggle &&
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    }
                />

            </FormControl>
        </div>
    </>
}