import { Button, FlatList, Modal, StyleSheet, Text, TextInput, View } from 'react-native';

import ModalComponent from './components/Modal';
import React from 'react';
import { useState } from 'react';

export interface AppProps {
  id: string | number;
  item: string;
  name: string;
  placeholder: string;
  value: string
}
 
const App: React.FC<AppProps> = () => {
  const [textInput, setTextInput] = useState<string>('');
  const [itemList, setItemList] = useState<any[]>([]);

  const [itemSelected, setItemSelected] = useState<any>({});
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handlerConfirmDelete = () => {
    setItemList(itemList.filter(item => item.id !== itemSelected.id));
    setItemSelected({});
    setModalVisible(false);
  }

  const handlerModalOpen = (id: string) => {
    setItemSelected(itemList.find(item => item.id === id));
    setModalVisible(true);
  }

  const onHandlerChangeText = (textValue: string) => setTextInput(textValue);
  const handleAddPress = () => {
    setItemList([
      ...itemList,
      {
        id: Math.random().toString(),
        value: textInput,
      },
    ]);
  }
  return (
    <>
    <View style={styles.container}>
      <View style={styles.firstInputs}>        
        <TextInput placeholder='Item de Lista'
        onChangeText={onHandlerChangeText}
        value={textInput} />
        <Button title='Add' onPress={handleAddPress} />
      </View>
      <View>
        <FlatList
        data={itemList}
        keyExtractor={(item) => item.id}
        renderItem={(data) => (
          <View>          
            <Text>{data.item.value}</Text>  
            <Button title='X' onPress={() => handlerModalOpen(data.item.id)} />        
          </View>
        )}      
        />
      </View>   
    </View>
    <ModalComponent  modalVisible={modalVisible} itemSelected={itemSelected} handlerConfirmDelete={handlerConfirmDelete} />
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: 50,
    width: '80%',
  },
  firstInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginStart: 10,
  },
});