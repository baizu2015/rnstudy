/**
 * Created by Administrator on 2016/3/28.
 */
import React,{
    StyleSheet,
    Text,
    View,
    Component
} from "react-native";
export class  SearchNav extends Component{
    render(){
        return (
            <View style={Navstyles.navContainer}>
                <View style={Navstyles.navView}>
                    <Text style={{textAlign:"center"}}>
                        Search for houses to buy!
                    </Text>
                </View>
                <View style={Navstyles.navView}>
                    <Text style={{textAlign:"center"}}>
                        Search by place-name, postcode or search near your location.
                    </Text>
                </View>
            </View>
        )
    }
}
const  Navstyles = StyleSheet.create({
    navContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:20,
        margin:30
    },
    navView:{
        justifyContent:"center",
        alignItems:"center",
        marginBottom:10
    }
})