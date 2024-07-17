import { Button, ButtonGroup, ButtonText, Heading, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectInput, SelectItem, SelectPortal } from '@gluestack-ui/themed';
import { Image } from '@gluestack-ui/themed';
import { Box, Card, ChevronDownIcon, FormControl, FormControlLabel, FormControlLabelText, Icon, Input, InputField, Select, SelectIcon, SelectTrigger, Textarea, TextareaInput } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import classes from '../data/DnDClasses';
import races from '../data/DnDRaces';
import MultiSelectInput from '../components/MultiSelectInput';
import SingularSelectInput from '../components/SingularSelectInput';
import { useTranslation } from 'react-i18next';
import Avatar from '../components/Avatar';
import PhotoGallery from '../components/PhotoGallery';

export default function ProfileScreen() {
  const { t } = useTranslation();
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);

  const handleSelectItem = (className) => {
    if (selectedClasses.includes(className)) {
      setSelectedClasses(selectedClasses.filter(item => item !== className));
    } else {
      setSelectedClasses([...selectedClasses, className]);
    }
  };

  return (
    <>
      <Card p="$4" m="$4" rounded="$md" bg="$bgDark800" flexDirection="column" alignItems="center">
        <Box width="100%" alignItems='center' marginBottom="$2">
          <Avatar />
        </Box>
        <Box width="100%" marginBottom="$2">
          <Heading
            mb="$1"
            fontSize={20}
            color="$textDark800"
            fontWeight="500">
            {t('sections.sheet')}
          </Heading>
          <FormControl isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={false} >
            <FormControlLabel>
              <FormControlLabelText>{t('character.name')}</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                placeholder={t('character.name')}
              />
            </Input>
          </FormControl>
        </Box>
        <Box w="100%" mb="$2">
          <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={false} >
            <FormControlLabel>
              <FormControlLabelText>{t('character.summary')}</FormControlLabelText>
            </FormControlLabel>
            <Textarea>
              <TextareaInput
                placeholder={t('character.summary')}
              />
            </Textarea>
          </FormControl>
        </Box>
        <Box w="100%" mb="$2">
          <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={false} >
            <FormControlLabel>
              <FormControlLabelText>{t('character.class')}</FormControlLabelText>
            </FormControlLabel>
            <MultiSelectInput options={Object.entries(classes)} />
          </FormControl>
        </Box>
        <Box w="100%" mb="$2">
          <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={false} >
            <FormControlLabel>
              <FormControlLabelText>{t('character.race')}</FormControlLabelText>
            </FormControlLabel>
            <SingularSelectInput options={Object.entries(races)} />
          </FormControl>
        </Box>
        <Box w="100%" mb="$2">
          <Heading
            mb="$1"
            fontSize={20}
            color="$textDark800"
            fontWeight="500">
            {t('sections.photo_gallery')}
          </Heading>
          <PhotoGallery />
        </Box>
        <Box width="100%" mt="$2">
          <ButtonGroup alignContent="space-around" alignSelf="flex-end">
            <Button size="md"
              variant="outline"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}>
              <ButtonText>{t('actions.save')}</ButtonText>
              {/* <ButtonSpinner /> */}
            </Button>
            <Button size="md"
              variant="outline"
              action="negative"
              isDisabled={false}
              isFocusVisible={false}>
              <ButtonText>{t('actions.cancel')}</ButtonText>
              {/* <ButtonSpinner /> */}
            </Button>
          </ButtonGroup>
        </Box>
      </Card>
    </>
  );
}