import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Notes from './Notes';
import PersonalDetails from './PersonalDetails';
import Activity from './Activity';
import TradingAccounts from './TradingAccounts';
import Documents from './Documents';

const App = () => {
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
