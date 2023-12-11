import { View, Text, Button, Modal } from 'react-native'

export default function ModalView({
    styles,
    activeSelection,
    isModalVisible,
    onPress
}) {
    return (
        <Modal visible={isModalVisible}>
            <View style={styles}>
                <Text>{activeSelection.name}</Text>
                <Text>{activeSelection.description}</Text>
                <Button title="Close" color="blue" onPress={onPress} />
            </View>
        </Modal>
    )
}
