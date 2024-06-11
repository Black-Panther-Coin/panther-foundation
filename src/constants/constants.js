export const preSaleABI = [
  {
    inputs: [
      { internalType: "address", name: "_tokenAddress", type: "address" },
      { internalType: "address", name: "_walletAddress", type: "address" },
      { internalType: "address", name: "owner", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokensAmount",
        type: "uint256",
      },
    ],
    name: "TokensPurchased",
    type: "event",
  },
  { stateMutability: "payable", type: "fallback" },
  {
    inputs: [
      { internalType: "address[]", name: "_addresses", type: "address[]" },
    ],
    name: "allowAddressesForPresale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "allowForPresale",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "buyToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_marketcap", type: "uint256" }],
    name: "changeMarketCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBnbUsdPrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pricePerToken",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setSkipPresaleCheckToTrue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "skipPresaleCheck",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "targetMarketCap",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBNBReceived",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalTokenSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalTokensSold",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "walletAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
];

export const preSaleAddress = "0x0823da3991d183Ca1eD77ee88cb59C4a4b85Df20";

export const NavItems = [
  {
    id: 0,
    title: "HOME",
    slug: "/",
  },
  {
    id: 1,
    title: "NEWS",
    slug: "/news",
  },
  {
    id: 2,
    title: "ABOUT US",
    slug: "/about-us",
  },
  {
    id: 3,
    title: "OUR TEAM",
    slug: "/our-team",
  },
  {
    id: 4,
    title: "REGISTER",
    slug: "/register",
  },
  {
    id: 5,
    title: "DONATE",
    slug: "/donate",
  },
];

export const BusinessData = [
  {
    id: 0,
    title: "Raise Awareness ",
    content:
      "Karanja Gaçuça is an activist with Occupy Wall Street. Born in Kenya, Gaçuça attended Middlesex University in the UK and then moved to the United States. While in the U.S. Gaçuça worked ",
  },
  {
    id: 1,
    title: "Support Research  ",
    content:
      "Karanja Gaçuça is an activist with Occupy Wall Street. Born in Kenya, Gaçuça attended Middlesex University in the UK and then moved to the United States. While in the U.S. Gaçuça worked ",
  },
  {
    id: 2,
    title: "Promote Education",
    content:
      "Karanja Gaçuça is an activist with Occupy Wall Street. Born in Kenya, Gaçuça attended Middlesex University in the UK and then moved to the United States. While in the U.S. Gaçuça worked ",
  },
  {
    id: 3,
    title: "Drive Advocacy  ",
    content:
      "Karanja Gaçuça is an activist with Occupy Wall Street. Born in Kenya, Gaçuça attended Middlesex University in the UK and then moved to the United States. While in the U.S. Gaçuça worked ",
  },
  {
    id: 4,
    title: "Facilitate Collaboration  ",
    content:
      "Karanja Gaçuça is an activist with Occupy Wall Street. Born in Kenya, Gaçuça attended Middlesex University in the UK and then moved to the United States. While in the U.S. Gaçuça worked ",
  },
  {
    id: 5,
    title: "Community Engagement",
    content:
      "Karanja Gaçuça is an activist with Occupy Wall Street. Born in Kenya, Gaçuça attended Middlesex University in the UK and then moved to the United States. While in the U.S. Gaçuça worked ",
  },
];

export const NewsData=[
  {
    id:0,
    image:"",
    content:"Karanja Gaçuça is an activist with Occupy Wall Street. Born in Kenya, Gaçuça attended Middlesex University in the UK and then moved to the United States. While in the U.S. Gaçuça worked"
  },
  {
    id:1,
    image:"",
    content:"Karanja Gaçuça is an activist with Occupy Wall Street. Born in Kenya, Gaçuça attended Middlesex University in the UK and then moved to the United States. While in the U.S. Gaçuça worked"
  },
  {
    id:2,
    image:"",
    content:"Karanja Gaçuça is an activist with Occupy Wall Street. Born in Kenya, Gaçuça attended Middlesex University in the UK and then moved to the United States. While in the U.S. Gaçuça worked"
  },
]
