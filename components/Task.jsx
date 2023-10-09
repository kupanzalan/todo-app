import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { icons } from '../constants';
import ModalTask from '../components/ModalTask';

import styles from './task.style';

const Task = ({ taskId, taskText, taskColor, setTaskColor, onDelete, taskList, setTaskList }) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(taskColor);
  const [taskDescription, setTaskDescription] = useState(taskText);
  const swipeableRef = useRef(null);

  const editTask = async (taskId) => {
    try {
      const response = await fetch(`http://192.168.0.108:3000/api/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          taskName: updatedTaskName,
          taskColor: updatedTaskColor,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update task');
      }
  
      const updatedTask = await response.json();
      console.log('Updated task:', updatedTask);
  
      // Update the task in your task list (if needed)
      const updatedTaskList = taskList.map(task => {
        if (task.taskId === taskId) {
          return { ...task, taskName: updatedTaskName, taskColor: updatedTaskColor };
        }
        return task;
      });
      setTaskList(updatedTaskList);
      setIsModalVisible(false);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const leftSwipe = () => {
    return (
      <TouchableOpacity style={styles.deleteBox} onPress={handleDelete}>
        <View>
            <Image source={icons.trash} resizeMode="cover" style={styles.btnImg}/>        
        </View>
      </TouchableOpacity> 
    )
  }

  const handleDelete = () => {
    onDelete();
    if (swipeableRef.current) {
      swipeableRef.current.close();
    }
  };

  const rightSwipe = () => {
    return (
      <TouchableOpacity style={styles.editBox} onPress={handleEdit}>
        <View>
            <Image source={icons.edit} resizeMode="cover" style={styles.btnImg}/>
        </View>
      </TouchableOpacity>
    )
  }

  const handleEdit = () => {
    console.log('\n');
    console.log('taskid:', taskId);
    console.log('taskText:', taskText);
    console.log('taskColor:', taskColor);
    console.log('\n');
    setSelectedColor(taskColor);
    setTaskDescription(taskText);
    setIsModalVisible(true);
    if (swipeableRef.current) {
      swipeableRef.current.close();
    }
  }

  return (
    <>
      <Swipeable 
        ref={swipeableRef}
        renderLeftActions={leftSwipe}
        renderRightActions={rightSwipe}>
        <View style={styles.item}>
          <View style={styles.itemLeft}>
            <View style={styles.square(taskColor)}></View>
            <Text style={styles.itemText}>{taskText}</Text>
          </View>
          <View style={styles.circular}></View>
        </View>
      </Swipeable>
      <ModalTask 
        handleAddTask={() => editTask(taskId)} 
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor} 
        isModalVisible={isModalVisible}
        closeModal={() => setIsModalVisible(false)}
        task={taskDescription} 
        setTask={setTaskDescription}
        setTaskColor={setTaskColor}
        newTask={false}/>
    </>
  )
}

export default Task
