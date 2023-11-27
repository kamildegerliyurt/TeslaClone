import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import CarItem from '../CartItem';

import styles from './styles';
import cars from './cars';

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'} //FlatListde kaydırma işlemi sırasında [HİZALAMAYA] yarar.
        decelerationRate={'fast'} //FlatListde kaydırma işlemi sırasında [YAVAŞLAMA HIZINI] yarar,
        snapToInterval={Dimensions.get('window').height}
        renderItem={({item}) => <CarItem car={item} />}
      />
    </View>
  );
};

export default CarsList;