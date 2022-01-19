import React from 'react';
import './totalprojects.css';
import Projects1 from './Projects1';
import Projects2 from './Projects2';
import Projects3 from './Projects3';
import Projects4 from './Projects4';
function Totalprojects() {
  return(
      <div className='total'>
        <div className='total-card'>
            <Projects1 />
        </div>
        <div className='total-card'>
            <Projects2 />
        </div>
        <div className='total-card'>
            <Projects3 />
        </div>
        <div className='total-card'>
            <Projects4 />
        </div>
      </div>
  );
}


export default Totalprojects;
