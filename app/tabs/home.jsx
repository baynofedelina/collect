import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View className="flex-1 bg-[#DBE2E9] items-center justify-start">
    <ScrollView  className="flex-1">
    

    <View className="flex-row justify-between">

<View className="flex-col justify-center, items-center ">
<Image source={require('../../assets/images/1.jpg')} className="m-2" style={{height:150,width:150,borderRadius:10}}/>
<Text>Classroom of Elite</Text>
<Text>5$</Text>

</View>

<View className="flex-col justify-center, items-center ">

<Image source={require('../../assets/images/2.jpg')} className="m-2" style={{height:150,width:150,borderRadius:10}}/>
<Text>Blue Exorcist</Text>
<Text>4$</Text>
</View> 

 </View>

 <View className="flex-row justify-between">

<View className="flex-col justify-center, items-center ">
<Image source={require('../../assets/images/3.jpg')} className="m-2" style={{height:150,width:150,borderRadius:10}}/>
<Text>Kuroko Basket</Text>
<Text>6$</Text>
</View>

<View className="flex-col justify-center, items-center ">
<Image source={require('../../assets/images/4.jpg')} className="m-2" style={{height:150,width:150,borderRadius:10}}/>
<Text>Horimiya</Text>
<Text>6$</Text>
</View> 

</View>

<View className="flex-row justify-between">

<View className="flex-col justify-center, items-center">
<Image source={require('../../assets/images/5.jpg')} className="m-2" style={{height:150,width:150,borderRadius:10}}/>
<Text>Wistoria: Wand and Sword</Text>
<Text>7$</Text>
</View>

<View className="flex-col justify-center, items-center ">
<Image source={require('../../assets/images/6.jpg')} className="m-2" style={{height:150,width:150,borderRadius:10}}/>
<Text>The Apothecary Diaries</Text>
<Text>5$</Text>
</View> 
 </View>
 
 <View className="flex-row justify-between">

<View className="flex-col justify-center, items-center ">
<Image source={require('../../assets/images/7.jpg')} className="m-2" style={{height:150,width:150,borderRadius:10}}/>
<Text>Happy Merriage</Text>
<Text>5$</Text>
</View>
</View>

<View className="flex-row justify-between">

<View className="flex-col justify-center, items-center ">
<Image source={require('../../assets/images/8.jpg')} className="m-2" style={{height:150,width:150,borderRadius:10}}/>
<Text>Your Name</Text>
<Text>5$</Text>

</View>
 </View>
    </ScrollView>
    

    </View>
  )
}

export default Home