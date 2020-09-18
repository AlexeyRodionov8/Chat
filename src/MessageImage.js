import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';

const MessageImage = (props) => {
  const { uri } = props;
  const [ rootWidth, setRootWidth ] = useState(1);
  const [ width, setWidth ] = useState(1);
  const [ height, setHeight ] = useState(1);

  Image.getSize(uri, (width, height) => {
    if (height !== 1) {
      setWidth(width);
      setHeight(height);
    }
  });

  const onLayoutHandler = (event) => {
    const { width } = event.nativeEvent.layout;
    setRootWidth(width);
  };

  const imageHeight = height * rootWidth / width;

  return (
    <View style={styles.container} onLayout={onLayoutHandler}>
      <Image
        style={{ width: '100%', height: imageHeight }}
        source={{ uri: uri }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  // image: {
  //   width: 100,
  //   height: 100
  // }
});

export default MessageImage;
