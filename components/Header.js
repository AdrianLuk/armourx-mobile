import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from './constants';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Armourx</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: colors.orange,
  },
  text: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Header;
