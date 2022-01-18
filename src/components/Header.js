import { View, Text, StyleSheet } from 'react-native';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Jokes Generator</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#841584',
    borderRadius: 2,
    elevation: 3,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
});

export default Header;
