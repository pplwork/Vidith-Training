/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Button, Text, NativeModules } from 'react-native';

const { ABC } = NativeModules;

const App = () => {

  const [deviceId, setDeviceId] = useState('');

  useEffect(() => {
    const fetchDeviceId = async () => {
      const id = await ABC.getDeviceId();
      setDeviceId(id);
    };

    fetchDeviceId();
  }, []);


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Device Id:</Text>
      <Text>{deviceId}</Text>
    </View>
  );
};

export default App;
