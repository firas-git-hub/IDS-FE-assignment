import "./JobCategoryCard.scss";
import JobCategoryCardInterface from "../../interfaces/JobCategoryCardInterface";
import JobCategoryCardInterace from "../../../public/icons/money.png";

export default function JobCategoryCard(props: JobCategoryCardInterface) {
    return <>
        <div className="card flex--row">
            <div className="card__img img-container">
                <img src={`/icons/${props.imgName}.png`} />
            </div>
            <div className="card__content flex--column">
                <p className="header"></p>
                <p className="info"></p>
            </div>
        </div>
    </>

}