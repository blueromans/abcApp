import React, {Component} from 'react';
import {Container, Content,Text} from 'native-base';


class FilesPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <Container style={{
                backgroundColor: 'transparent',
            }}>
                <Content padder>
                    <Text>Files</Text>

                </Content>
            </Container>
        );
    }


}
export default FilesPage;
