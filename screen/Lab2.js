import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const Item1=({address, time1, vehicle, time2, img})=>{
    return (
        <View style={styles.itemcontai}>
            <Text>Địa điểm</Text>
            <Text style={styles.text}>{address}</Text>
            <Text>Thời gian</Text>
            <Text style={styles.text}>{time1}</Text>
            <Text>Phương tiện di chuyển</Text>
            <Text style={styles.text}>{vehicle}</Text>
            <Text>Thời gian</Text>
            <Text style={styles.text}>{time2}</Text>
            <Text>Hình ảnh</Text>
            <Image source={img} style={{width: '100%', height: 200}}/>
        </View>
    )
}
const Item2=({hotel, time, address})=>{
    return (
        <View style={styles.itemcontai}>
            <Text>Tên khách sạn</Text>
            <Text style={styles.text}>{hotel}</Text>
            <Text>Giờ mở cửa</Text>
            <Text style={styles.text}>{time}</Text>
            <Text>Địa điểm</Text>
            <Text style={styles.text}>{address}</Text>
            <TouchableOpacity style={{width: '100%', height: 30, backgroundColor: 'blue', justifyContent: 'center', alignItems:'center'}}>
                <Text style={{color: 'white'}}>CHI TIẾT</Text>
            </TouchableOpacity>
            </View>
    )
}
const Lab2 = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f0'}}>
      <ScrollView style={{marginHorizontal: 20}}>
        <Text style={{fontSize:25, fontWeight:'500', marginVertical: 20}}>Lịch Trình</Text>
      <Item1 address='Hồ Tràm, Vũng Tàu' time1='09:00 AM - 12:00, 12/12/2024'
            vehicle='Xe bus' time2='21:00 - 22:00' img={{uri : 'https://hanoispiritofplace.com/wp-content/uploads/2018/03/hinh-anh-bien-dep-29.jpg'}}
        />
        <Text  style={{fontSize:25, fontWeight:'500', marginVertical: 20}}>Khách Sạn</Text>
        <Item2 hotel='Hồng Quỳnh' time='06:00 AM - 12:00 AM'
           address='234 Quang Trung, Hồ Chí Minh'
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Lab2

const styles = StyleSheet.create({
    itemcontai:{
        borderRadius: 15,
        padding: 20,
        backgroundColor: 'white',
        elevation: 5
    },
    text:{
        fontSize: 20,
        color: 'black',
        fontWeight: '700',
        marginBottom: 7
    }
})