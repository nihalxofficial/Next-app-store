"use client"
import { useEffect, useState } from 'react';
import { InstalledAppsContext } from './InstalledAppsContext';

const InstalledAppsProvider = ({ children }) => {
  const [installApps, setInstallApps] = useState([]);

  // ✅ Load from localStorage (client only)
  useEffect(() => {
    const storedData = localStorage.getItem("myData");
    if (storedData) {
      setInstallApps(JSON.parse(storedData));
    }
  }, []);

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(installApps));
  }, [installApps]);

  const data = {
    installApps,
    setInstallApps,
  };

  return (
    <InstalledAppsContext.Provider value={data}>
      {children}
    </InstalledAppsContext.Provider>
  );
};

export default InstalledAppsProvider;