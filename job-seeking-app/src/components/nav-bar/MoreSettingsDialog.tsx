import './MoreSettingsDialog.scss';
import { useTranslation } from 'react-i18next';
import { Button, Dialog, DialogContent, List, ListItem, ListItemButton, ListItemText, Popover, Typography } from '@mui/material';
import { NavBarMoreDialogPropsInterface } from '../../interfaces/NavBarMoreDialogPropsInterface';
import { useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

export default function MoreSettingsDialog(props: NavBarMoreDialogPropsInterface) {

    const { t, i18n } = useTranslation();
    const { onClose, open, handleLanguageChange } = props;

    const onClickLanguageChange = (langParam?: "en" | "ar") => {
        handleLanguageChange(langParam);
    }

    const handleClose = () => {
        onClose();
    };

    const [popoverAnchorEl, setPopoverAnchorEl] = useState<HTMLButtonElement | null>(null);
    const handlePopoverClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setPopoverAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setPopoverAnchorEl(null);
    };

    const openPopover = Boolean(popoverAnchorEl);
    const idPopover = openPopover ? 'simple-popover' : undefined;

    return (
        <Dialog hideBackdrop={true} open={open} onClose={handleClose}>
            <DialogContent>
                <Button className="button--color-light-blue">
                    {t("LoginRegisterButtonText")}
                </Button>
                <Button className="language-button button--color-deep-blue"
                    onClick={handlePopoverClick}
                    startIcon={<LanguageIcon />}
                >
                    <div className="language-button__content">
                        {t("languageButtonText")}
                        <KeyboardArrowDownRoundedIcon />
                    </div>
                </Button>
                <Popover
                    id={idPopover}
                    open={openPopover}
                    anchorEl={popoverAnchorEl}
                    onClose={handlePopoverClose}
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
            </DialogContent>
        </Dialog>
    );
}