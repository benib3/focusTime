import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.title}>You haven't focused on anything yet...</Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>-{item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    padding: 20,
    flex:1,
  },
  item: {
    color: '#FFF',
    fontSize: 15,
    textAlign: 'left',
    paddingTop:5,
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },
});
