import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const L11SectionView=({title,child ,img})=>{
    return(
        <View style={styles.container1}>
            <Image source={img} style={{width: 20, height: 20}}/>
            <Text style={styles.title}>{title}</Text>
            <Image source={child} style={{width: 20, height: 15}}/>
        </View>
    );
}
const Lab1 = () => {
  return (
   <SafeAreaView style={styles.container}>
            <L11SectionView title="Header" img={require('../acces/img/left-arrow.png')} child={require('../acces/img/left-arrow.png')}>
            </L11SectionView>
            <L11SectionView title="Content" img={require('../acces/img/left-arrow.png')}>
            </L11SectionView>
            <L11SectionView title="Footer" img={require('../acces/img/left-arrow.png')}>
            </L11SectionView>
</SafeAreaView>
  )
}

export default Lab1

const styles = StyleSheet.create({
    container1:{
        padding:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'black'
    },
    container:{
        padding:20,
    },
    title:{
        fontSize:20,
        fontWeight:'700'
    },
})