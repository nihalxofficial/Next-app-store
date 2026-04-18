"use client"
import  { useEffect, useState } from 'react';
import { InstalledAppsContext } from './InstalledAppsContext';

const InstalledAppsProvider = ({children}) => {
    const [installApps, setInstallApps] = useState( () => {
         const storedData = localStorage.getItem("myData");
        return storedData ? JSON.parse(storedData) : [];
  });


    useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(installApps));
  }, [installApps])


    
    const data = {
        installApps,
        setInstallApps,
    }
    return (
        <InstalledAppsContext.Provider value={data}>
            {children}
        </InstalledAppsContext.Provider>
    );
};

export default InstalledAppsProvider;