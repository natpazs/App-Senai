import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';
import useColor from '../../temas/Temas';

export default function Scanner() {
  const camRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);

  const cores = useColor()

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>Acesso negado!</Text>;
  }

  return (
    <View style={{backgroundColor: cores.bgPrimary, height:"100%"}}>
      <SafeAreaView style={styles.container}>
        <Camera style={styles.camera} ref={camRef}></Camera>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  camera: {
    width: 450,
    height: 450,
  }
});