import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
  colors: any;
}

export function TodoInput({ addTask, colors }: TodoInputProps) {
  const [task, setTask] = useState('');
  
  function handleAddNewTask() {
    addTask(task);
    setTask('');
  }

  return (
    <View style={[styles(colors).inputContainer, Platform.OS === 'ios' ? styles(colors).inputIOSShadow : styles(colors).inputAndroidShadow]}>
      <TextInput 
        style={styles(colors).input} 
        placeholder="Adicionar novo todo..."
        placeholderTextColor={colors.inputPlaceholderColor}
        returnKeyType="send"
        onSubmitEditing={handleAddNewTask}
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles(colors).addButton}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = (colors) => StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.inputContainerBackgroundColor,
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: colors.inputColor,
    flex: 1,
    backgroundColor: colors.inputBackgroundColor,
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: colors.inputIOSShadowColor,
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
    backgroundColor: colors.inputAddButtonBackgroundColor,
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});