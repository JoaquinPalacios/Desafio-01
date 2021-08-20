import { Button, Modal, StyleSheet, Text, View } from "react-native";

import React from 'react';

export interface ModalComponentProps {
    modalVisible: boolean
    itemSelected: any
    handlerConfirmDelete: () => void    
}
 
const ModalComponent: React.FC<ModalComponentProps> = (props) => {
    
    const {modalVisible, itemSelected, handlerConfirmDelete} = props;
    return (
        <>
            <Modal animationType='slide' visible={modalVisible}>
                <View style={styles.modalContainer}>           
                    <View style={[styles.modalContent, styles.shadow]}>
                        <Text style={styles.modalMessage}>Seguro deseas borrar?</Text>
                        <Text style={styles.modalTitle}>{itemSelected.value}</Text>                    
                        <View>
                            <Button onPress={handlerConfirmDelete} title='Confirmar' />
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContent: {
        padding: 30,
        backgroundColor: '#fff',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalMessage: {
        fontSize: 19,
    },
    modalTitle: {
        fontSize: 25,
        marginTop: 10,
        marginBottom: 20,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})
export default ModalComponent;