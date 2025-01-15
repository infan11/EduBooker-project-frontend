import React from 'react';
import CollegeCard from '../../Home/CollegeCard/CollegeCard';
import CollegeBanner from './CollegeBanner/CollegeBanner';
import { Helmet } from 'react-helmet';

const Colleges = () => {
    return (
        <div>
            <Helmet>
                <title>EDUBOOKER - COLLEGES</title>
            </Helmet>
            <CollegeBanner/>
         <CollegeCard/>
        </div>
    );
};

export default Colleges;