import {View, Image} from 'react-native';
import React from 'react';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fontFamilies';

const AvatarGroupComponent = () => {
  const avatarUrl =
    'https://i.pinimg.com/564x/c7/21/d8/c721d8576801d6cdfb72f6554cd6b6af.jpg';
  const users = [
    {
      avatarUrl: avatarUrl,
      name: 'John Doe',
      uid: '1',
    },
    {
      avatarUrl: avatarUrl,
      name: 'John Doe',
      uid: '2',
    },
    {
      avatarUrl: avatarUrl,
      name: 'John Doe',
      uid: '3',
    },
    {
      avatarUrl: avatarUrl,
      name: 'John Doe',
      uid: '4',
    },
    {
      avatarUrl: avatarUrl,
      name: 'John Doe',
      uid: '5',
    },
    {
      avatarUrl: avatarUrl,
      name: 'John Doe',
      uid: '5',
    },
    {
      avatarUrl: avatarUrl,
      name: 'John Doe',
      uid: '5',
    },
    {
      avatarUrl: avatarUrl,
      name: 'John Doe',
      uid: '5',
    },
    {
      avatarUrl: avatarUrl,
      name: 'John Doe',
      uid: '5',
    },
  ];

  const imageStyle = {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
    height: 32,
    width: 32,
  };

  return (
    <RowComponent justify="flex-start">
      {users.map(
        (user, id) =>
          id < 3 && (
            <Image
              key={user.uid}
              source={{uri: user.avatarUrl}}
              style={[imageStyle, {marginLeft: id === 0 ? 0 : -10}]}
            />
          ),
      )}
      {users.length > 3 && (
        <View
          style={[
            imageStyle,
            {
              backgroundColor: colors.white,
              marginLeft: -10,
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <TextComponent
            textStyles={{
              fontSize: 14,
              lineHeight: 32,
              textAlign: 'center',
              fontFamily: fontFamilies.PoppinsSemiBold,
              color: 'black',
            }}
            text={`${users.length > 9 ? 6 : users.length - 3}+`}
          />
        </View>
      )}
    </RowComponent>
  );
};

export default AvatarGroupComponent;
