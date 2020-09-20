import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import * as utils from './common/utils';

const CustomDateSeparator = (props) => {
  const { message } = props;
  const date = utils.getFormatDate(message.date);;

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.formatedDate}>
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
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 15,
  },
  formatedDate: {
    fontSize: 12,
    color: '#333333',
  }
});

export default CustomDateSeparator;
