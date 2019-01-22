import React from 'react';
import {Header, Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux'
export default class ProfileScreen extends React.Component{

   


    render(){
        return(
            <Header
            leftComponent={
                <Icon name="home" size={30} color="white" onPress={()=>Actions.Home()}/>
            }
            centerComponent={{ text: 'Profile', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
        );
    }


}