import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Avatar from './Avatar';

const CustomHeader = (props) => {
    const { data } = props;
    const name = data.name;
    const memberCount = data.member_count;

    let memberCountBox = null;
    let imgSource = data.image ? { uri: data.image } : require('./assets/noAvatar.png');
    if (memberCount > 2) {
        memberCountBox = (
            <Text style={styles.info}>
                {memberCount + ' participants'}
            </Text>
        );
        imgSource = require('./assets/noAvatar.png');
    }
    return (
        <View style={styles.container}>
            <Avatar imgSource={imgSource} />
            <View style={styles.title}>
                <Text style={styles.name}>{name}</Text>
                {memberCountBox}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    title: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    name: {
        color: '#6773A2',
        fontSize: 16,
        lineHeight: 18,
    },
    info: {
        color: '#6773A2',
        fontSize: 12,
        lineHeight: 14,
    }
});

export default CustomHeader;
