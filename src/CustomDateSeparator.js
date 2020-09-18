import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DateSeparator } from 'stream-chat-react-native';

const CustomDateSeparator = (props) => {
  const { message } = props;
  const date = message.date;
  console.log(props);

  return (
    <View style={styles.container}>
      <DateSeparator
        // HERE
        message={{ date }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  }
});

export default CustomDateSeparator;
