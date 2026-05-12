import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import AnimalCard from '../components/AnimalCard';
import { animals } from '../data/animals';
import { useTheme } from '../contexts/ThemeContext';
import { MainTabParamList, RootStackParamList } from '../types';

type Props = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<MainTabParamList, 'Animals'>,
    NativeStackNavigationProp<RootStackParamList>
  >;
};

export default function AnimalsScreen({ navigation }: Props) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={animals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AnimalCard
            animal={item}
            onPress={() => navigation.navigate('AnimalDetail', { animalId: item.id })}
          />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 16,
  },
});
