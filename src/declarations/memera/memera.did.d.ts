import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type List = [] | [[Principal, List]];
export interface Listing { 'itemOwner' : Principal, 'itemLikedBy' : List }
export interface _SERVICE {
  'Mint' : ActorMethod<[Uint16Array | number[], string], Principal>,
  'getMemeListing' : ActorMethod<[Principal], Listing>,
  'getMemeraCanisterId' : ActorMethod<[], Principal>,
  'getOwnedMemes' : ActorMethod<[Principal], Array<Principal>>,
  'getYourId' : ActorMethod<[], string>,
}
