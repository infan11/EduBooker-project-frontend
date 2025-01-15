import React from 'react';
import Banner from '../Banner/Banner';
import CollegeDialogue from '../CollegeDialogue/CollegeDialogue';
import CollegeCard from '../CollegeCard/CollegeCard';
import ImageSection from '../ImageSection/ImageSection';
import RserachPaper from './RserachPaper/RserachPaper';
import ReviewSection from '../ReviewSection/ReviewSection';
import HomeCard from '../HomeCard/HomeCard';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>EDUBOOKER - HOME</title>
            </Helmet>
           <Banner/>
           <CollegeDialogue/>
           <HomeCard/>
           <ImageSection/>
           <RserachPaper/>
         <ReviewSection/>
        </div>
    );
};

export default Home;