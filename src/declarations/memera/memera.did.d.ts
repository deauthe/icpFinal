import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Listing { 'itemOwner' : Principal }
export interface _SERVICE {
  'Mint' : ActorMethod<[Uint16Array | number[], string], Principal>,
  'getExistingMemes' : ActorMethod<[], Array<Principal>>,
  'getListedMemes' : ActorMethod<[], Array<Principal>>,
  'getMemeListing' : ActorMethod<[Principal], Listing>,
  'getMemeraCanisterId' : ActorMethod<[], Principal>,
  'getOriginalOwner' : ActorMethod<[Principal], Principal>,
  'getOwnedMemes' : ActorMethod<[Principal], Array<Principal>>,
  'getYourId' : ActorMethod<[], string>,
  'isListed' : ActorMethod<[Principal], boolean>,
  'listItem' : ActorMethod<[Principal, bigint], string>,
}
