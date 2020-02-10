import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from './components/Header';
import Login from './components/Login';
import UserList from './components/UserList';
import axios from 'axios';

const baseURL = 'http://8c715b01.ngrok.io/armourx';
const App = () => {
  const [token, setToken] = useState(null);
  const handleLogin = async (username, password) => {
    console.log(username, password);
    const res = await axios.post(`${baseURL}/wp-json/jwt-auth/v1/token`, {
      username,
      password,
    });
    console.log(res.data);
    setToken(res.data.token);
  };
  return (
    <>
      <View>
        <Header />
        {token ? (
          <UserList token={token} />
        ) : (
          <Login handleLogin={handleLogin} />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
