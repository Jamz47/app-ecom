import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import AudioLogo from '../../assets/logo/AudioLogo';
import Avator from '../../assets/avator/Avator';
import MenuVariant from '../../assets/Icon/MenuVariant';
import {Text} from '@rneui/themed';
import Search from '../../assets/Icon/Search';
import Models from './Model/Models';
import Bannar from './Model/Bannar';
import FeaturedProduct from './FeaturedProduct';
import Cards from './Cards';
import {DATA} from '../../Data/Alldata';
import InputText from '../../components/InputText/InputText';

const HomeScreen = ({navigation}) => {
  const {home} = DATA;

  const handleToSearch = () => {
    navigation.navigate('Search');
  };
  return (
    <View style={styles.container}>
      {/* Section 1: Top Header */}
      <View style={styles.section1}>
        <MenuVariant />
        <View style={styles.headerLogo}>
          <AudioLogo />
          <Text style={styles.logoText}>{home.headers}</Text>
        </View>
        <View>
          <Avator />
        </View>
      </View>

      {/* Section 2: Greeting Text */}
      <View style={styles.section2}>
        <Text style={styles.greetingText}>Hi, {home.username}</Text>
        <Text style={styles.mainText}>{home.title}</Text>
      </View>
      {/* Section 3: Search Bar */}
      <InputText onFocus={() => handleToSearch()} />
      {/* Section 4: Categories */}
      <View style={styles.model}>
        <Models />
      </View>
      <Bannar />

      {/* Text Section */}

      <FeaturedProduct />

      {/* Section 5: Banners */}

      <Cards />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FC',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  section1: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  headerLogo: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  section2: {
    width: '90%',
    marginTop: 20,
    alignItems: 'flex-start',
  },
  greetingText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    width: '80%',
  },
  // model
  model: {
    flex: 1,
    backgroundColor: '#F3F3F4',
    height: '100%',
    width: '100%',
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  // bandage
  bandage: {
    backgroundColor: '#0ACF83',
    width: 100,
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 20,
    marginTop: 30,
  },
});
