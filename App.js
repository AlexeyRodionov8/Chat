import React, { PureComponent } from 'react';
import { View, SafeAreaView, TouchableWithoutFeedback, Text, Image } from 'react-native';
import { StreamChat } from 'stream-chat';
import {
    Chat,
    Channel,
    MessageList,
    MessageTextContainer,
    ChannelList,
    Thread,
    ChannelPreviewMessenger,
    MessageInput,
    CloseButton,
} from 'stream-chat-react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Header from "./src/Header";
import CustomChannelList from "./src/CustomChannelList";
import CustomMessage from "./src/CustomMessage";
import InputBox from "./src/InputBox";
import InputContainerStyles from "./src/InputContainerStyles";
import CustomDateSeparator from "./src/CustomDateSeparator";
import CustomHeader from './src/CustomHeader';

const chatClient = new StreamChat('f8wwud5et5jd');
const userToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiaG9seS1tdWQtNCJ9.G2wZPA4kENOFlr6kxue-xk9cJmeKeErfU2CZVZG7k1U';

const user = {
    id: 'holy-mud-4',
    name: 'John Black',
    image:
        'https://randomuser.me/api/portraits/men/18.jpg',
};

chatClient.setUser(user, userToken);

class ChannelListScreen extends PureComponent {
    static navigationOptions = () => ({
        headerShown: false
    });

    render() {
        return (
            <SafeAreaView>
                <Chat client={chatClient}>
                    <View style={{
                      display: 'flex',
                      height: '100%',
                      padding: 10,
                      backgroundColor: 'white'
                    }}>
                      <Header avatar={user.image} title='Messages' />
                      <ChannelList
                          Preview={CustomChannelList}
                          filters={{ type: 'messaging', members: { $in: ['holy-mud-4'] } }}
                          sort={{ last_message_at: -1 }}
                          options={{}}
                          onSelect={(channel) => {
                              this.props.navigation.navigate('Channel', {
                                  channel,
                              });
                          }}
                      />

                    </View>
                </Chat>
            </SafeAreaView>
        );
    }
}

const theme = {
  messageInput: {
    container: 'width: 100%; border-radius: 0; margin: 0;',
    inputBoxContainer: 'margin: 0;',
    inputBox: 'font-size: 16px; line-height: 24px; color: #6773A2;',
  },
  messageList: {
    ListContainer: 'padding-left: 0;',
  },
  message: {
    content: {
      textContainer: 'margin: 0; padding: 0; background-color: #E5EDF8; borderWidth: 0;'
    }
  },
};

class ChannelScreen extends PureComponent {
    static navigationOptions = ({ navigation }) => {
        const channel = navigation.getParam('channel');
        return {
          headerStyle: {
            backgroundColor: '#FFFFFF',
            height: 80,
            shadowOpacity: 0,
            elevation: 0,
          },
          headerLeftContainerStyle: {
            width: 63,
          },
          headerLeft: (
            <View style={{
              flex: 1,
              width: 63,
              paddingRight: 3,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
              <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require('./src/assets/backButton.png')}
              />
              </TouchableWithoutFeedback>
            </View>
          ),
          headerTitleContainerStyle: {
            margin: -8
          },
          headerTitle: props => <CustomHeader {...props} data={channel.data} />,
        };
    };

    render() {
        const { navigation } = this.props;
        const channel = navigation.getParam('channel');

        return (
            <SafeAreaView>
                <Chat client={chatClient} style={theme}>
                    <Channel client={chatClient} channel={channel}>
                        <View style={{
                          flex: 1,
                          height: '100%',
                          marginHorizontal: -10,
                          backgroundColor: '#E5EDF8'
                        }}>
                            <MessageList
                              Message={CustomMessage}
                              DateSeparator={CustomDateSeparator}
                              onThreadSelect={(thread) => {
                                this.props.navigation.navigate('Thread', {
                                  thread,
                                  channel: channel.id,
                                });
                              }}
                            />

                            <MessageInput
                              Input={InputBox}
                              actionSheetStyles={InputContainerStyles}
                            />
                        </View>
                    </Channel>
                </Chat>
            </SafeAreaView>
        );
    }
}

class ThreadScreen extends PureComponent {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: <Text style={{ fontWeight: 'bold' }}>Thread</Text>,
        headerLeft: null,
        headerRight: (
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
                style={{marginRight: 20}}
            >
                <CloseButton />
            </TouchableOpacity>
        ),
    });

    render() {
        const { navigation } = this.props;
        const thread = navigation.getParam('thread');
        const channel = chatClient.channel(
            'messaging',
            navigation.getParam('channel'),
        );

        return (
            <SafeAreaView>
                <Chat client={chatClient}>
                    <Channel
                        client={chatClient}
                        channel={channel}
                        thread={thread}
                    >
                        <View
                            style={{
                                display: 'flex',
                                height: '100%',
                                justifyContent: 'flex-start',
                            }}
                        >
                            <Thread thread={thread} />
                        </View>
                    </Channel>
                </Chat>
            </SafeAreaView>
        );
    }
}

const RootStack = createStackNavigator(
    {
        ChannelList: {
            screen: ChannelListScreen,
        },
        Channel: {
            screen: ChannelScreen,
        },
        Thread: {
            screen: ThreadScreen,
        },
    },
    {
        initialRouteName: 'ChannelList',
    },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
