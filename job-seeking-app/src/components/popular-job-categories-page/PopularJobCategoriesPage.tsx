import { useState } from "react";
import JobCategoryCard from "./JobCategoryCard";
import "./PopularJobCategoriesPage.scss";
import jobCategoriesDummyData from "../../config/dummy-job-categories.json";

export default function PopularJobCategoriesPage() {

    const [jobCategories, setJobCategories] = useState(jobCategoriesDummyData);
    
    return <>
        <h1></h1>
        <p></p>
        {
            jobCategories.map((category: any) => {
                return <JobCategoryCard key={category.category} nbOfOpening={category.nbOfOpening} category={category.category} imgName={category.imgName}></JobCategoryCard>
            })
        }
    </>
}