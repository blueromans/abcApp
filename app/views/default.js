import React, {Component} from 'react';
import {Container, Header, Left, Body, Right, Button, Icon, Title, Content} from 'native-base';

class DefaultPage extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (

            <Container>
                <Header noShadow>
                    <Left>
                        <Button transparent>
                            <Icon name='ios-arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='search' />
                        </Button>
                        <Button transparent>
                            <Icon name='heart' />
                        </Button>
                        <Button transparent>
                            <Icon name='more' />
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                </Content>
            </Container>
        );
    }



}

export default DefaultPage;
