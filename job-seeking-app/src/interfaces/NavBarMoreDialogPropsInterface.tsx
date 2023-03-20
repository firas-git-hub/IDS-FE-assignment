export interface NavBarMoreDialogPropsInterface {
    open: boolean;
    onClose: () => void;
    handleLanguageChange: (langParam?: "ar" | "en") => void;
    children?: React.ReactNode;
}