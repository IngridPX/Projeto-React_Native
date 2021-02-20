import React from 'react'
import Home from './Home'
import Home from '../components/home'
import Login from '../components/Login'
import Bolos from '../components/bolos'

export const profileScreen = ({navigation}) => 
    <Home navigation={navigation} name="Home">
       <Home navigation={navigation} />
    </Home>

export const loginScreen = ({navigation}) => 
    <Home navigation={navigation} name="Iniciar Sessão">
        <Login />
    </Home>

export const productScreen = ({navigation}) => 
    <Home navigation={navigation} name="Bolos">
        <Bolos />
    </Home>