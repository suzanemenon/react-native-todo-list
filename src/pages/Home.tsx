import React, { useState } from 'react';
import { View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home({ colors }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  
  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle) {
      const newTask = { 
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }
      
      setTasks([...tasks, newTask])
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    let newTasks = [...tasks];

    newTasks[taskIndex] = {
      ...newTasks[taskIndex],
      done: !newTasks[taskIndex].done
    }

    setTasks(newTasks)
  }

  function handleRemoveTask(id: number) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    
    setTasks(updatedTasks);
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.homeBackgroundColor }}>
      <Header colors={colors} />

      <TodoInput addTask={handleAddTask} colors={colors} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask}
        colors={colors}
      />
    </View>
  )
}
