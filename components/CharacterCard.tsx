import { Badge, BadgeIcon, BadgeText, Box, Card, GlobeIcon, Heading, HStack, Image, MoonIcon, Text, View } from "@gluestack-ui/themed";
import ActionButton from "./ActionButton";
import { StyleSheet } from "react-native";
import React from "react";

export default function CharacterCard() {
  return (
    <Card p="$4" m="$4" rounded="$md" bg="$bgDark800" flexDirection="column" alignItems="center">
      <Image mb="$6" h={240} width={240} borderRadius={5} source={require('../assets/characters/Jester.png')} />
      <View style={styles.cardActions}>
        <ActionButton type="accept" />
        <ActionButton type="decline" />
      </View>
      <Heading fontSize={24} color="$textDark800" fontWeight="500">
        Jester
      </Heading>
      <Text color="$textDark600" mt="$2">
        Jester Lavorre is a tiefling cleric of the Traveler and a member of the Mighty Nein. She is played by Laura Bailey.
      </Text>
      <HStack flexDirection="row" mt="$4" gap="$2" flexWrap="wrap" justifyContent="center">
        <Badge size="md" variant="outline" borderRadius="$full" action="info">
          <BadgeText>Tiefling</BadgeText>
        </Badge>
        <Badge size="md" variant="outline" borderRadius="$full" action="info">
          <BadgeText>Cleric</BadgeText>
        </Badge>
        <Badge size="md" variant="outline" borderRadius="$full" action="info">
          <BadgeText>Chaotic Neutral</BadgeText>
        </Badge>
      </HStack>
    </Card>
  );
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