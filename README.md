# Solana Test Token
Solana Test Token Development (RUST)
## Setup
### Install Rust

Ubuntu/Linux
```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
```

### Install Solana CLI (Latest current v1.17.24)
```
sh -c "$(curl -sSfL https://release.solana.com/v1.17.24/install)"
export PATH="$HOME/.local/share/solana/install/active_release/bin:$PATH"
```

### Install Node.js and NPM
```
sudo apt update
sudo apt install nodejs npm
```

### Install Anchor (Cargo pre-requisite)
```
sudo apt install cargo
cargo install --git https://github.com/project-serum/anchor --tag v0.22.1 anchor-cli --locked
```

### Install Solana Web3.js

```
npm install @solana/web3.js
```


## Set Up a New Solana Project

### Create a new Anchor project
```
anchor init test_token
cd test_token
```

### Configure Solana CLI
```
solana config set --url localhost
```

### Create new keypair for wallet
```
solana-keygen new -o ~/.config/solana/id.json
```

### Airdrop some SOL to wallet for testing

```
solana airdrop 10
```

### Define Token

Define token in test_token/src/lib.rs

Example:
```
use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod my_token {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}

```

### Build and Deploy

```
anchor build
anchor deploy
```

### Create and Mint Tokens

```
spl-token create-token
spl-token create-account <TOKEN_MINT_ADDRESS>
spl-token mint <TOKEN_MINT_ADDRESS> <AMOUNT>
```


### Test Wallet Code

```
node wallet.js
```

### Deploy to Mainnet (Make REAL Token)

```
solana config set --url https://api.mainnet-beta.solana.com
anchor deploy
```