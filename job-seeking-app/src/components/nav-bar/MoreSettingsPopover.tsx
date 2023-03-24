import './MoreSettingsPopover.scss';
import { useTranslation } from 'react-i18next';
import { Button, Dialog, DialogContent, List, ListItem, ListItemButton, ListItemText, Popover } from '@mui/material';
import { NavBarMorePopoverPropsInterface } from '../../interfaces/NavBarMorePopoverPropsInterface';
import { useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import LoginRegisterFormDialog from '../login-register-form/LoginRegisterFormDialog';

export default function MoreSettingsDialog(props: NavBarMorePopoverPropsInterface) {
    const { t, i18n } = useTranslation();
    const { onClose, open, handleLanguageChange, id, anchorEl, anchorOrigin } = props;
    const [langPopoverAnchorEl, setLangPopoverAnchorEl] = useState<HTMLButtonElement | null>(null);
    const openLangPopover = Boolean(langPopoverAnchorEl);
    const idLangPopover = openLangPopover ? 'simple-lang-popover' : undefined;
    const [openRegisterLoginDialog, setOpenRegisterLoginDialog] = useState(false);
    const handleClickOpenRegisterLoginDialog = () => {
        setOpenRegisterLoginDialog(true);
    };

    const handleCloseRegisterLoginDialog = () => {
        setOpenRegisterLoginDialog(false);
    };

    const onClickLanguageChange = (langParam?: "en" | "ar") => {
        handleLanguageChange(langParam);
    }

    const handleLangPopoverClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setLangPopoverAnchorEl(event.currentTarget);
    };

    const handleLangPopoverClose = () => {
        setLangPopoverAnchorEl(null);
    };

    const handleClose = () => {
        onClose();
    }


    return (
        <>
            <Popover
                open={open}
                onClose={handleClose}
                id={id}
                anchorEl={anchorEl}
                anchorOrigin={anchorOrigin}
            >
                <div className="more-settings-popover">
                    <Button className="button--color-light-blue" onClick={handleClickOpenRegisterLoginDialog}>
                        {t("LoginRegisterButtonText")}
                    </Button>
                    <Button className="language-button button--color-deep-blue"
                        onClick={handleLangPopoverClick}
                        startIcon={<LanguageIcon />}
                    >
                        <div className="language-button__content">
                            {t("languageButtonText")}
                            <KeyboardArrowDownRoundedIcon />
                        </div>
                    </Button>
                    <Popover
                        id={idLangPopover}
                        open={openLangPopover}
                        anchorEl={langPopoverAnchorEl}
                        onClose={handleLangPopoverClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <List disablePadding>
                            <ListItem disableGutters disablePadding>
                                <ListItemButton onClick={() => onClickLanguageChange("en")}>
                                    <ListItemText>
                                        {t("en")}
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disableGutters disablePadding>
                                <ListItemButton onClick={() => onClickLanguageChange("ar")}>
                                    <ListItemText>
                                        {t("ar")}
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Popover>
                </div>
            </Popover>
            <LoginRegisterFormDialog
                open={openRegisterLoginDialog}
                onClose={handleCloseRegisterLoginDialog}
                isLogin={true}
            >

            </LoginRegisterFormDialog>
        </>

    );
}