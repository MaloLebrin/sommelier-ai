import type { MessageStatusEnum } from '#message/types/status'

export const MessageStatusMap = new Map<MessageStatusEnum, string>([
  ['draft', 'brouillon'],
  ['read', 'lu'],
  ['received', 'reçu'],
  ['sent', 'envoyé'],
])

export const messageStatus = [...MessageStatusMap.keys()]
