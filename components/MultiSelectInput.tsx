import { ChevronDownIcon, Icon } from '@gluestack-ui/themed';
import { ChevronDown } from 'lucide-react-native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MultiSelectInput = ({ options }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptionsVisibility = () => {
    setShowOptions(!showOptions);
  };

  const toggleItem = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
      return setShowOptions(false);
    }

    setSelectedItems([...selectedItems, item]);
    return setShowOptions(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleOptionsVisibility} style={styles.toggleButton}>
        <Text style={styles.optionText}>
          {selectedItems.length ? selectedItems.join(', ') : 'Multiclasses are allowed!'}
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
                selectedItems.includes(option) && styles.selectedOption
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

export default MultiSelectInput;