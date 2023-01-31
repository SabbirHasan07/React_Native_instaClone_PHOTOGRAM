import { Image, Text, TouchableOpacity, View } from "react-native"

const SearchContent =(props)=>{
    const searchData=[
        {
            id:1,
            images:[
                require('../../../images/profile/1.jpg'),
                require('../../../images/profile/2.jpg'),
                require('../../../images/profile/7.jpg'),
                require('../../../images/profile/3.jpg'),
                require('../../../images/profile/5.jpg'),
                require('../../../images/profile/4.jpg'),
                require('../../../images/profile/6.jpg'),
                require('../../../images/profile/8.jpg'),
                require('../../../images/profile/9.jpg'),
                require('../../../images/profile/10.jpg'),
                
                

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
                                                    style={{width:116,height:150,borderRadius:6,margin:2}}
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
export default SearchContent