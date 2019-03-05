import React from 'react'

export default props => {
    if(props.test){
        return props.children
    }else{
        return false
    }
}

// <If test={props.numero % 2 == 0}>
// <Text style={Padrao.ex}>Par</Text>
// </If>
// <If test={props.numero % 2 == 1}>
// <Text style={Padrao.ex}>Impar</Text>
// </If>