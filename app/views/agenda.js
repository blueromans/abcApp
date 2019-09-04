import React, {Component} from 'react';
import {Text} from 'native-base';
import {View} from 'react-native';


class AgendaPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

                <View style={{flex:1}}>
                    <View style={{borderBottomColor:'#D9D9D9', paddingHorizontal:20,paddingVertical:10,borderBottomWidth:.5}}>
                        <Text style={{fontSize:14}}>Client Requests <Text style={{color:'#9B9B9B',fontSize:14}}>(1)</Text></Text>
                    </View>
                    <View style={{borderBottomColor:'#D9D9D9', paddingHorizontal:20,paddingVertical:10,borderBottomWidth:.5}}>
                        <Text style={{fontSize:14}}>Suggestions <Text style={{color:'#9B9B9B',fontSize:14}}>(2)</Text></Text>
                    </View>
                    <View style={{borderBottomColor:'#D9D9D9', paddingHorizontal:20,paddingVertical:10,borderBottomWidth:.5}}>
                        <Text style={{fontSize:14}}>Snoozed <Text style={{color:'#9B9B9B',fontSize:14}}>(1)</Text></Text>
                    </View>
                    <View style={{borderBottomColor:'#D9D9D9', paddingHorizontal:20,paddingVertical:10,borderBottomWidth:.5}}>
                        <Text style={{fontSize:14}}>Past <Text style={{color:'#9B9B9B',fontSize:14}}>(2)</Text></Text>
                    </View>
                </View>

        );
    }


}
export default AgendaPage;
