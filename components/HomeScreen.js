import React from 'react';
import {Header, Icon} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';

export default class HomeScreen extends React.Component{

    render(){
        return(
            <Header
            //leftComponent={  }
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={<Icon name="person" color='#fff' 
            onPress={()=> Actions.Profile()}
            ></Icon>}
          />
        );
    }


}