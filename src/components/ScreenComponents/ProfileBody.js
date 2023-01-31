import { Image, Text, TouchableOpacity, View } from "react-native"
import Ionic from 'react-native-vector-icons/Ionicons'

const ProfileBody = () => {

    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 20, marginLeft: 14 }}>
                <View style={{
                    alignItems: 'center',
                }}>
                    <Image
                        source={require('../../../images/sabbir_br.jpg')}
                        style={{ resizeMode: 'cover', width: 60, height: 60, borderRadius: 100 }}

                    />
                    <Text style={{ paddingVertical: 5, fontWeight: 'bold  ' }}>
                        SABBIR HASAN
                    </Text>
                    <Text style={{ paddingVertical: 5, fontWeight: 'bold', opacity: 0.5, }}>
                        S_a_b_b_i_r_h_a_s_a_N
                    </Text>
                </View>
                <View style={{ marginRight: 14, alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, }}>12</Text>
                    <Text >Posts</Text>
                </View>
                <View style={{ marginRight: 14, alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, }}>120M</Text>
                    <Text >Followers</Text>
                </View>
                <View style={{ marginRight: 14, alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, }}>120K</Text>
                    <Text >Following</Text>
                </View>

            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',margin:14}}>
                <TouchableOpacity style={{width:"42%"}}>
                    <View
                    style={{width:'100%',height:35,borderRadius:5,backgroundColor:'#3493D9',justifyContent:'center',alignItems:'center'}}
                    >
                        <Text style={{color:'white'}}>Edit Profile</Text>
                    </View>
                </TouchableOpacity>
                <View style={{
                    width:'42%',
                    height:35,
                    borderWidth:1,
                 borderColor:"#DEDEDE",
                 justifyContent:'center',
                 alignItems:'center',
                 borderRadius:5
                }}>
                    <Text>Message</Text>
                </View>
                <View style={{width:'10%',
                    height:35,
                    borderWidth:1,
                 borderColor:"#DEDEDE",
                 justifyContent:'center',
                 alignItems:'center',
                 borderRadius:5}}>
                    <Ionic name='options-outline'/>

                </View>
            </View>
        </View>
    )
}
export default ProfileBody