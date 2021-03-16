import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from "expo-linear-gradient";

export default function RegisterButton() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <LinearGradient
                colors={[
                '#0094D4',
                '#00D4AA',
                ]}
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 1, y: 1 }}
                style={styles.header}
            />
            <View style={styles.container}>
              <StatusBar backgroundColor="#72D6DA" />

              <View style={styles.headerLogo}>
                <Image
                    style={styles.logo}
                    source={require('../../images/logo.png')}
                />
                <Text style={styles.title}>eVAC</Text>
              </View>
              
              <Text style={styles.title}>Formulário de Cadastro</Text>

              <View style={styles.centertView}>
                <Text style={styles.label}>Nome Completo</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setUserName}
                    value={userName}
                    placeholder="Informe o seu nome"
                    placeholderTextColor={"white"}
                />

                <Text style={styles.label}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Informe o seu email"
                    placeholderTextColor={"white"}
                />

                <RectButton style={styles.registerButton}>
                    <Text style={styles.buttonText}>Criar Minha Conta</Text>
                </RectButton>
              </View>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: "#304698",
        width: "100%",
        height: "100%",
    },
    headerLogo: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    container: {
        width: "100%",
        height: "100%",
        marginTop: 50,
        display: 'flex',
        alignItems: "center",
        position: "absolute",
    },
    centertView: {
        backgroundColor: "#005BAB33",
        width: "auto",
        height: "auto",
        padding: 20,
        borderRadius: 14,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
      width: 130,
      height: 130,
    },
    input: {
        width: 260,
        height: 43,
        margin: 12,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        paddingLeft: 10,
        color: "white",
        backgroundColor: "#ffffffaa"
    },
    registerButton: {
        width: 260,
        height: 50,
        borderRadius: 6,
        marginTop: 20,
        backgroundColor: '#1A54AE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: "white",
        fontWeight: 'bold'
    },
    label: {
        color: "white",
    },
    title: {
      color: "white",
      fontSize: 28,
      margin: 20
    }
});