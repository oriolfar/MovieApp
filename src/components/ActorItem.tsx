import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    actor: Cast;
}

export const ActorItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
        <View style={styles.container}>
            {
                actor.profile_path && (
                    <Image
                        source={{ uri }}
                        style={{
                            width: 56,
                            height: 56,
                            borderRadius: 10,
                        }}
                    />
                )
            }

            <View style={styles.actorInfo}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>
                    {actor.name}
                </Text>
                <Text style={{ fontSize: 16, opacity: 0.7, color: 'black' }}>
                    {actor.character}
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 4,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        shadowColor: 'black',
        height: 56,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.4,
        shadowRadius: 6.68,

        elevation: 4,
        marginRight: 18,
        paddingRight: 15,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 7,
    },
})
