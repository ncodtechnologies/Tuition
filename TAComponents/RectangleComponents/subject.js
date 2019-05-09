import * as React from 'react';
import { Text, View, StyleSheet,Image,Dimensions } from 'react-native';
import {subHeadingColor} from '../../TAStyles/TAcolors';

const { width, height } = Dimensions.get('window');

const itemWidth = (width/2.2);
const imgWidth = 0.3*itemWidth;
const textWidth = 0.5*itemWidth;

export default class App extends React.Component {

  render() {
    return (      
                <View style={styles.input}>      
                  <View style={styles.imgWrap}>
                      <Image style={styles.img} source={require('../../TAImages/che.jpg')} />
                  </View>
                  <View style={styles.txtWrap}>
                      <Text style={styles.headline1}>{this.props.title}</Text>
                      <Text style={styles.headline2}>{this.props.chapter}</Text>
                 </View>
              </View>
    );
  }  
}

const styles = StyleSheet.create({
  input:{
    flexDirection:'row',
    width: itemWidth,
    borderRadius: 8, 
    borderColor:'#f0f1f1',
    borderWidth:1,
    elevation: 2,
    justifyContent:'space-evenly',
    alignItems:'center',
    margin:5,
    height: 90
  },

  headline1:{
    fontSize: 16,
    color:'red',
    alignSelf: 'baseline'
  },
   headline2:{
    fontSize: 14,
    color:subHeadingColor,
  },
   img:{
    width: imgWidth,
    height:80,
    resizeMode:'contain',
  },
  txtWrap:{
    width:textWidth
  }
});

