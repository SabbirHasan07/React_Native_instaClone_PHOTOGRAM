
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import Ionic from "react-native-vector-icons/Ionicons";

const Post = () => {
    const postInfo = [
        {
            postTitle: "S_a_b_b_i_r_h_a_s_a_N",
            profileImage:require('../../../images/sabbir_br.jpg'),
            postPersonImage: require('../../../images/sabbir_br.jpg'),
            postImage: require('../../../images/wallhaven-qzdqvr.jpg'),
            likes: '420',
            status:'Blue whales have a long body and generally slender shape. :-)',
            isliked: false
        },
        {
            postTitle: "Mirza_007",
            profileImage:require('../../../images/sabbir_br.jpg'),
            postPersonImage: require('../../../images/312406453_3271529223087563_263034925002703627_n.jpg'),
            postImage: require('../../../images/312406453_3271529223087563_263034925002703627_n.jpg'),
            likes: '420',
            status:'Noting to hide',
            isliked: false
        },
        {
            postTitle: "sohan_the_hero",
            profileImage:require('../../../images/sabbir_br.jpg'),
            postPersonImage: require('../../../images/sohan.jpg'),
            postImage: require('../../../images/shohan1.jpg'),
            likes: '420',
            status:'Family time',
            isliked: false
        },
        {
            postTitle: "n_i_c_o_l_a_s",
            profileImage:require('../../../images/sabbir_br.jpg'),
            postPersonImage: require('../../../images/mitul.jpg'),
            postImage: require('../../../images/mitul1.jpg'),
            likes: '420',
            status:'you are just a feelings now',
            isliked: false
        },
        {
            postTitle: "monir_lalon_1",
            profileImage:require('../../../images/sabbir_br.jpg'),
            postPersonImage: require('../../../images/monir.jpg'),
            postImage: require('../../../images/monir1.jpg'),
            likes: '420',
            status:'Be smart like me',
            isliked: false
        },
        {
            postTitle: "S_a_b_b_i_r_h_a_s_a_N",
            profileImage:require('../../../images/sabbir_br.jpg'),
            postPersonImage: require('../../../images/sabbir_br.jpg'),
            postImage: require('../../../images/wallhaven-l83o92.jpg'),
            status:'peace',
            likes: '420',
            isliked: false
        },
    ]
    return (
        <View>
            {postInfo.map((data, index) => {

                return (
                    <View
                        key={index}
                        style={{
                            paddingBottom: 10,
                            borderBottomColor: 'gray',
                            borderBottomWidth: 0.1
                        }}
                    >
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: 15,
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={data.postPersonImage}
                                    style={{ width: 40, height: 40, borderRadius: 100 ,marginRight:6}}
                                />
                                <View style={{ paddingLeft: 5 }}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                                        {data.postTitle}

                                    </Text>

                                </View>

                            </View>


                        </View>
                        <View style={{ position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={data.postImage}
                                style={{ width: '100%', height: 400 }}
                            />
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: 12,
                            paddingVertical: 15
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity>
                                    <Ionic name="heart-outline" style={{ fontSize: 24, marginRight: 6 }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionic name="chatbubble-outline" style={{ fontSize: 24, }} />
                                </TouchableOpacity>

                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity>
                                    <Ionic name="shuffle-outline" style={{ fontSize: 24, marginRight: 6 }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionic name="bookmark-outline" style={{ fontSize: 24 }} />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={{ marginLeft: 14 }}>
                            <Text>Liked by <Text style={{ fontSize: 14, fontWeight: '600' }}>1.5M</Text> others</Text>
                        </View>
                        <Text
                            style={{ fontWeight: '700', fontSize: 14, marginLeft: 14 }}
                        >{data.status}
                        </Text>
                        <Text
                            style={{ opacity: 0.4, fontSize: 14, marginLeft: 14 }}
                        >View all comments
                        </Text>
                        <View>
                            <View style={{flexDirection:'row',alignItems:'center', marginLeft:14}}>
                                <Image
                                source={data.profileImage}
                                style={{width:25 , height:25, borderRadius:100, backgroundColor:'orange',marginRight:10}}
                                />
                                <TextInput 
                                placeholder="Add a comment"
                                style={{opacity:0.5}}
                                />
                            </View>
                        </View>


                    </View>
                )
            })}
        </View>
    )
}
export default Post