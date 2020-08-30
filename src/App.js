import React from 'react';
import './App.css';
import Header from './components/header'
import TopCardsList from './components/top-cards-list';
import Overview from './components/overview';
import Switch from './components/switch';

function App() {
  return (
    <>
      <Header>
        <Switch />
      </Header>
      <TopCardsList />
      <Overview />
    </> 
  );
}

export default App;
