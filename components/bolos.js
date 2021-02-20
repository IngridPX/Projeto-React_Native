import React from 'react'
import { Button } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'

import bolos from '../database/Bolos'

export default props => {
   
    return (
        
        bolos.map(bolos =>
            <Card key={bolos.id} style={{width: "80%", marginTop: 10, marginBottom: 10}}>
                <Card.Content>
                    <Title>{bolos.descricao}</Title>
                    <Paragraph style={{color: "red", fontSize: 15}}>{bolos.preco}</Paragraph>
                </Card.Content>
                
                <Card.Cover source={require(`../Imagens/${bolos.nome_imagem}`)} />
  
                <Card.Actions>
                    <Button title="Comprar" color="#00e600" />
                </Card.Actions>
            </Card>
        )
    )   
}