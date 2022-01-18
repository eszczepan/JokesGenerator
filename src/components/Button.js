import { Pressable, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, text }) => (
  <Pressable style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#841584',
    color: '#fff',
    marginVertical: 20,
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 50,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 21,
    letterSpacing: 0.25,
  },
});

export default Button;
