import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/fonts.css';
// Layouts
import PublicLayout from "./components/PublicLayout";
import AdminLayout from "./admin/AdminLayout";
import ManagerLayout from "./manager/ManagerLayout";
import UserLayout from "./user/UserLayout";

// Pages
import Home from "./pages/Home";
import HistoricalPlaces from "./pages/HistoricalSites";
import ReligiousSites from "./pages/ReligiousSites";
import HistoryofMandi from "./pages/HistoryofMandi";
import Temples from "./pages/Temples";
import Tourist from "./pages/Tourist";
import Parking from "./pages/Parking";
import AboutMandi from "./pages/About";
import GlimpsesMandi from "./pages/GlimpsesMandi";
import Events from "./pages/Events";
import TemplesMonuments from "./pages/TemplesMonuments";
import BuddhistSites from "./pages/BuddhistSites";
import Museums from "./pages/Museums";
import ForestWildlife from "./pages/ForestWildlife";
import LakesWaterfalls from "./pages/LakesWaterfalls";
import ArtsCrafts from "./pages/ArtsCrafts";
import PlaceDetail from "./pages/PlaceDetail";
import FAQ from "./pages/FAQ";

// Auth
import Register from "./pages/Register";
import Login from "./pages/Login";

// Dashboards
import AdminDashboardCards from "./admin/components/AdminDashboardCards";
import ManagerDashboardCard from "./manager/components/ManagerDashboardCard";
import UserDashboardCard from "./user/components/UserDashboardCard";

// Admin pages
import ManageUsers from './admin/pages/ManageUsers';
import ManageTemples from './admin/pages/ManageTemples';
import FeedbackDashboard from "./admin/pages/FeedbackDashboard";
// Manager pages
import ManageParking from './manager/pages/ManagerParking';

// User pages
import UserParking from './user/pages/UserParking';
import FeedbackForm from "./components/Home/ContactUs";
import UserTestimonial from "./user/pages/UserTestimonial";
// Logout
import Logout from "./components/Logout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/temples" element={<Temples />} />
          <Route path="/tourist" element={<Tourist />} />
          <Route path="/parking" element={<Parking />} />
          <Route path="/about-mandi" element={<AboutMandi />} />
          <Route path="/glimpses-mandi" element={<GlimpsesMandi />} />
          <Route path="/events" element={<Events />} />
          <Route path="/historical-sites" element={<HistoricalPlaces />} />
          <Route path="/historical-sites/:id" element={<PlaceDetail />} />
          <Route path="/religious-sites" element={<ReligiousSites />} />
          <Route path="/history" element={<HistoryofMandi />} />
          <Route path="/temples-monuments" element={<TemplesMonuments />} />
          <Route path="/buddhist-sites" element={<BuddhistSites />} />
          <Route path="/museums" element={<Museums />} />
          <Route path="/forest-wildlife" element={<ForestWildlife />} />
          <Route path="/lakes-waterfalls" element={<LakesWaterfalls />} />
          <Route path="/arts-crafts" element={<ArtsCrafts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      <Route path="faqs" element={<FAQ/>}/>
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboardCards />} />
          <Route path="register-admin" element={<AdminDashboardCards />} />
          <Route path="register-manager" element={<AdminDashboardCards />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="manage-temples" element={<ManageTemples />} />
          <Route path="user-feedback" element={<FeedbackDashboard/>}/>
        </Route>

        {/* Manager Routes */}
        <Route path="/manager" element={<ManagerLayout />}>
          <Route path="dashboard" element={<ManagerDashboardCard />} />
          <Route path="manager-parking" element={<ManageParking />} />
        </Route>

        {/* User Routes */}
        <Route path="/user" element={<UserLayout />}>
          <Route path="dashboard" element={<UserDashboardCard />} />
          <Route path="book-parking" element={<UserParking />} />
          <Route path="user-feedback" element={<FeedbackForm/>}/>
       <Route path="user-testimonial" element={<UserTestimonial/>}/>
        </Route>

        {/* Top-level Logout */}
        <Route path="/logout" element={<Logout />} />

        {/* Optional: 404 */}
        <Route path="*" element={<div className="text-center mt-28 text-gray-600 dark:text-gray-300">Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
