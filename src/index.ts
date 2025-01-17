import { Context, Schema } from 'koishi'

export const name = 'star-rail-plugin'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
    ctx.on('message', (session) => {
      if (session.content === '') {
        session.send('')
      }
    })
}
