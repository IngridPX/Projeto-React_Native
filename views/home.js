import React from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

export default class Home extends React.Component {
    render() {
        return (
            <ScrollView style={{border: "1px solid blue", minHeight: "100%"}}>
                <View style={styles.container}>
                    <SafeAreaView style={{flex: 1}}>
                        <View style={{flex: 1, background: 'linear-gradient(rgb(173, 13, 173), rgb(39, 39, 187))'}}>
                            <TouchableOpacity style={{flexDirection: "row", justifyContent: "space-between", margin: 16}}
                            onPress={this.props.navigation.openDrawer}>
                                <Text style={styles.logo}>Delicious Cakes</Text>
                                <FontAwesome name="bars" size={24} color={161924} />
                            </TouchableOpacity>
                        </View>

                        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Text style={{fontSize: 18, fontWeight: "bold", textAlign: "center", marginTop: 20}}>
                                {this.props.name}
                            </Text>
                            
                            {this.props.children}
                            
                        </View>
                    </SafeAreaView>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.copyright}>
                        &copy; Delicious Cakes
                    </Text>
                </View>
            </ScrollView>
        )
    }
}