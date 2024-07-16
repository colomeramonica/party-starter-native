import ActionButton from "./ActionButton";
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default function CharacterCard() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image source={require('../assets/images/Jester.png')}
          style={styles.characterImage} />
      </View>
      <View style={styles.cardActions}>
        <ActionButton type="accept" />
        <ActionButton type="decline" />
      </View>
      <View style={styles.characterInfo}>
        <h2 style={styles.characterName}>Jester</h2>
        <p style={styles.characterDescription}>
          Jester Lavorre is a tiefling cleric of the Traveler and a member of the Mighty Nein.
          She is played by Laura Bailey.
        </p>
      </View>
      <View style={styles.characterAttributes}>
        <span style={styles.attributesItem}>Chaotic Neutral</span>
        <span style={styles.attributesItem}>Cleric</span>
        <span style={styles.attributesItem}>Tiefling</span>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  characterImage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    borderRadius: 5,
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: -30,
    left: -5,
  },
  characterInfo: {
    padding: 7,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterName: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: 3
  },
  characterDescription: {
    display: 'flex',
    justifyContent: 'center',
  },
  characterAttributes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  attributesItem: {
    padding: 5,
    marginRight: 5,
    backgroundColor: '#c6c6c6',
    borderRadius: 50,
    textAlign: 'center',
    color: '#116f5e',
    fontWeight: 'bold',
  }
});
