import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  servicesListStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#CDE6FA',
  },
  serviceNameStyle: {
    fontSize: 20,
    marginRight: 20,
  },
  addIconStyle: {
    position: 'absolute',
    right: 60,
  },
});

export default styles;
