import React from 'react';
import Banner from '../Banner/Banner';
import CollegeDialogue from '../CollegeDialogue/CollegeDialogue';
import CollegeCard from '../CollegeCard/CollegeCard';
import ImageSection from '../ImageSection/ImageSection';
import RserachPaper from './RserachPaper/RserachPaper';
import ReviewSection from '../ReviewSection/ReviewSection';

const Home = () => {
    return (
        <div>
           <Banner/>
           <CollegeDialogue/>
           <CollegeCard></CollegeCard>
           <ImageSection/>
           <RserachPaper/>
         <ReviewSection/>
        </div>
    );
};

export default Home;