import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { AppProps } from '../../App';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
  theme: object;
}

export function TodoInput({ addTask, theme }: TodoInputProps) {
  const [task, setTask] = useState('');
  const { theme: _theme } = theme['todoInput'];

  function handleAddNewTask() {
    addTask(task);
    setTask('');
  }

  return (
    <View style={[styles(theme).inputContainer, Platform.OS === 'ios' ? styles(theme).inputIOSShadow : styles(theme).inputAndroidShadow]}>
      <TextInput 
        style={styles(theme).input} 
        placeholder="Adicionar novo todo..."
        placeholderTextColor={theme.inputPlaceholderColor}
        returnKeyType="send"
        onSubmitEditing={handleAddNewTask}
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles(theme).addButton}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = (theme: any) => StyleSheet.create({
  inputContainer: {
    backgroundColor: theme.inputContainerBackgroundColor,
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: theme.inputColor,
    flex: 1,
    backgroundColor: theme.inputBackgroundColor,
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: theme.inputIOSShadowColor,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    backgroundColor: theme.addButtonBackgroundColor,
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});