// Hardcoded list of cryptocurrencies that may be used as a *payment method*
// for funding (deposit) and payout (withdraw) of the user's USD wallet.
// These are NOT user-balance assets in the deposit/withdraw flow — they are
// only conduits. Live USD prices come from CoinGecko via useCoinList().

export type PaymentCoin = {
  symbol: string;
  name: string;
  coingecko_id: string;
  defaultNetwork: string;
  networks: string[];
};

export const PAYMENT_COINS: PaymentCoin[] = [
  { symbol: "BTC",  name: "Bitcoin",   coingecko_id: "bitcoin",      defaultNetwork: "Bitcoin",     networks: ["Bitcoin"] },
  { symbol: "ETH",  name: "Ethereum",  coingecko_id: "ethereum",     defaultNetwork: "ERC-20",      networks: ["ERC-20"] },
  { symbol: "USDT", name: "Tether",    coingecko_id: "tether",       defaultNetwork: "TRC-20",      networks: ["ERC-20", "TRC-20", "Solana"] },
  { symbol: "USDC", name: "USD Coin",  coingecko_id: "usd-coin",     defaultNetwork: "ERC-20",      networks: ["ERC-20", "TRC-20", "Solana"] },
  { symbol: "SOL",  name: "Solana",    coingecko_id: "solana",       defaultNetwork: "Solana",      networks: ["Solana"] },
  { symbol: "TRX",  name: "Tron",      coingecko_id: "tron",         defaultNetwork: "Tron",        networks: ["Tron"] },
  { symbol: "XRP",  name: "Ripple",    coingecko_id: "ripple",       defaultNetwork: "XRP Ledger",  networks: ["XRP Ledger"] },
];

export const DEFAULT_PAYMENT_COIN = "BTC";

export const PAYMENT_COIN_SYMBOLS = PAYMENT_COINS.map((c) => c.symbol);
