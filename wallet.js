const { Connection, PublicKey, Keypair, Transaction, SystemProgram, sendAndConfirmTransaction } = require('@solana/web3.js');

const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const fromWallet = Keypair.generate();
const toWallet = new PublicKey("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

async function sendSol() {
    const transaction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: fromWallet.publicKey,
            toPubkey: toWallet,
            lamports: 100000000, // 0.1 SOL
        })
    );

    const signature = await sendAndConfirmTransaction(
        connection,
        transaction,
        [fromWallet]
    );

    console.log("Transaction signature:", signature);
}

sendSol();
