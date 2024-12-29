import { INodeProperties } from 'n8n-workflow';

export const messagesFields: INodeProperties[] = [
	// Campos = Enviar mensagem de texto
	{
		displayName: 'Nome da Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: false,
		description: 'Digite o nome da instância que vai enviar a mensagem',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendText'],
			},
		},
	},
	{
		displayName: 'Numero do destinatario',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'remoteJid do destinarario',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendText'],
			},
		},
	},
	{
		displayName: 'Mensagem',
		name: 'messageText',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite a mensagem de texto que será enviado',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendText'],
			},
		},
	},
	{
		displayName: 'Opções',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Digite quantos milisegundos de delay a mensagem terá antes de ser enviada',
			},
			{
				displayName: 'Responder Mensagem',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Mensagem',
						values: [
							{
								displayName: 'ID da Mensagem',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID da mensagem que será respondida',
							},
						],
					},
				],
			},
			{
				displayName: 'Menções',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Configurações',
						values: [
							{
								displayName: 'Mencionar Todos',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Menciona todos os participantes do grupo',
							},
							{
								displayName: 'Números para Mencionar',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Lista de números para mencionar (separados por vírgula)',
							},
						],
					},
				],
			},
			{
				displayName: 'Preview de Link',
				name: 'linkPreview',
				type: 'boolean',
				default: true,
				description: 'Habilita ou desabilita a prévia de links na mensagem',
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendText'],
			},
		},
	},

	// Campos = Enviar Imagem
	{
		displayName: 'Nome da Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar a mensagem',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendImage'],
			},
		},
	},
	{
		displayName: 'Número do Destinatário',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'Número do destinatário',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendImage'],
			},
		},
	},
	{
		displayName: 'Imagem',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'URL ou base64 da imagem',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendImage'],
			},
		},
	},
	{
		displayName: 'Caption',
		name: 'caption',
		type: 'string',
		default: '',
		required: false,
		description: 'Texto a ser enviado junto a imagem',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendImage'],
			},
		},
	},
	{
		displayName: 'Opções',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Digite quantos milisegundos de delay a mensagem terá antes de ser enviada',
			},
			{
				displayName: 'Responder Mensagem',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Mensagem',
						values: [
							{
								displayName: 'ID da Mensagem',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID da mensagem que será respondida',
							},
						],
					},
				],
			},
			{
				displayName: 'Menções',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Configurações',
						values: [
							{
								displayName: 'Mencionar Todos',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Menciona todos os participantes do grupo',
							},
							{
								displayName: 'Números para Mencionar',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Lista de números para mencionar (separados por vírgula)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendImage'],
			},
		},
	},

	// Campos = Enviar Video
	{
		displayName: 'Nome da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar o vídeo',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendVideo'],
			},
		},
	},
	{
		displayName: 'Número do Destinatário',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'Número do destinatário',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendVideo'],
			},
		},
	},
	{
		displayName: 'Video',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'URL ou base64 do vídeo',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendVideo'],
			},
		},
	},
	{
		displayName: 'Caption',
		name: 'caption',
		type: 'string',
		default: '',
		required: false,
		description: 'Texto a ser enviado junto ao vídeo',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendVideo'],
			},
		},
	},
	{
		displayName: 'Opções',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Digite quantos milisegundos de delay a mensagem terá antes de ser enviada',
			},
			{
				displayName: 'Responder Mensagem',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Mensagem',
						values: [
							{
								displayName: 'ID da Mensagem',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID da mensagem que será respondida',
							},
						],
					},
				],
			},
			{
				displayName: 'Menções',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Configurações',
						values: [
							{
								displayName: 'Mencionar Todos',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Menciona todos os participantes do grupo',
							},
							{
								displayName: 'Números para Mencionar',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Digite os números que deseja mencionar separados por vírgula (ex: 5511999999999,5511888888888)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendVideo'],
			},
		},
	},

	// Campos = Enviar Audio
	{
		displayName: 'Nome da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar o áudio',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendAudio'],
			},
		},
	},
	{
		displayName: 'Número do Destinatário',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'Número do destinatário',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendAudio'],
			},
		},
	},
	{
		displayName: 'Audio',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'URL ou base64 do áudio',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendAudio'],
			},
		},
	},
	{
		displayName: 'Opções',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Digite quantos milisegundos de delay a mensagem terá antes de ser enviada',
			},
			{
				displayName: 'Responder Mensagem',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Mensagem',
						values: [
							{
								displayName: 'ID da Mensagem',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID da mensagem que será respondida',
							},
						],
					},
				],
			},
			{
				displayName: 'Menções',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Configurações',
						values: [
							{
								displayName: 'Mencionar Todos',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Menciona todos os participantes do grupo',
							},
							{
								displayName: 'Números para Mencionar',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Digite os números que deseja mencionar separados por vírgula (ex: 5511999999999,5511888888888)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendAudio'],
			},
		},
	},

	// Campos = Enviar Documento
	{
		displayName: 'Nome da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar o documento',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocumento'],
			},
		},
	},
	{
		displayName: 'Número do Destinatário',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'Número do destinatário',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocumento'],
			},
		},
	},
	{
		displayName: 'Documento',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'URL ou base64 do documento',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocumento'],
			},
		},
	},
	{
		displayName: 'Mensagem',
		name: 'caption',
		type: 'string',
		default: '',
		required: false,
		description: 'Texto a ser enviado junto ao documento',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocumento'],
			},
		},
	},
	{
		displayName: 'Nome do Arquivo',
		name: 'fileName',
		type: 'string',
		default: 'document.pdf',
		required: false,
		description: 'Nome do arquivo do documento',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocumento'],
			},
		},
	},
	{
		displayName: 'Opções',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Digite quantos milisegundos de delay a mensagem terá antes de ser enviada',
			},
			{
				displayName: 'Responder Mensagem',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Mensagem',
						values: [
							{
								displayName: 'ID da Mensagem',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID da mensagem que será respondida',
							},
						],
					},
				],
			},
			{
				displayName: 'Menções',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Configurações',
						values: [
							{
								displayName: 'Mencionar Todos',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Menciona todos os participantes do grupo',
							},
							{
								displayName: 'Números para Mencionar',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Digite os números que deseja mencionar separados por vírgula (ex: 5511999999999,5511888888888)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocumento'],
			},
		},
	},

	// Campos = Enviar Enquete
	{
		displayName: 'Nome da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar a enquete',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendPoll'],
			},
		},
	},
	{
		displayName: 'Número do Destinatário',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'Número do destinatário',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendPoll'],
			},
		},
	},
	{
		displayName: 'Titulo da Enquete',
		name: 'caption',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o titulo da sua enquete',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendPoll'],
			},
		},
	},
	{
		displayName: 'Mínimo 2 opções, Máximo 12. Cada opção deve ser única.',
		name: 'notice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendPoll'],
			},
		},
	},
	{
		displayName: 'Opções da Enquete',
		name: 'options_display',
		type: 'fixedCollection',
		default: { metadataValues: [] },
		required: true,
		typeOptions: {
			multipleValues: true,
		},
		description: 'Digite as opções da enquete (mínimo 2, máximo 12). Cada opção deve ser única.',
		options: [
			{
				name: 'metadataValues',
				displayName: 'Metadata',
				values: [
					{
						displayName: 'Opção',
						name: 'optionValue',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendPoll'],
			},
		},
	},
	{
		displayName: 'Opções',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Digite quantos milisegundos de delay a mensagem terá antes de ser enviada',
			},
			{
				displayName: 'Responder Mensagem',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Mensagem',
						values: [
							{
								displayName: 'ID da Mensagem',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID da mensagem que será respondida',
							},
						],
					},
				],
			},
			{
				displayName: 'Menções',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Configurações',
						values: [
							{
								displayName: 'Mencionar Todos',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Menciona todos os participantes do grupo',
							},
							{
								displayName: 'Números para Mencionar',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Digite os números que deseja mencionar separados por vírgula (ex: 5511999999999,5511888888888)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendPoll'],
			},
		},
	},

	// Campos = Enviar Status
	{
		displayName: 'Nome da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar o status',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendStories'],
			},
		},
	},
	{
		displayName: 'Tipo do status',
		name: 'type',
		type: 'options',
		description: 'Escolha o tipo de status você vai postar',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendStories'],
			},
		},
		options: [
			{
				name: 'Status de Texto',
				value: 'text',
			},
			{
				name: 'Status de imagem',
				value: 'image',
			},
			{
				name: 'Status de Video',
				value: 'video',
			},
			{
				name: 'Status de Audio',
				value: 'audio',
			},
		],
		default: 'text',
	},
	{
		displayName: 'Conteudo ou URL',
		name: 'content',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o conteudo ou Url da imagem/video/audio a ser postado',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendStories'],
			},
		},
	},
	{
		displayName: 'Texto para status de Imagem/Video',
		name: 'caption',
		type: 'string',
		default: '',
		required: false,
		description: 'Digite o texto para status de Imagem/Video',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendStories'],
			},
		},
	},
	{
		displayName: 'Cor do Background',
		name: 'backgroundColor',
		type: 'color',
		default: '#000000',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendStories'],
			},
		},
	},
	{
		displayName: 'Font do texto',
		name: 'font',
		type: 'options',
		description: 'Escolha o tipo da font do seu texto',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendStories'],
			},
		},
		options: [
			{
				name: 'SERIF',
				value: 1,
			},
			{
				name: 'NORICAN REGULAR',
				value: 2,
			},
			{
				name: 'BRYNDAN WRITE',
				value: 3,
			},
			{
				name: 'BEBASNEUE REGULAR',
				value: 4,
			},
			{
				name: 'OSWALD HEAVY',
				value: 5,
			},
		],
		default: 1,
	},

	// Campos = Enviar Documento
	{
		displayName: 'Nome da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar o documento',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'Número do Destinatário',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'Número do destinatário',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'Documento',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'URL ou base64 do documento',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'Mensagem',
		name: 'caption',
		type: 'string',
		default: '',
		required: false,
		description: 'Texto a ser enviado junto ao documento',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'Nome do Arquivo',
		name: 'fileName',
		type: 'string',
		default: 'document.pdf',
		required: false,
		description: 'Nome do arquivo do documento',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'Opções',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Digite quantos milisegundos de delay a mensagem terá antes de ser enviada',
			},
			{
				displayName: 'Responder Mensagem',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Mensagem',
						values: [
							{
								displayName: 'ID da Mensagem',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID da mensagem que será respondida',
							},
						],
					},
				],
			},
			{
				displayName: 'Menções',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Configurações',
						values: [
							{
								displayName: 'Mencionar Todos',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Menciona todos os participantes do grupo',
							},
							{
								displayName: 'Números para Mencionar',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Digite os números que deseja mencionar separados por vírgula (ex: 5511999999999,5511888888888)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},

	// Campos = Enviar Contato
	{
		displayName: 'Nome da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar o contato',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendContact'],
			},
		},
	},
	{
		displayName: 'Número do Destinatário',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'Número do destinatário',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendContact'],
			},
		},
	},
	{
		displayName: 'Contatos',
		name: 'contacts',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: { contactValues: [] },
		options: [
			{
				name: 'contactValues',
				displayName: 'Contato',
				values: [
					{
						displayName: 'Nome Completo',
						name: 'fullName',
						type: 'string',
						default: '',
						required: true,
						description: 'Nome completo do contato',
					},
					{
						displayName: 'Número do WhatsApp',
						name: 'wuid',
						type: 'string',
						default: '',
						required: true,
						description: 'Número do WhatsApp (apenas números, ex: 559999999999)',
					},
					{
						displayName: 'Número Formatado',
						name: 'phoneNumber',
						type: 'string',
						default: '',
						required: true,
						description: 'Número formatado (ex: +55 99 9 9999-9999)',
					},
					{
						displayName: 'Organização',
						name: 'organization',
						type: 'string',
						default: '',
						description: 'Nome da organização/empresa',
					},
					{
						displayName: 'Email',
						name: 'email',
						type: 'string',
						default: '',
						description: 'Endereço de email do contato',
					},
					{
						displayName: 'URL',
						name: 'url',
						type: 'string',
						default: '',
						description: 'URL da página do contato',
					},
				],
			},
		],
		description: 'Lista de contatos para enviar',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendContact'],
			},
		},
	},

	// Campos = Enviar Lista
	{
		displayName: 'Nome da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar a lista',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendList'],
			},
		},
	},
	{
		displayName: 'Número do Destinatário',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'Número do destinatário',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendList'],
			},
		},
	},
	{
		displayName: 'Título da Lista',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		description: 'Título principal da lista',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendList'],
			},
		},
	},
	{
		displayName: 'Descrição',
		name: 'description',
		type: 'string',
		default: '',
		description: 'Descrição da lista (Opcional)',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendList'],
			},
		},
	},
	{
		displayName: 'Texto do Botão',
		name: 'buttonText',
		type: 'string',
		default: 'Clique Aqui',
		required: false,
		description: 'Texto que aparecerá no botão da lista',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendList'],
			},
		},
	},
	{
		displayName: 'Texto do Rodapé',
		name: 'footerText',
		type: 'string',
		default: '',
		required: false,
		description: 'Texto que aparecerá no rodapé da lista',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendList'],
			},
		},
	},
	{
		displayName: 'Seções',
		name: 'sections',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: { sectionValues: [] },
		options: [
			{
				name: 'sectionValues',
				displayName: 'Seção',
				values: [
					{
						displayName: 'Título da Seção',
						name: 'title',
						type: 'string',
						default: '',
						required: true,
						description: 'Título da seção',
					},
					{
						displayName: 'Linhas',
						name: 'rows',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: { rowValues: [] },
						options: [
							{
								name: 'rowValues',
								displayName: 'Linha',
								values: [
									{
										displayName: 'Título',
										name: 'title',
										type: 'string',
										default: '',
										required: true,
										description: 'Título da linha',
									},
									{
										displayName: 'Descrição',
										name: 'description',
										type: 'string',
										default: '',
										description: 'Descrição da linha (Opcional)',
									},
									{
										displayName: 'ID da Linha',
										name: 'rowId',
										type: 'string',
										default: '',
										required: true,
										description: 'ID único para identificar a linha',
									},
								],
							},
						],
					},
				],
			},
		],
		description: 'Seções da lista com suas respectivas linhas',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendList'],
			},
		},
	},
	{
		displayName: 'Opções',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Digite quantos milisegundos de delay a mensagem terá antes de ser enviada',
			},
			{
				displayName: 'Responder Mensagem',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Mensagem',
						values: [
							{
								displayName: 'ID da Mensagem',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID da mensagem que será respondida',
							},
						],
					},
				],
			},
			{
				displayName: 'Menções',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Configurações',
						values: [
							{
								displayName: 'Mencionar Todos',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Menciona todos os participantes do grupo',
							},
							{
								displayName: 'Números para Mencionar',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Digite os números que deseja mencionar separados por vírgula (ex: 5511999999999,5511888888888)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendList'],
			},
		},
	},

	// Campos = Enviar Botões
	{
		displayName: 'Nome da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar os botões',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendButtons'],
			},
		},
	},
	{
		displayName: 'Número do Destinatário',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'Número do destinatário',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendButtons'],
			},
		},
	},
	{
		displayName: 'Título',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		description: 'Título da mensagem com botões',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendButtons'],
			},
		},
	},
	{
		displayName: 'Descrição',
		name: 'description',
		type: 'string',
		default: '',
		required: true,
		description: 'Descrição da mensagem com botões',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendButtons'],
			},
		},
	},
	{
		displayName: 'Rodapé',
		name: 'footer',
		type: 'string',
		default: '',
		required: false,
		description: 'Texto do rodapé da mensagem',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendButtons'],
			},
		},
	},
	{
		displayName: 'Botões',
		name: 'buttons',
		placeholder: 'Adicionar Botão',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
			maxValue: 3,
		},
		default: {},
		options: [
			{
				name: 'buttonValues',
				displayName: 'Botão',
				values: [
					{
						displayName: 'Tipo',
						name: 'type',
						type: 'options',
						options: [
							{
								name: 'Resposta',
								value: 'reply',
							},
							{
								name: 'Copiar',
								value: 'copy',
							},
							{
								name: 'URL',
								value: 'url',
							},
							{
								name: 'Ligar',
								value: 'call',
							},
						],
						default: 'reply',
					},
					{
						displayName: 'Texto do Botão',
						name: 'displayText',
						type: 'string',
						default: '',
						required: true,
					},
					{
						displayName: 'ID',
						name: 'id',
						type: 'string',
						default: '',
						required: true,
						displayOptions: {
							show: {
								type: ['reply'],
							},
						},
					},
					{
						displayName: 'Código para Copiar',
						name: 'copyCode',
						type: 'string',
						default: '',
						required: true,
						displayOptions: {
							show: {
								type: ['copy'],
							},
						},
					},
					{
						displayName: 'URL',
						name: 'url',
						type: 'string',
						default: '',
						required: true,
						displayOptions: {
							show: {
								type: ['url'],
							},
						},
					},
					{
						displayName: 'Número de Telefone',
						name: 'phoneNumber',
						type: 'string',
						default: '',
						required: true,
						displayOptions: {
							show: {
								type: ['call'],
							},
						},
					},
				],
			},
		],
		description: 'Botões da mensagem (máximo 3)',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendButtons'],
			},
		},
	},

	// Campos = Enviar PIX
	{
		displayName: 'Nome da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar o PIX',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendPix'],
			},
		},
	},
	{
		displayName: 'Número do Destinatário',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'Número do destinatário',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendPix'],
			},
		},
	},
	{
		displayName: 'Nome do Beneficiário',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'Nome do beneficiário do PIX',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendPix'],
			},
		},
	},
	{
		displayName: 'Tipo da Chave',
		name: 'keyType',
		type: 'options',
		options: [
			{
				name: 'Telefone',
				value: 'phone',
			},
			{
				name: 'E-mail',
				value: 'email',
			},
			{
				name: 'CPF',
				value: 'cpf',
			},
			{
				name: 'CNPJ',
				value: 'cnpj',
			},
			{
				name: 'Aleatória',
				value: 'random',
			},
		],
		default: 'email',
		required: true,
		description: 'Tipo da chave PIX',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendPix'],
			},
		},
	},
	{
		displayName: 'Chave PIX',
		name: 'key',
		type: 'string',
		default: '',
		required: true,
		description: 'Chave PIX do beneficiário',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendPix'],
			},
		},
	},
	{
		displayName: 'Enviar para Todos',
		name: 'allContacts',
		type: 'boolean',
		default: false,
		description: 'Envia o status para todos os contatos',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendStories'],
			},
		},
	},
	{
		displayName: 'Lista de Contatos',
		name: 'statusJidList',
		type: 'string',
		default: '',
		required: true,
		description: 'Lista de contatos que receberão o status (separados por vírgula)',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendStories'],
				allContacts: [false],
			},
		},
	},

	// Campos = Reagir Mensagem
	{
		displayName: 'Nome da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendReaction'],
			},
		},
	},
	{
		displayName: 'Número do Chat',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'Número do chat onde está a mensagem',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendReaction'],
			},
		},
	},
	{
		displayName: 'ID da Mensagem',
		name: 'messageId',
		type: 'string',
		default: '',
		required: true,
		description: 'ID da mensagem que receberá a reação',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendReaction'],
			},
		},
	},
	{
		displayName: 'Mensagem Própria',
		name: 'fromMe',
		type: 'boolean',
		default: true,
		description: 'A mensagem foi enviada por você?',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendReaction'],
			},
		},
	},
	{
		displayName: 'Emoji da Reação',
		name: 'reaction',
		type: 'string',
		default: '👍',
		required: true,
		description: 'Emoji que será usado como reação',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendReaction'],
			},
		},
	}
];
