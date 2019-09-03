import React, {Component} from 'react';
import {Image, View} from 'react-native';

import {Badge, Button, Container, Content, Text} from 'native-base';
import {DetailsHeader} from '../components';
import styles from '../styles/index.styles';

class DefaultPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <DetailsHeader/>
                <Content>
                    <View style={{
                        borderBottomWidth: .4,
                        borderBottomColor: '#d7d7d7',
                        flexDirection: 'row',
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                    }}>
                        <Button iconLeft primary transparent>
                            <Image style={styles.image} source={require('../assets/icons/call.png')}/>
                            <Text>Call</Text>
                        </Button>
                        <Button iconLeft primary transparent>
                            <Image style={styles.image} source={require('../assets/icons/chat.png')}/>
                            <Text>Message</Text>
                        </Button>
                        <Button iconLeft primary transparent>
                            <Image style={styles.image} source={require('../assets/icons/email.png')}/>
                            <Text>E-mail</Text>
                        </Button>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#dadada',
                    }}>
                        <Text style={{fontSize: 12, color: '#9B9B9B'}}>2 months 7 days to end contract</Text>
                    </View>
                    <View style={styles.profileContainer}>
                        <Image source={require('../assets/images/avatar.png')}/>
                        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                            <View style={{
                                flexDirection: 'row',
                                paddingHorizontal: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text>25</Text>
                                    <Text style={{fontSize: 12}} note>Sent</Text>
                                </View>
                                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text>8</Text>
                                    <Text style={{fontSize: 12}} note>Showing</Text>
                                </View>
                                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text>3</Text>
                                    <Text style={{fontSize: 12}} note>Offer</Text>
                                </View>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                flex: 1,
                                paddingHorizontal: 10,
                                marginTop: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                                    <Button style={{height: 27}} bordered>
                                        <Text style={{fontSize: 12}}>Add Showing</Text>
                                    </Button>
                                </View>
                                <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                                    <Button style={{height: 27, justifyContent: 'center', alignItems: 'center'}} badge>
                                        <Badge style={{position: 'absolute', top: -5, right: -5}}><Text
                                            style={{fontSize: 12}}>9</Text></Badge>
                                        <Text style={{fontSize: 12}}>Show Matchings</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#AFAFAF',
                    }}>
                        <Image style={[styles.image, {marginRight: 5}]} source={require('../assets/icons/home.png')}/>
                        <Text style={{flex: 3, fontSize: 14, lineHeight: 22, color: '#262626', fontWeight: 'bold'}}>Property
                            of Jeremy Walsh</Text>
                        <Text style={{
                            flex: 2,
                            fontSize: 14,
                            lineHeight: 22,
                            color: '#262626',
                            fontWeight: 'bold',
                            textAlign: 'right',
                        }}>€165.000</Text>
                    </View>
                    <View
                        style={{marginHorizontal: 20, padding: 10, borderBottomWidth: 1, borderBottomColor: '#e7e7e7'}}>
                        <Text style={{fontSize: 13, color: '#4A4A4A'}}>Status | For Selling Type | Property Type</Text>
                    </View>
                    <View
                        style={{marginHorizontal: 20, padding: 10, borderBottomWidth: 1, borderBottomColor: '#e7e7e7'}}>
                        <Text style={{fontSize: 13, color: '#4A4A4A'}}>Room | SurfaceArea | Bahtroom |
                            SelectedAnqituity </Text>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: '#AFAFAF',
                    }}>
                        <Button primary transparent>
                            <Text style={{fontSize: 12}}>Show More Details</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default DefaultPage;
