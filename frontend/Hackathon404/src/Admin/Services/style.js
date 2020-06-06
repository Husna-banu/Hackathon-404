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
  editIcon: {
    position: 'absolute',
    right: 40,
  },
  deleteIcon: {
    position: 'absolute',
    right: 10,
  },
});

export default styles;
