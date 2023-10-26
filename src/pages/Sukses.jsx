import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

const Sukses = ({navigation}) => {
  return (
    <View>
      <View>
      <View
          style={{
            flexDirection: 'row',
            width: 40,
            height: 40,
            backgroundColor: '#CA2D2D',
            borderRadius: 100,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              style={{
                alignSelf: 'center',
                marginTop: 7,
                marginLeft: 7,
              }}
              source={require('../assets/icons/Frame.png')}
            />
          </TouchableOpacity>
        </View>
        <Image
          source={require('../assets/images/Sukses.jpeg')}
          style={{
            alignSelf: 'center',
            width: 328,
            height: 280,
            marginTop: 40,
            marginBottom: 12,
            borderRadius: 6,
          }}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View
          style={{
            height: 52,
            backgroundColor: '#ED3636',
            marginHorizontal: 49,
            borderRadius: 12,
            marginTop: 360,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 16,
          }}>
          <Text
            style={{
              fontFamily: 'DM Sans',
              fontSize: 14,
              fontWeight: 'bold',
              color: 'white',
              marginLeft: 68,
            }}>
            Kembali Ke Menu Utama
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Sukses;