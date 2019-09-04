import React, {Component} from 'react';
import {View} from 'react-native';
import {Past, Requests, Snoozed, Suggestions} from '../components';

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
        suggestions: [
            {
                user: 'ABC',
                status: 'offline',
                avatar:require('../assets/images/abc_avatar.png'),
                senders:[],
                title: 'There are potential new matches for this property if missing information is complete. Wou ... show more',
                date: 'Yesterday 12:24 pm'
            },
            {
                user: 'ABC',
                status: 'offline',
                avatar:require('../assets/images/abc_avatar.png'),
                senders:[
                    {
                        user: 'Can Erenberk',
                        avatar:require('../assets/images/user_avatar.png'),
                        description:'Up to €250.000  |  Essex, Kesington or Oxfordshire',
                    },
                ],
                title: 'Can liked this property! Would you like to propose a showing?',
                date: 'Yesterday 12:24 pm'
            }
        ],
        snoozed: [
            {
                user: 'ABC',
                avatar:require('../assets/images/abc_avatar.png'),
                title: 'Jerremy Walsh ’s birthday is tomorrow.',
                date: 'Snoozed : 12/12/2019'
            },
        ],
        past: [
            {
                user: 'ABC',
                avatar:require('../assets/images/abc_avatar.png'),
                senders:[
                    {
                        user: 'Can Erenberk',
                        avatar:require('../assets/images/user_avatar.png'),
                        description:'Up to €250.000  |  Essex, Kesington or Oxfordshire',
                    },
                ],
                title: 'Can liked this property! Would you like to propose a showing?',
                date: '12/12/2019'
            },
            {
                user: 'Can Erenberk',
                avatar:require('../assets/images/user_avatar.png'),
                senders:[
                    {
                        user: 'Can Erenberk',
                        description:'Up to €250.000  |  Essex, Kesington or Oxfordshire',
                    },
                ],
                title: 'Can requested a showing.',
                date: '12/12/2019'
            }
        ],
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {requests,suggestions,snoozed,past} = this.state;
        return (
            <View style={{flex: 1}}>
                <Requests data={requests}/>
                <Suggestions data={suggestions}/>
                <Snoozed data={snoozed}/>
                <Past data={past}/>
            </View>

        );
    }


}
export default AgendaPage;
