import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import AdminNavbar from './components/AdminNavbar';

const AdminLayout = () => (
  <div className="flex h-screen overflow-hidden">
    <AdminSidebar />
    <div className="flex-1 flex flex-col overflow-y-auto">
      <AdminNavbar />
      <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-900">
        <Outlet />
      </main>
    </div>
  </div>
);

export default AdminLayout;
