/**
 * Created by Administrator on 2016/3/28.
 */
import React,{
    View,
    Text,
    StyleSheet,
    Image,
    ListView,
    Component
} from "react-native";
var TEXT_URL = "http://192.168.0.127:3000";
export class SearchResult extends Component{
    constructor(props){
        super(props);
        this.state={
            dataSource:new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }).cloneWithRows(this.props.datasource)
        }
    }
    render(){
        return (
            <ListView dataSource={this.state.dataSource}
                      renderRow={this.renderLoaded}
                      style={styles.person}
            />
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
const styles = StyleSheet.create({
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