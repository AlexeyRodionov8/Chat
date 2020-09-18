import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Avatar = ({ imgSource }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imgSource} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 46,
    height: 46,
    borderWidth: 2,
    borderColor: '#F3F4F8',
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 46,
    height: 46,
  }
});
export default Avatar;
