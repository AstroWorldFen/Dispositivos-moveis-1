import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";

const carros = [
  {
    id: "1",
    marca: "Ferrari",
    modelo: "Enzo",
    ano: "2006",
    cor: "Vermelho",
    image: require("@/assets/images/Enzo_Ferrari.jpg"),
  },
  {
    id: "2",
    marca: "Toyota",
    modelo: "Corolla",
    ano: "2015",
    cor: "Preto",
    image: require("@/assets/images/corolla preto.jpg"),
  },
];

const CarroItem = ({
  carro,
}: {
  carro: { marca: string; modelo: string; ano: string; cor: string; image: any };
}) => (
  <View style={styles.card}>
    <Image source={carro.image} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.title}>
        {carro.marca} - {carro.modelo}
      </Text>
      <Text style={styles.details}>Ano: {carro.ano}</Text>
      <Text style={styles.details}>Cor: {carro.cor}</Text>
    </View>
  </View>
);

export default function CarListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Carros</Text>
      <FlatList
        data={carros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CarroItem carro={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 150,
  },
  info: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  details: {
    fontSize: 14,
    color: "#555",
  },
});
