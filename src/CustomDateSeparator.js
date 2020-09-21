import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import * as utils from './common/utils';

const CustomDateSeparator = (props) => {
  const { message } = props;
  const date = utils.getFormatDate(message.date);;

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.messageDate}>
          {date}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  wrapper: {
    backgroundColor: 'white',
    paddingHorizontal: 32,
    paddingVertical: 5,
    borderRadius: 30,
  },
  messageDate: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: 'bold',
    color: '#6773A2',
  }
});

export default CustomDateSeparator;
