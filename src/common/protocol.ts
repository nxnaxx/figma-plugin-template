export interface UIMessageMap {
  createRectangles: { count: number };
  cancel: never;
}

export interface PluginMessageMap {
  created: { message: string };
}

export type MessageOf<T> = {
  [K in keyof T]: T[K] extends never ? { type: K } : { type: K } & T[K];
}[keyof T];

export type UIMessage = MessageOf<UIMessageMap>;
export type PluginMessage = MessageOf<PluginMessageMap>;
