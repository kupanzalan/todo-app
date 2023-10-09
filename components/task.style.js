import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff", 
    padding: 20, 
    borderRadius: 10, 
    marginBottom: 10, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  }, 
  itemLeft: {
    flexDirection: 'row', 
    alignItems: 'center', 
    flexWrap: 'wrap' 
  }, 
  square: (color) => ({
    width: 24, 
    height: 24, 
    backgroundColor: color, 
    opacity: 0.4, 
    borderRadius: 9, 
    marginRight: 10
  }), 
  itemText: {
    maxWidth: '80%'
  }, 
  circular: {
    width: 10, 
    height: 10, 
    borderColor: "#55BCF6", 
    borderWidth: 2, 
    borderRadius: 5
  }, 
  deleteBox: {
    backgroundColor: "#db4b4b", 
    justifyContent: 'center', 
    alignItems: 'center',
    width: 70, 
    borderRadius: 8, 
    marginBottom: 10, 
  }, 
  deleteText: {
    fontWeight: 'bold'
  }, 
  btnImg: {
    width: 25,
    height: 25,
  },
  editBox: {
    backgroundColor: "#55BCF6", 
    justifyContent: 'center', 
    alignItems: 'center',
    width: 70, 
    borderRadius: 8, 
    marginBottom: 10, 
  }, 
  editText: {
    fontWeight: 'bold', 
    color: 'black'
  }
});

export default styles;