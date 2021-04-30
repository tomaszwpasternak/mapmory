import { Layout } from "@ui-kitten/components";
import React from "react";
import { TouchableOpacity, Image } from "react-native";

export function PhotoGallery({ photos }) {
    return (
        <Layout style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
        }}>
            {photos.map(photo => (
                <TouchableOpacity>
                    <Image
                        key={photo.uri}
                        style={{
                            width: 80,
                            height: 80,
                            margin: 5
                        }}
                        source={{ uri: photo.uri }}
                    />
                </TouchableOpacity>
            ))}
        </Layout>
    )
}