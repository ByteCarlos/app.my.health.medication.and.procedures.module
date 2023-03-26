import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from '../../css/head'

const setaEsquerda = require('../../img/chevron-left.png')
const setaDireita = require('../../img/chevron-right.png')

export default function Head() {
  return (
    <View>
      {/* Tab Navigation */}
      <View style={styles.navigationRemediesContainer}>
        <TouchableOpacity>
          <Image
            source={setaEsquerda}
            style={styles.iconNavigationLeft}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={setaDireita}
            style={styles.iconNavigationRight}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  )
}
