import React, {Component} from 'react';
import {Image, View} from 'react-native';

import {Container, Header, Left, Body, Right, Button, Title, Content, Text,Badge} from 'native-base';

class DefaultPage extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Container>
                <View>
                    <Header noShadow style={{borderBottomWidth: .4}}>
                        <Left style={{flex:1}}>
                            <Button transparent>
                                <Image  style={styles.image} source={require('../assets/icons/back.png')}/>
                            </Button>
                        </Left>
                        <Body style={{flex:2}}>
                        </Body>
                        <Right style={{flex:3}}>
                            <Button transparent>
                                <Image style={styles.image} source={require('../assets/icons/share.png')}/>
                            </Button>
                            <Button transparent>
                                <Image style={styles.image} source={require('../assets/icons/add.png')}/>
                            </Button>
                            <Button transparent>
                                <Image style={styles.image} source={require('../assets/icons/more.png')}/>
                            </Button>
                        </Right>
                    </Header>
                    <Header noShadow style={{borderBottomWidth: .4, backgroundColor:'transparent'}}>
                        <Body style={{flexDirection:'row', flex:1, alignItems:'center',justifyContent:'space-around'}}>
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
                        </Body>
                    </Header>
                </View>
                <Content>
                    <View style={{justifyContent:'center',alignItems:'center', paddingVertical:10,borderBottomWidth:1, borderBottomColor:'#dadada'}}>
                        <Text style={{fontSize:12,color:'#9B9B9B'}}>2 months 7 days to end contract</Text>
                    </View>
                    <View style={styles.profileContainer}>
                        <Image source={require('../assets/images/avatar.png')}/>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <View style={{flexDirection:'row',paddingHorizontal:10,justifyContent:'center', alignItems:'center'}}>
                                <View style={{flex:2,justifyContent:'center', alignItems:'center'}}>
                                    <Text>25</Text>
                                    <Text style={{fontSize:12}} note>Sent</Text>
                                </View>
                                <View style={{flex:2,justifyContent:'center', alignItems:'center'}}>
                                    <Text>8</Text>
                                    <Text style={{fontSize:12}} note>Showing</Text>
                                </View>
                                <View style={{flex:2,justifyContent:'center', alignItems:'center'}}>
                                    <Text>3</Text>
                                    <Text style={{fontSize:12}} note>Offer</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:'row',flex:1,paddingHorizontal:10,marginTop:10,justifyContent:'center', alignItems:'center'}}>
                                <Button style={{height: 27,marginRight:5}} bordered>
                                    <Text style={{fontSize:12}}>Add Showing</Text>
                                </Button>
                                <Button style={{height: 27,marginLeft:5}} badge>
                                    <Badge style={{position:'absolute',top:-8,right:-8,width:22,height:22,alignItems:'flex-start',padding:0,justifyContent:'center',borderRadius:20}}><Text style={{fontSize:9}}>9</Text></Badge>
                                    <Text style={{fontSize:12}}>Show Matchings</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',paddingVertical:5,paddingHorizontal:10,borderBottomWidth:1, borderBottomColor:'#AFAFAF'}}>
                        <Image style={[styles.image,{marginRight:5}]} source={require('../assets/icons/home.png')}/>
                        <Text style={{flex:3,fontSize:14,lineHeight:22,color:'#262626',fontWeight: 'bold'}}>Property of Jeremy Walsh</Text>
                        <Text style={{flex:2,fontSize:14,lineHeight:22,color:'#262626',fontWeight: 'bold', textAlign:'right'}}>€165.000</Text>
                    </View>
                    <View style={{marginHorizontal:20,padding:10,borderBottomWidth:1,borderBottomColor:'#e7e7e7'}}>
                        <Text style={{fontSize:13,color:'#4A4A4A'}}>Status | For Selling Type | Property Type</Text>
                    </View>
                    <View style={{marginHorizontal:20,padding:10,borderBottomWidth:1,borderBottomColor:'#e7e7e7'}}>
                        <Text style={{fontSize:13,color:'#4A4A4A'}}>Room | SurfaceArea | Bahtroom | SelectedAnqituity  </Text>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#AFAFAF'}}>
                        <Button primary transparent>
                            <Text style={{fontSize:12}}>Show More Details</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }



}
const styles={
    image:{
        width:21,
        height:21
    },
    profileContainer:{
        flexDirection:'row',
        flex:1,
        padding:10,
    }
}

export default DefaultPage;
