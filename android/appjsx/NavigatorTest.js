/**
 * Created by Administrator on 2016/3/25.
 */
/*
 Navigator就是控制页面跳转的，像一个路由的似的，可以控制页面的流转
initialRouter: 路由初始化配置信息，就是说页面加载时，第一次需要展现什么内容

configureScene: 场景转换动画配置。在RN看来，从一个页面切换到另外一个页面，就是从一个场景切换到另外一个场景，这里配置的是场景动画信息，比如Navigator.SceneConfigs.FadeAndroid 就是淡入淡出

renderScene: 渲染场景，读取initialRouter传来的数据，确定显示那些内容。


ex.
 <Navigator
 style={styles.container}
 initialRoute={initialRoute} //欢迎界面
 configureScene={() => Navigator.SceneConfigs.FadeAndroid} //淡入淡出效果
 renderScene={RouteMapper} //View对象，用作显示
 />
*/

"use strict"
import React,{
    View,
    Navigator,
    Text,
    BackAndroid,//回退按钮的功能
    StyleSheet,
    Component
} from "react-native"
var _navigator;
class WelcomeView extends Component{

    onPressFeed() {
        _navigator.push({name: 'feed'});
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.onPressFeed} >
                    This is welcome view.Tap to go to feed view.
                </Text>
            </View>
        );
    }
}
class FeedView extends Component{
    goBack(){
        _navigator.push({name:"default"});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.goBack} >
                    I am Feed View! Tab to default view!
                </Text>
            </View>
        )
    }
}
class DefaultView extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Default view</Text>
            </View>
        )
    }
}
export class NavigatorTest extends Component{

    configureScene(){
        return Navigator.SceneConfigs.FadeAndroid;
    }
    renderScene(router,navigator){
        _navigator = navigator;
        switch(router.name){
            case "welcome":
                return <WelcomeView />
            case "feed":
                return <FeedView />
            default: //default view
                return <DefaultView />
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
                initialRoute={{name: 'welcome'}}
                configureScene={this.configureScene}
                renderScene={this.renderScene} />
        );
    }
}
const  styles = StyleSheet.create({
    container:{
        flex:1,
        borderWidth:1,
        borderColor:"red",
        justifyContent:"center",
        alignItems:"center"
    },
    welcome:{
        marginTop:40,
        borderColor:"blue",
        borderWidth:5,
        height:100
    }
})
