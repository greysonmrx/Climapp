import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home';
import Weather from './pages/Weather';

const switchNavigator = createSwitchNavigator({
    Home: {
        screen: Home
    },
    Weather: {
        screen: Weather
    }    
});

export default createAppContainer(switchNavigator);