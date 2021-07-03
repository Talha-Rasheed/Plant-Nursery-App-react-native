import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView,ImageBackground, ScrollView, Button, FlatList, TouchableHighlight, Alert, Modal, Pressable} from 'react-native';
import { TextInput } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import {Item, Input, Label, ListItem, List } from 'native-base';
import {
  AdMobBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
  DefaultAnimation,
} from 'react-native-popup-dialog';

import * as firebase from 'firebase';
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);

const theme={
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        border:"transparent",
    }
}

function MainPage({navigation}){

    return(
    <View style={styles.container}>
      <Image
            source={{ uri: "https://images.pexels.com/photos/2146109/pexels-photo-2146109.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
            style={{
            height: 475,
            width: 360,
            position: 'relative',
            borderBottomLeftRadius:30,
            borderBottomRightRadius:30,
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
            }}
      />
        
         <Text
           style={{
             fontWeight: 'bold',
             color: 'black',
             position: 'absolute',
             top:80,
             left: 10,
             fontSize : 30
            }}
         >
             Welcome
         </Text>
         
         <Text
           style={{
             color: 'black',
             position: 'absolute',
             top:120,
             left: 12,
             fontSize : 15,
            }}
         >
            Now Buy Plants Online
         </Text>
         <View style={{marginTop:5,marginLeft:60,marginRight:60}}>
              <TouchableOpacity style={{marginRight:70,
                                        marginLeft:30,
                                        marginTop:10,
                                        paddingTop:20,
                                        paddingBottom:20,
                                        backgroundColor:'darkolivegreen',
                                        borderRadius:20,
	                                    width:200,
									   }}
                             onPress={()=>navigation.navigate("MainPage2")}
              >
           
                      <Text style={{color:'white',marginLeft:55}}>GET STARTED !</Text>

              </TouchableOpacity>
         </View>
     </View>
    );
}

function Options({navigation}){
const [email, setEmail] = useState(0);
const [password, setPassword] = useState(0);

userSignin=(email,password)=>{
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(()=>{
        navigation.navigate("AirplaneBusTrain")
    })
    .catch(error=>{
        Alert.alert(error.message)
    })
}
    return(
    <ScrollView>
    <ImageBackground
            source={{ uri: "https://images.pexels.com/photos/1645230/pexels-photo-1645230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
            style={{
            height: 566,
            width: 360,
            position: 'relative',
            }}
      >
        <View style={{flex: 1, backgroundColor:'white',marginTop:10,marginLeft:30,marginRight:30,marginBottom:10,borderWidth:1.5}}>
<View style={styles.forrow}>
        <View style={styles.image1}>
           <ImageBackground
            source={{ uri: "https://images.pexels.com/photos/4467151/pexels-photo-4467151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
            style={{
            height: 120,
            width: 140,
            position: 'relative',
            }}
            >
           </ImageBackground>
        </View>

        <View style={styles.image2}>
           <ImageBackground
            source={{ uri: "https://images.pexels.com/photos/2261128/pexels-photo-2261128.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
            style={{
            height: 120,
            width: 140,
            position: 'relative',
            }}
            >
           </ImageBackground>
        </View>
</View>
      
      <View style={{marginLeft:20,marginRight:20,marginBottom:5,marginTop:1}}>

        <TextInput
          label="E-Mail"
          onChangeText={email => setEmail(email)}
        />
      </View>

      <View style={{marginLeft:20,marginRight:20,marginBottom:2,marginTop:5}}>

        <TextInput
          label="Password"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>

      <View style={{marginLeft:20,marginRight:20,marginBottom:.5,marginTop:8}}>
        <Button
          mode="contained"
          title="ENTER"
          //onPress={()=>navigation.navigate("AirplaneBusTrain")}
          onPress={()=>userSignin(email,password)}
        />
    </View>

      <View style={{flex: .05, backgroundColor:'white',alignItems: 'center',marginLeft:60,marginRight:60,marginBottom:27}}>
    <Text style={{ fontSize: 10, padding:8, color:'grey'}}>-------------   OR   -------------</Text>
    </View>

      <View style={{marginLeft:20,marginRight:20,marginBottom:20,marginTop:1}}>
        <Button
          title="Create an account"
          color="#d2691e"
          onPress={()=>navigation.navigate("Account")}
        />
      </View>
      <View style={styles.forrow}>
        <View style={styles.image3}>
           <ImageBackground
            source={{ uri: "https://images.pexels.com/photos/1403398/pexels-photo-1403398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
            style={{
            height: 120,
            width: 140,
            position: 'relative',
            }}
            >
           </ImageBackground>
        </View>

        <View style={styles.image4}>
           <ImageBackground
            source={{ uri: "https://images.pexels.com/photos/5556844/pexels-photo-5556844.png?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
            style={{
            height: 120,
            width: 140,
            position: 'relative',
            }}
            >
           </ImageBackground>
        </View>
</View>
    </View> 
    </ImageBackground>
    </ScrollView>
    );
}

const {useState}=React;

function Next({navigation}){

  //-----------------------------------------------------------------------------------
  //------------------------FLOWERS-----------------------------------------------------
  //-----------------------------------------------------------------------------------

  const[quanpic1,setquanpic1]=useState(0);
  const[pricepic1,setpricepic1]=useState(0);

  const[quanpic2,setquanpic2]=useState(0);
  const[pricepic2,setpricepic2]=useState(0);

  const[quanpic3,setquanpic3]=useState(0);
  const[pricepic3,setpricepic3]=useState(0);

  const[quanpic4,setquanpic4]=useState(0);
  const[pricepic4,setpricepic4]=useState(0);

  const[quanpic5,setquanpic5]=useState(0);
  const[pricepic5,setpricepic5]=useState(0);

  const[quanpic6,setquanpic6]=useState(0);
  const[pricepic6,setpricepic6]=useState(0);

  const[quanpic7,setquanpic7]=useState(0);
  const[pricepic7,setpricepic7]=useState(0);

  const[quanpic8,setquanpic8]=useState(0);
  const[pricepic8,setpricepic8]=useState(0);

  const[quantotal,setquantotal]=useState(0);
  const[pricetotal,setpricetotal]=useState(0);

  //-----------------------------------------------------------------------------------
  //------------------------PLANTS-----------------------------------------------------
  //-----------------------------------------------------------------------------------

  const[quanplant1,setquanplant1]=useState(0);
  const[priceplant1,setpriceplant1]=useState(0);

  const[quanplant2,setquanplant2]=useState(0);
  const[priceplant2,setpriceplant2]=useState(0);

  const[quanplant3,setquanplant3]=useState(0);
  const[priceplant3,setpriceplant3]=useState(0);

  const[quanplant4,setquanplant4]=useState(0);
  const[priceplant4,setpriceplant4]=useState(0);

  const[quanplant5,setquanplant5]=useState(0);
  const[priceplant5,setpriceplant5]=useState(0);

  const[quanplant6,setquanplant6]=useState(0);
  const[priceplant6,setpriceplant6]=useState(0);

  const[quanplant7,setquanplant7]=useState(0);
  const[priceplant7,setpriceplant7]=useState(0);

  const[quanplant8,setquanplant8]=useState(0);
  const[priceplant8,setpriceplant8]=useState(0);

  const[quanplanttotal,setquanplanttotal]=useState(0);
  const[priceplanttotal,setpriceplanttotal]=useState(0);


    //-----------------------------------------------------------------------------------
  //------------------------POTS-----------------------------------------------------
  //-----------------------------------------------------------------------------------

  const[quanpot1,setquanpot1]=useState(0);
  const[pricepot1,setpricepot1]=useState(0);

  const[quanpot2,setquanpot2]=useState(0);
  const[pricepot2,setpricepot2]=useState(0);

  const[quanpot3,setquanpot3]=useState(0);
  const[pricepot3,setpricepot3]=useState(0);

  const[quanpot4,setquanpot4]=useState(0);
  const[pricepot4,setpricepot4]=useState(0);

  const[quanpot5,setquanpot5]=useState(0);
  const[pricepot5,setpricepot5]=useState(0);

  const[quanpot6,setquanpot6]=useState(0);
  const[pricepot6,setpricepot6]=useState(0);

  const[quanpottotal,setquanpottotal]=useState(0);
  const[pricepottotal,setpricepottotal]=useState(0);


  const[quan,setquan]=useState(0);
  const[price,setprice]=useState(0);

  const[address,setAddress]=useState(0);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);

  const [
    defaultAnimationDialog, setDefaultAnimationDialog
  ] = useState(false);
  const [
    scaleAnimationDialog, setScaleAnimationDialog
  ] = useState(false);
  const [
    slideAnimationDialog, setSlideAnimationDialog
  ] = useState(false);



  return(
    
    <ScrollView>
        <Image
            source={{ uri: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/c3f752110162371.6001290bb5a0a.jpg" }}
            style={{
            height: 280,
            width:360,
            position: 'relative',
            marginBottom:3,
            borderBottomLeftRadius:30,
            borderBottomRightRadius:30,
            }}
        />

        <View style={{height:260,marginTop:3,marginBottom:5,borderBottomLeftRadius:25,borderTopLeftRadius:25}}>
             
              <Text style={{fontSize:25,fontWeight:'bold',marginLeft:13,marginTop:2,color:'black'}}>We Have</Text>

              <View style={{marginTop:8,marginLeft:10}}>
                    <ScrollView
                         horizontal={true}
                         showsHorizontalScrollIndicator={false}
                    >
                       <View>
                           <Image
                                source={{ uri: "https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
                                style={{
                                height: 180,
                                width:150,
                                position: 'relative',
                                marginBottom:10,
                                marginRight:8,
                                borderRadius:15,
                                }}
                           />
                           <Text style={{marginLeft:50,fontSize:15,fontWeight:'bold'}}>Plants</Text>
                       </View>

                       <View>
                           <Image
                                source={{ uri: "https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
                                style={{
                                height: 180,
                                width:150,
                                position: 'relative',
                                marginBottom:10,
                                marginRight:8,
                                borderRadius:15,
                                }}
                           />
                           <Text style={{marginLeft:47,fontSize:15,fontWeight:'bold'}}>Flowers</Text>
                        </View>
                   
                       <View>
                           <Image
                                source={{ uri: "https://cdn.pixabay.com/photo/2018/09/01/03/49/flower-pot-3646013__340.jpg" }}
                                style={{
                                height: 180,
                                width:150,
                                position: 'relative',
                                marginBottom:10,
                                marginRight:8,
                                borderRadius:15,
                                }}
                           />
                           <Text style={{marginLeft:55,fontSize:15,fontWeight:'bold'}}>Pots</Text>
                       </View>

                       <View>
                         <View style={{height:180,width:150,borderWidth:1,backgroundColor:'lightgrey',marginRight:8,borderRadius:15,justifyContent:'center'}}>
                           <Text style={{marginLeft:22,fontSize:15}}>Select multiple</Text>
                           <Text style={{marginLeft:33,fontSize:15}}>flowers and</Text>
                           <Text style={{marginLeft:17,fontSize:15}}>make a bouquet</Text>
                           <Text style={{marginLeft:33,fontSize:15}}>for yourself</Text>
                           <Text style={{marginLeft:37,fontSize:15}}>as desired</Text>
                         </View>
                         <Text style={{marginTop:10,marginLeft:44,fontSize:15,fontWeight:'bold'}}>Bouquets</Text>
                       </View>

                    </ScrollView>
              </View>
        </View>

        <View style={{marginLeft:10,marginRight:10,height:100,marginBottom:10,backgroundColor:'lightgrey',borderBottomRightRadius:120,borderWidth:1}}>
            <Text style={{marginTop:8,marginLeft:10,fontWeight:'bold',color:'black',fontSize:25}}>Buy Plants and Flowers</Text>
            <Text style={{marginLeft:11,color:'black',fontSize:15}}>Decorate your home</Text>
            <Text style={{marginLeft:11,color:'black',fontSize:15}}>Be close to nature</Text>
        </View>

        <View style={{marginLeft:10,marginRight:10,height:140,marginBottom:10,backgroundColor:'lightgrey',borderTopRightRadius:120,borderWidth:1}}>
        <Text style={{marginTop:8,marginLeft:10,fontWeight:'bold',color:'black',fontSize:25}}>Instructions</Text>
        <Text style={{marginLeft:11,color:'black',fontSize:15}}>Add/Remove items to cart</Text>
        <Text style={{marginLeft:11,color:'black',fontSize:15}}>Per Piece prices are mentioned with each item</Text>
        <Text style={{marginLeft:11,color:'black',fontSize:15}}>Compile Bill in the end</Text>
        <Text style={{marginLeft:11,color:'black',fontSize:15}}>Clear Data if you want to shop again</Text>
        </View>

        <Text style={{marginLeft:115,fontWeight:'bold',color:'black',fontSize:35}}>Flowers</Text>

        <Image
            source={{ uri: "https://cdn.pixabay.com/photo/2020/01/18/21/57/lotus-4776450__340.png" }}
            style={{
            height: 170,
            marginTop:10,
            marginBottom:15,
            resizeMode:'contain',
            }}
        />

        <View style={{flex:2,backgroundColor:'white',flexDirection:'row',marginBottom:15,borderWidth:1,borderRadius:15}}>

            <View>
               <Image
                  source={{ uri: "https://images.pexels.com/photos/7809920/pexels-photo-7809920.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
                  style={{
                  marginTop:7,
                  marginLeft:8,
                  height: 250,
                  borderRadius:20,
                  width: 170,
                  position: 'relative',
                  }}
               />
               <View style={{marginLeft:10,justifyContent:'center'}}>
                      <Text>Red Rose                Rs500/-</Text>
               </View>
               <View style={{flex:.2,flexDirection:'row'}}>
                  <View style={{marginLeft:10,marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="+"
                       onPress={()=>{
                       setquanpic1(quanpic1+1)
                       setpricepic1(pricepic1+500)
                       }}
                    />
                  </View>
                  <View style={{alignItems:'center',backgroundColor:'white',marginTop:3,marginLeft:28,marginRight:26,justifyContent:'center'}}>
                      <Text>{quanpic1}</Text>
                  </View>
                  <View style={{marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="-"
                       onPress={()=>{
                       if(quanpic1>0)
                       {
                       setquanpic1(quanpic1-1)
                       setpricepic1(pricepic1-500)
                       }
                       else
                       {
                       setquanpic1(0)
                       setpricepic1(0)
                       }
                       }}
                    />
                  </View>
               </View>
               <View style={{marginLeft:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                      <Text>Rs {pricepic1}/-</Text>
               </View>
            </View>


            <View>
               <Image
                  source={{ uri: "https://images.pexels.com/photos/2746155/pexels-photo-2746155.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
                  style={{
                  marginTop:7,
                  marginLeft:5,
                  height: 250,
                  borderRadius:20,
                  width: 170,
                  position: 'relative',
                  }}
               />
               <View style={{marginLeft:10,justifyContent:'center'}}>
                      <Text>Lavender               Rs350/-</Text>
               </View>
               <View style={{flex:.2,flexDirection:'row'}}>
                  <View style={{marginLeft:7,marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="+"
                       onPress={()=>{
                       setquanpic2(quanpic2+1)
                       setpricepic2(pricepic2+350)
                       }}
                    />
                  </View>
                  <View style={{alignItems:'center',backgroundColor:'white',marginTop:3,marginLeft:28,marginRight:26,justifyContent:'center'}}>
                      <Text>{quanpic2}</Text>
                  </View>
                  <View style={{marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="-"
                       onPress={()=>{
                       if(quanpic2>0)
                       {
                       setquanpic2(quanpic2-1)
                       setpricepic2(pricepic2-350)
                       }
                       else
                       {
                       setquanpic2(0)
                       setpricepic2(0)
                       }
                       }}
                    />
                  </View>
               </View>
               <View style={{marginLeft:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                      <Text>Rs {pricepic2}/-</Text>
               </View>
            </View>

        </View>


        <View style={{flex:1,backgroundColor:'white',flexDirection:'row',marginBottom:15,borderWidth:1,borderRadius:15}}>

            <View>
               <Image
                  source={{ uri: "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
                  style={{
                  marginTop:7,
                  marginLeft:8,
                  height: 250,
                  borderRadius:20,
                  width: 170,
                  position: 'relative',
                  }}
               />
               <View style={{marginLeft:10,justifyContent:'center'}}>
                      <Text>Pink Rose               Rs225/-</Text>
               </View>
               <View style={{flex:.2,flexDirection:'row'}}>
                  <View style={{marginLeft:10,marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="+"
                       onPress={()=>{
                       setquanpic3(quanpic3+1)
                       setpricepic3(pricepic3+225)
                       }}
                    />
                  </View>
                  <View style={{alignItems:'center',backgroundColor:'white',marginTop:3,marginLeft:28,marginRight:26,justifyContent:'center'}}>
                      <Text>{quanpic3}</Text>
                  </View>
                  <View style={{marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="-"
                       onPress={()=>{
                       if(quanpic3>0)
                       {
                       setquanpic3(quanpic3-1)
                       setpricepic3(pricepic3-225)
                       }
                       else
                       {
                       setquanpic3(0)
                       setpricepic3(0)
                       }
                       }}
                    />
                  </View>
               </View>
               <View style={{marginLeft:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                      <Text>Rs {pricepic3}/-</Text>
               </View>
            </View>


            <View>
               <Image
                  source={{ uri: "https://images.pexels.com/photos/36420/rose-plant-tender-nature.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
                  style={{
                  marginTop:7,
                  marginLeft:5,
                  height: 250,
                  borderRadius:20,
                  width: 170,
                  position: 'relative',
                  }}
               />
               <View style={{marginLeft:10,justifyContent:'center'}}>
                      <Text>White Rose            Rs700/-</Text>
               </View>
               <View style={{flex:.2,flexDirection:'row'}}>
                  <View style={{marginLeft:7,marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="+"
                       onPress={()=>{
                       setquanpic4(quanpic4+1)
                       setpricepic4(pricepic4+700)
                       }}
                    />
                  </View>
                  <View style={{alignItems:'center',backgroundColor:'white',marginTop:3,marginLeft:28,marginRight:26,justifyContent:'center'}}>
                      <Text>{quanpic4}</Text>
                  </View>
                  <View style={{marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="-"
                       onPress={()=>{
                       if(quanpic4>0)
                       {
                       setquanpic4(quanpic4-1)
                       setpricepic4(pricepic4-700)
                       }
                       else
                       {
                       setquanpic4(0)
                       setpricepic4(0)
                       }
                       }}
                    />
                  </View>
               </View>
               <View style={{marginLeft:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                      <Text>Rs {pricepic4}/-</Text>
               </View>
            </View>

        </View>


        <View style={{flex:1,backgroundColor:'white',flexDirection:'row',marginBottom:15,borderWidth:1,borderRadius:15}}>

            <View>
               <Image
                  source={{ uri: "https://images.pexels.com/photos/6621479/pexels-photo-6621479.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
                  style={{
                  marginTop:7,
                  marginLeft:8,
                  height: 250,
                  borderRadius:20,
                  width: 170,
                  position: 'relative',
                  }}
               />
               <View style={{marginLeft:10,justifyContent:'center'}}>
                      <Text>Tulip                       Rs300/-</Text>
               </View>
               <View style={{flex:.2,flexDirection:'row'}}>
                  <View style={{marginLeft:10,marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="+"
                       onPress={()=>{
                       setquanpic5(quanpic5+1)
                       setpricepic5(pricepic5+300)
                       }}
                    />
                  </View>
                  <View style={{alignItems:'center',backgroundColor:'white',marginTop:3,marginLeft:28,marginRight:26,justifyContent:'center'}}>
                      <Text>{quanpic5}</Text>
                  </View>
                  <View style={{marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="-"
                       onPress={()=>{
                       if(quanpic5>0)
                       {
                       setquanpic5(quanpic5-1)
                       setpricepic5(pricepic5-300)
                       }
                       else
                       {
                       setquanpic5(0)
                       setpricepic5(0)
                       }
                       }}
                    />
                  </View>
               </View>
               <View style={{marginLeft:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                      <Text>Rs {pricepic5}/-</Text>
               </View>
            </View>


            <View>
               <Image
                  source={{ uri: "https://images.pexels.com/photos/4117241/pexels-photo-4117241.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
                  style={{
                  marginTop:7,
                  marginLeft:5,
                  height: 250,
                  borderRadius:20,
                  width: 170,
                  position: 'relative',
                  }}
               />
               <View style={{marginLeft:10,justifyContent:'center'}}>
                      <Text>Daffodils               Rs425/-</Text>
               </View>
               <View style={{flex:.2,flexDirection:'row'}}>
                  <View style={{marginLeft:7,marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="+"
                       onPress={()=>{
                       setquanpic6(quanpic6+1)
                       setpricepic6(pricepic6+425)
                       }}
                    />
                  </View>
                  <View style={{alignItems:'center',backgroundColor:'white',marginTop:3,marginLeft:28,marginRight:26,justifyContent:'center'}}>
                      <Text>{quanpic6}</Text>
                  </View>
                  <View style={{marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="-"
                       onPress={()=>{
                       if(quanpic6>0)
                       {
                       setquanpic6(quanpic6-1)
                       setpricepic6(pricepic6-425)
                       }
                       else
                       {
                       setquanpic6(0)
                       setpricepic6(0)
                       }
                       }}
                    />
                  </View>
               </View>
               <View style={{marginLeft:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                      <Text>Rs {pricepic6}/-</Text>
               </View>
            </View>

        </View>

        <View style={{flex:1,backgroundColor:'white',flexDirection:'row',marginBottom:15,borderWidth:1,borderRadius:15}}>

            <View>
               <Image
                  source={{ uri: "https://images.pexels.com/photos/132466/pexels-photo-132466.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
                  style={{
                  marginTop:7,
                  marginLeft:8,
                  height: 250,
                  borderRadius:20,
                  width: 170,
                  position: 'relative',
                  }}
               />
               <View style={{marginLeft:10,justifyContent:'center'}}>
                      <Text>Lily                          Rs830/-</Text>
               </View>
               <View style={{flex:.2,flexDirection:'row'}}>
                  <View style={{marginLeft:10,marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="+"
                       onPress={()=>{
                       setquanpic7(quanpic7+1)
                       setpricepic7(pricepic7+830)
                       }}
                    />
                  </View>
                  <View style={{alignItems:'center',backgroundColor:'white',marginTop:3,marginLeft:28,marginRight:26,justifyContent:'center'}}>
                      <Text>{quanpic7}</Text>
                  </View>
                  <View style={{marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="-"
                       onPress={()=>{
                       if(quanpic7>0)
                       {
                       setquanpic7(quanpic7-1)
                       setpricepic7(pricepic7-830)
                       }
                       else
                       {
                       setquanpic7(0)
                       setpricepic7(0)
                       }
                       }}
                    />
                  </View>
               </View>
               <View style={{marginLeft:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                      <Text>Rs {pricepic7}/-</Text>
               </View>
            </View>


            <View>
               <Image
                  source={{ uri: "https://images.pexels.com/photos/4210811/pexels-photo-4210811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}
                  style={{
                  marginTop:7,
                  marginLeft:5,
                  height: 250,
                  borderRadius:20,
                  width: 170,
                  position: 'relative',
                  }}
               />
               <View style={{marginLeft:10,justifyContent:'center'}}>
                      <Text>Daisy                      Rs250/-</Text>
               </View>
               <View style={{flex:.2,flexDirection:'row'}}>
                  <View style={{marginLeft:7,marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="+"
                       onPress={()=>{
                       setquanpic8(quanpic8+1)
                       setpricepic8(pricepic8+250)
                       }}
                    />
                  </View>
                  <View style={{alignItems:'center',backgroundColor:'white',marginTop:3,marginLeft:28,marginRight:26,justifyContent:'center'}}>
                      <Text>{quanpic8}</Text>
                  </View>
                  <View style={{marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="-"
                       onPress={()=>{
                       if(quanpic8>0)
                       {
                       setquanpic8(quanpic8-1)
                       setpricepic8(pricepic8-250)
                       }
                       else
                       {
                       setquanpic8(0)
                       setpricepic8(0)
                       }
                       }}
                    />
                  </View>
               </View>
               <View style={{marginLeft:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                      <Text>Rs {pricepic8}/-</Text>
               </View>
            </View>

        </View>
        


        <Text style={{marginLeft:125,marginTop:10,fontWeight:'bold',color:'black',fontSize:35}}>Plants</Text>

        <Image
            source={{ uri: "https://cdn.pixabay.com/photo/2016/03/31/19/14/community-garden-1294837__340.png" }}
            style={{
            height: 170,
            marginTop:10,
            marginBottom:15,
            resizeMode:'contain',
            }}
        />


        <View style={{flex:2,backgroundColor:'white',flexDirection:'row',marginBottom:15,borderWidth:1,borderRadius:15}}>

            <View>
               <Image
                  source={{ uri: "https://images.pexels.com/photos/6913780/pexels-photo-6913780.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
                  style={{
                  marginTop:7,
                  marginLeft:5,
                  height: 250,
                  borderRadius:20,
                  width: 170,
                  position: 'relative',
                  }}
               />
               <View style={{marginLeft:10,justifyContent:'center'}}>
                      <Text>Cactus                  Rs1200/-</Text>
               </View>
               <View style={{flex:.2,flexDirection:'row'}}>
                  <View style={{marginLeft:10,marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="+"
                       onPress={()=>{
                       setquanplant1(quanplant1+1)
                       setpriceplant1(priceplant1+1200)
                       }}
                    />
                  </View>
                  <View style={{alignItems:'center',backgroundColor:'white',marginTop:3,marginLeft:28,marginRight:26,justifyContent:'center'}}>
                      <Text>{quanplant1}</Text>
                  </View>
                  <View style={{marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="-"
                       onPress={()=>{
                       if(quanplant1>0)
                       {
                       setquanplant1(quanplant1-1)
                       setpriceplant1(priceplant1-1200)
                       }
                       else
                       {
                       setquanplant1(0)
                       setpriceplant1(0)
                       }
                       }}
                    />
                  </View>
               </View>
               <View style={{marginLeft:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                      <Text>Rs {priceplant1}/-</Text>
               </View>
            </View>


            <View>
               <Image
                  source={{ uri: "https://images.pexels.com/photos/209482/pexels-photo-209482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
                  style={{
                  marginTop:7,
                  marginLeft:5,
                  height: 250,
                  borderRadius:20,
                  width: 170,
                  position: 'relative',
                  }}
               />
               <View style={{marginLeft:10,justifyContent:'center'}}>
                      <Text>Cabbage               Rs1350/-</Text>
               </View>
               <View style={{flex:.2,flexDirection:'row'}}>
                  <View style={{marginLeft:10,marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="+"
                       onPress={()=>{
                       setquanplant2(quanplant2+1)
                       setpriceplant2(priceplant2+1350)
                       }}
                    />
                  </View>
                  <View style={{alignItems:'center',backgroundColor:'white',marginTop:3,marginLeft:28,marginRight:26,justifyContent:'center'}}>
                      <Text>{quanplant2}</Text>
                  </View>
                  <View style={{marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="-"
                       onPress={()=>{
                       if(quanplant2>0)
                       {
                       setquanplant2(quanplant2-1)
                       setpriceplant2(priceplant2-1350)
                       }
                       else
                       {
                       setquanplant2(0)
                       setpriceplant2(0)
                       }
                       }}
                    />
                  </View>
               </View>
               <View style={{marginLeft:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                      <Text>Rs {priceplant2}/-</Text>
               </View>
            </View>

        </View>





        <View style={{flex:2,backgroundColor:'white',flexDirection:'row',marginBottom:15,borderWidth:1,borderRadius:15}}>

            <View>
               <Image
                  source={{ uri: "https://images.pexels.com/photos/4083148/pexels-photo-4083148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
                  style={{
                  marginTop:7,
                  marginLeft:5,
                  height: 250,
                  borderRadius:20,
                  width: 170,
                  position: 'relative',
                  }}
               />
               <View style={{marginLeft:10,justifyContent:'center'}}>
                      <Text>Daphne                  Rs920/-</Text>
               </View>
               <View style={{flex:.2,flexDirection:'row'}}>
                  <View style={{marginLeft:10,marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="+"
                       onPress={()=>{
                       setquanplant3(quanplant3+1)
                       setpriceplant3(priceplant3+920)
                       }}
                    />
                  </View>
                  <View style={{alignItems:'center',backgroundColor:'white',marginTop:3,marginLeft:28,marginRight:26,justifyContent:'center'}}>
                      <Text>{quanplant3}</Text>
                  </View>
                  <View style={{marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="-"
                       onPress={()=>{
                       if(quanplant3>0)
                       {
                       setquanplant3(quanplant3-1)
                       setpriceplant3(priceplant3-920)
                       }
                       else
                       {
                       setquanplant3(0)
                       setpriceplant3(0)
                       }
                       }}
                    />
                  </View>
               </View>
               <View style={{marginLeft:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                      <Text>Rs {priceplant3}/-</Text>
               </View>
            </View>


            <View>
               <Image
                  source={{ uri: "https://images.pexels.com/photos/1264000/pexels-photo-1264000.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
                  style={{
                  marginTop:7,
                  marginLeft:5,
                  height: 250,
                  borderRadius:20,
                  width: 170,
                  position: 'relative',
                  }}
               />
               <View style={{marginLeft:10,justifyContent:'center'}}>
                      <Text>Mint                        Rs730/-</Text>
               </View>
               <View style={{flex:.2,flexDirection:'row'}}>
                  <View style={{marginLeft:10,marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="+"
                       onPress={()=>{
                       setquanplant4(quanplant4+1)
                       setpriceplant4(priceplant4+730)
                       }}
                    />
                  </View>
                  <View style={{alignItems:'center',backgroundColor:'white',marginTop:3,marginLeft:28,marginRight:26,justifyContent:'center'}}>
                      <Text>{quanplant4}</Text>
                  </View>
                  <View style={{marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="-"
                       onPress={()=>{
                       if(quanplant4>0)
                       {
                       setquanplant4(quanplant4-1)
                       setpriceplant4(priceplant4-730)
                       }
                       else
                       {
                       setquanplant4(0)
                       setpriceplant4(0)
                       }
                       }}
                    />
                  </View>
               </View>
               <View style={{marginLeft:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                      <Text>Rs {priceplant4}/-</Text>
               </View>
            </View>

        </View>




        <View style={{flex:2,backgroundColor:'white',flexDirection:'row',marginBottom:15,borderWidth:1,borderRadius:15}}>

            <View>
               <Image
                  source={{ uri: "https://www.thespruce.com/thmb/4A7qRQSzMjujXBbwo4Nv7JrwWEg=/600x400/how-to-grow-sweet-alyssum-1402862-13-9732fee8347242c496425f14e024aea4.jpg" }}
                  style={{
                  marginTop:7,
                  marginLeft:5,
                  height: 250,
                  borderRadius:20,
                  width: 170,
                  position: 'relative',
                  }}
               />
               <View style={{marginLeft:10,justifyContent:'center'}}>
                      <Text>Alyssum                Rs1400/-</Text>
               </View>
               <View style={{flex:.2,flexDirection:'row'}}>
                  <View style={{marginLeft:10,marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="+"
                       onPress={()=>{
                       setquanplant5(quanplant5+1)
                       setpriceplant5(priceplant5+1400)
                       }}
                    />
                  </View>
                  <View style={{alignItems:'center',backgroundColor:'white',marginTop:3,marginLeft:28,marginRight:26,justifyContent:'center'}}>
                      <Text>{quanplant5}</Text>
                  </View>
                  <View style={{marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="-"
                       onPress={()=>{
                       if(quanplant5>0)
                       {
                       setquanplant5(quanplant5-1)
                       setpriceplant5(priceplant5-1400)
                       }
                       else
                       {
                       setquanplant5(0)
                       setpriceplant5(0)
                       }
                       }}
                    />
                  </View>
               </View>
               <View style={{marginLeft:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                      <Text>Rs {priceplant5}/-</Text>
               </View>
            </View>


            <View>
               <Image
                  source={{ uri: "https://www.thespruce.com/thmb/Up8cMU9wFezMEJfrZzuDwjXE8uw=/600x400/lemon-tree-plant-profile-4846327-3-b9b35325794c465f962a5f472bc8a6b2.jpg" }}
                  style={{
                  marginTop:7,
                  marginLeft:8,
                  height: 250,
                  borderRadius:20,
                  width: 170,
                  position: 'relative',
                  }}
               />
               <View style={{marginLeft:10,justifyContent:'center'}}>
                      <Text>Lemon                   Rs600/-</Text>
               </View>
               <View style={{flex:.2,flexDirection:'row'}}>
                  <View style={{marginLeft:10,marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="+"
                       onPress={()=>{
                       setquanplant6(quanplant6+1)
                       setpriceplant6(priceplant6+600)
                       }}
                    />
                  </View>
                  <View style={{alignItems:'center',backgroundColor:'white',marginTop:3,marginLeft:28,marginRight:26,justifyContent:'center'}}>
                      <Text>{quanplant6}</Text>
                  </View>
                  <View style={{marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="-"
                       onPress={()=>{
                       if(quanplant6>0)
                       {
                       setquanplant6(quanplant6-1)
                       setpriceplant6(priceplant6-600)
                       }
                       else
                       {
                       setquanplant6(0)
                       setpriceplant6(0)
                       }
                       }}
                    />
                  </View>
               </View>
               <View style={{marginLeft:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                      <Text>Rs {priceplant6}/-</Text>
               </View>
            </View>

        </View>






        <View style={{flex:2,backgroundColor:'white',flexDirection:'row',marginBottom:15,borderWidth:1,borderRadius:15}}>

            <View>
               <Image
                  source={{ uri: "https://www.thespruce.com/thmb/9vNKACsHrcGpKCDpsLYc2sBUfQc=/600x400/growing-oregano-plants-1402818-11-ce2a0899a12e4767a5ec71340464f508.jpg" }}
                  style={{
                  marginTop:7,
                  marginLeft:5,
                  height: 250,
                  borderRadius:20,
                  width: 170,
                  position: 'relative',
                  }}
               />
               <View style={{marginLeft:10,justifyContent:'center'}}>
                      <Text>Oregano                 Rs670/-</Text>
               </View>
               <View style={{flex:.2,flexDirection:'row'}}>
                  <View style={{marginLeft:10,marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="+"
                       onPress={()=>{
                       setquanplant7(quanplant7+1)
                       setpriceplant7(priceplant7+670)
                       }}
                    />
                  </View>
                  <View style={{alignItems:'center',backgroundColor:'white',marginTop:3,marginLeft:28,marginRight:26,justifyContent:'center'}}>
                      <Text>{quanplant7}</Text>
                  </View>
                  <View style={{marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="-"
                       onPress={()=>{
                       if(quanplant7>0)
                       {
                       setquanplant7(quanplant7-1)
                       setpriceplant7(priceplant7-670)
                       }
                       else
                       {
                       setquanplant7(0)
                       setpriceplant7(0)
                       }
                       }}
                    />
                  </View>
               </View>
               <View style={{marginLeft:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                      <Text>Rs {priceplant7}/-</Text>
               </View>
            </View>


            <View>
               <Image
                  source={{ uri: "https://www.thespruce.com/thmb/BGu2atiT533x_7n1Xywk4tZwrJ8=/600x400/growing-broccoli-plants-in-the-vegetable-garden-1403457-01-f02156f7788d4198b58a94016c5d220e.jpg" }}
                  style={{
                  marginTop:7,
                  marginLeft:8,
                  height: 250,
                  borderRadius:20,
                  width: 170,
                  position: 'relative',
                  }}
               />
               <View style={{marginLeft:10,justifyContent:'center'}}>
                      <Text>Broccoli                 Rs700/-</Text>
               </View>
               <View style={{flex:.2,flexDirection:'row'}}>
                  <View style={{marginLeft:10,marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="+"
                       onPress={()=>{
                       setquanplant8(quanplant8+1)
                       setpriceplant8(priceplant8+700)
                       }}
                    />
                  </View>
                  <View style={{alignItems:'center',backgroundColor:'white',marginTop:3,marginLeft:28,marginRight:26,justifyContent:'center'}}>
                      <Text>{quanplant8}</Text>
                  </View>
                  <View style={{marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="-"
                       onPress={()=>{
                       if(quanplant8>0)
                       {
                       setquanplant8(quanplant8-1)
                       setpriceplant8(priceplant8-700)
                       }
                       else
                       {
                       setquanplant8(0)
                       setpriceplant8(0)
                       }
                       }}
                    />
                  </View>
               </View>
               <View style={{marginLeft:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                      <Text>Rs {priceplant8}/-</Text>
               </View>
            </View>

        </View>


        <Text style={{marginLeft:145,marginTop:10,fontWeight:'bold',color:'black',fontSize:35}}>Pots</Text>

        <Image
            source={{ uri: "https://cdn.pixabay.com/photo/2017/01/31/23/59/floral-2028345__340.png" }}
            style={{
            height: 170,
            marginTop:10,
            marginBottom:15,
            resizeMode:'contain',
            }}
        />


        <View style={{flex:2,backgroundColor:'white',flexDirection:'row',marginBottom:15,borderWidth:1,borderRadius:15}}>

            <View>
               <Image
                  source={{ uri: "https://cdn.pixabay.com/photo/2019/06/17/08/24/pastel-4279379__340.jpg" }}
                  style={{
                  marginTop:7,
                  marginLeft:5,
                  height: 250,
                  borderRadius:20,
                  width: 170,
                  position: 'relative',
                  }}
               />
               <View style={{marginLeft:10,justifyContent:'center'}}>
                      <Text>For Plant               Rs1400/-</Text>
               </View>
               <View style={{flex:.2,flexDirection:'row'}}>
                  <View style={{marginLeft:10,marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="+"
                       onPress={()=>{
                       setquanpot1(quanpot1+1)
                       setpricepot1(pricepot1+1400)
                       }}
                    />
                  </View>
                  <View style={{alignItems:'center',backgroundColor:'white',marginTop:3,marginLeft:28,marginRight:26,justifyContent:'center'}}>
                      <Text>{quanpot1}</Text>
                  </View>
                  <View style={{marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="-"
                       onPress={()=>{
                       if(quanpot1>0)
                       {
                       setquanpot1(quanpot1-1)
                       setpricepot1(pricepot1-1400)
                       }
                       else
                       {
                       setquanpot1(0)
                       setpricepot1(0)
                       }
                       }}
                    />
                  </View>
               </View>
               <View style={{marginLeft:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                      <Text>Rs {pricepot1}/-</Text>
               </View>
            </View>


            <View>
               <Image
                  source={{ uri: "https://cdn.pixabay.com/photo/2016/04/08/13/52/daffodils-1316128__340.jpg" }}
                  style={{
                  marginTop:7,
                  marginLeft:5,
                  height: 250,
                  borderRadius:20,
                  width: 170,
                  position: 'relative',
                  }}
               />
               <View style={{marginLeft:10,justifyContent:'center'}}>
                      <Text>For Flower             Rs900/-</Text>
               </View>
               <View style={{flex:.2,flexDirection:'row'}}>
                  <View style={{marginLeft:10,marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="+"
                       onPress={()=>{
                       setquanpot2(quanpot2+1)
                       setpricepot2(pricepot2+900)
                       }}
                    />
                  </View>
                  <View style={{alignItems:'center',backgroundColor:'white',marginTop:3,marginLeft:28,marginRight:26,justifyContent:'center'}}>
                      <Text>{quanpot2}</Text>
                  </View>
                  <View style={{marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="-"
                       onPress={()=>{
                       if(quanpot2>0)
                       {
                       setquanpot2(quanpot2-1)
                       setpricepot2(pricepot2-900)
                       }
                       else
                       {
                       setquanpot2(0)
                       setpricepot2(0)
                       }
                       }}
                    />
                  </View>
               </View>
               <View style={{marginLeft:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                      <Text>Rs {pricepot2}/-</Text>
               </View>
            </View>

        </View>





        <View style={{flex:2,backgroundColor:'white',flexDirection:'row',marginBottom:15,borderWidth:1,borderRadius:15}}>

            <View>
               <Image
                  source={{ uri: "https://cdn.pixabay.com/photo/2018/03/06/19/33/vase-3204337__340.jpg" }}
                  style={{
                  marginTop:7,
                  marginLeft:5,
                  height: 250,
                  borderRadius:20,
                  width: 170,
                  position: 'relative',
                  }}
               />
               <View style={{marginLeft:10,justifyContent:'center'}}>
                      <Text>For Flower              Rs800/-</Text>
               </View>
               <View style={{flex:.2,flexDirection:'row'}}>
                  <View style={{marginLeft:10,marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="+"
                       onPress={()=>{
                       setquanpot3(quanpot3+1)
                       setpricepot3(pricepot3+800)
                       }}
                    />
                  </View>
                  <View style={{alignItems:'center',backgroundColor:'white',marginTop:3,marginLeft:28,marginRight:26,justifyContent:'center'}}>
                      <Text>{quanpot3}</Text>
                  </View>
                  <View style={{marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="-"
                       onPress={()=>{
                       if(quanpot3>0)
                       {
                       setquanpot3(quanpot3-1)
                       setpricepot3(pricepot3-800)
                       }
                       else
                       {
                       setquanpot3(0)
                       setpricepot3(0)
                       }
                       }}
                    />
                  </View>
               </View>
               <View style={{marginLeft:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                      <Text>Rs {pricepot3}/-</Text>
               </View>
            </View>


            <View>
               <Image
                  source={{ uri: "https://cdn.pixabay.com/photo/2015/07/02/10/05/roses-828564__340.jpg" }}
                  style={{
                  marginTop:7,
                  marginLeft:5,
                  height: 250,
                  borderRadius:20,
                  width: 170,
                  position: 'relative',
                  }}
               />
               <View style={{marginLeft:10,justifyContent:'center'}}>
                      <Text>For Flower             Rs600/-</Text>
               </View>
               <View style={{flex:.2,flexDirection:'row'}}>
                  <View style={{marginLeft:10,marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="+"
                       onPress={()=>{
                       setquanpot4(quanpot4+1)
                       setpricepot4(pricepot4+600)
                       }}
                    />
                  </View>
                  <View style={{alignItems:'center',backgroundColor:'white',marginTop:3,marginLeft:28,marginRight:26,justifyContent:'center'}}>
                      <Text>{quanpot4}</Text>
                  </View>
                  <View style={{marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="-"
                       onPress={()=>{
                       if(quanpot4>0)
                       {
                       setquanpot4(quanpot4-1)
                       setpricepot4(pricepot4-600)
                       }
                       else
                       {
                       setquanpot4(0)
                       setpricepot4(0)
                       }
                       }}
                    />
                  </View>
               </View>
               <View style={{marginLeft:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                      <Text>Rs {pricepot4}/-</Text>
               </View>
            </View>

        </View>




        <View style={{flex:2,backgroundColor:'white',flexDirection:'row',marginBottom:15,borderWidth:1,borderRadius:15}}>

            <View>
               <Image
                  source={{ uri: "https://cdn.pixabay.com/photo/2020/07/24/16/37/cactus-5434469__340.jpg" }}
                  style={{
                  marginTop:7,
                  marginLeft:5,
                  height: 250,
                  borderRadius:20,
                  width: 170,
                  position: 'relative',
                  }}
               />
               <View style={{marginLeft:10,justifyContent:'center'}}>
                      <Text>For Plant              Rs1100/-</Text>
               </View>
               <View style={{flex:.2,flexDirection:'row'}}>
                  <View style={{marginLeft:10,marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="+"
                       onPress={()=>{
                       setquanpot5(quanpot5+1)
                       setpricepot5(pricepot5+1100)
                       }}
                    />
                  </View>
                  <View style={{alignItems:'center',backgroundColor:'white',marginTop:3,marginLeft:28,marginRight:26,justifyContent:'center'}}>
                      <Text>{quanpot5}</Text>
                  </View>
                  <View style={{marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="-"
                       onPress={()=>{
                       if(quanpot5>0)
                       {
                       setquanpot5(quanpot5-1)
                       setpricepot5(pricepot5-1100)
                       }
                       else
                       {
                       setquanpot5(0)
                       setpricepot5(0)
                       }
                       }}
                    />
                  </View>
               </View>
               <View style={{marginLeft:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                      <Text>Rs {pricepot5}/-</Text>
               </View>
            </View>


            <View>
               <Image
                  source={{ uri: "https://cdn.pixabay.com/photo/2016/10/11/19/42/succulent-1732568__340.jpg" }}
                  style={{
                  marginTop:7,
                  marginLeft:5,
                  height: 250,
                  borderRadius:20,
                  width: 170,
                  position: 'relative',
                  }}
               />
               <View style={{marginLeft:10,justifyContent:'center'}}>
                      <Text>For Plant                Rs700/-</Text>
               </View>
               <View style={{flex:.2,flexDirection:'row'}}>
                  <View style={{marginLeft:10,marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="+"
                       onPress={()=>{
                       setquanpot6(quanpot6+1)
                       setpricepot6(pricepot6+700)
                       }}
                    />
                  </View>
                  <View style={{alignItems:'center',backgroundColor:'white',marginTop:3,marginLeft:28,marginRight:26,justifyContent:'center'}}>
                      <Text>{quanpot6}</Text>
                  </View>
                  <View style={{marginTop:5,marginBottom:20,height:20,width:50}}>
                    <Button
                       title="-"
                       onPress={()=>{
                       if(quanpot6>0)
                       {
                       setquanpot6(quanpot6-1)
                       setpricepot6(pricepot6-700)
                       }
                       else
                       {
                       setquanpot6(0)
                       setpricepot6(0)
                       }
                       }}
                    />
                  </View>
               </View>
               <View style={{marginLeft:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                      <Text>Rs {pricepot6}/-</Text>
               </View>
            </View>

        </View>




        <View style={{height:260,backgroundColor:'darkolivegreen',flexDirection:'row',borderRadius:20}}>
        <Image
            source={{ uri: "https://cdn.pixabay.com/photo/2017/01/31/23/58/floral-2028342__340.png" }}
            style={{
            height: 300,
            width: 140,
            position: 'relative',
            borderRadius:25,
            marginLeft:20,
            marginTop:15,
            }}
        />
           <View style={{height:275,width:150,marginLeft:30,marginTop:25}}>
               <Text style={{marginLeft:10,fontSize:30,fontWeight:'bold',color:'white'}}>Flowers</Text>
               <Text style={{marginLeft:12,fontSize:15,fontWeight:'bold',color:'white'}}>{quantotal} items</Text>
               <Text style={{marginLeft:10,fontSize:30,fontWeight:'bold',color:'white'}}>Plants</Text>
               <Text style={{marginLeft:12,fontSize:15,fontWeight:'bold',color:'white'}}>{quanplanttotal} items</Text>
               <Text style={{marginLeft:10,fontSize:30,fontWeight:'bold',color:'white'}}>Pots</Text>
               <Text style={{marginLeft:12,fontSize:15,fontWeight:'bold',color:'white'}}>{quanpottotal} items</Text>
           </View>
        </View>





        <View style={{height:260,marginBottom:15,marginTop:70,backgroundColor:'darkolivegreen',borderRadius:20,flexDirection:'row'}}>
           
           <View style={{height:275,width:180,marginLeft:15,marginTop:6}}>
              <Text style={{marginLeft:10,fontSize:30,fontWeight:'bold',color:'white'}}>Flowers</Text>
              <Text style={{marginLeft:12,fontSize:15,fontWeight:'bold',color:'white'}}>Rs /- {pricetotal}</Text>
              <Text style={{marginLeft:10,fontSize:30,fontWeight:'bold',color:'white'}}>Plants</Text>
              <Text style={{marginLeft:12,fontSize:15,fontWeight:'bold',color:'white'}}>Rs /- {priceplanttotal}</Text>
              <Text style={{marginLeft:10,fontSize:30,fontWeight:'bold',color:'white'}}>Pots</Text>
              <Text style={{marginLeft:12,fontSize:15,fontWeight:'bold',color:'white'}}>Rs /- {pricepottotal}</Text>
              <Text style={{marginLeft:10,fontSize:30,fontWeight:'bold',color:'white'}}>Total Bill</Text>
              <Text style={{marginLeft:12,fontSize:15,fontWeight:'bold',color:'white'}}>Rs /- {price} for {quan} items</Text>
           </View>            
           <Image
               source={{ uri: "https://cdn.pixabay.com/photo/2017/01/31/23/58/floral-2028340__340.png" }}
               style={{
               height: 300,
               width: 150,
               position: 'relative',
               borderRadius:25,
               marginLeft:10,
               marginTop:15,
               }}
            />
        </View>

        <View style={{marginLeft:50,marginRight:50,marginTop:50}}>
                 <Button
                      title="COMPUTE BILL"
                      color="darkolivegreen"
                      onPress={()=>{
                              setquantotal(quanpic1+quanpic2+quanpic3+quanpic4+quanpic5+quanpic6+quanpic7+quanpic8)
                              setpricetotal(pricepic1+pricepic2+pricepic3+pricepic4+pricepic5+pricepic6+pricepic7+pricepic8)
                              setquanplanttotal(quanplant1+quanplant2+quanplant3+quanplant4+quanplant5+quanplant6+quanplant7+quanplant8)
                              setpriceplanttotal(priceplant1+priceplant2+priceplant3+priceplant4+priceplant5+priceplant6+priceplant7+priceplant8)
                              setquanpottotal(quanpot1+quanpot2+quanpot3+quanpot4+quanpot5+quanpot6)
                              setpricepottotal(pricepot1+pricepot2+pricepot3+pricepot4+pricepot5+pricepot6)

                              setquan(quanpic1+quanpic2+quanpic3+quanpic4+quanpic5+quanpic6+quanpic7+quanpic8
                              +
                              quanplant1+quanplant2+quanplant3+quanplant4+quanplant5+quanplant6+quanplant7+quanplant8
                              +
                              quanpot1+quanpot2+quanpot3+quanpot4+quanpot5+quanpot6)

                              setprice(pricepic1+pricepic2+pricepic3+pricepic4+pricepic5+pricepic6+pricepic7+pricepic8
                              +
                              priceplant1+priceplant2+priceplant3+priceplant4+priceplant5+priceplant6+priceplant7+priceplant8
                              +
                              pricepot1+pricepot2+pricepot3+pricepot4+pricepot5+pricepot6)
                      }}
                 />
        </View>

        <View style={{marginLeft:50,marginRight:50,marginTop:10,marginBottom:10}}>
                 <Button
                      title="CLEAR DATA & SHOP AGAIN"
                      color="darkolivegreen"
                      onPress={()=>{
                              setquanpic1(0);setquanpic2(0);setquanpic3(0);setquanpic4(0)
                              setquanpic5(0);setquanpic6(0);setquanpic7(0);setquanpic8(0)

                              setquanplant1(0);setquanplant2(0);setquanplant3(0);setquanplant4(0)
                              setquanplant5(0);setquanplant6(0);setquanplant7(0);setquanplant8(0)

                              setquanpot1(0);setquanpot2(0);setquanpot3(0);setquanpot4(0)
                              setquanpot5(0);setquanpot6(0)

                              setpricepic1(0);setpricepic2(0);setpricepic3(0);setpricepic4(0)
                              setpricepic5(0);setpricepic6(0);setpricepic7(0);setpricepic8(0)

                              setpriceplant1(0);setpriceplant2(0);setpriceplant3(0);setpriceplant4(0)
                              setpriceplant5(0);setpriceplant6(0);setpriceplant7(0);setpriceplant8(0)

                              setpricepot1(0);setpricepot2(0);setpricepot3(0);setpricepot4(0)
                              setpricepot5(0);setpricepot6(0)

                              setquantotal(0)
                              setpricetotal(0)

                              setquanplanttotal(0)
                              setpriceplanttotal(0)

                              setquanpottotal(0)
                              setpricepottotal(0)

                              setquan(0)
                              setprice(0)
                      }}
                 />
        </View>



        <View style={{marginTop: 7}}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible1(!modalVisible1);
        }}
        >
        <View style={{marginTop: 4}}>
          <View style={{marginTop: 280,marginLeft:10,marginRight:10,backgroundColor: "white",borderRadius: 20,padding: 30, height:230, shadowColor: "#000",
                        shadowOffset: {
                        width: 0,
                        height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5}}
          >
            <Text style={styles.modalText}>You order will be delievered in 30 minutes at</Text>
            <Text style={{fontSize:15,textAlign:'center',marginBottom:10}}>{address}</Text>
            <Text style={{fontSize:15,textAlign:'center',marginBottom:10}}>You have to pay Rs/- {price} upon receiving your order</Text>
            <TouchableOpacity
                         style={{alignItems:'center',justifyContent:'center'}}
                         onPress={() => setModalVisible1(!modalVisible1)}
            >
                        <Text style={{color: 'black',fontSize:20}}>
                              Ok
                        </Text>
            </TouchableOpacity>
            
          </View>
        </View>
        </Modal>

        <View style={{margin:5,borderRadius:20,borderWidth:1,backgroundColor:'white',height:150}}>

        <View style={{marginLeft:20,marginRight:20,marginBottom:10,marginTop:12}}>

        <TextInput
          label="Address"
          onChangeText={address => setAddress(address)}
        />
      </View>

        <TouchableOpacity
          style={{marginLeft:50,marginRight:50,marginBottom:10,padding: 10,borderWidth:1,borderRadius:10}}
          onPress={() => setModalVisible1(true)}>
          <Text style={styles.buttonTextStyle}>
            Enter Address
          </Text>
        </TouchableOpacity>

        </View>


      </View>





        <View style={{marginTop: 10}}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        >
        <View style={{marginTop: 10}}>
          <View style={{marginTop: 280,marginLeft:10,marginRight:10,backgroundColor: "white",borderRadius: 20,padding: 30, height:150, shadowColor: "#000",
                        shadowOffset: {
                        width: 0,
                        height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5}}
          >
            <Text style={styles.modalText}>Are you sure you want to Log Out?</Text>
            <Text style={{fontSize:15,textAlign:'center',marginBottom:10}}>Your progress will be lost</Text>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity
                         style={{marginLeft:45,marginRight:50,marginBottom:10,padding:10}}
                         onPress={() => setModalVisible(!modalVisible)}
            >
                        <Text style={{color: 'darkolivegreen',marginLeft:5,fontSize:20}}>
                              Cancel
                        </Text>
            </TouchableOpacity>
            

            <TouchableOpacity
                         style={{marginRight:30,marginBottom:10,padding:10}}
                         onPress={() => navigation.navigate("MainPage2")}
            >
                        <Text style={{color: 'darkolivegreen',marginLeft:5,fontSize:20}}>
                              Ok
                        </Text>
            </TouchableOpacity>

            </View>
          </View>
        </View>
        </Modal>

        <TouchableOpacity
          style={{marginLeft:50,marginRight:50,marginBottom:10,padding: 10,borderWidth:1,borderRadius:10}}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonTextStyle}>
            LOG OUT
          </Text>
        </TouchableOpacity>
      </View>



      <View>
        <AdMobBanner
        style={{}}
        bannerSize="smartBanner"
        adUnitID="ca-app-pub-9152919921144751/3203053032"
        servePersonalizedAds
        onDidFailToReceiveAdWithError={(e) => console.log(e)}
      />
      </View>



    </ScrollView>
  );
}

function CreateAccount({navigation}){

const [firstname, setFirstname] = useState(0);
const [lastname, setLastname] = useState(0);
const [email, setEmail] = useState(0);
const [password, setPassword] = useState(0);
state={
firstname:"",
lastname:"",
email:"",
password:""
}
saveitem=()=>{
    //console.log(this.state.text)
    const mywishes=firebase.database().ref("mywishes");//database created if not already available with this name
    mywishes.push().set({
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:password
    })
}
userSignup=(email,password)=>{
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(()=>{
        navigation.navigate("MainPage2")
    })
    .catch(error=>{
        Alert.alert(error.message)
    })
}
    return(
    
        <View style={{flex:1,marginTop:10}}>
        <ScrollView>
        <View style={{flex:.3,backgroundColor:'lightgray',marginRight:90,marginLeft:90,borderRadius:200,borderWidth:1.5}}>
           <Icon
                                       containerStyle={{padding:8}}
                                       size={80}
                                       type="ionicon"
                                       name={Platform.OS === "ios" ? "ios-person-outline" : "person-outline"}
                                   />
        </View>
         <View style={{flex:1,backgroundColor:'#fff',marginTop:20,marginLeft:50,marginRight:50,marginBottom:10,borderWidth:1.5}}>
         <ImageBackground
            source={{ uri: "https://images.pexels.com/photos/1470168/pexels-photo-1470168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
            style={{
            margin:5,
            height: 400,
            width: 247,
            borderRadius:20,
            position: 'relative',
            }}
      >

      <View style={{marginLeft:20,marginRight:20,marginBottom:5,marginTop:10}}>

        <TextInput
          label="First Name"
          onChangeText={firstname => setFirstname(firstname)}
        />
      </View>

      <View style={{marginLeft:20,marginRight:20,marginBottom:2,marginTop:5}}>

        <TextInput
          label="Last Name"
          onChangeText={lastname => setLastname(lastname)}
        />
      </View>


      <View style={{marginLeft:20,marginRight:20,marginBottom:5,marginTop:10}}>

        <TextInput
          label="E-Mail"
          onChangeText={email => setEmail(email)}
        />
      </View>

      <View style={{marginLeft:20,marginRight:20,marginBottom:5,marginTop:5}}>

        <TextInput
          label="Password"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={{marginRight:50,
                                        marginLeft:20,
                                        marginTop:10,
                                        padding:20,
                                        backgroundColor:'sandybrown',
                                        borderRadius:20,
	                                    width:210,
									   }}
                            // onPress={()=>this.saveitem()}
                             onPress={()=>this.userSignup(email,password)}
      >
           
                      <Text style={{color:'black',fontWeight:'bold',marginLeft:60}}>Register</Text>
      </TouchableOpacity>

      </ImageBackground>
      </View>
      </ScrollView>
        </View>
    );
}

const Stack=createStackNavigator();

const App=()=>{
    return(
        <NavigationContainer theme={theme}>
             <Stack.Navigator
                  initialRouteName={'MainPageBoarding'}
             >
                <Stack.Screen
                     name="Boarding"
                     component={MainPage}
                     options={{
                     headerTitle: <Text style={{fontSize: 25,
                                      fontWeight:'bold',
                                      color:'darkolivegreen'}}>          eNursery</Text>
                          ,
                          headerStyle:{
                                backgroundColor:'white',
                                borderBottomLeftRadius:30,
                                borderBottomRightRadius:30,
                          },
                          headerLeft:()=>(
                                   <Icon
                                       containerStyle={{paddingLeft:20}}
                                       type="ionicon"
                                       color='darkolivegreen'
                                       name={Platform.OS === "ios" ? "ios-flower-outline" : "md-flower-outline"}
                                   />
                          ),
                          headerRight:()=>(
                                   <Icon
                                       containerStyle={{paddingRight:20}}
                                       type="ionicon"
                                       color='darkolivegreen'
                                       name={Platform.OS === "ios" ? "ios-rose-outline" : "md-rose-outline"}
                                   />
                          )
                     }}
                />


                <Stack.Screen name="MainPage2" component={Options}
                options={{
                title:"               Details",
                          headerStyle:{
                                backgroundColor:'white'
                          },
                          }}
                       />


                <Stack.Screen name="AirplaneBusTrain" component={Next}
                options={{
                title:"             Buy Now!!!",
                          headerStyle:{
                                backgroundColor:'transparent'
                          }
                          }}
                       />
                <Stack.Screen name="Account" component={CreateAccount}
                options={{
                title:"     Create your Account",
                          headerStyle:{
                                backgroundColor:'white'
                          },
                          }}
                       />

             </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ()=> {
  return <App/>;
}

const styles=StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'white'
	},
    forrow:{
  flexDirection: 'row',
  },
  image1: {
  flex:.5,
  margin:5,
  height:135,
  width:300,
  
   },
   image2: {
   flex:.5,
  margin:5,
  height:135,
  width:300,
   },
   image3: {
   flex:.5,
  margin:5,
  height:135,
  width:300,
   },
   image4: {
   flex:.5,
  margin:5,
  height:135,
  width:300,
   },
   buttonStyle: {
    minWidth: '100%',
    padding: 10,
    backgroundColor: 'lightgrey',
  },
  buttonTextStyle: {
    color: 'darkolivegreen',
    textAlign: 'center',
    fontSize:20,
    fontWeight:'bold',
  },
  titleStyle: {
    color: 'darkolivegreen',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
  button: {
    borderRadius: 15,
    padding: 8,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 10,
    textAlign: "center",
    fontSize:17,
    fontWeight:'bold'
  }
})

