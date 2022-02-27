import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Notes from './Notes';
import PersonalDetails from './PersonalDetails';
import Activity from './Activity';
import TradingAccounts from './TradingAccounts';
import Documents from './Documents';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = ({ jsonUrl }) => {
  const [data, setData] = useState(null);
  const [dataErr, setDataErr] = useState(null);

  useEffect(() => {
    if (!jsonUrl) return;
    axios
      .get(jsonUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => setDataErr(error));
  }, []);

  if (dataErr) return dataErr.message; // TODO: make it nicer

  if (!data) return 'Loading...'; // TODO: add spinner here

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PersonalDetails />} />
        <Route path="personal-details" element={<PersonalDetails />} />
        <Route path="notes" element={<Notes />} />
        <Route path="activity" element={<Activity />} />
        <Route path="trading-accounts" element={<TradingAccounts />} />
        <Route path="documents" element={<Documents />} />
      </Route>
    </Routes>
  );
};

export default App;
