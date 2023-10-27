import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

const Sukses = ({navigation}) => {
  return (
    <View>
      <View>
        <Image
          source={require('../assets/images/sukses.png')}
          style={{
            alignSelf: 'center',
            width: 328,
            height: 280,
            marginTop: 80,
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
            marginHorizontal: 16,
            borderRadius: 12,
            marginTop: 394,
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
              marginLeft: 98,
            }}>
            Kembali Ke Menu Utama
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Sukses;