import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

import styles from './styles';

import LandingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

function Landing() {
    const { navigate } = useNavigation();

    const [totalConnections, setTotalConnections] = useState(0);

    //O segundo do parametros é a variavel que ao ser alterada, executa o função que está no primeiro parametro. Deixando vazia [], a função é executada apenas uma vez ao ser carregada a pagina.
    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);
        })
    }, [])

    function handleNavigateToGiveClassesPage() {
        navigate('GiveClasses');
    }

    function handleNavigateToStudyPages() {
        navigate('Study');
    }


    return (
        <View style={styles.container}>
            <Image source={LandingImg} style={styles.banner} />

            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton
                    onPress={handleNavigateToStudyPages}
                    style={[styles.button, styles.buttonPrimary]}
                >
                    <Image source={studyIcon}></Image>

                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton
                    onPress={handleNavigateToGiveClassesPage}
                    style={[styles.button, styles.buttonSecondary]}
                >
                    <Image source={giveClassesIcon}></Image>

                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas {' '}
                <Image source={heartIcon}></Image>
            </Text>
        </View>)
}

export default Landing;