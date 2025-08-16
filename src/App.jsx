
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import LayOut from './layout';
import ContentPage from './pages/contentPage';
import ContentBySlug from './pages/contentBySlug';
import NewsPage from './pages/newsPage';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EventsPage from './pages/eventsPage';
import SearchResultsPage from './pages/searchResultsPage';
import SettingsPage from './pages/setting';

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
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
