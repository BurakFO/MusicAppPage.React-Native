import React, { useState, useEffect } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
} from 'react-native';

import styles from './musicCard.style';


const MusicCard = ({ musics }) => {

    return (

        <View style={styles.musicCard}>
            <View style={styles.Icon}>
                <Image style={styles.musicImage}
                    source={{
                        uri: musics.imageUrl,
                    }}
                />
            </View>


            <View style={styles.musicDetails}>
                <Text style={styles.musicTitle}>{musics.title}</Text>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.musicArtist} >{musics.artist}</Text>
                    <Text style={styles.musicYear} >{musics.year}</Text>
                </View>
            </View>


            <View style={styles.soldOut}>

            </View>

        </View>

    );


};



export default MusicCard;