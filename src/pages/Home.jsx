import {
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View
        style={{
          height: 52,
          backgroundColor: '#CA2D2D',
          marginHorizontal: 16,
          borderRadius: 99,
          marginTop: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 16,
        }}>
        <Image
          source={require('../assets/images/ayam.png')}
          style={{width: 140, height: 32}}
        />
        <Image
          source={require('../assets/icons/Vector.png')}
          style={{width: 20, height: 20}}
        />
      </View>
      <Text
        style={{
          fontFamily: 'DM Sans',
          fontSize: 12,
          color: '#A4A4A4',
          marginTop: 32,
          marginLeft: 16,
        }}>
        Selamat Datang di
      </Text>
      <Text
        style={{
          fontFamily: 'DM Sans',
          fontSize: 32,
          fontWeight: 'bold',
          color: '#000000',
          marginTop: 4,
          marginLeft: 16,
        }}>
        Kantin Multistudi
      </Text>
      <Text
        style={{
          fontFamily: 'DM Sans',
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000000',
          marginTop: 32,
          marginLeft: 16,
        }}>
        Menu Makanan
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          padding: 16,
          marginTop: 2,
          justifyContent: 'space-between',
        }}>
        <View style={{borderRadius: 12}}>
          <TouchableOpacity onPress={() => navigation.navigate('Burger')}>
            <Image
              source={require('../assets/images/burger.png')}
              style={{width: 190, borderRadius: 12, height: 159}}
            />
          </TouchableOpacity>
        </View>
        <View style={{borderRadius: 12}}>
          <Image
            source={require('../assets/images/pizza.png')}
            style={{width: 190, borderRadius: 12, height: 159}}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 0,
          paddingRight: 16,
          paddingLeft: 16,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Burger')}>
          <Text
            style={{
              fontFamily: 'DM Sans',
              fontSize: 16,
              fontWeight: 'bold',
              color: '#000000',
            }}>
            Burger Zombeeh
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: 'DM Sans',
            fontSize: 16,
            fontWeight: 'bold',
            color: '#000000',
            marginLeft: 68,
          }}>
          Pizza Zombeeh
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#E73232',
            marginLeft: 16,
          }}>
          Rp 23.000
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#E73232',
            marginLeft: 129,
          }}>
          Rp 20.000
        </Text>
      </View>

      <Text
        style={{
          marginTop: 56,
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000000',
          marginHorizontal: 16,
        }}>
        Menu Minuman
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          padding: 16,
          marginTop: 2,
          justifyContent: 'space-between',
        }}>
        <View style={{borderRadius: 12}}>
          <Image
            source={require('../assets/images/lemonade.png')}
            style={{width: 190, borderRadius: 12, height: 159}}
          />
        </View>
        <View style={{borderRadius: 12}}>
          <Image
            source={require('../assets/images/milkshake.png')}
            style={{width: 190, borderRadius: 12, height: 159}}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 0,
          paddingRight: 16,
          paddingLeft: 16,
        }}>
        <Text
          style={{
            fontFamily: 'DM Sans',
            fontSize: 16,
            fontWeight: 'bold',
            color: '#000000',
          }}>
          Lemonade
        </Text>
        <Text
          style={{
            fontFamily: 'DM Sans',
            fontSize: 16,
            fontWeight: 'bold',
            color: '#000000',
            marginLeft: 117,
          }}>
          Milkshake
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#E73232',
            marginLeft: 16,
          }}>
          Rp 12.000
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#E73232',
            marginLeft: 129,
          }}>
          Rp 15.000
        </Text>
      </View>
    </ScrollView>
  );
};

export default Home;
