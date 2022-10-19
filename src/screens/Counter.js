import React, {useEffect, useCallback} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increase, decrease} from './Store/CounterSlice';
import {showCounter} from './Store/AuthSlice';
import {login, logout} from './Store/AuthSliceTwo';

function Counter(props) {
  const globalState = useSelector(state => {
    return state;
  });

  const dispatch = useDispatch();

  const increaseFunction = () => {
    dispatch(increase(4));
  };

  const decreaseFunction = () => {
    dispatch(decrease(2));
  };

  const showCounterFunction = () => {
    dispatch(showCounter());
  };

  const showCounterTwoFunction = () => {
    return globalState.authTwo.showCounter;
  };

  const counterHandler = (type, value) => {
    if (type === 'increase') dispatch(increase(value));
    else dispatch(decrease(value));
  };

  const handleAction = status => {
    if (status) {
      dispatch(logout());
    } else {
      dispatch(login());
    }
  };

  return (
    <View style={styles.container}>
      {globalState.auth.showCounter && (
        <>
          <Text style={styles.counter}>
            Counter : {globalState.counter.counter}
          </Text>
          <View style={styles.buttonView}>
            <View style={styles.button1}>
              <Button
                title="Increase"
                onPress={counterHandler('increase', 3)}
              />
            </View>
            <Button title="Decrease" onPress={counterHandler('decrease', 2)} />
          </View>
        </>
      )}
      <Button
        title={globalState.auth.showCounter ? 'Logout' : 'Login'}
        onPress={showCounterFunction}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  buttonView: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  button1: {
    marginEnd: 10,
  },
});

export default Counter;

// import React, {useEffect, useCallback} from 'react';
// import {View, Text, Button, StyleSheet} from 'react-native';
// import {useSelector, useDispatch} from 'react-redux';

// function Counter(props) {
//   const state = useSelector(state => state.counter);
//   const showCounterState = useSelector(state => state.showCounter);
//   const globalState = useSelector(state => state);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     counterActions('increase', {increaseValue: 10});
//     counterActions('decrease', {decreaseValue: 1});
//   }, []);

//   const counterActions = useCallback((type, payload) => {
//     dispatch({type, payload});
//     /**
//      * @useDispatch ({type, payload}); wrong code
//      * @why we need to assign useDispatch to variable
//      * @becouse you can't invoke hooks inside function
//      */
//   }, []);

//   const increase = () => {
//     const action = {type: 'increase', payload: {increaseValue: 4}};
//     dispatch(action);
//   };

//   const decrease = () => {
//     const action = {type: 'decrease', payload: {decreaseValue: 2}};
//     dispatch(action);
//   };

//   const showCounter = () => {
//     dispatch({type: 'showCounter'});
//   };

//   const handleCounter = value => {
//     if (value < 1) return 'No Numbers';
//     return value;
//   };

//   return (
//     <View style={styles.container}>
//       {globalState.showCounter && (
//         <>
//           <Text style={styles.counter}>
//             Counter : {handleCounter(globalState.counter)}
//           </Text>
//           <View style={styles.buttonView}>
//             <View style={styles.button1}>
//               <Button
//                 title="Increase"
//                 onPress={() => counterActions('increase', {increaseValue: 4})}
//               />
//             </View>
//             <Button
//               title="Decrease"
//               onPress={() => counterActions('decrease', {decreaseValue: 2})}
//             />
//           </View>
//         </>
//       )}

//       <Button title="Show Counter" onPress={showCounter} />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   counter: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   buttonView: {
//     flexDirection: 'row',
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   button1: {
//     marginEnd: 10,
//   },
// });

// export default Counter;
