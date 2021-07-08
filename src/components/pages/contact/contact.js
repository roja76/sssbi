import React from 'react';
import { SecBannerContact, SecContactCard, SecContactUs,SecMap } from '../sections';


const contact = () => {
    return (
        <div>
            <SecBannerContact/>
            <SecContactUs/>
           <SecContactCard/>
           <SecMap/>
        </div>
    );
}

export default contact;
