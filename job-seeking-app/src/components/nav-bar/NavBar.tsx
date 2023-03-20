import './NavBar.scss';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import MoreSettingsDialog from './MoreSettingsDialog';
import reactLogo from '../../assets/images/logo192.png';

export default function NavBar() {

  //Injecting the internationalisation service i18n and other functionalities
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState((): string => { return document.documentElement.lang });

  const handleLanguageChange = (langParam?: "en" | "ar") => {
    if (langParam == 'ar') {
      setCurrentLang('ar');
      langParam = 'ar';
    } else {
      setCurrentLang('en');
      langParam = 'en';
    }
    i18n.changeLanguage(langParam);
  }
  //For dialog usage
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleMoreButtonClick = () => {
    setOpen(true);
  }

  return (
    <div className="nav-bar">
      <div className="logo-title-container">
        <div className="img-container">
          <img src={reactLogo} />
        </div>
        <p>{t("navBarTitle")}</p>
      </div>
      <IconButton size='small' onClick={() => handleMoreButtonClick()}>
        <MoreHorizIcon />
      </IconButton>
      <MoreSettingsDialog
        open={open}
        onClose={handleClose}
        handleLanguageChange={(param?: "en" | "ar") => handleLanguageChange(param)}>
      </MoreSettingsDialog>
    </div>
  );
}