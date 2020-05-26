import React, {Fragment} from 'react';
import OurAchievementsTwo from "../../components/OurAchievementsTwo";
import WorkInquiry from "../../components/WorkInquiry";
import Footer from "../../components/Footer";
import BreadCrumb from "../../components/BreadCrumb";
import FaqLists from "../../components/FaqLists";

const FaqPage = () => {
    return (
        <Fragment>
            <BreadCrumb
                title="quotes"
            />
            <FaqLists/>
            <OurAchievementsTwo/>
            <WorkInquiry/>
            <Footer/>
        </Fragment>
    )
};
export default FaqPage;