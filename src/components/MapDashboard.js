// Updated MapDashboard component with all features

import React from 'react';
import InteractiveMap from './InteractiveMap';
import Geofencing from './Geofencing';
import RouteHistory from './RouteHistory';

const MapDashboard = () => {
    return (
        <div>
            <InteractiveMap />
            <Geofencing />
            <RouteHistory />
        </div>
    );
};

export default MapDashboard;