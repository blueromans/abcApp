import React, {Component} from 'react';
import {Body, Button, Container, Content, Header, Left, Right, Text, Title} from 'native-base';
import {Image, View} from 'react-native';


class ActivitiesPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container style={{
                backgroundColor: 'transparent',
            }}>
                <Content>
                    <View style={{marginVertical:30}}>
                        <View style={{flex: 3, paddingHorizontal: 30, justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={{resizeMode: 'cover'}} source={require('../assets/images/activities.png')}/>
                            <Text style={{fontSize: 20, marginVertical: 20}}>Add Activities</Text>
                            <Text style={{fontSize: 13, paddingHorizontal: 40, color: '#9B9B9B', textAlign: 'center'}}>Add your
                                clients activities here and Aidy will keep track of all. You will no longer miss a single client
                                task or forget an activity.</Text>
                        </View>
                        <View style={{flex:3,marginVertical:30}}>
                            <View style={{borderBottomColor:'#D9D9D9',borderBottomWidth:.5,borderTopWidth:.5,borderTopColor:'#D9D9D9'}}>
                                <Button transparent full>
                                    <Text>Add Task</Text>
                                </Button>
                            </View>
                            <View style={{borderBottomColor:'#D9D9D9',borderBottomWidth:.5}}>
                                <Button transparent full>
                                    <Text>Add Showing</Text>
                                </Button>
                            </View>
                            <View style={{borderBottomColor:'#D9D9D9',borderBottomWidth:.5}}>
                                <Button transparent full>
                                    <Text>Add Offer</Text>
                                </Button>
                            </View>
                        </View>

                    </View>

                </Content>
            </Container>


        );
    }


}

export default ActivitiesPage;
