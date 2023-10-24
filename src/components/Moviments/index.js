import { useState } from 'react'
import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity   } from 'react-native'
const [showValue,setShowValue]= useState(false);

export default function Moviments({ data }) {
    return (
        <TouchableOpacity style={styles.container}>

            <Text style={styles.date} >{data.data}</Text>

            <View style={styles.content}>

                <Text style={styles.label}>{data.label}</Text>
       {showValue?(
                    <Text style={data.type ===1 ? styles.value:styles.espenses}>
                    {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}` }
                </Text>
       ):(

        <View style={styles.skeleton}>
        </View>
       )}

            </View>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomColor: '#DADADA'

    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,


    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    date: {
        color: '#DADADA',
        fontWeight: 'bold',
    },
    value: {
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold',
    },
    espenses: {
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold',
    },
    skeleton:{
        marginTop:6,
        width:80,
        height:10,
        backgroundColor:'#DADADA',
        borderRadius:8,
    }
})