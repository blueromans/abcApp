import React, {Component} from 'react';
import {Container, Content,Text} from 'native-base';


class ActivitiesPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <Container style={{
                backgroundColor: 'transparent',
            }}>
                <Content padder>
                    <Text>Activities</Text>

                </Content>
            </Container>
        );
    }


}
export default ActivitiesPage;
