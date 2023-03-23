import "./JobPost.scss";
import { Chip, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import JobPostInterface from "../../interfaces/JobPostInterface";
import bookmarkPng from "../../assets/images/bookmark.png";

export default function JobPost(props: JobPostInterface) {

    const { t } = useTranslation();

    return <>
        <div className="job-post-card flex--row">
            <div className="job-post-card__content flex--row">
                <div className="post-img img-container">
                    <img src={`/icons/${props.imgName}`} />
                </div>
                <div className="info flex--column">
                    <div className="header flex--row">
                        <h4>{props.title}</h4>
                        <p className={props.isFeatured ? "" : "none"}>
                            {t("featured")}
                        </p>
                    </div>

                    <div className="description flex--row text-color--light-gray">
                        <div className="item flex--row">
                            <div className="img-container">
                                <img src="/icons/briefcase.png" />
                            </div>
                            <p>
                                {t(props.category)}
                            </p>
                        </div>
                        <div className="item flex--row">
                            <div className="img-container">
                                <img src="/icons/location.png" />
                            </div>
                            <p>
                                {t(props.location)}
                            </p>
                        </div>
                        <div className="item flex--row">
                            <div className="img-container">
                                <img src="/icons/money.png" />
                            </div>
                            <p>
                                {props.maxSalary + " - " + props.minSalary + t("slashWithSpaces") + t(props.salaryType)}
                            </p>
                        </div>
                    </div>
                    <div className="chips flex--row">
                        <Chip className="deep-blue" label={t(props.type)}></Chip>
                        <Chip color="warning" className={"yellow " + (props.isUrgent ? "" : "hidden ")} label={t("urgent")}></Chip>
                    </div>
                </div>
            </div>
            <IconButton className={"job-post-card__bookmark-button"}>
                <div className="img-container">
                    <img src={bookmarkPng} />
                </div>
            </IconButton>
        </div>
    </>
}