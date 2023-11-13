export const idlFactory = ({ IDL }) => {
  const Listing = IDL.Record({ 'itemOwner' : IDL.Principal });
  return IDL.Service({
    'Mint' : IDL.Func([IDL.Vec(IDL.Nat16), IDL.Text], [IDL.Principal], []),
    'getExistingMemes' : IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    'getListedMemes' : IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    'getMemeListing' : IDL.Func([IDL.Principal], [Listing], ['query']),
    'getMemeraCanisterId' : IDL.Func([], [IDL.Principal], ['query']),
    'getOriginalOwner' : IDL.Func([IDL.Principal], [IDL.Principal], ['query']),
    'getOwnedMemes' : IDL.Func(
        [IDL.Principal],
        [IDL.Vec(IDL.Principal)],
        ['query'],
      ),
    'getYourId' : IDL.Func([], [IDL.Text], []),
    'isListed' : IDL.Func([IDL.Principal], [IDL.Bool], ['query']),
    'listItem' : IDL.Func([IDL.Principal, IDL.Nat], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
