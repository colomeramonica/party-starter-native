import { Button, ButtonGroup, ButtonIcon, ButtonSpinner, ButtonText, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectInput, SelectItem, SelectPortal } from '@gluestack-ui/themed';
import { Image } from '@gluestack-ui/themed';
import { AlertCircleIcon, Box, Card, ChevronDownIcon, FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText, Icon, Input, InputField, InputIcon, InputSlot, Select, SelectIcon, SelectTrigger, Textarea, TextareaInput } from '@gluestack-ui/themed';
import React from 'react';
import { View, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <>
      <Card p="$4" m="$4" rounded="$md" bg="$bgDark800" flexDirection="column" alignItems="center">
        <Box w="100%" alignItems='center' mb="$2">
          <Image
            size="md"
            borderRadius="$full"
            source={{
              uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            }}
          />
        </Box>
        <Box w="100%" mb="$2">
          <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={false} >
            <FormControlLabel>
              <FormControlLabelText>Name</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                placeholder="Character name"
              />
            </Input>
          </FormControl>
        </Box>
        <Box w="100%" mb="$2">
          <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={false} >
            <FormControlLabel>
              <FormControlLabelText>Summary</FormControlLabelText>
            </FormControlLabel>
            <Textarea>
              <TextareaInput
                placeholder="Character summary"
              />
            </Textarea>
          </FormControl>
        </Box>
        <Box w="100%" mb="$2">
          <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={false} >
            <FormControlLabel>
              <FormControlLabelText>Class</FormControlLabelText>
            </FormControlLabel>
            <Select>
              <SelectTrigger variant="outline" size="md">
                <SelectInput placeholder="Select option" />
                <SelectIcon mr="$3">
                  <Icon as={ChevronDownIcon} />
                </SelectIcon>
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="UX Research" value="ux" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </FormControl>
        </Box>
        <Box w="100%" mb="$2">
          <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={false} >
            <FormControlLabel>
              <FormControlLabelText>Race</FormControlLabelText>
            </FormControlLabel>
            <Select>
              <SelectTrigger variant="outline" size="md">
                <SelectInput placeholder="Select option" />
                <SelectIcon mr="$3">
                  <Icon as={ChevronDownIcon} />
                </SelectIcon>
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="UX Research" value="ux" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </FormControl>
        </Box>
      </Card >
      <Box w="100%" mb="$2">
        <ButtonGroup flexDirection="row" justifyContent="space-between" alignContent='flex-end'>
          <Button size="md"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}>
            <ButtonText>Salvar</ButtonText>
            {/* <ButtonSpinner /> */}
          </Button>
        </ButtonGroup>
      </Box>
    </>
  );
}