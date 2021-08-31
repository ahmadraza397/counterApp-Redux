import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { addition, reset, subtraction } from '../redux/actions/actions';

function Counter(props) {

    const data = useSelector(state => state)
    const {counter} = data
    const dispatch = useDispatch();

   return (
     <View style={styles.mainContainer}>
         <Text style={styles.title}>Counter</Text>
         <Text style={[styles.btnText,{color:'navy',fontSize:30}]}>
             {counter}
         </Text>
         <View style={styles.btnContainer} >
            <TouchableOpacity 
                style={styles.btn}
                onPress={() => dispatch(addition())}>
                <Text style={styles.btnText}>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.btn}
                onPress={() => {
                    counter !=0 ? dispatch(subtraction()) : null 
                }} >
                <Text style={styles.btnText}>Decrement</Text>
            </TouchableOpacity>
         </View>
         <TouchableOpacity 
            style={[styles.btn,{backgroundColor:'lightcoral'}]}
            onPress={() => dispatch(reset())} >
            <Text style={styles.btnText}>Reset</Text>
        </TouchableOpacity>
     </View>
   );
}

const styles = StyleSheet.create({
  mainContainer: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'gainsboro',
      borderWidth:15,
      borderRightColor:'fuchsia',
      borderLeftColor:'lightgreen',
      borderTopColor:'lightcoral',
      borderBottomColor:'lightblue'
  },
  title:{
      fontSize:35,
      fontWeight:'700',
      position:'absolute',
      top:40,
  },
  btnContainer:{
    flexDirection:'row',
    marginTop:40
  },
  btn:{
    height:50,
    width:100,
    backgroundColor:'dodgerblue',
    borderRadius:25,
    margin:5,
    alignItems:'center',
    justifyContent:'center'
  },
  btnText:{
    color:'lightcyan',
    fontSize:15,
    fontWeight:'600'
  }
});

export default Counter;