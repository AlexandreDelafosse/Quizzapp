import React, { useState, useCallback } from 'react';
import {
  View, Text, Pressable, StyleSheet, ScrollView,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { quizQuestions } from '../data/quizData';
import { useTheme } from '../contexts/ThemeContext';
import Button from '../components/Button';
import { RootStackParamList } from '../types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Quiz'>;
};

type AnswerState = 'idle' | 'correct' | 'wrong';

export default function QuizScreen({ navigation }: Props) {
  const { colors } = useTheme();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>('idle');
  const [correctCount, setCorrectCount] = useState(0);

  const question = quizQuestions[index];
  const isLast = index === quizQuestions.length - 1;

  const handleSelect = useCallback((option: string) => {
    if (answerState !== 'idle') return;
    setSelected(option);
  }, [answerState]);

  const handleValidate = useCallback(() => {
    if (!selected) return;
    const isCorrect = selected === question.answer;
    setAnswerState(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) setCorrectCount(c => c + 1);
  }, [selected, question]);

  const handleNext = useCallback(() => {
    if (isLast) {
      navigation.replace('QuizResult', {
        result: {
          totalQuestions: quizQuestions.length,
          correctAnswers: correctCount,
          score: Math.round((correctCount / quizQuestions.length) * 100),
        },
      });
      return;
    }
    setIndex(i => i + 1);
    setSelected(null);
    setAnswerState('idle');
  }, [isLast, correctCount, answerState, navigation]);

  const getOptionStyle = (option: string) => {
    if (answerState === 'idle') {
      return selected === option
        ? { backgroundColor: colors.primary, borderColor: colors.primary }
        : { backgroundColor: colors.surface, borderColor: colors.border };
    }
    if (option === question.answer) {
      return { backgroundColor: colors.success, borderColor: colors.success };
    }
    if (option === selected) {
      return { backgroundColor: colors.error, borderColor: colors.error };
    }
    return { backgroundColor: colors.surface, borderColor: colors.border };
  };

  const getOptionTextColor = (option: string): string => {
    if (answerState === 'idle' && selected === option) return '#fff';
    if (answerState !== 'idle' && (option === question.answer || option === selected)) return '#fff';
    return colors.text;
  };

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
    >
      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressFill,
            { backgroundColor: colors.primary, width: `${((index + 1) / quizQuestions.length) * 100}%` },
          ]}
        />
      </View>
      <Text style={[styles.counter, { color: colors.textSecondary }]}>
        Question {index + 1} / {quizQuestions.length}
      </Text>

      <Text style={[styles.question, { color: colors.text }]}>{question.question}</Text>

      <View style={styles.options}>
        {question.options.map((option) => (
          <Pressable
            key={option}
            onPress={() => handleSelect(option)}
            style={[styles.option, getOptionStyle(option)]}
          >
            <Text style={[styles.optionText, { color: getOptionTextColor(option) }]}>{option}</Text>
          </Pressable>
        ))}
      </View>

      {answerState !== 'idle' && (
        <View style={[styles.explanation, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.explanationIcon]}>
            {answerState === 'correct' ? '✅' : '❌'}
          </Text>
          <Text style={[styles.explanationText, { color: colors.text }]}>
            {question.explanation}
          </Text>
        </View>
      )}

      {answerState === 'idle' ? (
        <Button
          label="Valider"
          onPress={handleValidate}
          disabled={!selected}
          fullWidth
        />
      ) : (
        <Button
          label={isLast ? 'Voir les résultats' : 'Question suivante'}
          onPress={handleNext}
          fullWidth
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  counter: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'right',
  },
  question: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 30,
  },
  options: {
    gap: 12,
  },
  option: {
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
  },
  explanation: {
    flexDirection: 'row',
    gap: 10,
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'flex-start',
  },
  explanationIcon: {
    fontSize: 20,
  },
  explanationText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
});
