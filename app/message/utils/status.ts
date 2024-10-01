import type { MessageStatusEnum } from '#message/types/status'

const DRAFT = 'draft'
const READ = 'read'
const RECEIVED = 'received'
const SENT = 'sent'

export const MessageStatusMap = new Map<
  MessageStatusEnum,
  {
    key: MessageStatusEnum
    translation: string
  }
>([
  [DRAFT, { key: DRAFT, translation: 'draft' }],
  [READ, { key: READ, translation: 'read' }],
  [RECEIVED, { key: RECEIVED, translation: 'received' }],
  [SENT, { key: SENT, translation: 'sent' }],
])

export const messageStatus = [...MessageStatusMap.keys()]
