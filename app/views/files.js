import React, {Component} from 'react';
import {Body, Button, Container, Content, Left, ListItem, Right, Text} from 'native-base';
import {FlatList, Image, View} from 'react-native';

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
class FilesPage extends Component {
    state ={
        files: [
            {
                date: 'Dec. 31th - Friday',
                files:[
                    {
                        image: require('../assets/images/yer_gosterme.png'),
                        title: 'Yer gösterme belgesi - Ev id : 215'
                    }
                ]
            },
            {
                date: 'Dec. 28th - Wednesday',
                files:[
                    {
                        image: require('../assets/images/kimlik.png'),
                        title: 'Kimlik belgesi'
                    },
                    {
                        image: require('../assets/images/yer_gosterme.png'),
                        title: 'Yer gösterme belgesi - Ev id : 78'
                    }
                ]
            },
        ],
    }
    constructor(props) {
        super(props);
    }

    render() {
        const {files} = this.state;
        return (

            <Container style={{
                backgroundColor: 'transparent',
            }}>
                <Content>
                        <View style={{flex:1}}>
                            <View style={{flex:1,paddingHorizontal:20,alignItems: 'flex-end'}}>
                                <Button transparent>
                                    <Text>Add File</Text>
                                </Button>
                            </View>
                            <View style={{flex:1}}>
                                <FlatList
                                    keyExtractor={(item, index) => index.toString()}
                                    data={files}
                                    ListEmptyComponent={
                                        <EmptyComponent title="Nothing here, come back later.." />
                                    }
                                    renderItem={({ item }) => (
                                        <View style={{flex:1,borderBottomWidth:1,borderBottomColor:'#B2B2B2'}}>
                                            <Text style={{paddingHorizontal:20,paddingVertical:5}}>{item.date}</Text>
                                            {item.files.map((file, index) => {
                                                return (
                                                    <ListItem>
                                                        <Left style={{flex:1}}>
                                                            <Image style={{height:70,resizeMode:'contain'}} source={file.image} />
                                                        </Left>
                                                        <Body style={{flex:5}}>
                                                            <View style={{flex:1,marginBottom:10,justifyContent: 'flex-start'}}>
                                                                <Text>{file.title}</Text>
                                                            </View>
                                                            <View style={{flex:1,alignItems:'flex-end',marginTop:5}}>
                                                                <Button transparent>
                                                                    <Text>delete</Text>
                                                                </Button>
                                                            </View>
                                                        </Body>
                                                        <Right style={{flex:0}}/>
                                                    </ListItem>
                                                );
                                            })}
                                        </View>



                                    )}
                                />
                            </View>
                        </View>
                </Content>
            </Container>
        );
    }


}
export default FilesPage;
