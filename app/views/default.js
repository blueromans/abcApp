import React, {Component} from 'react';
import {Image, View} from 'react-native';

import {Badge, Button, Container, Content, Text} from 'native-base';
import {DetailsHeader, Tags,DetailSlider} from '../components';
import styles from '../styles/index.styles';
import DetailTabs from '../detailstab';

class DefaultPage extends Component {
    state = {
        showMore: false,
        tags: ['#sample tag 2', '#sample tag 3', '#oldhome'],
        slides: [
            {image: require('../assets/images/detail.png')},
            {image: require('../assets/images/detail.png')},
            {image: require('../assets/images/detail.png')},
            {image: require('../assets/images/detail.png')},
            {image: require('../assets/images/detail.png')},
        ]
    };

    constructor(props) {
        super(props);

    }
    changeLayout = () => {
        this.setState({ showMore: !this.state.showMore });
    }
    render() {
        const {tags,slides,showMore} = this.state;
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
                            <Image style={{width: 26, height: 26}} source={require('../assets/icons/call.png')}/>
                            <Text>Call</Text>
                        </Button>
                        <Button iconLeft primary transparent>
                            <Image style={{width: 26, height: 26}} source={require('../assets/icons/chat.png')}/>
                            <Text>Message</Text>
                        </Button>
                        <Button iconLeft primary transparent>
                            <Image style={{width: 26, height: 26}} source={require('../assets/icons/email.png')}/>
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
                                flex: 1,
                                flexDirection: 'row',
                                paddingLeft: 10,
                                marginVertical: 5,

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
                                paddingLeft: 10,
                                marginVertical: 5,
                                marginLeft: 10,
                            }}>
                                <Button block style={{height: 27, flex: .9, marginRight: 3}} bordered>
                                    <Text style={{fontSize: 12}}>Add Showing</Text>
                                </Button>

                                <Button block style={{height: 27, flex: .9, marginLeft: 3}} badge>
                                    <Badge style={{position: 'absolute', top: -5, right: -5}}><Text
                                        style={{fontSize: 12}}>9</Text></Badge>
                                    <Text style={{fontSize: 12}}>Show Matchings</Text>
                                </Button>
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
                    <View style={{ height: showMore ? null : 0, paddingHorizontal:20, overflow: 'hidden' }}>
                        <View style={{flex:1}}>
                            <Button transparent full>
                                <Text style={{fontSize:12}}>Edit Property Details</Text>
                            </Button>
                        </View>
                        <View style={{padding:20,flexDirection:'row',flex:1,borderBottomColor:'#d1d1d1',borderBottomWidth:.4}}>
                            <View style={{flex:3,marginVertical:10,paddingHorizontal:20}}>
                                <View style={{alignItems:'center'}}>
                                    <Text>3</Text>
                                    <Text style={{textAlign:'center'}}>Parking Lot</Text>
                                </View>
                            </View>
                            <View style={{flex:3,marginVertical:10,paddingHorizontal:20}}>
                                <View style={{alignItems:'center'}}>
                                    <Text>2</Text>
                                    <Text style={{textAlign:'center'}}>WC Number</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{padding:20,flexDirection:'row',flex:1,borderBottomColor:'#d1d1d1',borderBottomWidth:.4}}>
                            <View style={{flex:3,marginVertical:10,paddingHorizontal:20}}>
                                <View style={{alignItems:'center'}}>
                                    <Text>1</Text>
                                    <Text style={{textAlign:'center'}}>Property Floor</Text>
                                </View>
                            </View>
                            <View style={{flex:3,marginVertical:10,paddingHorizontal:20}}>
                                <View style={{alignItems:'center'}}>
                                    <Text>2</Text>
                                    <Text style={{textAlign:'center'}}>Total Building Floor</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{paddingVertical:10,flex:1,borderBottomColor:'#d1d1d1',borderBottomWidth:.4}}>
                            <Text style={{fontSize:14}}>Heating: Heating Option</Text>
                        </View>
                        <View style={{paddingVertical:10,flex:1,borderBottomColor:'#d1d1d1',borderBottomWidth:.4}}>
                            <Text style={{fontSize:14}}>In Sıte: Yes | No</Text>
                        </View>
                        <View style={{paddingVertical:10,flex:1,borderBottomColor:'#d1d1d1',borderBottomWidth:.4}}>
                            <Text style={{fontSize:14}}>Furnished: Yes | No</Text>
                        </View>
                        <View style={{paddingVertical:10,flex:1,borderBottomColor:'#d1d1d1',borderBottomWidth:.4}}>
                            <Text style={{fontSize:14}}>Loan Status: Yes | No</Text>
                        </View>
                        <View style={{paddingVertical:10,flex:1,borderBottomColor:'#d1d1d1',borderBottomWidth:.4}}>
                            <Text style={{fontSize:14}}>Min Carpet Area: MinCarpetArea</Text>
                        </View>
                        <View style={{paddingVertical:10,flex:1,borderBottomColor:'#d1d1d1',borderBottomWidth:.4}}>
                            <Text style={{fontSize:14}}>View Side: Selection1, Selection2...</Text>
                        </View>
                        <View style={{paddingVertical:10,flex:1,borderBottomColor:'#d1d1d1',borderBottomWidth:.4}}>
                            <Text style={{fontSize:14}}>Max Maintenance Fee: XYZ Currency</Text>
                        </View>
                        <View style={{paddingVertical:10,flex:1,borderBottomColor:'#d1d1d1',borderBottomWidth:.4}}>
                            <Text style={{fontSize:14}}>Swap Status: Yes | No</Text>
                        </View>
                        <View style={{paddingVertical:10,flex:1,borderBottomColor:'#d1d1d1',borderBottomWidth:.4}}>
                            <Text style={{fontSize:14}}>Using Status: Selection</Text>
                        </View>
                        <View style={{paddingVertical:10,flex:1,borderBottomColor:'#d1d1d1',borderBottomWidth:.4}}>
                            <Text style={{fontSize:14}}>Description</Text>
                            <View style={{height:100}}>

                            </View>
                        </View>
                        <View style={{paddingVertical:10,flex:1,borderBottomColor:'#d1d1d1',borderBottomWidth:.4}}>
                            <Text style={{fontSize:14}}>Indoor Features: [Selected Feature Name]</Text>
                        </View>
                        <View style={{paddingVertical:10,flex:1,borderBottomColor:'#d1d1d1',borderBottomWidth:.4}}>
                            <Text style={{fontSize:14}}>Outdoor Features: [Selected Feature Name]</Text>
                        </View>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: '#AFAFAF',
                    }}>
                        <Button primary transparent  onPress={()=>{this.changeLayout()}}>
                            <Text style={{fontSize: 12}}>{showMore ? 'Show Less Details':'Show More Details'}</Text>
                        </Button>
                    </View>

                    <View style={{padding: 10}}>
                        <Tags initialTags={tags}/>
                    </View>
                    <View>
                        <DetailSlider showPosition={true} badgeStyle={{backgroundColor:'#F5A623'}} badgeTitle='Fair Priced' slides={slides}/>
                    </View>
                    <View style={{flex:1}}>
                        <DetailTabs/>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default DefaultPage;
