import React, { useState } from 'react';
import './secReadMore.css';

const SecReadMore = (props) => {
    const {readMore} = props;
    const [isReadMore, setIsReadMore] = useState(false);
    return (
        <>
        {isReadMore ? <><p>{readMore}</p><span className='read-more-text' onClick={()=>setIsReadMore(false)}>ReadLess</span> </>: <span className='read-more-text' onClick={()=>setIsReadMore(true)}>...ReadMore</span>}
      </>
    );
}

export default SecReadMore;
