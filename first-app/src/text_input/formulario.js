import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";

export default function FormularioExemplo() {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');

    const [tarefa, setTarefa] = useState('');
    const [prioridade, setPrioridade] = useState('');

    function handleEnviar() {
        console.log('Nome: ', nome, 'Idade: ', idade);
        setNome('');
        setIdade('');
    }

    function handleAdicionar() {
        
        const novaTarefa = {
            id: Date.now().toString(),
            nome: tarefa,
            prioridade: prioridade.trim() || 'Normal'
        }

        if (tarefa.trim() === '') {
            Alert.alert('Atenção!', 'O nome da tarefa não pode ficar vazio.');
            return;
        }

        console.log('Tarefa: ', tarefa, 'Prioridade:', prioridade || 'Normal');
        setTarefa('');
        setPrioridade('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Formulários</Text>

            <View style={styles.exemplo}>
                <Text style={styles.subtitulo}>1. Formulário</Text>
                <TextInput 
                    style={styles.input}
                    value={nome}
                    onChangeText={setNome}
                    placeholder="Insira seu nome..."
                />
                <TextInput 
                    style={styles.input}
                    value={idade}
                    onChangeText={setIdade}
                    placeholder="Insira sua idade..."
                    keyboardType="numeric"
                />
                <TouchableOpacity style={styles.botao} onPress={handleEnviar}>
                    <Text style={styles.textoBotao}>Enviar</Text>
                </TouchableOpacity>
            </View>



            <View style={styles.exemplo}>
                <Text style={styles.subtitulo}>2. Validação</Text>
                <TextInput 
                    style={styles.input}
                    value={tarefa}
                    onChangeText={setTarefa}
                    placeholder="Nome da tarefa..."
                />
                <TextInput 
                    style={styles.input}
                    value={prioridade}
                    onChangeText={setPrioridade}
                    placeholder="Prioridade... (Baixa, Média ou Alta)"
                />
                <TouchableOpacity style={styles.botao} onPress={handleAdicionar}>
                    <Text style={styles.textoBotao}>Adicionar Tarefa</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    subtitulo: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#4285f4",
        marginBottom: 8,
    },
    exemplo: {
        width: "80%",
        padding: 16,
        marginBottom: 16,
        backgroundColor: "#fff",
        borderRadius: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
    },
    botao: {
        backgroundColor: "#4285f4",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 4,
    },
    textoBotao: {
        color: "#fff",
        fontWeight: "bold",
    },
});