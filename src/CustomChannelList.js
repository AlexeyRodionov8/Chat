import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import truncate from 'lodash/truncate';

import Avatar from './Avatar';

const CustomChannelList = (props) => {
  const {
    channel,
      latestMessage,
      latestMessageLength = 30,
      unread,
      setActiveChannel,
      formatLatestMessageDate
  } = props;
  const displayAvatar = channel.data.image;
  const displayName = channel.data.name;
  const { member_count } = channel.data;

  if (
    !displayName ||
    !latestMessage ||
    !latestMessage.messageObject ||
    !latestMessage.messageObject.user
  ) {
    return null;
  }

  let lastUser = null;
  if (member_count > 2) {
    lastUser = (
      <Text style={styles.lastUser}>
        {latestMessage.messageObject.user.name + ': '}
      </Text>
    );
  }

  const messageText = latestMessage.text.replace(/\n/g, ' ');
  const truncatedMessage = truncate(messageText.replace(/\n/g, ' '), {length: latestMessageLength});

  let unreadBlock = null;
  if (unread > 0) {
    unreadBlock = (
      <View style={styles.unread}>
        <Text style={styles.unreadCount}>
          {unread}
        </Text>
        <Image source={ require('./assets/unread.png') } />
      </View>
    );
  }

  const avatarSource = displayAvatar
    ? { uri: displayAvatar}
    : require('./assets/noAvatar.png');

  return (
    <TouchableOpacity
      onPress={setActiveChannel && setActiveChannel.bind(null, channel)}
      testID='channel-preview-button'
      style={styles.container}
    >
      <View style={styles.avatarWrapper}>
        <Avatar imgSource={avatarSource} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title} ellipsizeMode='tail' numberOfLines={1}>
          {displayName}
        </Text>

        <Text style={styles.message}>
          {lastUser}
          {truncatedMessage}
        </Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.date}>
          {formatLatestMessageDate
            ? formatLatestMessageDate(latestMessage.messageObject.created_at)
            : latestMessage.created_at}
        </Text>
        {unreadBlock}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatarWrapper: {
    flexGrow: 0,
  },
  content: {
    marginLeft: 10,
    justifyContent: 'center',
    flexGrow: 1,
  },
  details: {
    flexGrow: 0,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#292A31',
  },
  lastUser: {
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
    color: '#6773A2',
    lineHeight: 21,
  },
  date: {
    color: '#6773A2',
    fontSize: 12,
    lineHeight: 14,
  },
  unread: {
    flexDirection: 'row-reverse',
  },
  unreadCount: {
    color: '#6773A2',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    marginLeft: 4,
  },
});

export default CustomChannelList;
