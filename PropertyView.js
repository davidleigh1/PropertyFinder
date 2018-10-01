'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Button,
  Text,
  Linking,
  Icon,
} from 'react-native';

// import Iframe from "react-iframe";

import { WebView } from 'react-native';


type Props = {};


// class embedGoogleMap extends Component {
//     render() { 

//         const map_url = 'https://maps.google.com/maps?q=51.52616%2C-0.097272&t=&z=17&ie=UTF8&iwloc=&output=embed'

        
//         {/* <View style={mapstyles.mapouter}>
//             <View style={mapstyles.canvas}>
//                 <iframe width="600" height="500" id="gmap_canvas" src="{map_url}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
//             </View>
//         </View> */} 
        
        
//         return (
//             <Iframe url="{map_url}"
//                 width="450px"
//                 height="450px"
//                 display="initial"
//                 position="relative"
//                 frameborder="0" 
//                 scrolling="no" 
//                 marginwidth="0" 
//                 marginheight="0"
//                 allowFullScreen /> 
//         );
//     }
// }
 


export default class PropertyView extends Component<Props> {
    static navigationOptions = {
        title: 'Property View',
    };

    constructor(props) {
        super(props);
        this.state = {
            searchString: '???',
            isLoading: false,
            message: '',
            incomingParams: this.props,
        };
    }

    render() { 
        console.log("Prop:", this.state.incomingParams.navigation.state.params.selectedProperty);

        const thisProperty = this.state.incomingParams.navigation.state.params.selectedProperty;

        // const map_url = "https://maps.google.com/maps?q=51.52616%2C-0.097272&t=&z=17&ie=UTF8&iwloc=&output=embed";
        const map_url = "https://maps.google.com/maps?z=19&t=m&q=loc:" + thisProperty.latitude + "+" + thisProperty.longitude;

        return ( <View>
            {/* <WebView source={{ uri: "https://www.w3schools.com" }} style={{ height: 300, marginTop: 20 }} /> */}

            <Text style={styles.description}>
              {thisProperty.bedroom_number}
              -bedroom {thisProperty.property_type} to {thisProperty.listing_type}
            </Text>
            <Image style={{ width: null, height: thisProperty.img_height }} source={{ uri: thisProperty.img_url }} />
            <View style={styles.rowContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {thisProperty.title}
                </Text>
                <Text style={styles.price}>
                  {thisProperty.price_formatted}
                </Text>
                <Text style={styles.summary}>
                  {thisProperty.summary}
                </Text>
                <Text style={styles.summary}>
                  {thisProperty.keywords}
                </Text>
            <Button
                icon={{
                    name: 'map',
                    size: 15,
                    color: 'white'
                }}
                style={styles.mapbutton}
                title="View Map"
                onPress={() => { Linking.openURL(map_url); }} 
            />
            </View>
        </View>

        <View style={styles.separator} />

            {/* <Iframe url="{map_url}"
                width="450px"
                height="450px"
                display="initial"
                position="relative"
                frameborder="0"
                scrolling="no"
                marginwidth="0"
                marginheight="0"
                allowFullScreen />  */}
        </View>);
    }
}

const styles = StyleSheet.create({
  price: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#48BBEC",
    textAlign: 'right'
  },
  title: {
    fontSize: 20,
    color: "#656565"
  },
  rowContainer: {
    flexDirection: "row",
    padding: 10
  },
  separator: {
    height: 1,
    backgroundColor: "#dddddd"
  },
  description: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    textAlign: "center",
    color: "#656565"
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: "center"
  },
  important: {
    fontWeight: "bold"
  },
  largepic: {
    marginTop: 100,
    height: 500,
    width: null
  },
  mapbutton: {
    margin: 20,
    padding: 20,
    fontSize: 5,
  }
});

// const mapstyles = StyleSheet.create({
//     mapouter: {
//         textAlign: 'right',
//         height: 500,
//         width: 600,
//     },
//     canvas: {
//         overflow: 'hidden',
//         background: 'none !important',
//         height: 500,
//         width: 600,
//     },
// });