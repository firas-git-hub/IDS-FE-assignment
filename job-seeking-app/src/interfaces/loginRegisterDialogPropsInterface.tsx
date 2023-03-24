export default interface loginRegisterDialogPropsInterface {
    open: boolean;
    onClose: () => void;
    isLogin: boolean;
    children?: React.ReactNode;
}