import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, Image } from 'react-native'
import React,{useState} from 'react'

const Lab3 = () => {
    const [inputValue,setInputValue]= useState('');
    const [inputValue2,setInputValue2]= useState('');
    const [isInputValid,setIsInputValid]=useState(true);
    const [isInputValid2,setIsInputValid2]=useState(true);
    const handleBlur=()=>{
        setIsInputValid(inputValue.trim() !=='');
    };
    const handleBlur2=()=>{
        setIsInputValid2(inputValue2.trim()!=='');
    }
    const handleSubmit=()=>{
        setIsInputValid(inputValue.trim() !=='');
        setIsInputValid2(inputValue2.trim()!== '');
    };
    return(
       <SafeAreaView style={{marginHorizontal: 20}}>
       <View style={{marginBottom: 20}}>
        <Text style={styles.txt}>Title1</Text>
       <TextInput
            style={styles.input}
                placeholder="moi nhap lieu"
                onChangeText={text=>{
                    setInputValue(text);
                    setIsInputValid(true);

                }}
                onBlur={handleBlur}
            />
       </View>
       
       <View style={{marginBottom: 20}}>
        <Text style={styles.txt}>Title2</Text>
       <TextInput
            style={styles.input}
                placeholder="moi nhap lieu"
                onChangeText={text=>{
                    setInputValue2(text);
                    setIsInputValid2(true);

                }}
                onBlur={handleBlur2}
            />
       </View>
       <Button title="Submit" onPress={handleSubmit}/>
       {!isInputValid && <View style={{marginBottom: 20}}>
        <Text style={styles.txt}>Title1</Text>
        <View style={styles.input2}>
                <Text>Place holder</Text>
                <Image source={require('../acces/img/error.png')} style={{width: 20, height:20}}/>
        </View>
       </View>}

       {!isInputValid2 && <View style={{marginBottom: 20}}>
        <Text style={styles.txt}>Title2</Text>
        <View style={styles.input2}>
                <Text>Place holder</Text>
                <Image source={require('../acces/img/error.png')} style={{width: 20, height:20}}/>
        </View>
       </View>}
           
           
       </SafeAreaView>
    );
}

export default Lab3

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        borderColor: 'black',
        padding: 10
    },
    txt:{
        fontSize: 25,
        marginBottom: 10
    },
    input2:{
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
})