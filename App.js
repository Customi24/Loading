import React, { useEffect, useRef } from 'react';
import { StyleSheet, SafeAreaView, Animated, Text, View, Image } from 'react-native';

export default function App() {
  const rotationR = useRef(new Animated.Value(0)).current;
  const rotationL = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    Animated.loop(
      Animated.timing(rotationR, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      })
    ).start();

    Animated.loop(
      Animated.timing(rotationL, {
        toValue: -1,
        duration: 1000,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const spinR = rotationR.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const spinL = rotationL.interpolate({
    inputRange: [0, 1],
    outputRange: ['-360deg', '0deg'],
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bienvenido a Sport UAQ</Text>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <View style={styles.circlesContainer}>
        <Animated.View style={[styles.circle1, { transform: [{ rotate: spinR }] }]}>
          <View style={[styles.point1, { backgroundColor: '#DF7FFF' }]} />
          <View style={[styles.point3, { backgroundColor: '#DF7FFF' }]} />
          
        </Animated.View>
        <Animated.View style={[styles.circle2, { borderColor: 'rgba(223, 127, 255, 0.8)', transform: [{ rotate: spinL }] }]}>
          <View style={[styles.point4, { backgroundColor: '#b3a2ff' }]} />
          <View style={[styles.point2, { backgroundColor: '#b3a2ff' }]} />
        </Animated.View>
      </View>
      <Text style={styles.text}>Cargando...</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#b3a2ff',
    top:100
  },
  logo: {
    width: 150, 
    height: 150,
    top:150
  },
  text: {
    fontSize: 14,
    color: '#b3a2ff',
    fontWeight: 'bold',
    top:10
  },
  circlesContainer: {
    marginTop:150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle1: {
    width: 100,
    height: 100,
    borderRadius: 33,
    borderWidth: 8,
    borderColor: '#b3a2ff',
    margin: 10,
    top:120
  },
  circle2: {
    width: 100,
    height: 100,
    borderRadius: 33,
    borderWidth: 8,
    borderStyle: 'solid',
    margin: 10,
  },
  point1: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 15,
    left: 15,
  },
  point2: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 15,
    right: 12,
  },
  point4: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 50,
    left: 15,
  },
  point3: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 50,
    right: 13,
  },
});
