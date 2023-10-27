import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';

const Burger = ({navigation}) => {
  return (
    <View
      style={{
        paddingLeft: 16,
        marginTop: 16,
        paddingRight: 16,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
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
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text
          style={{
            fontFamily: 'DM Sans',
            fontSize: 16,
            fontWeight: 'bold',
            color: '#000000',
            marginTop: 7,
            marginLeft: 8,
          }}>
          Kembali
        </Text>
        </TouchableOpacity>
      </View>
      <Image
        style={{
          marginTop: 40,
          width: 394,
          height: 290,
          alignSelf: 'center',
          borderRadius: 6,
        }}
        source={require('../assets/images/bc.png')}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontFamily: 'DM Sans',
            fontSize: 16,
            fontWeight: 'bold',
            color: '#000000',
            marginTop: 12,
          }}>
          Burger Zombeeh
        </Text>
        <Text
          style={{
            fontFamily: 'DM Sans',
            fontSize: 16,
            fontWeight: 'bold',
            color: '#E73232',
            marginLeft: 16,
            marginTop: 12,
          }}>
          Rp 23.000
        </Text>
      </View>
      <Text 
      style={{
        marginTop : 12,
        color : '#A4A4A4',
        fontFamily: 'DM Sans',
        fontSize: 14,
      }}>
        Terbuat dari roti pilihan dan juga dagingnya berasal dari wahyu A10.
        Sehingga ketika menggigitnya dapat membuat cita rasa yang lumer dimulut
        dengan sausnya yang meleleh.
      </Text>
      <Image
        source={require('../assets/images/line.png')}
        style={{
          alignSelf: 'center',
          marginTop: 16,
          marginBottom: 12,
          borderRadius: 6,
          width : 394,
        }}
      />
      <Text
      style={{
        fontFamily: 'DM Sans',
        fontSize: 16,
        color: '#000000',
        marginTop : 20,
      }}>Masukkan Pesanan</Text>
      <View>
        <TextInput placeholder='Masukkan Jumlah Pesanan'
          style={{
            borderWidth: 1,
            height: 52,
            borderRadius: 6,
            marginTop: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 16,
            borderColor : '#a4a4a4',
          }}></TextInput>
          <TouchableOpacity onPress={() => navigation.navigate('Sukses')}>
        <View
        style={{
          height: 52,
          backgroundColor: '#ED3636',
          borderRadius: 12,
          marginTop: 100,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 52,
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
          Konfirmasi Pemesanan
        </Text>
      </View>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Burger;
