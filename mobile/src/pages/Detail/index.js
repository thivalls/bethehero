import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import logoImg from './../../assets/logo.png';

import styles from './style.js';

export default function Detail() {
  const navigation = useNavigation();

  function navigateToListBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity>
          <Feather
            name="arrow-left"
            size={28}
            color="#E02041"
            onPress={navigateToListBack}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <View style={styles.viewGroup}>
          <View style={styles.viewIntoGroup}>
            <Text style={[styles.incidentProperty, {marginTop: 0}]}>
              CASO:
            </Text>
            <Text style={styles.incidentValue}>
              Cachorra doida
            </Text>
          </View>
          <View style={styles.viewIntoGroup}>
            <Text style={[styles.incidentProperty, {marginTop: 0}]}>
              ONG:
            </Text>
            <Text style={styles.incidentValue}>
              APAE
            </Text>
          </View>
        </View>
        <Text style={styles.incidentProperty}>
          Descrição
        </Text>
        <Text style={styles.incidentValue}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab dolore deserunt earum dignissimos. Sint iste quam corporis dicta nesciunt? Nesciunt optio nobis est recusandae iste quae esse autem natus distinctio!
        </Text>
        <Text style={styles.incidentProperty}>
          VALOR
        </Text>
        <Text style={styles.incidentValue}>
          250,00
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói deste caso</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={() => { }}>
            <Text style={styles.actionText}>
              WhatsApp
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={() => { }}>
            <Text style={styles.actionText}>
              E-mail
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
