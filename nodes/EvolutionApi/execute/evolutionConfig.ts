// Configurações específicas para Evolution API v1.8.2
export const EVOLUTION_API_CONFIG = {
	version: '1.8.2',
	
	// Endpoints principais da v1.8.2
	endpoints: {
		instance: {
			create: '/instance/create',
			connect: '/instance/connect',
			fetchInstances: '/instance/fetchInstances',
			logout: '/instance/logout',
			delete: '/instance/delete',
			restart: '/instance/restart',
			setPresence: '/instance/setPresence',
			settings: '/instance/settings',
		},
		message: {
			sendText: '/message/sendText',
			sendMedia: '/message/sendMedia',
			sendAudio: '/message/sendAudio',
			sendDocument: '/message/sendDocument',
			sendImage: '/message/sendImage',
			sendVideo: '/message/sendVideo',
			sendContact: '/message/sendContact',
			sendLocation: '/message/sendLocation',
			sendList: '/message/sendList',
			sendButtons: '/message/sendButtons',
		},
		chat: {
			findMessages: '/chat/findMessages',
			readMessages: '/chat/readMessages',
			deleteMessage: '/chat/deleteMessage',
			archiveChat: '/chat/archiveChat',
			markChatUnread: '/chat/markChatUnread',
		},
		group: {
			create: '/group/create',
			updateGroupName: '/group/updateGroupName',
			updateGroupDescription: '/group/updateGroupDescription',
			updateGroupPicture: '/group/updateGroupPicture',
			addParticipant: '/group/addParticipant',
			removeParticipant: '/group/removeParticipant',
			promoteParticipant: '/group/promoteParticipant',
			demoteParticipant: '/group/demoteParticipant',
		}
	},

	// Headers obrigatórios para v1.8.2
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
	},

	// Estruturas de payload específicas da v1.8.2
	payloadStructures: {
		textMessage: {
			number: 'string',
			textMessage: {
				text: 'string',
				linkPreview: 'boolean?',
			},
			delay: 'number?',
			quoted: 'object?',
			mentioned: 'array?',
		},
		
		createInstance: {
			instanceName: 'string',
			integration: 'WHATSAPP-BAILEYS',
			token: 'string?',
			number: 'string?',
		}
	}
};

// Função utilitária para construir URLs
export function buildEndpointUrl(category: string, operation: string, instanceName?: string): string {
	const endpoints = EVOLUTION_API_CONFIG.endpoints as any;
	const endpoint = endpoints[category]?.[operation];
	if (!endpoint) {
		throw new Error(`Endpoint não encontrado: ${category}.${operation}`);
	}

	// Se o endpoint requer instanceName, adiciona no final
	if (instanceName && (operation === 'connect' || operation === 'logout' || operation === 'delete' || 
		operation === 'restart' || operation === 'setPresence' || operation.startsWith('send'))) {
		return `${endpoint}/${instanceName}`;
	}

	return endpoint;
}

// Função para validar estrutura de payload
export function validatePayload(type: string, payload: any): boolean {
	const payloads = EVOLUTION_API_CONFIG.payloadStructures as any;
	const structure = payloads[type];
	if (!structure) return true; // Se não há estrutura definida, assume válido

	// Validação básica - pode ser expandida conforme necessário
	return true;
}
