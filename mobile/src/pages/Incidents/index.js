import React from 'react';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';

import styles from './style.js';

import logoImg from './../../assets/logo.png';

export default function Incidents() {
  const navigation = useNavigation();
  function navigateToDetail() {
    navigation.navigate('Detail');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de
          <Text style={styles.headerTextBold}>
            0 casos
          </Text>
          .
        </Text>
      </View>
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia de alguém.
      </Text>

      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        style={styles.incidentList}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>
              ONG:
          </Text>
            <Text style={styles.incidentValue}>
              APAE
          </Text>
            <Text style={styles.incidentProperty}>
              CASO:
          </Text>
            <Text style={styles.incidentValue}>
              Cachorra doida
          </Text>
            <Text style={styles.incidentProperty}>
              VALOR
          </Text>
            <Text style={styles.incidentValue}>
              250,00
          </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToDetail}
            >
              <Text style={styles.detailsButtonText}>
                Ver mais detalhes
            </Text>
              <Feather name="arrow-right" size={18} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
