import React, {Component} from 'react';
import {Body, Button, Header, Left, Right, Text} from 'native-base';
import {Image, View} from 'react-native';
import styles from '../styles/index.styles'
export class DetailsHeader extends Component {

    render() {

        return (
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
            </View>
        )
    }
}
