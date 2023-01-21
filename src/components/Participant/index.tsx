import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'


type Props = {
    name: string,
    onRemove: () => void,
}

export function Participant({ name }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}
