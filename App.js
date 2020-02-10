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

const App = () => {
  const [token, setToken] = useState(null);
  const [users, setUsers] = useState([]);
  const handleLogin = async ({username, password}) => {};
  return (
    <>
      <View>
        <Header />
        {token ? <Login handleLogin={handleLogin} /> : <UserList />}
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
