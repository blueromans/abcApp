import React, {Component} from 'react';
import {Container, Content,Text} from 'native-base';


class AgendaPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <Container style={{
                backgroundColor: 'transparent',
            }}>
                <Content padder>
                    <Text>Agenda</Text>

                </Content>
            </Container>
        );
    }


}
export default AgendaPage;
