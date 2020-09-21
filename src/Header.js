import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Avatar from "./Avatar";

const Header = ({ avatar, title }) => {
  return (
    <View style={styles.container}>
      <Avatar imgSource={{ uri: avatar }} />

      <Text style={styles.title}>
        {title}
      </Text>

      <Image source={require('./assets/newMessage.png')} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#292A31',
    lineHeight: 22,
  },
});

export default Header;
