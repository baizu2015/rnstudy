/**
 * Created by Administrator on 2016/3/25.
 */
import {CheckModule} from "./CheckModule"
import {NavSlider} from "./NavSliderPicture"
import React,{
    Component,
    View,
    Image,
    StyleSheet
} from "react-native"
export class Index extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View  style={styles.nav}>
                    <NavSlider />
                </View>
                <View style={styles.checkmodule}>
                    <CheckModule />
                </View>
            </View>
        )
    }
}
const  styles = StyleSheet.create({
    container:{
        flex:1
    },
    nav:{
        flex:5
    },
    checkmodule:{
        flex:10
    }
})
