export default function ModalView({styles, activeSelection, isModalVisible, onPress}) {
    return (
        <Modal visible={isModalVisible}>
                <View style={styles.container}>
                    <Text>{activeSelection.name}</Text>
                    <Text>{activeSelection.description}</Text>
                    <Button
                        title="Close"
                        color="blue"
                        onPress={() => setIsModalVisible(false)}
                    />
                </View>
            </Modal>
    )
}