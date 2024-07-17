import { ChevronDownIcon, Icon } from '@gluestack-ui/themed';
import { ChevronDown } from 'lucide-react-native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SingularSelectInput = ({ options }) => {
  const [selectedItem, setselectedItem] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptionsVisibility = () => {
    setShowOptions(!showOptions);
  };

  const toggleItem = (item: string) => {
    setselectedItem(item);
    return setShowOptions(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleOptionsVisibility} style={styles.toggleButton}>
        <Text style={styles.optionText}>
          {selectedItem.length ? selectedItem : 'Select an option'}
        </Text>
        <ChevronDown />
      </TouchableOpacity>
      {showOptions && (
        <View>
          {options.map(([option, index]) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.option,
                selectedItem ? styles.selectedOption : null
              ]}
              onPress={() => toggleItem(option)}
            >
              <Text>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  selectedOption: {
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 5,
    backgroundColor: '#ebebeb',
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 5,
  },
  optionText: {
    fontSize: 15,
    color: '#8c8c8c',
  }
});

export default SingularSelectInput;