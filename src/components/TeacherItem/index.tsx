import React from 'react';
import { View, Image, Text } from "react-native";

import styles from './styles';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://avatars0.githubusercontent.com/u/53872262?s=460&u=afb37d9f31319203c5161593a2c41edb970f9387&v=4' }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Felipe Pontes</Text>
                    <Text style={styles.subject}>Matematica</Text>
                </View>
            </View>

            <Text style={styles.bio}>
            Front-end Developer | HTML, CSS and JavaScript Developer | Self-taught Programmer | Polyglot
            </Text>
        </View>
    )
}

export default TeacherItem;