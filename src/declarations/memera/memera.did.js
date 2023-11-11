export const idlFactory = ({ IDL }) => {
  const List = IDL.Rec();
  List.fill(IDL.Opt(IDL.Tuple(IDL.Principal, List)));
  const Listing = IDL.Record({
    'itemOwner' : IDL.Principal,
    'itemLikedBy' : List,
  });
  return IDL.Service({
    'Mint' : IDL.Func([IDL.Vec(IDL.Nat16), IDL.Text], [IDL.Principal], []),
    'getMemeListing' : IDL.Func([IDL.Principal], [Listing], ['query']),
    'getMemeraCanisterId' : IDL.Func([], [IDL.Principal], ['query']),
    'getOwnedMemes' : IDL.Func(
        [IDL.Principal],
        [IDL.Vec(IDL.Principal)],
        ['query'],
      ),
    'getYourId' : IDL.Func([], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
