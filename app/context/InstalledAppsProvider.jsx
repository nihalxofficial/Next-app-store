import React, { useState } from 'react';
import { InstalledAppsContext } from './InstalledAppsContext';

const InstalledAppsProvider = ({children}) => {
    const [installApps, setInstallApps] = useState([])
    
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