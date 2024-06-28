
import { mnemonicToWalletKey } from "@ton/crypto";
import { WalletContractV4, WalletContractV3R2 } from "@ton/ton";

async function main() {
  // open wallet v4 (notice the correct wallet version here)
  const mnemonic = "craft one glory creek surround social split donor orchard obscure emerge often cherry attend frequent split torch brother undo leg staff tip vague cattle"; // your 24 secret words (replace ... with the rest of the words)
  const key = await mnemonicToWalletKey(mnemonic.split(" "));
  const wallet = /* WalletContractV4 */ WalletContractV3R2.create({ publicKey: key.publicKey, workchain: 0 });

  // print wallet address
  console.log(wallet.address.toString({ testOnly: true }));

  // print wallet workchain
  console.log("workchain:", wallet.address.workChain);
}

main();
