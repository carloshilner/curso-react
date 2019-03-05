import React from 'react'
import {View,Text} from 'react-native'
import Padrao from '../estilo/Padrao'

//export default function(props){
//    return <Text>{props.texto}</Text>
//}

//export default props => [
//<Text key={1}> {props.texto} </Text>,
//<Text key={2}> {props.texto} </Text>
//]

export default props => 
<Text style={[Padrao.ex]}> {props.texto} </Text>