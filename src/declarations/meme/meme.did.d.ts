import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Meme {
  'getAsset' : ActorMethod<[], Uint16Array | number[]>,
  'getCanisterId' : ActorMethod<[], Principal>,
  'getName' : ActorMethod<[], string>,
  'getOwner' : ActorMethod<[], Principal>,
  'transferOwnerShip' : ActorMethod<[Principal], string>,
}
export interface _SERVICE extends Meme {}
