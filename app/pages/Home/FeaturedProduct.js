import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FeaturedProduct = () => {
  return (
    <View style={{marginTop: 5}}>
      <View style={styles.container}>
        <Text style={styles.text}>Featured Products</Text>
        <Text style={{fontSize: 16}}>See All</Text>
      </View>
    </View>
  );
};

export default FeaturedProduct;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    height: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#000',
    fontWeight: '400',
  },
});
