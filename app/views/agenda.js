import React, {Component} from 'react';
import {Text, ListItem, Left, Thumbnail, Body, Right, Button} from 'native-base';
import {FlatList,View,Image} from 'react-native';
const offline = require('../assets/icons/offline.png');

class AgendaPage extends Component {

    state = {
        requests: [
            {
                user: 'Can Erenberk',
                status: 'offline',
                avatar:require('../assets/images/user_avatar.png'),
                title: 'Can requested a showing.',
                description:'Up to €250.000  |  Essex, Kesington or Oxfordshire',
                date: 'Yesterday 12:24 pm'
            },
        ],
        suggestions: [],
        snoozed: [],
        past: [],
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {requests,suggestions,snoozed,past} = this.state;
        return (
            <View style={{flex: 1}}>
                <View style={{flex:2}}>
                    <View style={{
                        borderBottomColor: '#D9D9D9',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        borderBottomWidth: .5,
                    }}>
                        <Text style={{fontSize: 14}}>Client Requests <Text
                            style={{color: '#9B9B9B', fontSize: 14}}>({requests.length.toString()})</Text></Text>
                    </View>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={requests}
                        ListEmptyComponent={
                            <EmptyComponent title="Nothing here, come back later.." />
                        }
                        renderItem={({ item }) => (
                            <ListItem avatar noBorder>
                                <Left style={{flex:1}}>
                                    <Thumbnail source={item.avatar} />
                                </Left>
                                <Body style={{flex:5}}>
                                    <View style={{marginBottom:10}}>
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={{fontWeight: 'bold',flex:2.5}}>{item.user}</Text>
                                            <Image style={{width:12,height:12,resizeMode: 'contain',marginTop:5}} source={eval(item.status)}/>
                                            <Text style={{color:'#9B9B9B',flex:3,textAlign:'right',fontSize:11,marginTop:5}}>{item.date}</Text>
                                        </View>
                                        <Text note>{item.title}</Text>
                                    </View>
                                    <View style={{marginBottom:10}}>
                                        <Text>{item.user}</Text>
                                        <Text style={{color:'#9B9B9B',fontSize:11}}>{item.description}</Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        flex: 1,
                                        marginVertical: 5,
                                    }}>
                                        <Button block style={{height: 27, flex: .9, marginRight: 3}}>
                                            <Text style={{fontSize: 12}}>Take Action</Text>
                                        </Button>
                                        <Button block style={{height: 27, flex: .9, marginLeft: 3}} bordered>
                                            <Text style={{fontSize: 12}}>Dismiss</Text>
                                        </Button>
                                    </View>
                                </Body>
                                <Right style={{flex:0}}/>
                            </ListItem>
                        )}
                    />
                </View>
                <View style={{flex:2}}>
                    <View style={{
                        borderBottomColor: '#D9D9D9',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        borderBottomWidth: .5,
                    }}>
                        <Text style={{fontSize: 14}}>Suggestions <Text
                            style={{color: '#9B9B9B', fontSize: 14}}>({suggestions.length.toString()})</Text></Text>
                    </View>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={suggestions}
                        ListEmptyComponent={
                            <EmptyComponent title="Nothing here, come back later.." />
                        }
                        renderItem={({ item }) => (
                            <ListItem avatar noBorder>
                                <Left style={{flex:1}}>
                                    <Thumbnail source={item.avatar} />
                                </Left>
                                <Body style={{flex:5}}>
                                    <View style={{marginBottom:10}}>
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={{fontWeight: 'bold',flex:2.5}}>{item.user}</Text>
                                            <Image style={{width:12,height:12,resizeMode: 'contain',marginTop:5}} source={eval(item.status)}/>
                                            <Text style={{color:'#9B9B9B',flex:3,textAlign:'right',fontSize:11,marginTop:5}}>{item.date}</Text>
                                        </View>
                                        <Text note>{item.title}</Text>
                                    </View>
                                    <View style={{marginBottom:10}}>
                                        <Text>{item.user}</Text>
                                        <Text style={{color:'#9B9B9B',fontSize:11}}>{item.description}</Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        flex: 1,
                                        marginVertical: 5,
                                    }}>
                                        <Button block style={{height: 27, flex: .9, marginRight: 3}}>
                                            <Text style={{fontSize: 12}}>Take Action</Text>
                                        </Button>
                                        <Button block style={{height: 27, flex: .9, marginLeft: 3}} bordered>
                                            <Text style={{fontSize: 12}}>Dismiss</Text>
                                        </Button>
                                    </View>
                                </Body>
                                <Right style={{flex:0}}/>
                            </ListItem>
                        )}
                    />
                </View>
                <View style={{flex:2}}>
                    <View style={{
                        borderBottomColor: '#D9D9D9',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        borderBottomWidth: .5,
                    }}>
                        <Text style={{fontSize: 14}}>Snoozed <Text
                            style={{color: '#9B9B9B', fontSize: 14}}>({snoozed.length.toString()})</Text></Text>
                    </View>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={snoozed}
                        ListEmptyComponent={
                            <EmptyComponent title="Nothing here, come back later.." />
                        }
                        renderItem={({ item }) => (
                            <ListItem avatar noBorder>
                                <Left style={{flex:1}}>
                                    <Thumbnail source={item.avatar} />
                                </Left>
                                <Body style={{flex:5}}>
                                    <View style={{marginBottom:10}}>
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={{fontWeight: 'bold',flex:2.5}}>{item.user}</Text>
                                            <Image style={{width:12,height:12,resizeMode: 'contain',marginTop:5}} source={eval(item.status)}/>
                                            <Text style={{color:'#9B9B9B',flex:3,textAlign:'right',fontSize:11,marginTop:5}}>{item.date}</Text>
                                        </View>
                                        <Text note>{item.title}</Text>
                                    </View>
                                    <View style={{marginBottom:10}}>
                                        <Text>{item.user}</Text>
                                        <Text style={{color:'#9B9B9B',fontSize:11}}>{item.description}</Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        flex: 1,
                                        marginVertical: 5,
                                    }}>
                                        <Button block style={{height: 27, flex: .9, marginRight: 3}}>
                                            <Text style={{fontSize: 12}}>Take Action</Text>
                                        </Button>
                                        <Button block style={{height: 27, flex: .9, marginLeft: 3}} bordered>
                                            <Text style={{fontSize: 12}}>Dismiss</Text>
                                        </Button>
                                    </View>
                                </Body>
                                <Right style={{flex:0}}/>
                            </ListItem>
                        )}
                    />
                </View>
                <View style={{flex:2}}>
                    <View style={{
                        borderBottomColor: '#D9D9D9',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        borderBottomWidth: .5,
                    }}>
                        <Text style={{fontSize: 14}}>Past <Text
                            style={{color: '#9B9B9B', fontSize: 14}}>({past.length.toString()})</Text></Text>
                    </View>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={past}
                        ListEmptyComponent={
                            <EmptyComponent title="Nothing here, come back later.." />
                        }
                        renderItem={({ item }) => (
                            <ListItem avatar noBorder>
                                <Left style={{flex:1}}>
                                    <Thumbnail source={item.avatar} />
                                </Left>
                                <Body style={{flex:5}}>
                                    <View style={{marginBottom:10}}>
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={{fontWeight: 'bold',flex:2.5}}>{item.user}</Text>
                                            <Image style={{width:12,height:12,resizeMode: 'contain',marginTop:5}} source={eval(item.status)}/>
                                            <Text style={{color:'#9B9B9B',flex:3,textAlign:'right',fontSize:11,marginTop:5}}>{item.date}</Text>
                                        </View>
                                        <Text note>{item.title}</Text>
                                    </View>
                                    <View style={{marginBottom:10}}>
                                        <Text>{item.user}</Text>
                                        <Text style={{color:'#9B9B9B',fontSize:11}}>{item.description}</Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        flex: 1,
                                        marginVertical: 5,
                                    }}>
                                        <Button block style={{height: 27, flex: .9, marginRight: 3}}>
                                            <Text style={{fontSize: 12}}>Take Action</Text>
                                        </Button>
                                        <Button block style={{height: 27, flex: .9, marginLeft: 3}} bordered>
                                            <Text style={{fontSize: 12}}>Dismiss</Text>
                                        </Button>
                                    </View>
                                </Body>
                                <Right style={{flex:0}}/>
                            </ListItem>
                        )}
                    />
                </View>

            </View>

        );
    }


}

const EmptyComponent = ({ title }) => (
    <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>{title}</Text>
    </View>
);
const styles={
    emptyContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyText: {
        color:'#9B9B9B',
        marginVertical:20,
        fontSize: 14,
    },
}
export default AgendaPage;
