import React from 'react';
import './App.css';
import '../assets/styles/Loading.css'
import TopNav from './layouts/TopNav';
import BannerFrontPage from './layouts/BannerFrontPage';
import CardSlider from './layouts/CardSlider';

function App() {
  return (
    <div className="App">
      <TopNav />
      <BannerFrontPage /><br/>
      <CardSlider title='Latest Courses' />
    </div>
  );
}

export default App;

