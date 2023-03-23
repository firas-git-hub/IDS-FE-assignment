import "./PopularJobCategoriesPage.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import JobCategoryCard from "./JobCategoryCard";
import jobCategoriesDummyData from "../../config/dummy-job-categories.json";

export default function PopularJobCategoriesPage() {

    const { t } = useTranslation();
    const [jobCategories, setJobCategories] = useState(jobCategoriesDummyData);
    const [jobsAddedTodayCount, setJobsAddedTodayCount] = useState(293);

    return <div className="popular-job-categories-page flex--column">
        <div className="header">
            <h1>{t("popularJobCategoriesHeaderText")}</h1>
            <p className="text-color--light-gray">
                {
                    t("popularJobCategoriesSubHeaderTextPartOne") +
                    jobsAddedTodayCount +
                    t("popularJobCategoriesSubHeaderTextPartTwo")
                }
            </p>
        </div>
        <div className="cards-container flex--row">
            {
                jobCategories.map((category: any) => {
                    return <JobCategoryCard key={category.category} nbOfOpenings={category.nbOfOpenings} category={category.category} imgName={category.imgName}></JobCategoryCard>
                })
            }
        </div>
    </div>
}