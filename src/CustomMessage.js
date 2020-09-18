import React from 'react';
import {StyleSheet, View} from 'react-native';
import { MessageTextContainer } from 'stream-chat-react-native';
import CustomMessageText from "./CustomMessageText";

const CustomMessage = (props) => {
  const { message, Message} = props;

  const isMyMsg = Message.isMyMessage(message);
  const messageAlign = isMyMsg ? 'right' : 'left';

  return (
    <View style={styles.container}>
      <MessageTextContainer
        message={message}
        alignment={messageAlign}
        MessageText={CustomMessageText}
        isMyMsg={isMyMsg}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  }
});

export default CustomMessage;
