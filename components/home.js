import React from 'react'
import {View, Text, ImageBackground, Button} from 'react-native'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'

const bootstrapStyleSheet = new BootstrapStyleSheet()
const { s, c } = bootstrapStyleSheet

export default function Home({ navigation }) {

    return (
        <View>
            <Text style={styles.title}>Seja Bem-vindo(a) à Delicious Cakes</Text>

            <View style={{flex: 1, alignItems: "center", justifyContent: "center", marginTop: 20}}>
                <ImageBackground source={require('./Bolocomcafé.png')} style={styles.img}>
                    <Text style={styles.text}>
                    O melhor acompanhamento de café do seu dia!!!
                    </Text>
                </ImageBackground>
            </View>

            <View style={{marginTop: 30}}>
                <Button
                    title="Confira nossos bolos"
                    onPress={() => navigation.navigate('productScreen')} />
            </View>
        </View>
    )
}