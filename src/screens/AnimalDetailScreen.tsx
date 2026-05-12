import React from 'react';
import {
  View, Text, Image, ScrollView, StyleSheet,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { animals } from '../data/animals';
import { useTheme } from '../contexts/ThemeContext';

type Props = NativeStackScreenProps<RootStackParamList, 'AnimalDetail'>;

const CATEGORY_LABELS: Record<string, string> = {
  mammal: 'Mammifère',
  bird: 'Oiseau',
  reptile: 'Reptile',
  fish: 'Poisson',
  amphibian: 'Amphibien',
  insect: 'Insecte',
};

export default function AnimalDetailScreen({ route }: Props) {
  const { colors } = useTheme();
  const animal = animals.find((a) => a.id === route.params.animalId);

  if (!animal) return null;

  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <Image source={{ uri: animal.image }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.name, { color: colors.text }]}>{animal.name}</Text>
          <View style={[styles.badge, { backgroundColor: colors.primary }]}>
            <Text style={styles.badgeText}>{CATEGORY_LABELS[animal.category]}</Text>
          </View>
        </View>
        <Text style={[styles.species, { color: colors.textSecondary }]}>{animal.species}</Text>
        <Text style={[styles.description, { color: colors.text }]}>{animal.description}</Text>

        <Text style={[styles.factsTitle, { color: colors.text }]}>Le saviez-vous ?</Text>
        {animal.facts.map((fact, index) => (
          <View key={index} style={[styles.factItem, { borderLeftColor: colors.primary }]}>
            <Text style={[styles.factText, { color: colors.text }]}>{fact}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 280,
  },
  content: {
    padding: 20,
    gap: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 28,
    fontWeight: '800',
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },
  badgeText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  species: {
    fontSize: 15,
    fontStyle: 'italic',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  factsTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 8,
  },
  factItem: {
    borderLeftWidth: 3,
    paddingLeft: 12,
    paddingVertical: 4,
  },
  factText: {
    fontSize: 15,
    lineHeight: 22,
  },
});
