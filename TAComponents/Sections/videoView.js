import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import { Dimensions } from 'react-native';
import {videoHeadingFontSize} from '../../TAStyles/TAalignment';
import {videoNameFontSize} from '../../TAStyles/TAalignment';
import {videoViewFontSize} from '../../TAStyles/TAalignment';
import {videoDateFontSize} from '../../TAStyles/TAalignment';

const { width, height } = Dimensions.get('window');

const imgWidth = width>380 ? 175 : width*0.4; 

export default class App extends React.Component {
  render() {
    return (
            <View style={styles.container}>
               <View style={styles.box1}>
                <Image  style={styles.img} source={require('../../TAImages/img2.jpg')}/>
               </View>
               <View style={styles.box2}>
                   <Text style={{color:'#c9094c',fontSize:videoHeadingFontSize}}>{this.props.topic}</Text>
                   <Text style={{fontSize:videoViewFontSize}}>{this.props.views}</Text>
                   <Text style={{textDecorationLine:'underline',fontSize:videoNameFontSize,}}>{this.props.name}</Text>
                   <Text style={{color:'#c4c2c2',fontSize:videoDateFontSize}}>{this.props.date}</Text>

                   <Text style={{color:'#c4c2c2',fontSize:10,
    alignSelf: 'baseline'}}>{this.props.subject}</Text>
               </View>
               <View style={styles.box3}>
                  <Text> Icon</Text>
                  <Text> Icon</Text>
               </View>
        </View>
     )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',  
  },
  box1:{
    alignItems:'flex-start',
  },
  box2:{    
    height:130,
    paddingLeft:15,
    alignItems:'flex-start',
    justifyContent:'space-between',
    flex:1,
    resizeMode:'contain',
  },
  box3:{
    justifyContent:'space-between',
    width:30,
    height:130,
  },

  img:{
    width:imgWidth,
    height:130,
    borderRadius:10,
  },
});

