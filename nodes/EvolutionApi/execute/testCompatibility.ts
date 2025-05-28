// Arquivo de teste para validar compatibilidade com Evolution API v1.8.2
import { EVOLUTION_API_CONFIG, buildEndpointUrl } from './evolutionConfig';

// Testes para validar os endpoints
console.log('=== TESTE DE ENDPOINTS EVOLUTION API v1.8.2 ===');

// Teste 1: Endpoints de instância
console.log('\n1. Endpoints de Instância:');
console.log('- Criar instância:', EVOLUTION_API_CONFIG.endpoints.instance.create);
console.log('- Conectar instância:', buildEndpointUrl('instance', 'connect', 'minhaInstancia'));
console.log('- Buscar instâncias:', buildEndpointUrl('instance', 'fetchInstances'));
console.log('- Logout instância:', buildEndpointUrl('instance', 'logout', 'minhaInstancia'));

// Teste 2: Endpoints de mensagem
console.log('\n2. Endpoints de Mensagem:');
console.log('- Enviar texto:', buildEndpointUrl('message', 'sendText', 'minhaInstancia'));
console.log('- Enviar mídia:', buildEndpointUrl('message', 'sendMedia', 'minhaInstancia'));
console.log('- Enviar áudio:', buildEndpointUrl('message', 'sendAudio', 'minhaInstancia'));

// Teste 3: Headers obrigatórios
console.log('\n3. Headers para v1.8.2:');
console.log(JSON.stringify(EVOLUTION_API_CONFIG.headers, null, 2));

// Teste 4: Estruturas de payload
console.log('\n4. Estruturas de Payload:');
console.log('- Mensagem de texto:', JSON.stringify(EVOLUTION_API_CONFIG.payloadStructures.textMessage, null, 2));
console.log('- Criar instância:', JSON.stringify(EVOLUTION_API_CONFIG.payloadStructures.createInstance, null, 2));

console.log('\n=== TESTES CONCLUÍDOS ===');

// Função de teste para simular uma requisição
export function testEvolutionAPIRequest(instanceName: string) {
	return {
		endpoints: {
			connect: buildEndpointUrl('instance', 'connect', instanceName),
			sendText: buildEndpointUrl('message', 'sendText', instanceName),
			fetchInstances: buildEndpointUrl('instance', 'fetchInstances'),
		},
		headers: EVOLUTION_API_CONFIG.headers,
		version: EVOLUTION_API_CONFIG.version,
	};
}

// Exemplo de uso do teste
const testResult = testEvolutionAPIRequest('minha-instancia-teste');
console.log('\n=== EXEMPLO DE REQUISIÇÃO ===');
console.log(JSON.stringify(testResult, null, 2));
