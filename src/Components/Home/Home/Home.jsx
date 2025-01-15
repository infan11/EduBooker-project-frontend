import React from 'react';
import Banner from '../Banner/Banner';
import CollegeDialogue from '../CollegeDialogue/CollegeDialogue';
import CollegeCard from '../CollegeCard/CollegeCard';

const Home = () => {
    return (
        <div>
           <Banner/>
           <CollegeDialogue/>
           <CollegeCard></CollegeCard>
        </div>
    );
};

export default Home;