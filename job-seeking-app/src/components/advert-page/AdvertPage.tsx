import { useTranslation } from "react-i18next";
import "./AdvertPage.scss";

export default function AdvertPage() {

    const { t } = useTranslation();

    return <>
        <div className="advert-page flex--column">
            <div className="advert-page__img-container img-container">
                <img src="/icons/app.jpg" />
            </div>
            <div className="footer flex--row text-color--light-gray">
                <p>{t("advertCopyrightText")}</p>
                <div className="footer__img-container img-container">
                    <img src="/icons/facebook.png"/>
                    <img src="/icons/twitter.png"/>
                    <img src="/icons/instagram.png"/>
                    <img src="/icons/linkedin.png"/>
                </div>
            </div>
        </div>
    </>
}