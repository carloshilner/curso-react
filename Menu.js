import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import Inverter, { MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo from './componentes/ComunicacaoDireta'

export default createDrawerNavigator({
    Avo: {
        screen: () => <Avo nome='Joao' sobrenome='Silva' />
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={19} />
    },
    Plataformas: {
        screen: Plataformas
    },
    Contador: {
        screen: () => <Contador numeroInicial={17} />
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Megasena' }
    },
    Inverter: {
        screen: () => <Inverter texto='React nativo!' />
    },
    ParImpar: {
        screen: () => <ParImpar numero={33} />,
        navigationOptions: { title: 'Par e Impar' }
    },
    Simples: {
        screen: () =>
            <Simples texto='Flexible' />
    }
}, { drawerWidth: 300 })
