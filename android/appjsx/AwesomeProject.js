'use strict';
var MOCKED_MOVIES_DATA = [
    {title: 'Title111', year: '201511', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}}
]
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
import React,{
    View,
    Text,
    StyleSheet,
    Image,
    ListView,
    Component
} from "react-native";
export class  AwesomeProject extends Component{
    render(){
        var movie = MOCKED_MOVIES_DATA[0];
        return (
            <View style={styles.container}>
                <Image style={styles.thumbnail} source={{uri:movie.posters.thumbnail}}/>
                <View style={styles.container_right}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        )
    }
}
export class AwesomeProject_json extends  Component{
    constructor(props){
        super(props);
        this.state = {
            movies: null
        }
    }
    componentDidMount(){
        this.fetchData();
    }
    fetchData(){
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    movies: responseData.movies,
                });
            }).done()
    }
    render(){
        if(!this.state.movies){
            return this.renderLoadingView();
        }
        var movie = this.state.movies[0];
        return this.renderMovies(movie);
    }
    renderLoadingView(){
        return (
            <View style={styles.container}>
                <Text>
                    Loading movies ...
                </Text>
            </View>
        )
    }
    renderMovies(movie){
        return(
            <View style={styles.container}>
                <Image
                    source={{uri: movie.posters.thumbnail}}
                    style={styles.thumbnail}
                />
                <View style={styles.container_right}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        )
    }
}
export class AwesomeProject_json_listView extends Component{
    constructor(props){
        super(props)
        this.state = {
            dataSource:new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded:false
        }
    }
    render(){
        if(!this.state.loaded){
            return this.renderLoadingView();
        }
        return (
            <ListView dataSource={this.state.dataSource}
                      renderRow={this.renderMovies}
                      style={styles.listRow}
                />
        )
    }
    componentDidMount(){
        this.fetchData();
    }
    fetchData(){
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded:true
                });
            }).done()
    }
    renderLoadingView(){
        return (
            <View style={styles.container}>
                <Text>
                    Loading movies ...
                </Text>
            </View>
        )
    }
    renderMovies(movie){
        return(
            <View style={styles.container}>
                <Image
                    source={{uri: movie.posters.thumbnail}}
                    style={styles.thumbnail}
                />
                <View style={styles.container_right}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        )
    }
}
var TEXT_URL = "http://192.168.0.127:3000";
var TEXT_DATA = "/user";
export  class Person extends  Component{
    constructor(props){
        super(props);
        this.state={
            dataSource:new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded:false
        }
    }
    render(){
        if(!this.state.loaded){
            return this.renderLoadingView();
        }
        return (
            <ListView dataSource={this.state.dataSource}
                      renderRow={this.renderLoaded}
                      style={styles.person}
            />
        )
    }
    componentDidMount(){
        this.fetchData();
    }
    fetchData(){
        fetch(TEXT_URL+TEXT_DATA).then(
            (response)=>response.json().then((responseData)=>{
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(responseData),
                    loaded:true
                })
            })
        )
    }
    renderLoadingView(){
        return (
            <View style={styles.container}>
                <Text>
                    Loading Person ...
                </Text>
            </View>
        )
    }
    renderLoaded(person){
        return(
            <View style={ styles.person }>
                <Image style={ styles.personImage } source={ { uri: TEXT_URL+person.photo } } />
                <View style={ styles.personInfo }>
                    <Text style={ styles.personName }>
                        { person.name }
                    </Text>
                    <View style={ styles.personScore }>
                        <Text style={ styles.personScoreHeader }>
                            WON
                        </Text>
                        <Text style={ [styles.personScoreValue, styles.won] }>
                            { person.age }
                        </Text>
                    </View>
                    <View style={ styles.personScore }>
                        <Text style={ styles.personScoreHeader }>
                            LOST
                        </Text>
                        <Text style={ [styles.personScoreValue, styles.lost] }>
                            { person.age }
                        </Text>
                    </View>
                    <View style={ styles.personScore }>
                        <Text style={ styles.personScoreHeader }>
                            SCORE
                        </Text>
                        <Text style={ styles.personScoreValue }>
                            { person.age }
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}
//学习flexbox布局
export class FlexBoxStudy extends Component{
    render(){
        return(
            /*<View style={stylesss.style_0}>
                <View style={stylesss.style_1}>
                    <Text style={{marginTop:40,fontSize:25}}>1/4</Text>
                </View>
                <View style={[stylesss.style_1,{flexDirection:"row"}]}>
                    <Text style={{marginTop:40,fontSize:25}}>1/4</Text>
                    <Text style={{marginTop:40,fontSize:25,marginLeft:40}}>1/4</Text>
                </View>
                <View style={{flex:10,borderWidth:1,borderColor:"red"}}>
                    <Text style={{marginTop:40,fontSize:25}}>1/2</Text>
                </View>
            </View>*/
            <View style={stylesss.style_2}>
                <View style={stylesss.views}>
                    <Text>自由摆放</Text>
                </View>
                <View style={[stylesss.center,stylesss.views]}>
                    <Text>居中拜访</Text>
                </View>
                <View style={[stylesss.left,stylesss.views]}>
                    <Text>靠左摆放</Text>
                </View>
                <View style={[stylesss.right,stylesss.views]}>
                    <Text>靠右摆放</Text>
                </View>
            </View>
        )
    }
}
const  stylesss = StyleSheet.create({
    style_0:{
        flex:1
    },
    style_1:{
        flex:5,
        flexDirection:"column",//共有纵向与横向2种排版方式
        height:40,
        borderWidth:1,
        borderColor:"red"
    },
    style_2:{
        flex:1,
        borderColor:"red",
        borderWidth:1,
        justifyContent: 'center',//竖直居中
        alignItems: 'center'//水平居中
    },
    views:{
        borderWidth:5,
        borderColor:"blue",
        marginTop:40,
        width:100,
        height:40
    },
    center:{
        alignSelf:"center"
    },
    left:{
        alignSelf:"flex-start"
    },
    right:{
        alignSelf:"flex-end"
    }
})
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    container_right:{
        flex: 1
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    title:{
        fontSize:20,
        marginBottom:8,
        textAlign:"center"
    },
    year:{
        textAlign:"center"
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
    person: {
        flex: 1,
        margin: 10,
        borderRadius: 3,
        overflow: 'hidden'
    },
    personInfo: {
        borderLeftColor: 'rgba( 0, 0, 0, 0.1 )',
        borderLeftWidth: 1,
        borderRightColor: 'rgba( 0, 0, 0, 0.1 )',
        borderRightWidth: 1,
        borderBottomColor: 'rgba( 0, 0, 0, 0.1 )',
        borderBottomWidth: 1,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    personImage: {
        flex: 1,
        height: 200
    },
    personName: {
        fontSize: 18,
        flex: 1,
        paddingLeft: 5
    },
    personScore: {
        flex: 0.25,
        alignItems: 'center'
    },
    personScoreHeader: {
        color: 'rgba( 0, 0, 0, 0.3 )',
        fontSize: 10,
        fontWeight: 'bold'
    },
    personScoreValue: {
        color: 'rgba( 0, 0, 0, 0.6 )',
        fontSize: 16
    },
    won: {
        color: '#93C26D'
    },
    lost: {
        color: '#DD4B39'
    }
});