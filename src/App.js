import React from 'react';
import './App.css';
import './assets/styles/Loading.css'
import TopNav from './components/TopNav';
import BannerFrontPage from './components/BannerFrontPage';
import CardSlider from './components/CardSlider';
import Local from './data/Local'
import AppConstants from './data/Constants'
import ShowCase from './components/ShowCase';
import Center from './layouts/Center';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TopNav />
      <BannerFrontPage /><br/><br/>
      <Center width='80%'>
        <ShowCase 
        cardSliderList={Local.showCaseData} 
        titleMessage='Expand your career opportunites'
        excerpt={AppConstants.exploreDummy}
        btnText='Explore Now' />
      </Center>
      <br/><hr/><br/>
      <Center width='80%'>
        <CardSlider title='Latest Courses' data={Local.latestData} />
      </Center>
      <br/> <hr/> <br/>
      <Center width='80%'>
        <CardSlider title='Projectstar for Women' data={Local.womenData} />
      </Center>
      <br/> <hr/> <br/>
      <Center width='80%'>
        <CardSlider title='Projectstar for Students' data={Local.studentData} />
      </Center>
      <br/> <hr/> <br/>
      <Center width='80%'>
        <CardSlider title='Projectstar for Undergrads' data={Local.showCaseData} />
      </Center>
      <br/><br/>
      <Footer />
    </div>
  );
}

export default App;

