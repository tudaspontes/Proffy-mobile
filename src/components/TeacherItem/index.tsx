import React from 'react';
import { View, Image, Text } from "react-native";
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

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

            <View style={styles.footer}>
                <Text style={styles.price}>
                Preço/hora: {'   '}
                <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        <Image source={unfavoriteIcon} />
                        {/* <Image source={heartOutlineIcon} /> */}
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}> Entrar em contato </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;