
import { useState } from "react"
import { ScrollView, Text, TouchableOpacity, View,StatusBar, Dimensions, Image } from "react-native"
import SearchBox from "../ScreenComponents/SearchBox"
import SearchContent from "../ScreenComponents/SearchContent"
import Ionic from "react-native-vector-icons/Ionicons"

const Search =()=>{
    const [image,setImage]=useState(null);
    const getData = data =>{
        setImage(data);
    };
     const windowWidth = Dimensions.get('window').width
     const windowHeight =Dimensions.get('window').height
    return(
        <View style={{

            height:'100%',
            width:'100%',
            position:'relative',
            backgroundColor:'white'
        }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <SearchBox/>
            <SearchContent data={getData}/>
            <TouchableOpacity
            style={{
                margin:25,
                justifyContent:'center',
                alignItems:"center"
            }}
            >


            </TouchableOpacity>

          </ScrollView>
          {
            image?
            (
                <View
                style={{
                    position:'absolute',
                    zIndex:1,
                    width:'100%',
                    height:'100%',
                    backgroundColor:'rgba(52,52,52,52,0.8)'
                }}>
                    <StatusBar
                    backgroundColor="#525252"
                    barStyle='dark-content'
                
                    />
                    <View
                    style={{
                        position:'absolute',
                        top:windowWidth/18,
                        top:windowHeight/6,
                        backgroundColor:'white',
                        width:350,
                        height:465,
                        borderRadius:15,
                        zIndex:1,
                        elevation:50,
                        marginLeft:5
                    }}
                    >
                        <View style={{
                            flexDirection:'row',
                            alignItems:'center',
                            paddingVertical:10,
                            paddingHorizontal:15,
                        }}>
                            <Image source={image} style={{
                                width:30,
                                height:30,
                                borderRadius:100
                            }}/>
                            <View style={{paddingLeft:8}}>
                                <Text style={{
                                    fontSize:12,
                                    fontWeight:'600'
                                }}>
                                    anonymus_guy
                                </Text>
                            </View>
                        </View>
                        <Image source={image} style={{width:'100%',height:'80%'}}/>
                        <View style={{
                            justifyContent:'space-around',
                            width:'100%',
                            flexDirection:'row',
                            alignItems:'center',
                            padding:8
                        }}>
                            <Ionic name="thumbs-up-outline" style={{fontSize:26}}/>
                            <Ionic name="chatbox-ellipses-outline" style={{fontSize:26}}/>
                            <Ionic name="arrow-redo-outline" style={{fontSize:26}}/>
                        </View>

                    </View>
                </View>
            ):null
          }
        </View>
    )
}
export default Search