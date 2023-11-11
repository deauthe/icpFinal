export const idlFactory = ({ IDL }) => {
  const Meme = IDL.Service({
    'getAsset' : IDL.Func([], [IDL.Vec(IDL.Nat16)], ['query']),
    'getCanisterId' : IDL.Func([], [IDL.Principal], ['query']),
    'getName' : IDL.Func([], [IDL.Text], ['query']),
    'getOwner' : IDL.Func([], [IDL.Principal], ['query']),
    'transferOwnerShip' : IDL.Func([IDL.Principal], [IDL.Text], []),
  });
  return Meme;
};
export const init = ({ IDL }) => {
  return [IDL.Text, IDL.Principal, IDL.Vec(IDL.Nat16)];
};
