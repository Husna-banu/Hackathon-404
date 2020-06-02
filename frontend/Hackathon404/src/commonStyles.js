import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    top: 40,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold' ,
    paddingLeft: 10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'skyblue',
    height: 50,
  },
  backButton: {
    fontSize: 20,
    paddingRight: 20,
    paddingLeft: 10
  },
  content: {
    padding: 20,
  }
});

export default styles;