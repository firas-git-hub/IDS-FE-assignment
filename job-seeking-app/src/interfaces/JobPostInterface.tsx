import React from "react";

export default interface JobPostInterface {
    title: string;
    imgName: string;
    category: string;
    location: string;
    minSalary: number;
    maxSalary: number;
    salaryType: string;
    type: string;
    isFeatured: boolean;
    isFilled: boolean;
    isUrgent: boolean;
    children?: React.ReactNode;
}