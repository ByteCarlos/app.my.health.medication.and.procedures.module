import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from '../../css/home'

// Set Username
const username = 'José'
const hello = 'Olá, ' + username + '!'

// Set Date
let dataAtual = new Date() // Cria um objeto Date com a data e hora atuais
let dia = dataAtual.getDate().toString().padStart(2, '0') // Obtém o dia do mês com zero à esquerda se necessário
let mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0') // Obtém o mês com zero à esquerda se necessário (vale lembrar que o mês começa do zero em JavaScript)
let ano = dataAtual.getFullYear() // Obtém o ano com quatro dígitos
let dataFormatada = `${dia}/${mes}/${ano}` // Concatena a data formatada com barras
const today = dataFormatada

const setaEsquerda = require('../../img/chevron-left.png')
const setaDireita = require('../../img/chevron-right.png')
const setaInfo = require('../../img/arrow-info.png')

export default function Home() {
  return (
    <View style={styles.containerRemedies}>
      {/* Tab Navigation */}
      <View style={styles.navigationRemediesContainer}>
        {/* @todo fazer botao */}
        <Image source={setaEsquerda} style={styles.iconNavigationLeft}></Image>
        <Image source={setaDireita} style={styles.iconNavigationRight}></Image>
      </View>

      {/* Tab Title */}
      <View style={styles.titleHomeContainer}>
        {/* substituir dps pelo username do user e date atual */}
        <Text style={styles.helloRemediesText}>{hello}</Text>
        <Text style={styles.helloRemediesDate}>{today}</Text>
      </View>

      {/* Tab Calendar */}
      <View style={styles.containerDay}>
        <Text style={[styles.tagDay, { opacity: 0.5 }]}>seg</Text>
        <Text style={[styles.tagDay, { opacity: 0.5 }]}>ter</Text>
        <Text style={[styles.tagDay, { opacity: 0.5 }]}>qua</Text>
        <Text style={[styles.tagDay, { opacity: 0.5 }]}>qui</Text>
        <Text style={[styles.tagDay, { opacity: 0.5 }]}>sex</Text>
        <Text style={[styles.tagDay, { opacity: 0.5 }]}>sáb</Text>
        <Text style={[styles.tagDay, { opacity: 0.5 }]}>dom</Text>
      </View>

      {/* Tab Calendar content @todo substituir com info do DB */}
      <View>
        <View style={styles.containerInfoDay}>
          <Text style={styles.infoDayHour}>8:00</Text>
          <Text style={styles.infoDayText}>Tomar insulina</Text>
          <TouchableOpacity style={styles.infoDayButton}>
            <Image source={setaInfo} style={styles.infoDayButtonText}></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.containerInfoDay}>
          <Text style={styles.infoDayHour}>15:00</Text>
          <Text style={styles.infoDayText}>Exame de Rotina</Text>
          <TouchableOpacity style={styles.infoDayButton}>
            <Image source={setaInfo} style={styles.infoDayButtonText}></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.containerInfoDay}>
          <Text style={styles.infoDayHour}>21:30</Text>
          <Text style={styles.infoDayText}>Exame Urinário</Text>
          <TouchableOpacity style={styles.infoDayButton}>
            <Image source={setaInfo} style={styles.infoDayButtonText}></Image>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tab Actions Buttons */}

      <View style={styles.containerSchedulingButton}>
        <TouchableOpacity style={styles.schedulingButton}>
          <Text style={styles.schedulingButtonText}>Novo Agendamento</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
