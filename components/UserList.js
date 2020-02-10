/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import axios from 'axios';
import UserItem from './UserItem';

const baseURL = 'http://8c715b01.ngrok.io/armourx';

const UserList = ({token}) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const getUsers = async () => {
    setLoading(true);
    const res = await axios.get(
      `${baseURL}/wp-json/wp/v2/users?orderby=id&order=desc&per_page=10&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    setUsers(res.data.map(user => user.details));
    setLoading(false);
  };
  useEffect(() => {
    getUsers();
  }, [page]);
  return (
    <View>
      <FlatList
        data={users}
        renderItem={({item}) => <UserItem item={item} />}
        onRefresh={() => setPage(1)}
        refreshing={loading}
      />
    </View>
  );
};

export default UserList;
