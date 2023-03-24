import "./HomePage.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Divider, Icon, IconButton, List, ListItem, ListItemButton, ListItemText, Popover } from "@mui/material";
import dummyPopularSearches from "../../config/dummy-popular-searches.json";
import dummyCityPostCodes from "../../config/dummy-city-post-codes.json";
import personPng from "../../assets/images/slider1.png";
import agencyPng from "../../assets/images/agency.png";
import workPng from "../../assets/images/work.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';
import RoomSharpIcon from '@mui/icons-material/RoomSharp';

export default function HomePage() {

    const [nbOfPostings, setNbOfPostings] = useState(91378);
    const { t } = useTranslation();
    const [popularSearches, setPopularSearches] = useState(dummyPopularSearches);
    const [popoverAnchorEl, setPopoverAnchorEl] = useState<HTMLButtonElement | null>(null);
    const openPopover = Boolean(popoverAnchorEl);
    const idPopover = openPopover ? "simple-popover" : undefined;
    const [cityPostCode, setCityPostcode] = useState("");

    const handlePopoverClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setPopoverAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setPopoverAnchorEl(null);
    };

    const handleCodeChange = (code: string) => {
        setCityPostcode(code);
    }

    const getKnownPostCityCodes = () => {
        return dummyCityPostCodes.map((code) => {
            return <ListItem key={code} disableGutters disablePadding>
                <ListItemButton onClick={() => handleCodeChange(code.toString())}>
                    <ListItemText>
                        {code}
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        });
    }

    return (
        <div className="home-page flex--row">
            <div className="home-page__search-bar-container flex--column">
                <h1>
                    {t("homePageMainContainerHeaderPartOne")}
                    <span>{nbOfPostings}</span>
                    {t("homePageMainContainerHeaderPartTwo")}
                </h1>
                <p className="text-color--light-gray">
                    {t("beneathHeaderText")}
                </p>
                <div className="search-bar flex--row">
                    <div className="search-bar__item search-area flex--row">
                        <SearchRoundedIcon />
                        <input type="text" placeholder={t("searchBarInputPlaceholder") ?? ""}/>
                    </div>
                    <Divider orientation="vertical" variant="fullWidth"></Divider>
                    <div className="search-bar__item location-item flex--row">
                        <div className="flex--row">
                            <RoomSharpIcon />
                            <span>
                                {cityPostCode == "" ? t("searchBarCityPostcodePlaceholder") : cityPostCode}
                            </span>
                        </div>
                        <IconButton onClick={handlePopoverClick}>
                            {!openPopover ? <ArrowDropDownSharpIcon /> : <ArrowDropUpSharpIcon />}
                        </IconButton>
                        <Popover
                            id={idPopover}
                            open={openPopover}
                            anchorEl={popoverAnchorEl}
                            onClose={handlePopoverClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                        >
                            <List disablePadding>
                                {getKnownPostCityCodes()}
                            </List>
                        </Popover>
                    </div>
                    <Button className="button--color-deep-blue find-jobs-button">
                        <p>{t("searchBarFindButtonText")}</p>
                    </Button>
                </div>
                <p className="text-color--light-gray">
                    <span className="">{t("beneathSearchBarText")}</span>
                    <span>{popularSearches.join(", ")}</span>
                </p>
            </div>
            <div className="home-page__images-container remove-me">
                <img src={personPng} />
                <img className="agency-img" src={agencyPng} />
                <img className="work-img" src={workPng} />
            </div>
        </div>
    );
}
