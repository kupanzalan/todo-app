import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    paddingVertical: 15, 
    paddingHorizontal: 15,
    width: 250, 
    backgroundColor: "#fff", 
    borderRadius: 15, 
    borderColor: "#C0C0C0", 
    borderWidth: 1, 
  }, 
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
  },
  closeButton: {
    marginTop: 10,
    textAlign: 'center',
  },
  taskDesc: {
    marginVertical: 15, 
    fontSize: 18, 
    fontWeight: 'bold'
  }, 
  modalButtons: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center', 
  }, 
  modalActionButton: {
    width: 100, 
    height: 40, 
    backgroundColor: "#E8EAED", 
    borderRadius: 8, 
    marginTop: 20
  }, 
  square: (color) => ({
    width: 24, 
    height: 24, 
    backgroundColor: color, 
    opacity: 0.4, 
    borderRadius: 8, 
    marginRight: 10, 
  }), 
  colorsModal: {
    marginTop: 20,
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

export default styles;
