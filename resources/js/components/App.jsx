import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Notes from './Notes';
import PersonalDetails from './PersonalDetails';
import Activity from './Activity';
import TradingAccounts from './TradingAccounts';
import Documents from './Documents';
import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * Extract personal details from JSON
 * @param {Object} data JSON
 * @return {Object} personal data
 */
function extractDetailsFromData(data) {
  return {
    'First Name': data.firstname ?? '',
    'Last Name': data.lastname ?? '',
    Phone: data.phone ?? '',
  };
}

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

  const details = extractDetailsFromData(data);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PersonalDetails details={details} />} />
        <Route
          path="personal-details"
          element={<PersonalDetails details={details} />}
        />
        <Route path="notes" element={<Notes notes={data.notes ?? {}} />} />
        <Route
          path="activity"
          element={<Activity activity={data.activity ?? {}} />}
        />
        <Route
          path="trading-accounts"
          element={<TradingAccounts accounts={data.trading_accounts ?? {}} />}
        />
        <Route
          path="documents"
          element={<Documents documents={data.documents ?? {}} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
