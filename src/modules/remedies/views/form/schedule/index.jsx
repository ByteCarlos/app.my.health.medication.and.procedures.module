import React, { useState } from 'react'
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import DateInput from '../DateInput'
import TimeInput from '../TimeInput'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { styles } from '../../../css/form/schedule'

const SchedulingModal = ({ visible, onClose }) => {
  const handleSubmit = async () => {
    const data = {
      descricao,
      dtInicio,
      dtFinal,
      horario,
      periodo,
    }
    try {
      const jsonValue = JSON.stringify(data)
      await AsyncStorage.setItem('@meuapp_dados', jsonValue)
      console.log('Dados armazenados com sucesso!')
      onClose()
    } catch (e) {
      console.log('Erro ao armazenar os dados:', e)
    }
  }

  const [descricao, setDescricao] = useState('')
  const [dtInicio, setDtInicio] = useState('')
  const [dtFinal, setDtFinal] = useState('')
  const [horario, setHorario] = useState('')
  const [periodo, setPeriodo] = useState('')

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Novo Agendamento</Text>
          <TextInput
            style={styles.input}
            placeholder="Descrição"
            onChangeText={setDescricao}
          />
          <View style={styles.input}>
            <DateInput
              placeholder={'Data de início'}
              onChangeText={setDtInicio}
            />
          </View>
          <View style={styles.input}>
            <DateInput placeholder={'Data de fim'} onChangeText={setDtFinal} />
          </View>
          <View style={styles.input}>
            <TimeInput placeholder={'Horário'} onChangeText={setHorario} />
          </View>
          <View style={styles.input}>
            <Picker
              style={{ width: '100%' }}
              selectedValue={periodo}
              onValueChange={(item, indexItem) => {
                setPeriodo(item)
              }}
            >
              <Picker.Item key={0} value={''} label="Selecione o período" />
              <Picker.Item key={0} value="Manhã" label="Manhã" />
              <Picker.Item key={0} value="Tarde" label="Tarde" />
              <Picker.Item key={0} value="Noite" label="Noite" />
            </Picker>
          </View>
          <View style={styles.containerSchedulingButton}>
            <TouchableOpacity
              style={styles.schedulingButton}
              onPress={handleSubmit}
            >
              <Text style={styles.schedulingButtonText}>Agendar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.schedulingButton} onPress={onClose}>
              <Text style={styles.schedulingButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default SchedulingModal
