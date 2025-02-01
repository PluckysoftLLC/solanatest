import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { TestToken } from "../target/types/test_token";

describe("test_token", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.TestToken as Program<TestToken>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
