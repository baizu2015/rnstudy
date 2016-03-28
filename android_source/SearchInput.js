/**
 * Created by Administrator on 2016/3/28.
 */
import React,{
    StyleSheet,
    Text,
    View,
    Component,
    TextInput,
    TouchableHighlight
} from "react-native";
export class SearchInput extends Component{
    constructor(props){
        super(props);
        this.state={
            searchInput:"london",
            isLoading:false,
            message:""
        }
    }
    onSearchTextChanged(evt){
        this.setState({
            searchInput:evt.nativeEvent.text
        })
    }
    onSearchPressed() {
        var query = urlForQueryAndPage('place_name', this.state.searchString, 1);
        this._executeQuery(query);
    }
    _executeQuery(query) {
        this.setState({ isLoading: true, message: '' });
        fetch(query)
            .then(response => response.json())
            .then((responseData) => this._handleResponse(responseData))
            .catch(error => {
                this.setState({
                    isLoading: false,
                    message: 'Something bad happened ' + error
                });
            });
    }
    _handleResponse(response) {
        this.setState({ isLoading: false });
        /*if (response.application_response_code.substr(0, 1) === '1') {
            this.props.navigator.push({
                title: 'Results',
                component: response,
                //passProps: {listings: response.listings}
            });
        } else {*/
            this.props.navigator.push({
                title: 'Results',
                component: response,
                //passProps: {listings: response.listings}
            });
            //this.setState({ message: 'Location not recognized please try again.'});
        //}
    }
    render(){
        return(
            <View style={InputStyles.inputContainer}>
                <View style={InputStyles.inputhead}>
                    <TextInput style={InputStyles.inputV}
                               placeholder='Search via name or postcode'
                               value={this.state.searchInput}
                               onChange={this.onSearchTextChanged.bind(this)}
                    />
                    <TouchableHighlight
                        underlayColor='#99d9f4'
                        style={InputStyles.button}
                        onPress={this.onSearchPressed.bind(this)}>
                        <Text style={InputStyles.buttonText}>Go</Text>
                    </TouchableHighlight>
                </View>
                <View style={InputStyles.inputhead}>
                    <TouchableHighlight style={InputStyles.button}>
                        <Text style={InputStyles.buttonText}>Location</Text>
                    </TouchableHighlight>
                </View>
                <View>
                    <Text style={{color:"red"}}>{this.state.message}</Text>
                </View>
            </View>
        )
    }
}
function urlForQueryAndPage(key, value, pageNumber) {
    var data = {
        country: 'uk',
        pretty: '1',
        encoding: 'json',
        listing_type: 'buy',
        action: 'search_listings',
        page: pageNumber
    };
    data[key] = value;

    var querystring = Object.keys(data)
        .map(key => key + '=' + encodeURIComponent(data[key]))
        .join('&');

    return "http://192.168.0.127:3000/user/";
}
const InputStyles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    },
    inputhead:{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginLeft:15,
        marginRight:15
    },
    inputV:{
        height: 36,
        padding: 4,
        marginRight: 5,
        flex: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC'
    },
    button:{
        height: 36,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    }
})

