import { Image, Text, TouchableOpacity, View } from "react-native"

const ProfileContent =(props)=>{
    const searchData=[
        {
            id:1,
            images:[
                require('../../../images/sabbir_br.jpg'),
                require('../../../images/Tour/IMG_20230111_151830.jpg'),
                require('../../../images/Tour/IMG_20230111_172119.jpg'),
                require('../../../images/Tour/IMG_20230111_144655.jpg'),
                require('../../../images/Tour/IMG_20230111_151427.jpg'),
                
                require('../../../images/Tour/IMG_20230111_154014.jpg'),
               
                
                require('../../../images/Tour/IMG_20230114_170402_Bokeh.jpg'),
                require('../../../images/Tour/IMG_20230114_170433_Bokeh.jpg'),
                require('../../../images/Tour/2.jpg'),
                require('../../../images/Tour/3.jpg'),
                require('../../../images/Tour/4.jpg'),
                require('../../../images/Tour/5.jpg'),
                

            ]
        }
    ]
    return(
        <View>
            {
                searchData.map((data,index)=>{
                    return(
                        <>
                        {
                            data.id===1 ?
                        (
                                <View style={{
                                    flexDirection:'row',
                                    flexWrap:'wrap',
                                    justifyContent:'space-between'
                                }}>
                                    {
                                        data.images.map((imageData,imgIndex)=>{
                                            return(
                                                <TouchableOpacity
                                                onPressIn={()=>props.data(imageData)}
                                                onPressOut={()=>props.data(null)}
                                                style={{paddingBottom:2}}
                                                >
                                                    <Image
                                                    key={imgIndex}
                                                    source={imageData}
                                                    style={{width:116,height:150,margin:2}}
                                                    />
                                                </TouchableOpacity>
                                            )
                                        })
                                    }

                                </View>
                               
                        ):null
                        }
                        </>
                    )
                })
            }
        </View>
    )
}
export default ProfileContent