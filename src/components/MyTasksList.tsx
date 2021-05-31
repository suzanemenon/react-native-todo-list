import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';
import { AppProps } from '../../App';

function FlatListHeaderComponent(theme : AppProps) {
  return (
    <View>
      <Text style={styles(theme).header}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  theme: object;
}

export function MyTasksList({ tasks, onLongPress, onPress, theme }: MyTasksListProps) {
  const { theme: _theme } = theme['myTasksList'];

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        const isTaskDone = item.done === true;
        
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={ isTaskDone ? styles(theme).taskButtonDone : styles(theme).taskButton }
          >
            <View 
              testID={`marker-${index}`}
              style={ isTaskDone ? styles(theme).taskMarkerDone : styles(theme).taskMarker }
            />
            <Text 
              style={ isTaskDone ? styles(theme).taskTextDone : styles(theme).taskText }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent theme={theme} />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = (theme: any) => StyleSheet.create({
  header: {
    color: theme.titleColor,
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.taskMarkerBorderColor,
    marginRight: 10
  },
  taskText: {
    color: theme.taskTextColor,
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: theme.taskButtonDoneBackgroundColor,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: theme.taskMarkerDoneBackgroundColor,
    marginRight: 10
  },
  taskTextDone: {
    color: theme.taskTextDoneColor,
    textDecorationLine: 'line-through'
  }
})