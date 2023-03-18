import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
  Animated,
} from 'react-native';
import styles from './styles';
const {width} = Dimensions.get('window');

const MainScreen = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const flatList1 = React.useRef();

  const CheckData = [
    {
      id: 0,
      title: 'HEELO',
    },
    {
      id: 1,
      title: 'HEELO',
    },
    {
      id: 2,
      title: 'HEELO',
    },
  ];

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        scrollEnabled={false}
        horizontal
        initialScrollIndex={slideIndex}
        showsHorizontalScrollIndicator={false}
        // ref={flatList1}
        keyExtractor={(_, index) => `Slider_${index}`}
        data={CheckData}
        snapToInterval={width}
        pagingEnabled={true}
        scrollEventThrottle={16}
        decelerationRate="fast"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                backgroundColor: 'orange',
                width: width,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>A</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default MainScreen;
