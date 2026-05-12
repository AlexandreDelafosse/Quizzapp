import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Animal } from '../types';
import { useTheme } from '../contexts/ThemeContext';

const CATEGORY_LABELS: Record<string, string> = {
  mammal: 'Mammifère',
  bird: 'Oiseau',
  reptile: 'Reptile',
  fish: 'Poisson',
  amphibian: 'Amphibien',
  insect: 'Insecte',
};

interface AnimalCardProps {
  animal: Animal;
  onPress: () => void;
}

export default function AnimalCard({ animal, onPress }: AnimalCardProps) {
  const { colors } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: colors.card, borderColor: colors.border },
        pressed && styles.pressed,
      ]}
    >
      <Image source={{ uri: animal.image }} style={styles.image} />
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={[styles.name, { color: colors.text }]}>{animal.name}</Text>
          <Text style={[styles.badge, { backgroundColor: colors.primary }]}>
            {CATEGORY_LABELS[animal.category]}
          </Text>
        </View>
        <Text style={[styles.species, { color: colors.textSecondary }]}>{animal.species}</Text>
        <Text style={[styles.description, { color: colors.textSecondary }]} numberOfLines={2}>
          {animal.description}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.85,
  },
  image: {
    width: '100%',
    height: 180,
  },
  body: {
    padding: 14,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  badge: {
    fontSize: 11,
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
    overflow: 'hidden',
    fontWeight: '600',
  },
  species: {
    fontSize: 13,
    fontStyle: 'italic',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
});
