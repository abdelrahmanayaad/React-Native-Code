// import React, {Component, Fragment, useEffect, useState, useRef} from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
// } from 'react-native';
// import List from './src/screens/Test/List';
// import Filter from './src/components/Filter';
// function App(props) {
//   const input1 = useRef();
//   const input2 = useRef();
//   const input3 = useRef();
//   const input4 = useRef();
//   // useEffect(() => {
//   //   input1.current.focus();
//   // }, []);
//   const [hidden, setHidden] = useState(false);
//   const [code, setCode] = useState(0);
//   const [state, setState] = useState([
//     {
//       name: 'Abdelrahman Ayad',
//       phone: '01026669167',
//       age: 21,
//     },
//     {
//       name: 'Youssef Ayad',
//       phone: '01023456010',
//       age: 18,
//     },
//     {
//       name: 'Radwa Ayad',
//       phone: '01112234245',
//       age: 13,
//     },
//   ]);

//   const deleteHandler = clickedIdx => {
//     // const deleteData = state.filter((el, idx) => idx !== clickedIdx);
//     // setState(deleteData);
//     // console.log(state);
//     setState(prevState => {
//       return prevState.filter((el, idx) => idx !== clickedIdx);
//     });
//   };

//   const hiddenHandler = () => {
//     // const hiddenVar = hidden;
//     setHidden(!hidden);
//   };
//   const input = (ref, nextRef) => {
//     return (
//       <TextInput
//         maxLength={1}
//         keyboardType="number-pad"
//         ref={ref}
//         style={styles.textInputStyle}
//         onChangeText={val => {
//           setCode(code + '' + val);
//           if (val.length > 0) {
//             nextRef.current.focus();
//           }
//           // console.log(code);
//         }}
//       />
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Filter />
//       {/* <TextInput style={styles.inputStyle} /> */}
//       {/* <View style={styles.inputView}>
//         {input(input1, input2)}
//         {input(input2, input3)}
//         {input(input3, input4)}
//         {input(input4, input4)}
//       </View> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   hiddenBtn: {
//     width: 200,
//     height: 50,
//     backgroundColor: '#ddd',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//   },
//   inputView: {
//     width: 300,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   textInputStyle: {
//     width: 50,
//     height: 50,
//     backgroundColor: '#ddd',
//     borderRadius: 5,
//     marginBottom: 10,
//     textAlign: 'center',
//     color: '#000',
//     fontWeight: 'bold',
//   },
//   inputStyle: {
//     width: 300,
//     height: 50,
//     backgroundColor: '#ddd',
//     borderRadius: 5,
//     marginBottom: 10,
//     textAlign: 'center',
//     color: '#000',
//     fontWeight: 'bold',
//   },
// });

// export default App;
// /*
//   {hidden && <List personData={state} clickedItem={deleteHandler} />}
//       <TouchableOpacity
//       style={styles.hiddenBtn}
//        // onPress={() => hiddenHandler()} /**@must tell him wait until call u
//       {/* // here it not call until click on button if put params must made anynoumous function
//       {/* onPress={hiddenHandler}>
//       {/* <Text> {hidden ? 'Hidden' : 'Show'}</Text>
//   /* </TouchableOpacity>
// */
