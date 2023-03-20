import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
  Animated,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import images from '../../Assets/Images/images';
import styles from './styles';
const {width} = Dimensions.get('window');

const MainScreen = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const flatList1 = React.useRef();

  const CheckData = [
    {
      id: 0,
      name:"Iron Man",
      aka:'Tony Stark',
      image: images.ironMan,
    },
    {
      id: 1,
      name:"Captian America",
      aka:'Steve Rogers',
      image: images.cap,
    },
    {
      id: 2,
      name:"Thor Odinson",
      aka:'The God of Thunder',
      image: images.thor,
    },
    {
      id: 3,
      name:"The HULK",
      aka:'Dr. Bruce Banner',
      image: images.hulk,
    },
    {
      id: 4,
      name:"Black Widow",
      aka:'Natasha Romanoff',
      image: images.blackWidow,
    },
    {
      id: 5,
      name:"HawkEye",
      aka:'Clint Barton',
      image: images.hawkeye,
    },
  ];

  return (
    <SafeAreaView style={styles.mainContainer}>
     <FlatList
    snapToInterval={width}
     horizontal
     showsHorizontalScrollIndicator={false}
     scrollEventThrottle={16}
          decelerationRate="fast"
        data={CheckData}
        
        renderItem={({item}) => 
        {
          return(
            <Pressable style={{
              flex:1,
              justifyContent:'center',
              alignItems:'center'
            }}
            onPress={()=>Alert.alert(item.name,item.aka)}
            >
              <Image source={item.image} style={{justifyContent:'center',alignItems:'center', width:width}} />
            </Pressable>
          )
        } }
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default MainScreen;
