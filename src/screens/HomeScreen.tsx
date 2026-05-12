import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/Button';
import { MainTabParamList, RootStackParamList } from '../types';

type Props = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<MainTabParamList, 'Home'>,
    NativeStackNavigationProp<RootStackParamList>
  >;
};

export default function HomeScreen({ navigation }: Props) {
  const { colors } = useTheme();
  const { user } = useAuth();

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
    >
      <View style={styles.hero}>
        <Text style={styles.emoji}>🦁</Text>
        <Text style={[styles.title, { color: colors.text }]}>QuizzApp</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Découvrez le règne animal et testez vos connaissances.
        </Text>
        {user && (
          <Text style={[styles.welcome, { color: colors.primary }]}>
            Bonjour, {user.email?.split('@')[0]} 👋
          </Text>
        )}
      </View>

      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.cardTitle, { color: colors.text }]}>🐾 Fiches animaux</Text>
        <Text style={[styles.cardDescription, { color: colors.textSecondary }]}>
          Explorez notre collection de 6 animaux avec leurs faits et caractéristiques.
        </Text>
        <Button
          label="Explorer les animaux"
          onPress={() => navigation.navigate('Animals')}
          fullWidth
        />
      </View>

      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.cardTitle, { color: colors.text }]}>🧠 Quiz</Text>
        <Text style={[styles.cardDescription, { color: colors.textSecondary }]}>
          8 questions pour tester vos connaissances sur le règne animal. Bonne chance !
        </Text>
        <Button
          label="Commencer le quiz"
          onPress={() => navigation.navigate('Quiz')}
          fullWidth
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },
  hero: {
    alignItems: 'center',
    paddingVertical: 32,
    gap: 8,
  },
  emoji: {
    fontSize: 64,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
  welcome: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 4,
  },
  card: {
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    gap: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  cardDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
});
