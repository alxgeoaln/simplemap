import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

import MapView from 'react-native-maps';

import { Icon } from 'react-native-elements';

const {width, height} = Dimensions.get('window');
const pinImg = require('./image/pin.png');

class Map extends React.Component {


    constructor() {
        super()

        this.state = {
            region: {
                latitude: null,
                longitude: null,
                latitudeDelta: null,
                longitudeDelta: null
            }
        }
    }


    componentWillMount() {
        this.watchID = navigator.geolocation.watchPosition((position) => {
            this.setState({
                region: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }
            });
        });
    }


    marker() {
        return {
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleView}>
                    <Icon
                        raised
                        name='heartbeat'
                        type='font-awesome'
                        color='#f50'
                        onPress={() => console.log('hello')} />
                    <Text style={styles.titleText}>
                        Licenta
                    </Text>
                </View>
                {this.state.region.latitude ? <MapView
                    style={styles.map}
                    initialRegion={this.state.region}
                >
                    <MapView.Marker
                        coordinate={this.marker()}
                        image={pinImg}
                        title="I am here"
                    >
                    </MapView.Marker>
                </MapView> : null }
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    map: {
        flex: 1,
        width: width
    },
    titleView: {
        backgroundColor: '#3B3E4F',
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row'
    },
    titleText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 1,
        fontSize: 20,
    }
});
export default Map;
