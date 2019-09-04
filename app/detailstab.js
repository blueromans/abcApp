import React from 'react';
import { View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {Button, Badge, Text} from 'native-base';
import AgendaPage from './views/agenda';
import ActivitiesPage from './views/activities';
import FilesPage from './views/files';
const style={
    selected:{
        borderBottomWidth: 2,
        borderBottomColor:'#000',
    }
}
const TabBar = (props) => {
    const { navigationState, navigation, position } = props;
    const {index} = navigation.state;
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: 'space-around',
            alignItems: 'center',
            borderBottomColor:'#d6d6d6',
            borderBottomWidth:.5,
        }}>
            <View style={[{justifyContent:'center',alignItems:'center',flex:2},index === 0 ? style.selected:null]}>
                <Button transparent badge onPress={() => navigation.navigate('Agenda')}>
                    <Text style={{color:'#4A4A4A'}}>Agenda</Text>
                    <Badge><Text style={{fontSize: 12}}>9</Text></Badge>
                </Button>
            </View>
            <View style={[{justifyContent:'center',alignItems:'center',flex:2},index === 1 ? style.selected:null]}>
                <Button transparent badge onPress={() => navigation.navigate('Activites')}>
                    <Text style={{color:'#4A4A4A'}}>Activities</Text>
                    <Badge><Text style={{fontSize: 12}}>2</Text></Badge>

                </Button>
            </View>
            <View style={[{justifyContent:'center',alignItems:'center',flex:2},index === 2 ? style.selected:null]}>
                <Button transparent badge onPress={() => navigation.navigate('Files')}>
                    <Text style={{color:'#4A4A4A'}}>Files</Text>
                </Button>
            </View>
        </View>
    )
}
const DetailTabs = createMaterialTopTabNavigator({
    Agenda: AgendaPage,
    Activites: ActivitiesPage,
    Files: FilesPage,
},{
    tabBarComponent: TabBar,

});
export default createAppContainer(DetailTabs);
