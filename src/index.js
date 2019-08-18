import React, { useEffect, useState } from 'react';

import NetInfo from "@react-native-community/netinfo";
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './routes';
import NoConnection from './components/NoConnection';
import { store, persistor } from './store';

export default function App() {
    const [netInfo, setNetInfo] = useState(false);

    function onChange(newState) {
        setNetInfo(newState);
    }

    useEffect(() => {
        NetInfo.isConnected.fetch().then((connectionInfo) => {
        setNetInfo(connectionInfo)
        });
        
        NetInfo.isConnected.addEventListener('connectionChange', onChange);

        return () => {
            NetInfo.isConnected.removeEventListener('connectionChange', onChange);
        }
    }, []);

    return (
        <Provider 
          store={ store }
        >
            {
                netInfo ? (
                    <PersistGate
                        loading={ null }
                        persistor={ persistor }
                    >
                        <Routes />
                    </PersistGate>
                ) : (
                    <NoConnection />
                )
            }            
        </Provider>
    );
}
