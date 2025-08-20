
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './clients/pages/landingPage';
import LayOut from './clients/layout';
import ContentPage from './clients/pages/contentPage';
import ContentBySlug from './clients/pages/contentBySlug';
import NewsPage from './clients/pages/newsPage';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EventsPage from './clients/pages/eventsPage';
import SearchResultsPage from './clients/pages/searchResultsPage';
import SettingsPage from './clients/pages/setting';
import LayoutAdmin from './admin/layoutAdmin';
import AdminLogin from './admin/pages/login';
import WelcomAdmin from './admin/pages/welcomDash';
import AdminArticles from './admin/pages/addArticles';
import GetMessages from './admin/pages/getMessages';
import AddContents from './admin/pages/addContent';
import AddEvents from './admin/pages/addEvents';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LayOut />}>
          <Route index element={<ContentPage />} />
          <Route path="content" element={<ContentBySlug />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="events" element={<EventsPage/>}/>
          <Route path="filterSearch" element={<SearchResultsPage />} />
          <Route path="settings" element={<SettingsPage/>}/>
        </Route>

        <Route path="/admin" element={<LayoutAdmin/>}>
         <Route index element={<AdminLogin />} /> 
        <Route path='login' element={<AdminLogin/>}/>
        <Route path='dashboard' element={<WelcomAdmin/>}/>
        <Route path='add-news' element={<AdminArticles/>}/>
        <Route path='bookings' element={<GetMessages/>}/>
        <Route path='add-content' element={<AddContents/>}/>
        <Route path='add-event' element={<AddEvents/>}/>
        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
