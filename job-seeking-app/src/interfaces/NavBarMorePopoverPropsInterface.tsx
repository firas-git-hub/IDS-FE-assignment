
export interface NavBarMorePopoverPropsInterface {
    open: boolean;
    onClose: () => void;
    handleLanguageChange: (langParam?: "ar" | "en") => void;
    id?: string;
    anchorEl: any;
    children?: React.ReactNode;
    anchorOrigin: {
        vertical: "top",
        horizontal: "left",
    }
}