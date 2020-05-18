
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

export default class App extends React.Component{


  constructor(props) {
    super(props);

  }



  render(){

    return(


    <View style={{height:"100%",backgroundColor:'black'}}>

      <View style={{height:'90%',backgroundColor:'white',borderBottomLeftRadius:45,borderBottomRightRadius:45}}>
        <ScrollView>
      <View style={{height:30}}>

      </View>
      <View style={{height:70,width:'90%',alignSelf:'center',justifyContent:'center'}}>

        <Icon name="left" size={30} color="#111" style={{justifyContent:'center'}} />

        <Icon name="search1" size={30} color="#111" style={{justifyContent:'center',position:'absolute',right:100}} />

        <Icon name="hearto" size={30} color="#111" style={{justifyContent:'center',position:'absolute',right:50}} />

        <Icon name="profile" size={30} color="#111" style={{justifyContent:'center',position:'absolute',right:0}} />

      </View>


      <Text style={{textAlign:'center',fontSize:55}}>
        New In
      </Text>
      <View style={{height:30}}>

      </View>


      <View style={{flex:.8,flexDirection:'row',height:80}}>


        <View style={{flex:.5,margin:15,backgroundColor:'#fff',height:75,borderRadius:15,flexDirection:'row',borderWidth:1,borderColor:'grey'}}>

          <View style={{flex:.5,justifyContent:'center'}}>

            <Icon name="shrink" size={30} color="#111" style={{position:'absolute',left:15}} />
          </View>
          <View style={{flex:.5,justifyContent:'center'}}>

            <View style={{height:40,width:40,borderRadius:20,backgroundColor:'#fff',justifyContent:'center'}}>
              <Text style={{color:"#111",fontSize:20,fontWeight:'bold'}}>Sort</Text>

            </View>
          </View>

        </View>









        <View style={{flex:.5,margin:15,backgroundColor:'black',height:75,borderRadius:15,flexDirection:'row'}}>

          <View style={{flex:.6,justifyContent:'center'}}>

            <Text style={{color:"#fff",textAlign:'center',fontSize:20}}>Filter</Text>
          </View>
          <View style={{flex:.6,justifyContent:'center'}}>

            <View style={{height:40,width:40,borderRadius:20,backgroundColor:'#fff',alignSelf:'center',justifyContent:'center'}}>
              <Text style={{color:"#111",textAlign:'center',fontSize:20}}>2</Text>

            </View>
          </View>

        </View>

      </View>

          <View style={{height:100}}>

          </View>

      <View style={{flex:1,flexDirection:'row'}}>


        <View style={{flex:.5,margin:15,backgroundColor:'red',height:300,marginTop:-40,borderRadius:25}}>

          <Image source={require('./images/1.jpg')} style={{flex:1,height:undefined,width:undefined,borderRadius:25}} />

        </View>



        <View style={{flex:.5,margin:15,backgroundColor:'red',height:300,borderRadius:25,}}>
          <Image source={require('./images/1.jpg')} style={{flex:1,height:undefined,width:undefined,borderRadius:25}} />

        </View>

      </View>
        </ScrollView>

      </View>



      <View style={{height:80,flex:1,flexDirection:'row'}}>

        <View style={{flex:.6,marginLeft:40,flexDirection:'row'}}>
         <View style={{flex:.3,justifyContent:'center'}}>
           <Text style={{color:'white',fontSize:25}}>Cart</Text>

         </View>
          <View style={{flex:.7,justifyContent:'center',flexDirection:'row',alignSelf:'center'}}>
            <View style={{flex:.5,height:60,margin:5}}>
              <Image source={require('./images/1.jpg')} style={{flex:1,height:undefined,width:undefined,borderRadius:15}} />

            </View>

            <View style={{flex:.5,height:60,margin:5}}>
              <Image source={require('./images/1.jpg')} style={{flex:1,height:undefined,width:undefined,borderRadius:15}} />

            </View>
          </View>

        </View>

        <View style={{flex:.4,justifyContent:'center'}}>

          <View style={{justifyContent:'center',backgroundColor:'#E86B41',height:50,width:50,alignSelf:'center',borderRadius:50}}>

            <Text style={{color:"#111",textAlign:'center',fontSize:20}}>2</Text>

          </View>

        </View>
      </View>

    </View>
    )

  }

}
