import React from 'react';
import {StyleSheet, Dimensions, View, Text} from 'react-native';

import MessageImage from "./MessageImage";

const CustomMessageText = (props) => {
  const { message, isMyMsg } = props;
  const { updated_at } = message;

  const images = message.attachments.map( (image, index) => (
    <MessageImage
      key={index}
      uri={ image.image_url }
    />
  ));

  const hour = ('0' + updated_at.getHours()).slice(-2);
  const minute = ('0' + updated_at.getMinutes()).slice(-2);
  const time = hour + ':' + minute;

  let containerStyles = null;
  let timeStyles = {...styles.time};
  if (isMyMsg) {
    containerStyles = {
      ...styles.container,
      ...styles.containerRight
    };
    timeStyles = {
      ...styles.time,
      ...styles.timeRight
    };
  } else {
    containerStyles = {
      ...styles.container,
      ...styles.containerLeft
    };
  }

  return (
    <View style={containerStyles}>
      {images}
      <Text style={styles.message}>
        {message.text}
      </Text>
      <Text style={timeStyles}>
        {time}
      </Text>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 14,
    paddingBottom: 15,
    paddingTop: 16,
  },
  containerLeft: {
    borderTopLeftRadius: 0,
    marginLeft: 30,
    backgroundColor: '#FFFFFF',
    marginRight: windowWidth * 0.25
  },
  containerRight: {
    borderTopRightRadius: 0,
    marginRight: 30,
    backgroundColor: '#F5FCFB',
    marginLeft: windowWidth * 0.25
  },
  message: {
    color: '#292A31',
    fontSize: 16,
    lineHeight: 24,
  },
  time: {
    color: '#6773A2',
    fontSize: 12,
    lineHeight: 18,
  },
  timeRight: {
    textAlign: 'right',
  },
  image: {
    width: '100%',
    height: 100,
  }
});

export default CustomMessageText;
