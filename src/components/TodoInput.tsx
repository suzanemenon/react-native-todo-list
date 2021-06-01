import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { paletteObj } from '../../App';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps extends paletteObj {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask, colors }: TodoInputProps) {
  const [task, setTask] = useState('');
  
  const inputStyles = styles(colors);

  function handleAddNewTask() {
    addTask(task);
    setTask('');
  }

  return (
    <View style={[inputStyles.inputContainer, Platform.OS === 'ios' ? inputStyles.inputIOSShadow : inputStyles.inputAndroidShadow]}>
      <TextInput 
        style={inputStyles.input} 
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
        style={inputStyles.addButton}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = (colors: paletteObj['colors']) => StyleSheet.create({
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