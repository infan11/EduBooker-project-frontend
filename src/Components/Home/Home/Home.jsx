import React from 'react';
import Banner from '../Banner/Banner';
import CollegeDialogue from '../CollegeDialogue/CollegeDialogue';
import CollegeCard from '../CollegeCard/CollegeCard';
import ImageSection from '../ImageSection/ImageSection';
import RserachPaper from './RserachPaper/RserachPaper';

const Home = () => {
    return (
        <div>
           <Banner/>
           <CollegeDialogue/>
           <CollegeCard></CollegeCard>
           <ImageSection/>
           <RserachPaper/>
        </div>
    );
};

export default Home;