import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    borderLeftWidth: 5,
    borderBottomWidth: 5,
    borderBottomLeftRadius: 25,
    paddingLeft: 10,
    fontSize: 20,
    width: 300,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 5,
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: 'black',
  },
  message: {
    flex: 1,
    backgroundColor: '#B5D0F9',
    borderWidth: 5,
    borderRadius: 25,
    borderColor: '#EBF1F0',
    padding: 10,
  },
  details: {
    fontSize: 20,
    color: 'black',
  },
});
