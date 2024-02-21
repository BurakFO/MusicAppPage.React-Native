import React from "react";

import {

    View,
    TextInput,
} from 'react-native';

import styles from './searchBar.style'


const SearchBar = () => {

    return (
        <View style={styles.inputParent}>

            <TextInput
                style={styles.searchBar}
                placeholder='Ara...'

            >
            </TextInput>
        </View>
    );


};

export default SearchBar;