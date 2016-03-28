/**
 * Created by Administrator on 2016/3/28.
 */
import  {SearchNav} from "./SearchNav";
import {SearchInput} from "./SearchInput";
import img1 from "./img/house.png";
import React,{
    StyleSheet,
    Text,
    View,
    Component,
    Image
} from "react-native"
export class SearchIndex extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={indexStyle.indexContainer}>
                <View style={indexStyle.indexSView}>
                    <SearchNav/>
                </View>
                <View style={indexStyle.indexSView2}>
                    <SearchInput navigator={this.props.navigator}/>
                </View>
                <View style={indexStyle.indexSView3}>
                    <Image source={img1}></Image>
                </View>
                <View style={indexStyle.indexSView4}>
                </View>
            </View>
        )
    }
}
const indexStyle = StyleSheet.create({
    indexContainer:{
        flex:1
    },
    indexSView:{
        flex:1
    },
    indexSView2:{
        flex:2
    },
    indexSView3:{
        flex:3,
        alignItems:"center",
        alignSelf:"stretch"
    },
    indexSView4:{
        flex:1,
    }
})