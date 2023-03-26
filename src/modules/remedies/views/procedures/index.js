import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from '../../css/procedures'

const setaEsquerda = require('../../img/chevron-left.png')
const setaDireita = require('../../img/chevron-right.png')
const setaInfo = require('../../img/arrow-info.png')

export default function Procedures() {
  return (
    <View style={styles.proceduresContainer}>
      {/* Tab Navigation */}
      <View style={styles.navigationProceduresContainer}>
        {/* @todo fazer botao */}
        <Image source={setaEsquerda} style={styles.iconNavigationLeft}></Image>
        <Image source={setaDireita} style={styles.iconNavigationRight}></Image>
      </View>

      {/* Tab Title */}
      <View style={styles.titleProceduresContainer}>
        <Text style={styles.helloProceduresText}>Procedimentos</Text>
      </View>

      {/* Tab Content */}
      <View>
        <View style={styles.containerProceduresContent}>
          <Text style={styles.infoProceduresText}>Fisioterapia Ortopédica</Text>
          <TouchableOpacity style={styles.viewProceduresButton}>
            <Image
              source={setaInfo}
              style={styles.viewProceduresButtonText}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.containerProceduresContent}>
          <Text style={styles.infoProceduresText}>Exame de Rotina</Text>
          <TouchableOpacity style={styles.viewProceduresButton}>
            <Image
              source={setaInfo}
              style={styles.viewProceduresButtonText}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.containerProceduresContent}>
          <Text style={styles.infoProceduresText}>Proc3</Text>
          <TouchableOpacity style={styles.viewProceduresButton}>
            <Image
              source={setaInfo}
              style={styles.viewProceduresButtonText}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.containerProceduresContent}>
          <Text style={styles.infoProceduresText}>Proc4</Text>
          <TouchableOpacity style={styles.viewProceduresButton}>
            <Image
              source={setaInfo}
              style={styles.viewProceduresButtonText}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tab Actions Buttons */}

      <View style={styles.containerProcedureButton}>
        <TouchableOpacity style={styles.procedureButton}>
          <Text style={styles.procedureButtonText}>Novo Procedimento</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
