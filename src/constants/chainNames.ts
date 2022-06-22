/*
  Extracted from chainlist.org with the following console script:

  JSON.stringify([...document.querySelectorAll(".chain_chainContainer__6bCoF")].reduce((a, el) => {
    a[el.querySelector(".MuiTypography-h5").innerText] = {
        name: el.querySelector(".MuiTypography-h3").innerText,
        image: el.querySelector(".chain_avatar__aaEVV").src
    };
    return a;
  }, {}))
*/

export const chainNames: {
  [id: string]: {
    name: string;
    image: string;
  };
} = {
  '1': {
    name: 'Ethereum Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_ethereum.jpg&w=64&q=75',
  },
  '2': {
    name: 'Expanse Network',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '3': {
    name: 'Ropsten',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '4': {
    name: 'Rinkeby',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '5': {
    name: 'Görli',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '6': {
    name: 'Ethereum Classic Testnet Kotti',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '7': {
    name: 'ThaiChain',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '8': {
    name: 'Ubiq',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_ubiq.jpg&w=64&q=75',
  },
  '9': {
    name: 'Ubiq Network Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '10': {
    name: 'Optimism',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_optimism.jpg&w=64&q=75',
  },
  '11': {
    name: 'Metadium Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '12': {
    name: 'Metadium Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '13': {
    name: 'Diode Testnet Staging',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '14': {
    name: 'Flare Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '15': {
    name: 'Diode Prenet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '16': {
    name: 'Flare Testnet Coston',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '17': {
    name: 'ThaiChain 2.0 ThaiFi',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '18': {
    name: 'ThunderCore Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '19': {
    name: 'Songbird Canary-Network',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_songbird.jpg&w=64&q=75',
  },
  '20': {
    name: 'Elastos Smart Chain',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_elastos.jpg&w=64&q=75',
  },
  '21': {
    name: 'ELA-ETH-Sidechain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '22': {
    name: 'ELA-DID-Sidechain Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '23': {
    name: 'ELA-DID-Sidechain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '24': {
    name: 'Dithereum Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '25': {
    name: 'Cronos Mainnet Beta',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_cronos.jpg&w=64&q=75',
  },
  '26': {
    name: 'Genesis L1 testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '27': {
    name: 'ShibaChain',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '28': {
    name: 'Boba Network Rinkeby Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '29': {
    name: 'Genesis L1',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '30': {
    name: 'RSK Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_rsk.jpg&w=64&q=75',
  },
  '31': {
    name: 'RSK Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '32': {
    name: 'GoodData Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '33': {
    name: 'GoodData Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '34': {
    name: 'Dithereum Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '35': {
    name: 'TBWG Chain',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '38': {
    name: 'Valorbit',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '40': {
    name: 'Telos EVM Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_telos.jpg&w=64&q=75',
  },
  '41': {
    name: 'Telos EVM Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '42': {
    name: 'Kovan',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '43': {
    name: 'Darwinia Pangolin Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '44': {
    name: 'Darwinia Crab Network',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '45': {
    name: 'Darwinia Pangoro Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '50': {
    name: 'XinFin Network Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '51': {
    name: 'XinFin Apothem Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '52': {
    name: 'CoinEx Smart Chain Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_csc.jpg&w=64&q=75',
  },
  '53': {
    name: 'CoinEx Smart Chain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '54': {
    name: 'Openpiece Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '55': {
    name: 'Zyx Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_zyx.jpg&w=64&q=75',
  },
  '56': {
    name: 'Binance Smart Chain Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_binance.jpg&w=64&q=75',
  },
  '57': {
    name: 'Syscoin Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_syscoin.jpg&w=64&q=75',
  },
  '58': {
    name: 'Ontology Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '59': {
    name: 'EOS Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '60': {
    name: 'GoChain',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_gochain.jpg&w=64&q=75',
  },
  '61': {
    name: 'Ethereum Classic Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '62': {
    name: 'Ethereum Classic Testnet Morden',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '63': {
    name: 'Ethereum Classic Testnet Mordor',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '64': {
    name: 'Ellaism',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '65': {
    name: 'OKExChain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '66': {
    name: 'OKXChain Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_okexchain.jpg&w=64&q=75',
  },
  '67': {
    name: 'DBChain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '68': {
    name: 'SoterOne Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '69': {
    name: 'Optimism Kovan',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '70': {
    name: 'Hoo Smart Chain',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_hoo.jpg&w=64&q=75',
  },
  '71': {
    name: 'Conflux eSpace (Testnet)',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '74': {
    name: 'IDChain Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '76': {
    name: 'Mix',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '77': {
    name: 'POA Network Sokol',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '78': {
    name: 'PrimusChain mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '79': {
    name: 'Zenith Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '80': {
    name: 'GeneChain',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '81': {
    name: 'Zenith Testnet (Vilnius)',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '82': {
    name: 'Meter Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_meter.jpg&w=64&q=75',
  },
  '83': {
    name: 'Meter Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '85': {
    name: 'GateChain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '86': {
    name: 'GateChain Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '87': {
    name: 'Nova Network',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '88': {
    name: 'TomoChain',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_tomochain.jpg&w=64&q=75',
  },
  '89': {
    name: 'TomoChain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '90': {
    name: 'Garizon Stage0',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '91': {
    name: 'Garizon Stage1',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '92': {
    name: 'Garizon Stage2',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '93': {
    name: 'Garizon Stage3',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '95': {
    name: 'CryptoKylin Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '96': {
    name: 'NEXT Smart Chain',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '97': {
    name: 'Binance Smart Chain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '99': {
    name: 'POA Network Core',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '100': {
    name: 'Gnosis',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_xdai.jpg&w=64&q=75',
  },
  '101': {
    name: 'EtherInc',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '102': {
    name: 'Web3Games Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '105': {
    name: 'Web3Games Devnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '106': {
    name: 'Velas EVM Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_velas.jpg&w=64&q=75',
  },
  '107': {
    name: 'Nebula Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '108': {
    name: 'ThunderCore Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_thundercore.jpg&w=64&q=75',
  },
  '110': {
    name: 'Proton Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '111': {
    name: 'EtherLite Chain',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '122': {
    name: 'Fuse Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_fuse.jpg&w=64&q=75',
  },
  '123': {
    name: 'Fuse Sparknet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '124': {
    name: 'Decentralized Web Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '125': {
    name: 'OYchain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '126': {
    name: 'OYchain Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '127': {
    name: 'Factory 127 Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '128': {
    name: 'Huobi ECO Chain Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_heco.jpg&w=64&q=75',
  },
  '137': {
    name: 'Polygon Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_polygon.jpg&w=64&q=75',
  },
  '141': {
    name: 'Openpiece Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '142': {
    name: 'DAX CHAIN',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '162': {
    name: 'Lightstreams Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '163': {
    name: 'Lightstreams Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '168': {
    name: 'AIOZ Network',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '170': {
    name: 'HOO Smart Chain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '172': {
    name: 'Latam-Blockchain Resil Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '180': {
    name: 'AME Chain Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '186': {
    name: 'Seele Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '188': {
    name: 'BMC Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '189': {
    name: 'BMC Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '193': {
    name: 'Crypto Emergency',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '199': {
    name: 'BitTorrent Chain Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '200': {
    name: 'Arbitrum on xDai',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '211': {
    name: 'Freight Trust Network',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '218': {
    name: 'SoterOne Mainnet old',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '222': {
    name: 'Permission',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '225': {
    name: 'LACHAIN Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '226': {
    name: 'LACHAIN Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '239': {
    name: 'Aitd Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '246': {
    name: 'Energy Web Chain',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_energyweb.jpg&w=64&q=75',
  },
  '250': {
    name: 'Fantom Opera',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_fantom.jpg&w=64&q=75',
  },
  '256': {
    name: 'Huobi ECO Chain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '258': {
    name: 'Setheum',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '262': {
    name: 'SUR Blockchain Network',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '269': {
    name: 'High Performance Blockchain',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_hpb.jpg&w=64&q=75',
  },
  '288': {
    name: 'Boba Network',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_boba.jpg&w=64&q=75',
  },
  '300': {
    name: 'Optimism on Gnosis Chain',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '321': {
    name: 'KCC Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_kucoin.jpg&w=64&q=75',
  },
  '322': {
    name: 'KCC Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '333': {
    name: 'Web3Q Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '335': {
    name: 'DFK Chain Test',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '336': {
    name: 'Shiden',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_shiden.jpg&w=64&q=75',
  },
  '338': {
    name: 'Cronos Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '361': {
    name: 'Theta Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_theta.jpg&w=64&q=75',
  },
  '363': {
    name: 'Theta Sapphire Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '364': {
    name: 'Theta Amber Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '365': {
    name: 'Theta Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '369': {
    name: 'PulseChain Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '385': {
    name: 'Lisinski',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '416': {
    name: 'SX Network Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '420': {
    name: 'Optimistic Ethereum Testnet Goerli',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '499': {
    name: 'Rupaya',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '512': {
    name: 'Double-A Chain Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '513': {
    name: 'Double-A Chain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '520': {
    name: 'XT Smart Chain Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '534': {
    name: 'Candle',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '555': {
    name: 'Vela1 Chain Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '558': {
    name: 'Tao Network',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '588': {
    name: 'Metis Stardust Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '592': {
    name: 'Astar',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_astar.jpg&w=64&q=75',
  },
  '595': {
    name: 'Acala Mandala Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '596': {
    name: 'Karura Network Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '597': {
    name: 'Acala Network Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '600': {
    name: 'Meshnyan testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '647': {
    name: 'SX Network Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '666': {
    name: 'Pixie Chain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '686': {
    name: 'Karura Network',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '700': {
    name: 'Star Social Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '707': {
    name: 'BlockChain Station Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '708': {
    name: 'BlockChain Station Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '721': {
    name: 'Factory 127 Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '776': {
    name: 'OpenChain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '777': {
    name: 'cheapETH',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '787': {
    name: 'Acala Network',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '788': {
    name: 'Aerochain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '803': {
    name: 'Haic',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '820': {
    name: 'Callisto Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_callisto.jpg&w=64&q=75',
  },
  '821': {
    name: 'Callisto Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '880': {
    name: 'Ambros Chain Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '888': {
    name: 'Wanchain',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_wanchain.jpg&w=64&q=75',
  },
  '900': {
    name: 'Garizon Testnet Stage0',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '901': {
    name: 'Garizon Testnet Stage1',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '902': {
    name: 'Garizon Testnet Stage2',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '903': {
    name: 'Garizon Testnet Stage3',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '940': {
    name: 'PulseChain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '941': {
    name: 'PulseChain Testnet v2b',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '942': {
    name: 'PulseChain Testnet v3',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '977': {
    name: 'Nepal Blockchain Network',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '980': {
    name: 'TOP Mainnet EVM',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '989': {
    name: 'TOP Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '998': {
    name: 'Lucky Network',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '999': {
    name: 'Wanchain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1001': {
    name: 'Klaytn Testnet Baobab',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1007': {
    name: 'Newton Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1008': {
    name: 'Eurus Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1010': {
    name: 'Evrice Network',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1012': {
    name: 'Newton',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1022': {
    name: 'Sakura',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1023': {
    name: 'Clover Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1024': {
    name: 'CLV Parachain',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1028': {
    name: 'BitTorrent Chain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1030': {
    name: 'Conflux eSpace',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1088': {
    name: 'Metis Andromeda Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_metis.jpg&w=64&q=75',
  },
  '1139': {
    name: 'MathChain',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1140': {
    name: 'MathChain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1197': {
    name: 'Iora Chain',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1201': {
    name: 'Evanesco Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1202': {
    name: 'World Trade Technical Chain Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1213': {
    name: 'Popcateum Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1214': {
    name: 'EnterChain Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1280': {
    name: 'HALO Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1284': {
    name: 'Moonbeam',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_moonbeam.jpg&w=64&q=75',
  },
  '1285': {
    name: 'Moonriver',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_moonriver.jpg&w=64&q=75',
  },
  '1286': {
    name: 'Moonrock old',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1287': {
    name: 'Moonbase Alpha',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1288': {
    name: 'Moonrock',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1337': {
    name: 'CENNZnet old',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1506': {
    name: 'Sherpax Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1507': {
    name: 'Sherpax Testnet',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '1618': {
    name: 'Catecoin Chain Mainnet',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '1620': {
    name: 'Atheios',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '1657': {
    name: 'Btachain',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '1688': {
    name: 'LUDAN Mainnet',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '1818': {
    name: 'Cube Chain Mainnet',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '1819': {
    name: 'Cube Chain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1856': {
    name: 'Teslafunds',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1898': {
    name: 'BON Network',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1984': {
    name: 'Eurus Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1987': {
    name: 'EtherGem',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '2001': {
    name: 'Milkomeda C1 Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '2008': {
    name: 'CloudWalk Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '2009': {
    name: 'CloudWalk Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '2021': {
    name: 'Edgeware Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '2022': {
    name: 'Beresheet Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '2023': {
    name: 'Taycan Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '2025': {
    name: 'Rangers Protocol Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '2100': {
    name: 'Ecoball Mainnet',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '2101': {
    name: 'Ecoball Testnet Espuma',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '2152': {
    name: 'Findora Mainnet',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '2153': {
    name: 'Findora Testnet',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '2213': {
    name: 'Evanesco Mainnet',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '2221': {
    name: 'Kava EVM Testnet',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '2222': {
    name: 'Kava EVM',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '2223': {
    name: 'VChain Mainnet',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '2559': {
    name: 'Kortho Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '2569': {
    name: 'TechPay Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '2612': {
    name: 'EZChain C-Chain Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '2613': {
    name: 'EZChain C-Chain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '3000': {
    name: 'CENNZnet Rata',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '3001': {
    name: 'CENNZnet Nikau',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '3331': {
    name: 'ZCore Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '3333': {
    name: 'Web3Q Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '3334': {
    name: 'Web3Q Galileo',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '3400': {
    name: 'Paribu Net Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '3500': {
    name: 'Paribu Net Testnet',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '3690': {
    name: 'Bittex Mainnet',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '3737': {
    name: 'Crossbell',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '3966': {
    name: 'DYNO Mainnet',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '3967': {
    name: 'DYNO Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '3999': {
    name: 'YuanChain Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '4002': {
    name: 'Fantom Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '4102': {
    name: 'AIOZ Network Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '4181': {
    name: 'PHI Network',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '4689': {
    name: 'IoTeX Network Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_iotex.jpg&w=64&q=75',
  },
  '4690': {
    name: 'IoTeX Network Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '4918': {
    name: 'Venidium Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '4919': {
    name: 'Venidium Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '5177': {
    name: 'TLChain Network Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '5197': {
    name: 'EraSwap Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '5315': {
    name: 'Uzmi Network Mainnet',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '5551': {
    name: 'Nahmii Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_nahmii.jpg&w=64&q=75',
  },
  '5553': {
    name: 'Nahmii Testnet',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '5700': {
    name: 'Syscoin Tanenbaum Testnet',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '5777': {
    name: 'Digest Swarm Chain',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '5851': {
    name: 'Ontology Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '5869': {
    name: 'Wegochain Rubidium Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '6626': {
    name: 'Pixie Chain Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '7027': {
    name: 'Ella the heart',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '7341': {
    name: 'Shyft Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '7777': {
    name: 'Rise of the Warbots Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '7878': {
    name: 'Hazlor Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '8000': {
    name: 'Teleport',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '8001': {
    name: 'Teleport Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '8029': {
    name: 'MDGL Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '8080': {
    name: 'GeneChain Adenine Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '8217': {
    name: 'Klaytn Mainnet Cypress',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_klaytn.jpg&w=64&q=75',
  },
  '8285': {
    name: 'KorthoTest',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '8723': {
    name: 'TOOL Global Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '8724': {
    name: 'TOOL Global Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '8888': {
    name: 'Ambros Chain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '8898': {
    name: 'Mammoth Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '8995': {
    name: 'bloxberg',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '9000': {
    name: 'Evmos Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '9001': {
    name: 'Evmos',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '9100': {
    name: 'Genesis Coin',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '9527': {
    name: 'Rangers Protocol Testnet Robin',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '9999': {
    name: 'myOwn Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '10000': {
    name: 'Smart Bitcoin Cash',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_smartbch.jpg&w=64&q=75',
  },
  '10001': {
    name: 'Smart Bitcoin Cash Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '10101': {
    name: 'Blockchain Genesis Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '10823': {
    name: 'CryptoCoinPay',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '10946': {
    name: 'Quadrans Blockchain',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '10947': {
    name: 'Quadrans Blockchain Testnet',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '11111': {
    name: 'WAGMI',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '11437': {
    name: 'Shyft Testnet',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '12051': {
    name: 'Singularity ZERO Testnet',
    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  '12052': {
    name: 'Singularity ZERO Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '13381': {
    name: 'Phoenix Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '16000': {
    name: 'MetaDot Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '16001': {
    name: 'MetaDot Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '16888': {
    name: 'IVAR Chain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '19845': {
    name: 'BTCIX Network',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '21337': {
    name: 'CENNZnet Azalea',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '21816': {
    name: 'omChain Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '22023': {
    name: 'Taycan',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '24484': {
    name: 'Webchain',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '24734': {
    name: 'MintMe.com Coin',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '26863': {
    name: 'OasisChain Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '30067': {
    name: 'Piece testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '31102': {
    name: 'Ethersocial Network',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '31337': {
    name: 'GoChain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '32520': {
    name: 'Bitgert Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '32659': {
    name: 'Fusion Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_fusion.jpg&w=64&q=75',
  },
  '39797': {
    name: 'Energi Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '42069': {
    name: 'pegglecoin',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '42161': {
    name: 'Arbitrum One',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_arbitrum.jpg&w=64&q=75',
  },
  '42220': {
    name: 'Celo Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_celo.jpg&w=64&q=75',
  },
  '42261': {
    name: 'Emerald Paratime Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '42262': {
    name: 'Emerald Paratime Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_oasis.jpg&w=64&q=75',
  },
  '43110': {
    name: 'Athereum',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '43113': {
    name: 'Avalanche Fuji Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '43114': {
    name: 'Avalanche C-Chain',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_avalanche.jpg&w=64&q=75',
  },
  '44787': {
    name: 'Celo Alfajores Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '45000': {
    name: 'Autobahn Network',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '47805': {
    name: 'REI Network',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '49797': {
    name: 'Energi Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '53935': {
    name: 'DFK Chain',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '55555': {
    name: 'REI Chain Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '55556': {
    name: 'REI Chain Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '60000': {
    name: 'Thinkium Testnet Chain 0',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '60001': {
    name: 'Thinkium Testnet Chain 1',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '60002': {
    name: 'Thinkium Testnet Chain 2',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '60103': {
    name: 'Thinkium Testnet Chain 103',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '62320': {
    name: 'Celo Baklava Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '62621': {
    name: 'MultiVAC Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '63000': {
    name: 'eCredits Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '63001': {
    name: 'eCredits Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '69420': {
    name: 'Condrieu',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '70000': {
    name: 'Thinkium Mainnet Chain 0',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '70001': {
    name: 'Thinkium Mainnet Chain 1',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '70002': {
    name: 'Thinkium Mainnet Chain 2',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '70103': {
    name: 'Thinkium Mainnet Chain 103',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '71393': {
    name: 'Polyjuice Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '71401': {
    name: 'Godwoken Testnet (V1.1)',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '71402': {
    name: 'Godwoken Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_godwoken.jpg&w=64&q=75',
  },
  '73799': {
    name: 'Energy Web Volta Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '78110': {
    name: 'Firenze test network',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '80001': {
    name: 'Mumbai',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '88888': {
    name: 'IVAR Chain Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '99998': {
    name: 'UB Smart Chain(testnet)',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '99999': {
    name: 'UB Smart Chain',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '100000': {
    name: 'QuarkChain Mainnet Root',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '100001': {
    name: 'QuarkChain Mainnet Shard 0',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '100002': {
    name: 'QuarkChain Mainnet Shard 1',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '100003': {
    name: 'QuarkChain Mainnet Shard 2',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '100004': {
    name: 'QuarkChain Mainnet Shard 3',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '100005': {
    name: 'QuarkChain Mainnet Shard 4',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '100006': {
    name: 'QuarkChain Mainnet Shard 5',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '100007': {
    name: 'QuarkChain Mainnet Shard 6',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '100008': {
    name: 'QuarkChain Mainnet Shard 7',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '103090': {
    name: 'Crystaleum',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '108801': {
    name: 'BROChain Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '110000': {
    name: 'QuarkChain Devnet Root',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '110001': {
    name: 'QuarkChain Devnet Shard 0',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '110002': {
    name: 'QuarkChain Devnet Shard 1',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '110003': {
    name: 'QuarkChain Devnet Shard 2',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '110004': {
    name: 'QuarkChain Devnet Shard 3',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '110005': {
    name: 'QuarkChain Devnet Shard 4',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '110006': {
    name: 'QuarkChain Devnet Shard 5',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '110007': {
    name: 'QuarkChain Devnet Shard 6',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '110008': {
    name: 'QuarkChain Devnet Shard 7',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '200101': {
    name: 'Milkomeda C1 Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '200625': {
    name: 'Akroma',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '201018': {
    name: 'Alaya Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '201030': {
    name: 'Alaya Dev Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '210425': {
    name: 'PlatON Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '234666': {
    name: 'Haymo Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '246529': {
    name: 'ARTIS sigma1',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '246785': {
    name: 'ARTIS Testnet tau1',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '281121': {
    name: 'Social Smart Chain Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '333888': {
    name: 'Polis Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '333999': {
    name: 'Polis Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_polis.jpg&w=64&q=75',
  },
  '421611': {
    name: 'Arbitrum Rinkeby',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '432201': {
    name: 'Dexalot Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '444900': {
    name: 'Weelink Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '474142': {
    name: 'OpenChain Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '512512': {
    name: 'CMP-Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '666666': {
    name: 'Vision - Vpioneer Test Chain',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '888888': {
    name: 'Vision - Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '955305': {
    name: 'Eluvio Content Fabric',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1313114': {
    name: 'Etho Protocol',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1313500': {
    name: 'Xerom',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1337702': {
    name: 'Kintsugi',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1337802': {
    name: 'Kiln',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '2203181': {
    name: 'PlatON Dev Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '2206132': {
    name: 'PlatON Dev Testnet2',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '7762959': {
    name: 'Musicoin',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '11155111': {
    name: 'Sepolia',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '13371337': {
    name: 'PepChain Churchill',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '18289463': {
    name: 'IOLite',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '20180430': {
    name: 'SmartMesh Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '20181205': {
    name: 'quarkblockchain',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '28945486': {
    name: 'Auxilium Network Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '35855456': {
    name: 'Joys Digital Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '61717561': {
    name: 'Aquachain',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '99415706': {
    name: 'Joys Digital TestNet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '192837465': {
    name: 'Gather Mainnet Network',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '245022926': {
    name: 'Neon EVM DevNet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '245022934': {
    name: 'Neon EVM MainNet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '245022940': {
    name: 'Neon EVM TestNet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '311752642': {
    name: 'OneLedger Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '356256156': {
    name: 'Gather Testnet Network',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '486217935': {
    name: 'Gather Devnet Network',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1122334455': {
    name: 'IPOS Network',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1313161554': {
    name: 'Aurora Mainnet',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_aurora.jpg&w=64&q=75',
  },
  '1313161555': {
    name: 'Aurora Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1313161556': {
    name: 'Aurora Betanet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1666600000': {
    name: 'Harmony Mainnet Shard 0',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_harmony.jpg&w=64&q=75',
  },
  '1666600001': {
    name: 'Harmony Mainnet Shard 1',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1666600002': {
    name: 'Harmony Mainnet Shard 2',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1666600003': {
    name: 'Harmony Mainnet Shard 3',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1666700000': {
    name: 'Harmony Testnet Shard 0',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1666700001': {
    name: 'Harmony Testnet Shard 1',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1666700002': {
    name: 'Harmony Testnet Shard 2',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '1666700003': {
    name: 'Harmony Testnet Shard 3',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '2021121117': {
    name: 'DataHopper',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '3125659152': {
    name: 'Pirl',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '4216137055': {
    name: 'OneLedger Testnet Frankenstein',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '11297108109': {
    name: 'Palm',
    image:
      'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_palm.jpg&w=64&q=75',
  },
  '11297108099': {
    name: 'Palm Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '197710212030': {
    name: 'Ntity Mainnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '197710212031': {
    name: 'Haradev Testnet',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '6022140761023': {
    name: 'Molereum Network',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
  '868455272153094': {
    name: 'Godwoken Testnet (V1)',
    image: 'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=64&q=75',
  },
};
