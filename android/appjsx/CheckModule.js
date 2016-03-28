/**
 * Created by Administrator on 2016/3/25.
 */
var TEXT_URL = "http://192.168.0.127:3000/images/";
var TEXT_DATA = ["menu2Pic9.png","menu11Pic1.png","menu11Pic2.png",
    "menu11Pic3.png","menu12Pic2.png","menu13Pic1.png","menu13Pic3.png","menu14Pic1.png","menu14Pic2.png"];
import React,{
    Component,
    View,
    Image,
    StyleSheet
} from "react-native"
export class CheckModule extends Component{
    render(){
        return(
            <View style={styles.views}>
                <View style={styles.sImage}>
                    <View style={[styles.sImageS,{backgroundColor:"blue"}]}>
                        <Image style={styles.sImageSs} source={{uri:TEXT_URL+TEXT_DATA[0]}}></Image>
                    </View>
                    <View style={[styles.sImageS,{backgroundColor:"#FF8247"}]}>
                        <Image style={styles.sImageSs} source={{uri:TEXT_URL+TEXT_DATA[1]}}></Image>
                    </View>
                    <View style={[styles.sImageS,{backgroundColor:"#68228B"}]}>
                        <Image style={styles.sImageSs} source={{uri:TEXT_URL+TEXT_DATA[2]}}></Image>
                    </View>
                </View>
                <View style={styles.sImage}>
                    <View style={[styles.sImageS,{backgroundColor:"#ADD8E6"}]}>
                        <Image style={styles.sImageSs} source={{uri:TEXT_URL+TEXT_DATA[3]}}></Image>
                    </View>
                    <View style={[styles.sImageS,{backgroundColor:"#7CFC00"}]}>
                        <Image style={styles.sImageSs} source={{uri:TEXT_URL+TEXT_DATA[4]}}></Image>
                    </View>
                    <View style={[styles.sImageS,{backgroundColor:"#8B1C62"}]}>
                        <Image style={styles.sImageSs} source={{uri:TEXT_URL+TEXT_DATA[5]}}></Image>
                    </View>
                </View>
                <View style={styles.sImage}>
                    <View style={[styles.sImageS,{backgroundColor:"#7D26CD"}]}>
                        <Image style={styles.sImageSs} source={{uri:TEXT_URL+TEXT_DATA[6]}}></Image>
                    </View>
                    <View style={[styles.sImageS,{backgroundColor:"#4682B4"}]}>
                        <Image style={styles.sImageSs} source={{uri:TEXT_URL+TEXT_DATA[7]}}></Image>
                    </View>
                    <View  style={[styles.sImageS,{backgroundColor:"#00FF7F"}]}>
                        <Image style={styles.sImageSs} source={{uri:TEXT_URL+TEXT_DATA[8]}}></Image>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    views:{
        flex:12,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    },
    sImage:{
        flex:4,
        flexDirection:"row",
        marginTop:10
    },
    sImageS:{
        height:100,
        width:100,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:10
    },
    sImageSs:{
      height:40,
        width:40,
    }
})