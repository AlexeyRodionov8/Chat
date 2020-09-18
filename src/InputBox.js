import React, {useState} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
  AutoCompleteInput,
} from 'stream-chat-react-native';

const InputBox = props => {
  const [ inFocus, setInFocus ] = useState(false);

  const onFocusHandler = () => {
    setInFocus(true);
  }

  const onBlurHandler = () => {
    setInFocus(false);
  }

  let cameraButton = <Image style={styles.cameraIcon} source={ require('./assets/camera.png') } />;
  let sendButton = null;
  let inputContainerStyles = {...styles.inputContainer};
  let containerStyles = {...styles.container};

  if (inFocus) {
    cameraButton = null;
    sendButton = <Image style={styles.sendIcon} source={ require('./assets/sendButton.png') } />;

    inputContainerStyles = {
      ...styles.inputContainer,
      ...styles.inputContainerInFocus
    };

    containerStyles = {
      ...styles.container,
      ...styles.containerInFocus
    };
  }

  return (
    <View style={containerStyles}>
      <View style={inputContainerStyles}>
        <AutoCompleteInput
          {...props}
          additionalTextInputProps={{
            placeholderTextColor: '#6773A2',
            placeholder: 'Write a comment',
            onFocus: onFocusHandler,
            onBlur: onBlurHandler,
          }}
        />

        <View style={styles.actionsContainer}>
          <View style={styles.row}>
            <Image source={ require('./assets/attach.png') } />
            { cameraButton }
          </View>
        </View>
      </View>
      { sendButton }
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#E5EDF8',
  },
  containerInFocus: {
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    height: 50,
    borderRadius: 20,
    paddingHorizontal: 20,
    backgroundColor: '#F5FCFB',
  },
  inputContainerInFocus: {
    borderWidth: 2,
    borderColor: '#6BD4CC',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cameraIcon: {
    marginLeft: 15,
  },
  sendIcon: {
    marginLeft: 20,
  }
});

export default InputBox;
