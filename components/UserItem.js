import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {status} from './constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

const UserItem = ({item}) => {
  const renderItemBackground = account_status => {
    switch (account_status) {
      case status.approved:
        return 'green';
      case status.pending:
        return 'orange';
      case status.rejected:
        return 'firebrick';
      default:
        break;
    }
  };
  console.log(item);
  return (
    <TouchableOpacity>
      <View style={styles.listItem}>
        <View style={styles.listItemInner}>
          <Text style={styles.listItemTextFirst}>{item.display_name}</Text>
          <Text style={styles.listItemText}>{item.account_number}</Text>
        </View>
        <Icon
          name="circle"
          size={20}
          color={renderItemBackground(item.account_status)}
          solid
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listItemInner: {
    flexDirection: 'row',
  },
  listItemTextFirst: {
    paddingLeft: 0,
    textTransform: 'capitalize',
  },
  listItemText: {
    paddingLeft: 8,
    textTransform: 'capitalize',
  },
});

export default UserItem;
