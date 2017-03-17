/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { SideMenu, List, ListItem } from 'react-native-elements';


import Map from './Map';
//import Navigator from './Navigator'

const list = [
    {
        name: 'Georgian Alin Alexandru',
        avatar_url: require('./image/avatar.jpg'),
        subtitle: 'Programmer'
    },
    {
        name: 'menu item',
    }
];

//var styles = StyleSheet.create({
//
//});


class AwesomeProject extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.toggleSideMenu = this.toggleSideMenu.bind(this)
    }

    toggleSideMenu() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const MenuComponent = (
                <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
                    <List containerStyle={{marginBottom: 20}}>
                        {
                            list.map((l, i) => (
                                <ListItem
                                    roundAvatar
                                    onPress={() => console.log('Pressed')}
                                    avatar={l.avatar_url}
                                    key={i}
                                    title={l.name}
                                    subtitle={l.subtitle}
                                />
                            ))
                        }
                    </List>
                </View>
        );

        return (

            <SideMenu
                isOpen={this.state.isOpen}
                menu={MenuComponent}>
                <Map/>
            </SideMenu>


        )
    }


}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
