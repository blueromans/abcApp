import React, {Component} from 'react';
import {Body, Button, Left, ListItem, Right, Text, Thumbnail} from 'native-base';
import {FlatList, Image, View} from 'react-native';
const offline = require('../assets/icons/offline.png');
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
export class Past extends Component {
    render() {
        const {data} = this.props;
        return (
            <View style={{flex:2}}>
                <View style={{
                    borderBottomColor: '#D9D9D9',
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    borderBottomWidth: .5,
                }}>
                    <Text style={{fontSize: 14}}>Past <Text
                        style={{color: '#9B9B9B', fontSize: 14}}>({data.length.toString()})</Text></Text>
                </View>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={data}
                    ListEmptyComponent={
                        <EmptyComponent title="Nothing here, come back later.." />
                    }
                    renderItem={({ item }) => (
                        <ListItem avatar noBorder>
                            <Left style={{flex:.8}}>
                                <Thumbnail style={{width:40,height:40,resizeMode:'contain'}} source={item.avatar} />
                            </Left>
                            <Body style={{flex:5.2}}>
                                <View style={{marginBottom:10}}>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{fontWeight: 'bold',flex:2.5}}>{item.user}</Text>
                                    </View>
                                    <Text style={{paddingVertical:10}} note>{item.title}</Text>
                                </View>
                                {item.senders.map((sender, index) => {
                                    return (
                                        <View key={index} style={{marginBottom:10}}>
                                            {sender.avatar && <Image style={{width:40,height:40,resizeMode:'contain'}} source={sender.avatar} />}
                                            <Text>{sender.user}</Text>
                                            <Text style={{color:'#9B9B9B',fontSize:11}}>{sender.description}</Text>
                                        </View>
                                    );
                                })}
                                <View style={{
                                    flexDirection: 'row',
                                    flex: 1,
                                    marginVertical: 5,
                                }}>
                                    <Button block disabled style={{height: 27, flex: .9, marginRight: 5}}>
                                        <Text style={{fontSize: 12}}>Take Action</Text>
                                    </Button>
                                    <Button disabled block style={{height: 27, flex: .9, marginLeft: 5}} bordered>
                                        <Text style={{fontSize: 12}}>Dismiss</Text>
                                    </Button>
                                    <Text style={{color:'#9B9B9B',fontSize:11,marginLeft:5,marginTop:5}}>{item.date}</Text>
                                </View>
                            </Body>
                            <Right style={{flex:0}}/>
                        </ListItem>
                    )}
                />
            </View>
        )
    }
}
