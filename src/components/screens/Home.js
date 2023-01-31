import { Image, ScrollView, StatusBar, Text, View } from "react-native"
import Ionic from "react-native-vector-icons/Ionicons";
import Post from "../ScreenComponents/Post";
import ProfileBody from "../ScreenComponents/ProfileBody";


const Home =()=>{
    return(
        <View style={{backgroundColor:"white", height:'100%'}}>
            <StatusBar backgroundColor="white" barStyle="dark-content" animated={true}/>
            <View style={{justifyContent:'space-between',flexDirection:'row', paddingHorizontal: 9,alignItems:'center', marginTop: 5, paddingVertical:5, borderColor:'#DEDEDE',borderBottomWidth:1}}>
                <Text style={{fontSize:18, fontWeight:'900'}}>P H O T O G R A M</Text>
                <Image
                style={{height:25, width:25, borderRadius:100}}
                source={require('../../../images/sabbir_br.jpg')}
                />

            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Post/>
            
            </ScrollView>
            
        </View>
    )
}
export default Home