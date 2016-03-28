/**
 * Created by Administrator on 2016/3/28.
 */
import React,{
    View,
    Navigator,
    Text,
    BackAndroid,//回退按钮的功能
    StyleSheet,
    Component
} from "react-native"
import {SearchIndex} from "./SearchIndex"
import {SearchResult} from "./SearchResult"
var _navigator;
export class SearchWelcome extends Component{
    configureScene(){
        return Navigator.SceneConfigs.FadeAndroid;
    }
    renderScene(router,navigator){
        _navigator = navigator;
        switch (router.title){
            case "welcome":
                return (<SearchIndex navigator={navigator}/>)
            default:
                return (<SearchResult datasource={router.component}/>)
        }
    }
    componentDidMount() {
        var navigator = _navigator;
        BackAndroid.addEventListener('hardwareBackPress', function() {
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                navigator.pop();
                return true;
            }
            return false;
        });
    }
    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress');
    }

    render() {
        return (
            <Navigator
                initialRoute={{title: 'welcome',component:[]}}
                configureScene={this.configureScene}
                renderScene={this.renderScene} />
        );
    }
}