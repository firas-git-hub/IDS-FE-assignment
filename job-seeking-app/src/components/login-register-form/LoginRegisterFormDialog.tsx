import "./LoginRegisterFormDialog.scss";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import loginRegisterDialogPropsInterface from "../../interfaces/loginRegisterDialogPropsInterface";
import LoginRegisterForm from "./LoginRegisterForm";

export default function LoginRegisterFormDialog(props: loginRegisterDialogPropsInterface) {

    const { t } = useTranslation();
    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    };

    return <>
        <Dialog className="login-register-form-dialog" hideBackdrop={true} open={open} onClose={handleClose}>
            <div className="dialog-title">
                <h3>
                    {props.isLogin ? t("login") : t("createAccountForFree")}
                </h3>
                <IconButton onClick={handleClose}>
                    <CloseRoundedIcon />
                </IconButton>
            </div>
            <DialogContent>
                <LoginRegisterForm isLogin={props.isLogin}></LoginRegisterForm>
            </DialogContent>
        </Dialog>
    </>
}