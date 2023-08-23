import React from 'react';
import './App.css';
import './assets/styles/Loading.css'
import TopNav from './components/TopNav';
import BannerFrontPage from './components/BannerFrontPage';
import Local from './data/Local'
import AppConstants from './data/Constants'
import ShowCase from './components/ShowCase';
import Center from './layouts/Center';
import Footer from './components/Footer';
import CourseCardCarousel from './components/CourseCardCarousel';

function App() {
  return (
    <div className="App">
      <TopNav />
      <BannerFrontPage />
      <br/><br/>
      <Center width='75%'>
        <ShowCase 
        cardSliderList={Local.showCaseData} 
        titleMessage='Expand your career opportunites'
        excerpt={AppConstants.exploreDummy}
        btnText='Explore Now' />
      </Center>
      <br/><hr/><br/>
      <Center width='75%'>
        <CourseCardCarousel title='Latest Courses' data={Local.latestData} />
      </Center>
      <br/> <hr/> <br/>
      <Center width='75%'>
        <CourseCardCarousel title='Projectstar for Women' data={Local.womenData} />
      </Center>
      <br/> <hr/> <br/>
      <Center width='75%'>
        <CourseCardCarousel title='Projectstar for Students' data={Local.studentData} />
      </Center>
      <br/> <hr/> <br/>
      <Center width='75%'>
        <CourseCardCarousel title='Projectstar for Undergrads' data={Local.showCaseData} />
      </Center>
      <br/><hr/><br/>
      <Center width='75%'>
        <Footer />
      </Center>
    </div>
  );
}

export default App;

