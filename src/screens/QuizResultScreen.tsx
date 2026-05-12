import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import Button from '../components/Button';

type Props = NativeStackScreenProps<RootStackParamList, 'QuizResult'>;

export default function QuizResultScreen({ route, navigation }: Props) {
  const { colors } = useTheme();
  const { result } = route.params;

  const getMessage = () => {
    if (result.score >= 80) return { emoji: '🏆', text: 'Excellent ! Vous êtes un expert du règne animal !' };
    if (result.score >= 60) return { emoji: '👍', text: 'Bien joué ! Vous connaissez bien vos animaux.' };
    if (result.score >= 40) return { emoji: '📚', text: 'Pas mal ! Continuez à apprendre.' };
    return { emoji: '🦔', text: 'Il faut réviser ! Consultez les fiches animaux.' };
  };

  const { emoji, text } = getMessage();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={[styles.title, { color: colors.text }]}>Résultats</Text>

      <View style={[styles.scoreCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.score, { color: colors.primary }]}>{result.score}%</Text>
        <Text style={[styles.scoreDetail, { color: colors.textSecondary }]}>
          {result.correctAnswers} bonne{result.correctAnswers > 1 ? 's' : ''} réponse{result.correctAnswers > 1 ? 's' : ''} sur {result.totalQuestions}
        </Text>
      </View>

      <Text style={[styles.message, { color: colors.text }]}>{text}</Text>

      <View style={styles.actions}>
        <Button
          label="Recommencer le quiz"
          onPress={() => navigation.replace('Quiz')}
          fullWidth
        />
        <Button
          label="Retour à l'accueil"
          onPress={() => navigation.navigate('Main')}
          variant="secondary"
          fullWidth
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 20,
  },
  emoji: {
    fontSize: 72,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
  },
  scoreCard: {
    width: '100%',
    alignItems: 'center',
    padding: 32,
    borderRadius: 16,
    borderWidth: 1,
    gap: 8,
  },
  score: {
    fontSize: 64,
    fontWeight: '900',
  },
  scoreDetail: {
    fontSize: 16,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
  actions: {
    width: '100%',
    gap: 12,
    marginTop: 8,
  },
});
