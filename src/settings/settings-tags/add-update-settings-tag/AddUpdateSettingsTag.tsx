import React, { useEffect, useState } from "react";
import { Button,  Icon, Input, Layout, Modal, TopNavigationAction } from "@ui-kitten/components/ui";
import { StyleSheet } from 'react-native';
import { ColorPicker } from "../../../common/color/color-picker/ColorPicker";
import { SectionHeader } from "../../../common/section-header/SectionHeader";
import { TopHeader } from "../../../common/top-header/TopHeader";
import { IconPicker } from "../../../common/icon/icon-picker/IconPicker";
import { DEVICE_WIDTH } from "../../../common/dimensions/dimensions";

export function AddUpdateSettingsTag({
    visible,
    setVisible,
    type,
    name,
    setName,
    color,
    setColor,
    icon,
    setIcon,
    onRemove,
    onSuccess
}) {
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (type === 'EDIT') {
            setTitle('Edycja ' + name)
        } else {
            setTitle('Dodawanie nowego tagu')
        }
    }, [visible]);

    return (
        <Modal
            visible={visible}
            backdropStyle={styles.backdrop}
            onBackdropPress={() => setVisible(false)}
            style={{
                width: DEVICE_WIDTH * 0.9
            }}
        >
            <TopHeader
                title={title}
                subtitle={'Kreator tworzenia tagu'}
                accessoryLeft={() => (
                    <TopNavigationAction
                        onPress={() => setVisible(false)}
                        icon={(props) => (
                            <Icon {...props} name='arrow-back' />
                        )}
                    />
                )}
                accessoryRight={() => {
                    if (type === 'EDIT')
                        return <TopNavigationAction
                            onPress={() => {
                                onRemove();
                                setVisible(false);
                            }}
                            icon={(props) => (
                                <Icon {...props} name='trash-outline' />
                            )}
                        />
                    return <></>
                }
                }
            >
                <Layout style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}>
                    <SectionHeader title={'Nazwa'} level={'1'} />
                    <Input
                        value={name}
                        placeholder={'Nazwa'}
                        onChangeText={nextValue => setName(nextValue)}
                    />

                    <SectionHeader title={'Kolor'} level={'1'} />
                    <ColorPicker
                        color={color}
                        setColor={setColor}
                    />

                    <SectionHeader title={'Ikona'} level={'1'} />
                    <IconPicker
                        icon={icon}
                        setIcon={setIcon}
                    />

                    <Button
                        style={{ marginTop: 20 }}
                        status={'success'}
                        disabled={!name || !color}
                        onPress={() => {
                            onSuccess({ name, color });
                            setVisible(false);
                        }}
                    >
                        Zapisz
                            </Button>
                </Layout>
            </TopHeader>
        </Modal>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});