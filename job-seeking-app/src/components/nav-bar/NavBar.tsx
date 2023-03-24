import './NavBar.scss';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import MoreSettingsPopover from './MoreSettingsPopover';
import reactLogo from '../../assets/images/logo192.png';

export default function NavBar() {

	//Injecting the internationalisation service i18n and other functionalities
	const { t, i18n } = useTranslation();
	const [currentLang, setCurrentLang] = useState((): string => { return document.documentElement.lang });

	const [morePopoverAnchorEl, setMorePopoverAnchorEl] = useState<HTMLButtonElement | null>(null);
	const openMorePopover = Boolean(morePopoverAnchorEl);
	const idMorePopover = openMorePopover ? 'simple-more-popover' : undefined;

	const handleMorePopoverClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setMorePopoverAnchorEl(event.currentTarget);
	};

	const handleMorePopoverClose = () => {
		setMorePopoverAnchorEl(null);
	};

	const handleLanguageChange = (langParam?: "en" | "ar") => {
		if (langParam == 'ar') {
			setCurrentLang('ar');
			langParam = 'ar';
			document.dir = "rtl";
		} else {
			setCurrentLang('en');
			langParam = 'en';
			document.dir = "ltr";
		}
		i18n.changeLanguage(langParam);
	}

	return (
		<div className="nav-bar">
			<div className="logo-title-container">
				<div className="img-container">
					<img src={reactLogo} />
				</div>
				<p>{t("navBarTitle")}</p>
			</div>
			<IconButton size='small' onClick={handleMorePopoverClick}>
				<MoreHorizIcon />
			</IconButton>
			<MoreSettingsPopover
				open={openMorePopover}
				id={idMorePopover}
				anchorEl={morePopoverAnchorEl}
				onClose={handleMorePopoverClose}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				handleLanguageChange={(param?: "en" | "ar") => handleLanguageChange(param)}>
			</MoreSettingsPopover>
		</div>
	);
}