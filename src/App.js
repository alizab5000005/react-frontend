import { Route, Routes } from 'react-router-dom';

import Dashboard from './pages/admin-panel/Dashboard';
import Contractors from './pages/admin-panel/Contractors';
import Contracts from './pages/admin-panel/Contracts';
import Complaints from './pages/admin-panel/Complaints';
import Feedbacks from './pages/admin-panel/Feedbacks';
import Users from './pages/admin-panel/Users';
import AdminSignIn from './pages/admin-panel/SignIn';
import Profile from './pages/contractors/Profile';
import UserProfile from './pages/users/Profile';
import Messages from './pages/admin-panel/Messages';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Bids from './pages/Bids';
import BidDetails from './pages/BidDetails';
import PostBid from './pages/PostBid';
import Messenger from './pages/Messenger';

import BecomeContractor from './pages/BecomeContractor';
import ProjectDetails from './pages/contractors/ProjectDetails';
import AllContractors from './pages/contractors/AllContractors';
import FullMessage from './pages/admin-panel/FullMessage';
function App() {

  return (
    <div className="app">

      <Routes>

        <Route exact path='/admin/dashboard' element={< Dashboard />} />
        <Route exact path='/admin/login' element={< AdminSignIn />} />
        <Route exact path='/admin/contractors' element={< Contractors />} />
        <Route exact path='/admin/contracts' element={< Contracts />} />
        <Route exact path='/admin/complaints' element={< Complaints />} />
        <Route exact path='/admin/messages' element={< Messages />} />
        <Route exact path='/admin/feedbacks' element={< Feedbacks />} />
        <Route exact path='/admin/messages' element={< Messages />} />
        <Route exact path='/admin/:id' element={< FullMessage />} />
        <Route exact path='/admin/users' element={< Users />} />
        <Route exact path='/contractor/:name' element={< Profile />} />
        <Route exact path='/user/:name' element={< UserProfile />} />
        <Route exact path='/' element={< Home />} />
        <Route exact path='/contractors' element={< AllContractors />} />
        <Route exact path='/sign-up' element={< SignUp />} />
        <Route exact path='/sign-in' element={< SignIn />} />
        <Route exact path='/bids' element={< Bids />} />
        <Route exact path='/bid/:name' element={< BidDetails />} />
        <Route exact path='/post-bid' element={< PostBid />} />
        <Route exact path='/messenger' element={< Messenger />} />
        <Route exact path='/:name' element={< Messenger />} />
        <Route exact path='/project-details' element={< ProjectDetails />} />
        <Route exact path='/become-contractor' element={< BecomeContractor />} />

      </Routes>

    </div>
  );
}

export default App;
