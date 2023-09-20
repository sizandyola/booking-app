import { FlatList, StyleSheet, View, ViewToken } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import {PropertyListItem} from "../components/PropertyListItem";
import {lucyStyle} from "../styles";



const data = new Array(50).fill(0).map((_, index) => ({ id: index }));
// [{id: 0}, {id: 1}, {id: 2}, ..., {id: 49}]

export default function PropertyList() {
    const viewableItems = useSharedValue<ViewToken[]>([]);

    return (
        <View style={[styles.container]}>
        <FlatList
            data={data}
    contentContainerStyle={{ paddingTop: 40 }}
    onViewableItemsChanged={({ viewableItems: vItems }) => {
        viewableItems.value = vItems;
    }}
    renderItem={({ item }) => {
        return <PropertyListItem item={item} viewableItems={viewableItems} />;
    }}
    />
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
