import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

function FlatListHeaderComponent({ colors } ) {
  return (
    <View>
      <Text style={styles(colors).header}>Minhas tasks</Text>
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
  colors: any;
}

export function MyTasksList({ tasks, onLongPress, onPress, colors }: MyTasksListProps) {
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
            style={ isTaskDone ? styles(colors).taskButtonDone : styles(colors).taskButton }
          >
            <View 
              testID={`marker-${index}`}
              style={ isTaskDone ? styles(colors).taskMarkerDone : styles(colors).taskMarker }
            />
            <Text 
              style={ isTaskDone ? styles(colors).taskTextDone : styles(colors).taskText }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent colors={colors} />}
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

const styles = (colors) => StyleSheet.create({
  header: {
    color: colors.taskTitleColor,
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
    borderColor: colors.taskMarkerBorderColor,
    marginRight: 10
  },
  taskText: {
    color: colors.taskTextColor,
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: colors.taskButtonDoneBackgroundColor,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: colors.taskMarkerDoneBackgroundColor,
    marginRight: 10
  },
  taskTextDone: {
    color: colors.taskTextDoneColor,
    textDecorationLine: 'line-through'
  }
})