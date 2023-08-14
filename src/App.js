import React from 'react';
import './App.css';
import './assets/styles/Loading.css'
import TopNav from './layouts/TopNav';
import BannerFrontPage from './layouts/BannerFrontPage';
import CardSlider from './layouts/CardSlider';
import Local from './data/Local'

function App() {
  return (
    <div className="App">
      <TopNav />
      <BannerFrontPage /><br/>
      <CardSlider title='Latest Courses' data={Local.latestData} />
      <br/> <hr/> <br/>
      <CardSlider title='Projectstar for Women' data={Local.womenData} />
      <br/> <hr/> <br/>
      <CardSlider title='Projectstar for Students' data={Local.studentData} />
    </div>
  );
}

export default App;

