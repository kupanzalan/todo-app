import React from 'react';
import { View, Text, TextInput, Modal, TouchableOpacity } from 'react-native';

import styles from './modalTask.style';

const ModalTask = ({ handleAddTask, selectedColor, setSelectedColor, isModalVisible, closeModal, task, setTask, setTaskColor, newTask }) => {

  const listOfColors = ["#55BCF6", "#FF5733", "#E6FF33", "#FF33F6", "#33FF55"];

  const getSquareStyle = (color) => ({
    width: 24, 
    height: 24, 
    backgroundColor: color, 
    opacity: 0.4, 
    borderRadius: 8, 
    marginRight: 10, 
    borderWidth: selectedColor === color ? 2 : 0,
    borderColor: selectedColor === color ? 'black' : 'transparent',
    margin: 5,
  });

  console.log('task description: ', task);

  return (
    <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.taskDesc}>Add task description</Text>
            <TextInput style={styles.textInput} placeholder={'Write a task'} value={task} placeholderTextColor="#A9A9A9" onChangeText={(text) => setTask(text)}/>
            <View style={styles.colorsModal}>
              {listOfColors.map((color) => (
                <TouchableOpacity onPress={() => setTaskColor(color)}>
                  <View style={getSquareStyle(color)} onTouchStart={() => setSelectedColor(color)}></View>
                </TouchableOpacity>))}
            </View>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalActionButton} onPress={closeModal}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalActionButton} onPress={closeModal}>
                { newTask ? (<Text style={styles.closeButton} onPress={handleAddTask}>Add task</Text>) : (<Text style={styles.closeButton} onPress={handleAddTask}>Modify</Text>)}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
  )
}

export default ModalTask
