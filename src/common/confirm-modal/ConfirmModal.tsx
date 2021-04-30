import { Button, Card, Divider, Modal, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from 'react-native';
import { DEVICE_WIDTH } from "../dimensions/dimensions";
import { TextBoldHint } from "../text-bold-hint/TextBoldHint";

export function ConfirmModal({
    visible,
    setVisible,
    title,
    subtitle = '',
    confirmLabel = "Zatwierdź",
    cancelLabel = 'Anuluj',
    onConfirm,
    onCancel
}) {
    return (
        <Modal
            visible={visible}
            backdropStyle={styles.backdrop}
            onBackdropPress={() => setVisible(false)}>
            <Card
                disabled={true}
                style={{
                    width: DEVICE_WIDTH - 20
                }}
                header={() => <Text style={{
                    padding: 20
                }}
                >{title}</Text>}
            >
                <TextBoldHint>{subtitle}</TextBoldHint>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 20,
                }}>
                    <Button
                        status={'success'}
                        onPress={() => {
                            onConfirm();
                            setVisible(false)
                        }}
                    >
                        {confirmLabel}
                    </Button>

                    <Button
                        status={'danger'}
                        onPress={() => {
                            onCancel();
                            setVisible(false);
                        }}
                    >
                        {cancelLabel}
                    </Button>
                </View>
            </Card>
        </Modal >
    )
}
const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});