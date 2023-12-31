export interface FailureState {
  status: boolean;
  message?: string;
}

export interface SuccessState {
  status: boolean;
  message?: string;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "shortid" {
  interface ShortId {
    (): string;
    generate: () => string;
    characters: (string: string) => string;
    isValid: (id: any) => boolean;
    worker: (integer: number) => void;
    seed: (float: number) => void;
  }

  declare const shortid: ShortId;

  export default shortid;
}

declare module "tiny-emitter" {
  export declare class TinyEmitter {
    on(event: string, callback: Function, ctx?: any): this;
    once(event: string, callback: Function, ctx?: any): this;
    emit(event: string, ...args: any[]): this;
    off(event: string, callback?: Function): this;
  }

  interface TinyEmitterStatic {
    (): TinyEmitter;
    new (): TinyEmitter;
  }

  declare const Emitter: TinyEmitterStatic;

  export default Emitter;
}

declare module "d3-shape";
