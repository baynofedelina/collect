import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Cart = () => {
  return (
    <View className="flex-1 bg-[#DBE2E9] items-center justify-start">
        <ScrollView className="flex-1">
        <View className="flex-col justify-between">

<Image source={require('../../assets/images/2.jpg')} className="m-2" style={{height:300,width:300,borderRadius:10}}/>

  <View className="flex-row">
      <Text className>Classroom of Elite</Text>
      <TouchableOpacity className="bg-[#8ee2fc] ml-5 rounded-full"><Text className="p-2">Add to Cart</Text></TouchableOpacity>
      
  </View>
  <View className="flex-col justify-between">
<Image source={require('../../assets/images/4.jpg')} className="m-2" style={{height:300,width:300,borderRadius:10}}/>

<View className="flex-row">
      <Text className>Horimiya</Text>
      <TouchableOpacity className="bg-[#8ee2fc] ml-5 rounded-full"><Text className="p-2">Add to Cart</Text></TouchableOpacity>
      </View>

</View>
</View>
  <View className="flex-col justify-between">
<Image source={require('../../assets/images/5.jpg')} className="m-2" style={{height:300,width:300,borderRadius:10}}/>

<View className="flex-row">
      <Text className>Wistoria: Wand and Sword</Text>
      <TouchableOpacity className="bg-[#8ee2fc] ml-5 rounded-full"><Text className="p-2">Add to Cart</Text></TouchableOpacity>
      </View>
</View>

<View className="flex-col justify-between">
<Image source={require('../../assets/images/6.jpg')} className="m-2" style={{height:300,width:300,borderRadius:10}}/>

<View className="flex-row">
      <Text className>The Apothecary Diaries</Text>
      <TouchableOpacity className="bg-[#8ee2fc] ml-5 rounded-full"><Text className="p-2">Add to Cart</Text></TouchableOpacity>
      </View>
</View>

<View className="flex-col justify-between">
<Image source={require('../../assets/images/7.jpg')} className="m-2" style={{height:300,width:300,borderRadius:10}}/>

<View className="flex-row">
      <Text className>Happy Merriage</Text>
      <TouchableOpacity className="bg-[#8ee2fc] ml-5 rounded-full"><Text className="p-2">Add to Cart </Text></TouchableOpacity>
      </View>
</View>

<View className="flex-col justify-between">
<Image source={require('../../assets/images/8.jpg')} className="m-2" style={{height:300,width:300,borderRadius:10}}/>

<View className="flex-row">
      <Text className>Your Name</Text>
      <TouchableOpacity className="bg-[#8ee2fc] ml-5 rounded-full"><Text className="p-2">Add to Cart</Text></TouchableOpacity>
      </View>
</View>





        </ScrollView>
    </View>
  )
}

export default Cart