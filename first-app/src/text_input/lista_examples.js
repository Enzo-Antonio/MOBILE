import { View } from "react-native"

export default function ListaDeTarefas() {
    const [produto, setProduto] = useState('');
    const produtos = [
        setProduto
    ]

    function handleAdicionar() {
        
        const novaTarefa = {
            id: Date.now().toString(),
            nome: tarefa,
            prioridade: prioridade.trim() || 'Normal'
        }
    }

    function handleEnviar() {
        console.log('Produto: ', produto);
        setProduto('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Formulários</Text>
            <View style={styles.exemplo}>
                <Text style={styles.subtitulo}>1. Formulário</Text>
                <TextInput 
                    style={styles.input}
                    value={produto}
                    onChangeText={setProduto}
                    placeholder="Insira o produto..."
                />
                <TouchableOpacity style={styles.botao} onPress={handleEnviar}>
                    <Text style={styles.textoBotao}>Enviar</Text>
                </TouchableOpacity>

                <FlatList
                    scrollEnabled={true}
                    data={produtos}
                    keyExtractor={(item) => item.}
                    renderItem={({ item : aluno }) => (
                        <CardItem nome={aluno.nome} nota={aluno.nota} />
                    )}
                />
            </View>
        </View>
    )
}