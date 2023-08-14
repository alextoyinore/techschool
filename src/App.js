import React from 'react';
import './App.css';
import './assets/styles/Loading.css'
import TopNav from './layouts/TopNav';
import BannerFrontPage from './layouts/BannerFrontPage';
import CardSlider from './layouts/CardSlider';
import Local from './data/Local'
import AppConstants from './data/Constants'
import ShowCase from './layouts/ShowCase';
import Center from './layouts/Center';

function App() {
  return (
    <div className="App">
      <TopNav />
      <BannerFrontPage /><br/>
      <Center>
        <CardSlider title='Latest Courses' data={Local.latestData} />
      </Center>
      <br/> <hr/> <br/>
      <Center>
        <CardSlider title='Projectstar for Women' data={Local.womenData} />
      </Center>
      <br/> <hr/> <br/>
      <Center>
        <CardSlider title='Projectstar for Students' data={Local.studentData} />
      </Center>
      <br/> <hr/> <br/>
      <ShowCase 
      cardSliderList={Local.studentData} 
      titleMessage='Expand your career opportunites'
      excerpt={AppConstants.exploreDummy}
      ctaText='Explore Now' />
      <br/> <hr/> <br/>
    </div>
  );
}

export default App;

