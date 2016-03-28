/**
 * Created by Administrator on 2016/3/25.
 */
import React,{
    Component,
    View,
    Image,
    StyleSheet
} from "react-native"
var TEXT_URL = "http://192.168.0.127:3000";
var TEXT_DATA = "/images/carouselBox21.jpg";
export class NavSlider extends Component{
    render (){
        return (
            <View style={styles.views}>
                <Image style={styles.imageview} source={{uri:TEXT_URL+TEXT_DATA}}></Image>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    views:{
        flex:1,
    },
    imageview:{
        flex:1,
        height:200
    }
})