import "./JobCategoryCard.scss";
import { useTranslation } from "react-i18next";
import JobCategoryCardInterface from "../../interfaces/JobCategoryCardInterface";
import JobCategoryCardInterace from "../../../public/icons/money.png";

export default function JobCategoryCard(props: JobCategoryCardInterface) {

    const { t } = useTranslation();

    return <>
        <div className="card flex--row">
            <div className="card__img img-container">
                <img src={`/icons/${props.imgName}.png`} />
            </div>
            <div className="card__content flex--column">
                <h4 className="header">{t(props.category)}</h4>
                <p className="info text-color--light-gray">{"(" + props.nbOfOpenings + t("jobCategoryCardOpenPositionsText")}</p>
            </div>
        </div>
    </>

}