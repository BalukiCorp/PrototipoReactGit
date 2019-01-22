import React from 'react';
import {Header} from 'react-native-elements'


export default class ProfileScreen extends React.Component{

    render(){
        return(
            <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Profile', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
        );
    }


}