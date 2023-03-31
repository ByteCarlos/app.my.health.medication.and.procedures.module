import React, { useState } from 'react'
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native'

const SchedulingModal = ({ visible, onClose }) => {
  const handleSubmit = () => {
    // Lógica para agendar o evento aqui
    onClose()
  }

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Novo Agendamento</Text>
          <TextInput style={styles.input} placeholder="Data de início" />
          <TextInput style={styles.input} placeholder="Data de fim" />
          <TextInput style={styles.input} placeholder="Horário" />
          <TextInput style={styles.input} placeholder="Período" />
          <Button title="Agendar" onPress={handleSubmit} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '70%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
})

export default SchedulingModal
