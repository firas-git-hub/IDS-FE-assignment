import "./JobPostsPage.scss";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import jobPostsData from "../../config/dummy-job-posts-data.json";
import JobPost from "./JobPost";
import { useState } from "react";

export default function JobPostsPage() {

    const { t } = useTranslation();
    const jobPosts = jobPostsData;
    const [currentJobPosts, setCurrentJobPosts] = useState(jobPosts.slice(0, 3));

    const handleShowMoreJobPostsButtonClick = () => {
        if (currentJobPosts.length < jobPosts.length) {
            let sliceSize = 2;
            if (currentJobPosts.length + sliceSize > jobPosts.length) {
                sliceSize = jobPosts.length - currentJobPosts.length;
            }
            setCurrentJobPosts(jobPosts.slice(0, currentJobPosts.length + sliceSize))
        }
    }

    return <div className="job-posts-page flex--column">
        <div className="cards-container flex--row">
            {
                currentJobPosts.map((jobPost, index) => {
                    return <JobPost key={index}
                        title={jobPost.title}
                        imgName={jobPost.imgName}
                        category={jobPost.category}
                        location={jobPost.location}
                        minSalary={jobPost.minSalary}
                        maxSalary={jobPost.maxSalary}
                        salaryType={jobPost.salaryType}
                        type={jobPost.type}
                        isFeatured={jobPost.isFeatured}
                        isFilled={jobPost.isFilled}
                        isUrgent={jobPost.isUrgent}
                    >
                    </JobPost>
                })
            }
        </div>
        <Button className={"load-more-jobs-button button--color-deep-blue " + (currentJobPosts.length == jobPosts.length ? "hidden": "")} onClick={handleShowMoreJobPostsButtonClick}>
            {t("loadMoreJobPostsButtontext")}
        </Button>
    </div>
}