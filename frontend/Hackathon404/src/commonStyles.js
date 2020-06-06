import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    top: Platform.OS === 'ios' ? 40 : 0,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'skyblue',
    height: 50,
  },
  covidhHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'yellow',
    marginBottom: 10,
    padding: 5
  },
  backButton: {
    fontSize: 20,
    paddingRight: 20,
    paddingLeft: 10,
  },
  cartBody: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 5,
    marginTop: 5,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  successMessage: {
    textAlign: 'center',
    margin: 50,
    fontSize: 20,
    fontWeight: '700',
  },
  servicesListStyle: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#CDE6FA',
  },
  fnBold: {
    fontWeight: '800',
  },
  fnSize_12: {
    fontSize: 12,
  },
  fnSizePadding: {
    fontSize: 18,
    padding: 5,
  },
  bgColor: {
    height: '100 %',
    backgroundColor: '#CDE6FA',
  },
  safeAreaViewStyle: {
    flex: 1,
  },
  flatListContainerStyle: {
    flex: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default styles;
