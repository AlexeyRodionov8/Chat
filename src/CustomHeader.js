import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Avatar from './Avatar';

const CustomHeader = (props) => {
    const { data } = props;
    const name = data.name;
    const memberCount = data.member_count;

    let memberCountBox = null;
    if (memberCount > 2) {
        memberCountBox = (
            <Text style={styles.info}>
                {'Count: ' + memberCount + 'users'}
            </Text>
        );
    }
    return (
        <View style={styles.container}>
            <Avatar imgSource={require('./assets/noAvatar.png')} />
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
    },
    name: {
        color: '#939393',
        fontSize: 18,
    },
    info: {
        color: '#939393',
        fontSize: 14,
    }
});

export default CustomHeader;