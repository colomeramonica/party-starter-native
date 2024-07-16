import { useEffect, useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ActionButton({ type }: { type: string }) {
  const [buttonIcon, setButtonIcon] = useState(<AntDesign name="check" size={20} color="white" />);
  const [colorPallete, setColorPallete] = useState<string[]>([]);

  useEffect(() => {
    setButtonStyle();
  });

  const setButtonStyle = () => {
    if (type === 'decline') {
      setColorPallete(['#9f4c4c', '#983b3b', '#6a1919']);
      return setButtonIcon(<AntDesign name="close" size={20} color="white" />)
    }

    setColorPallete(['#4c669f', '#3b5998', '#192f6a']);
    return setButtonIcon(<AntDesign name="check" size={20} color="white" />)
  }

  return (
    <TouchableOpacity>
      <LinearGradient
        colors={colorPallete}
        style={styles.actionButton}>
        {buttonIcon}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    width: 50,
    height: 50,
    borderRadius: 100,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
});