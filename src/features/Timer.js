import React, { useState } from 'react';
import { Animated, View, Text, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';

import { useKeepAwake } from 'expo-keep-awake';

import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { Timing } from '../features/Timing';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

//Exporting Timer
export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setisStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={(progress) => {
            setProgress(progress);
          }}
          onEnd={(reset) => {
            Vibration.vibrate(PATTERN);
            setisStarted(false);
            setProgress(1);
            reset();
            onTimerEnd(focusSubject);
          }}
        />
        <View style={{ paddingTop: 50 }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.subtitle}>{focusSubject}</Text>
        </View>
      </View>

      <View style={{ paddingTop: 50 }}>
        <ProgressBar progress={progress} color={'#FFF'} style={{ heght: 10 }} />
      </View>

      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton title="Start" onPress={() => setisStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title="Pause" onPress={() => setisStarted(false)} />
        )}
      </View>
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton size={50} title="-" onPress={clearSubject} />
      </View>
    </View>
  );
};

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  timingWrapper: {
    flex: 0.1,
    padding: 25,
    flexDirection: 'row',
  },
  text: {
    color: '#FFF',
    marginTop: 50,
    fontSize: 25,
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontStyle: 'bold',
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    alignContent: 'space-between',
    alignitems: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  subtitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  clearSubjectWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
