import { FlatList, View,StyleSheet,Text } from "react-native";
import Header from "../../Header";
import Balance from "../../Balance";
import Moviments from "../../Moviments";

const list = [
    {
    id:1,
    label:'Boleto',
    value:'429,89',
    date:'17/07/2023',
    type:0
}, 
    {
    id:2,
    label:'pix',
    value:'600,00',
    date:'17/07/2023',
    type:1
}, 
    {
    id:1,
    label:'Salário',
    value:'1500,00',
    date:'17/07/2023',
    type:1
}, 
]



export default function Home(){
    return(
        <View style={styles.container}>
            <Header name="Gabriela Souza"/>

            <Balance saldo="2.000.00" gastos="-900.00"/>

             <Text  style={styles.title}>Últimas movimentações</Text>

             <FlatList
              style={styles.list}
              data={list}
              keyExtractor={(item)=>String(item.id)}
              showsVerticalScrollIndicator={false}
              renderItem={({item})=><Moviments data={item}/>}/>
        </View>
    );

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fafafa'
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:14,
        marginRight:14,
        marginTop:14
    },
    list:{
        marginLeft:14,
        marginEnd:14
    }
})