import React from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'

const bootstrapStyleSheet = new BootstrapStyleSheet()
const { s, c } = bootstrapStyleSheet

export default function Login() {

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View>
                <Text style={[s.textCenter, styles.login_title]}>
                    Login
                </Text>
            </View>

            <View style={styles.login_form}>
                <TextInput style={styles.login_input} placeholder='Usuário:' />
                <TextInput style={styles.login_input} placeholder='Senha:' secureTextEntry={true} />

                <TouchableOpacity style={styles.login_button}>
                    <Text style={styles.login_buttonText}>Entrar</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    )
}
