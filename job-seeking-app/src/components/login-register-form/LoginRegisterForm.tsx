import { Checkbox, FormControlLabel, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import IFormValues from "../../interfaces/IFormValues";
import LoginRegisterFormPropsInterface from "../../interfaces/LoginRegisterFormPropsInterface";
import CustomInput from "../form-components/custom-input/CustomInput";
import "./LoginRegisterForm.scss";

export default function LoginRegisterForm(props: LoginRegisterFormPropsInterface) {

    const [isLogin, setIsLogin] = useState(props.isLogin);
    const { t } = useTranslation();
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<IFormValues>({
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            isKeepMeSignedIn: false,
            isCandidate: false
        }
    });

    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        console.log(JSON.stringify(data));
    }

    const handleLoginRegisterRedirectClick = () => {
        setIsLogin(!isLogin);
    }

    const handleForgotPasswordClick = () => {
        //do something
    }

    return <>
        <form className="login-register-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="candidate-employer-toggle">
                <Controller
                    name="isCandidate"
                    control={control}
                    render={({ field }) =>
                        <ToggleButtonGroup
                            {...field}
                            onChange={(e, value) => field.onChange(value)}
                            exclusive
                        >
                            <ToggleButton className="flex--row" value={true}>
                                <div className="img-container">
                                    <img src="/icons/user.png" />
                                </div>
                                <p>{t("candidate")}</p>
                            </ToggleButton>
                            <ToggleButton className="flex--row" value={false}>
                                <div className="img-container">
                                    <img src="/icons/briefcase.png" />
                                </div>
                                <p>{t("employer")}</p>
                            </ToggleButton>
                        </ToggleButtonGroup>
                    }
                />
            </div>
            <CustomInput
                label="email"
                control={control}
                required={true}
                visibilityToggle={false}
            >
            </CustomInput>
            <CustomInput
                label="password"
                control={control}
                required={true}
                visibilityToggle={true}
            >
            </CustomInput>
            <div className={(isLogin ? "hidden" : "") + ""}>
                <CustomInput
                    label="confirmPassword"
                    control={control}
                    required={true}
                    visibilityToggle={true}
                >
                </CustomInput>
            </div>
            <div className={(isLogin ? "" : "hidden") + " login-register-form__login-functions-container flex--row"}>
                <Controller
                    name="isKeepMeSignedIn"
                    control={control}
                    render={({ field }) =>
                        <FormControlLabel
                            label={t("keepMeSignedIn")}
                            control={
                                <Checkbox checked={field.value} {...field} />
                            }
                        />
                    }
                />
                <p onClick={handleForgotPasswordClick} className=" clickable">{t("forgottenPassword")}</p>
            </div>
            <div className="form-actions flex--row">
                <input className="clickable" type="submit" value={(isLogin ? t("login") : t("registerNow")) ?? ""} />
            </div>
        </form>
        <div className="text-beneath-form flex--row">
            <p className="text-color--light-gray">
                {(isLogin ? t("textBeneathLoginRegisterFormLoginCase") : t("textBeneathLoginRegisterFormRegisterCase")) ?? ""}
            </p>
            <p onClick={handleLoginRegisterRedirectClick} className="color--deep-blue clickable">
                {(isLogin ? t("register") : t("login")) ?? ""}
            </p>
        </div>
    </>
}