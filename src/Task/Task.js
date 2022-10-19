import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Dropdown} from 'react-native-element-dropdown';
import DropdownComponent from './DropDown';
import Icon from 'react-native-vector-icons/AntDesign';
const {width, height} = Dimensions.get('screen');

function Task() {
  const [state, setState] = useState([
    {
      name: 'novak-99/MLPP',
      discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      language: 'C++',
      rate: '30,000',
      fork: '3000',
    },
    {
      name: 'FortAwesome / Font-Awesome',
      discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      language: 'JavaScript',
      rate: '30,000',
      fork: '3000',
    },
    {
      name: 'novak-99/MLPP',
      discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      language: 'C++',
      rate: '30,000',
      fork: '3000',
    },
    {
      name: 'FortAwesome / Font-Awesome',
      discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      language: 'JavaScript',
      rate: '30,000',
      fork: '3000',
    },
  ]);

  const returnCartList = item => {
    return (
      <View style={styles.card}>
        <View style={styles.cardTitleView}>
          <Icon name="book" size={RFValue(20)} color="#54FDFC" />
          <Text style={styles.cartTitle}>{item.name}</Text>
        </View>
        <View style={styles.discriptionTextView}>
          <Text style={styles.discriptionText}>{item.discription}</Text>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.footer}>
          <Text style={styles.cppText}>{item.language}</Text>
          <View style={styles.rateView}>
            <Icon name="staro" size={RFValue(16)} color="#54FDFC" />
            <Text style={styles.rateForkText}>{item.rate}</Text>
          </View>
          <View style={styles.forkView}>
            <Icon name="fork" size={RFValue(16)} color="#54FDFC" />
            <Text style={styles.rateForkText}>{item.fork}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Repositories</Text>
        </View>
        <View style={styles.dropDownView}>
          <DropdownComponent placeholder="Language" />
          <DropdownComponent placeholder="Date" />
        </View>
        <FlatList data={state} renderItem={({item}) => returnCartList(item)} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    padding: RFValue(15),
    backgroundColor: '#F7F7F7',
  },
  titleView: {
    marginBottom: RFValue(20),
  },
  title: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    color: '#000',
  },
  dropDownView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: RFValue(20),
  },
  card: {
    height: RFValue(180),
    borderRadius: 8,
    paddingHorizontal: RFValue(10),
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    marginBottom: RFValue(20),
  },
  cardTitleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartTitle: {
    fontSize: RFValue(16),
    color: '#3B4DEB',
    marginStart: RFValue(5),
    fontWeight: 'bold',
  },
  discriptionTextView: {},
  discriptionText: {
    fontSize: RFValue(13),
    color: '#000',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#ddd',
  },
  footer: {
    flexDirection: 'row',
  },
  rateView: {
    flexDirection: 'row',
    marginStart: RFValue(16),
  },
  forkView: {
    flexDirection: 'row',
    marginStart: RFValue(16),
  },
  cppText: {
    color: '#000',
  },
  rateForkText: {
    marginStart: RFValue(5),
    color: '#000',
  },
});
export default Task;
