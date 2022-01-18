import { Pressable, Text, StyleSheet } from 'react-native';

const CategoryCard = ({ category, onPress }) => (
  <Pressable style={styles.card} onPress={onPress}>
    <Text style={styles.cardText}>{category}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  card: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cardText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default CategoryCard;
