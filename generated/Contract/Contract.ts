// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get player(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get segment(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class EmergencyWithdrawal extends ethereum.Event {
  get params(): EmergencyWithdrawal__Params {
    return new EmergencyWithdrawal__Params(this);
  }
}

export class EmergencyWithdrawal__Params {
  _event: EmergencyWithdrawal;

  constructor(event: EmergencyWithdrawal) {
    this._event = event;
  }

  get player(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class FundsRedeemedFromExternalPool extends ethereum.Event {
  get params(): FundsRedeemedFromExternalPool__Params {
    return new FundsRedeemedFromExternalPool__Params(this);
  }
}

export class FundsRedeemedFromExternalPool__Params {
  _event: FundsRedeemedFromExternalPool;

  constructor(event: FundsRedeemedFromExternalPool) {
    this._event = event;
  }

  get totalAmount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get totalGamePrincipal(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get totalGameInterest(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class JoinedGame extends ethereum.Event {
  get params(): JoinedGame__Params {
    return new JoinedGame__Params(this);
  }
}

export class JoinedGame__Params {
  _event: JoinedGame;

  constructor(event: JoinedGame) {
    this._event = event;
  }

  get player(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class WinnersAnnouncement extends ethereum.Event {
  get params(): WinnersAnnouncement__Params {
    return new WinnersAnnouncement__Params(this);
  }
}

export class WinnersAnnouncement__Params {
  _event: WinnersAnnouncement;

  constructor(event: WinnersAnnouncement) {
    this._event = event;
  }

  get winners(): Array<Address> {
    return this._event.parameters[0].value.toAddressArray();
  }
}

export class Withdrawal extends ethereum.Event {
  get params(): Withdrawal__Params {
    return new Withdrawal__Params(this);
  }
}

export class Withdrawal__Params {
  _event: Withdrawal;

  constructor(event: Withdrawal) {
    this._event = event;
  }

  get player(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Contract__playersResult {
  value0: Address;
  value1: boolean;
  value2: BigInt;
  value3: BigInt;

  constructor(
    value0: Address,
    value1: boolean,
    value2: BigInt,
    value3: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  adaiToken(): Address {
    let result = super.call("adaiToken", "adaiToken():(address)", []);

    return result[0].toAddress();
  }

  try_adaiToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("adaiToken", "adaiToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  daiToken(): Address {
    let result = super.call("daiToken", "daiToken():(address)", []);

    return result[0].toAddress();
  }

  try_daiToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("daiToken", "daiToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  fee(): BigInt {
    let result = super.call("fee", "fee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_fee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("fee", "fee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  firstSegmentStart(): BigInt {
    let result = super.call(
      "firstSegmentStart",
      "firstSegmentStart():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_firstSegmentStart(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "firstSegmentStart",
      "firstSegmentStart():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getCurrentSegment(): BigInt {
    let result = super.call(
      "getCurrentSegment",
      "getCurrentSegment():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getCurrentSegment(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCurrentSegment",
      "getCurrentSegment():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  iterablePlayers(param0: BigInt): Address {
    let result = super.call(
      "iterablePlayers",
      "iterablePlayers(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_iterablePlayers(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "iterablePlayers",
      "iterablePlayers(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  lastSegment(): BigInt {
    let result = super.call("lastSegment", "lastSegment():(uint256)", []);

    return result[0].toBigInt();
  }

  try_lastSegment(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("lastSegment", "lastSegment():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lendingPoolAddressProvider(): Address {
    let result = super.call(
      "lendingPoolAddressProvider",
      "lendingPoolAddressProvider():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_lendingPoolAddressProvider(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "lendingPoolAddressProvider",
      "lendingPoolAddressProvider():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  players(param0: Address): Contract__playersResult {
    let result = super.call(
      "players",
      "players(address):(address,bool,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new Contract__playersResult(
      result[0].toAddress(),
      result[1].toBoolean(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_players(param0: Address): ethereum.CallResult<Contract__playersResult> {
    let result = super.tryCall(
      "players",
      "players(address):(address,bool,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__playersResult(
        value[0].toAddress(),
        value[1].toBoolean(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  redeemed(): boolean {
    let result = super.call("redeemed", "redeemed():(bool)", []);

    return result[0].toBoolean();
  }

  try_redeemed(): ethereum.CallResult<boolean> {
    let result = super.tryCall("redeemed", "redeemed():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  segmentLength(): BigInt {
    let result = super.call("segmentLength", "segmentLength():(uint256)", []);

    return result[0].toBigInt();
  }

  try_segmentLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "segmentLength",
      "segmentLength():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  segmentPayment(): BigInt {
    let result = super.call("segmentPayment", "segmentPayment():(uint256)", []);

    return result[0].toBigInt();
  }

  try_segmentPayment(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "segmentPayment",
      "segmentPayment():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalGameInterest(): BigInt {
    let result = super.call(
      "totalGameInterest",
      "totalGameInterest():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalGameInterest(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalGameInterest",
      "totalGameInterest():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalGamePrincipal(): BigInt {
    let result = super.call(
      "totalGamePrincipal",
      "totalGamePrincipal():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalGamePrincipal(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalGamePrincipal",
      "totalGamePrincipal():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  winners(param0: BigInt): Address {
    let result = super.call("winners", "winners(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_winners(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("winners", "winners(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _inboundCurrency(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _lendingPoolAddressProvider(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _segmentCount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _segmentLength(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _segmentPayment(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _fee(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class EmergencyWithdrawCall extends ethereum.Call {
  get inputs(): EmergencyWithdrawCall__Inputs {
    return new EmergencyWithdrawCall__Inputs(this);
  }

  get outputs(): EmergencyWithdrawCall__Outputs {
    return new EmergencyWithdrawCall__Outputs(this);
  }
}

export class EmergencyWithdrawCall__Inputs {
  _call: EmergencyWithdrawCall;

  constructor(call: EmergencyWithdrawCall) {
    this._call = call;
  }
}

export class EmergencyWithdrawCall__Outputs {
  _call: EmergencyWithdrawCall;

  constructor(call: EmergencyWithdrawCall) {
    this._call = call;
  }
}

export class JoinGameCall extends ethereum.Call {
  get inputs(): JoinGameCall__Inputs {
    return new JoinGameCall__Inputs(this);
  }

  get outputs(): JoinGameCall__Outputs {
    return new JoinGameCall__Outputs(this);
  }
}

export class JoinGameCall__Inputs {
  _call: JoinGameCall;

  constructor(call: JoinGameCall) {
    this._call = call;
  }
}

export class JoinGameCall__Outputs {
  _call: JoinGameCall;

  constructor(call: JoinGameCall) {
    this._call = call;
  }
}

export class MakeDepositCall extends ethereum.Call {
  get inputs(): MakeDepositCall__Inputs {
    return new MakeDepositCall__Inputs(this);
  }

  get outputs(): MakeDepositCall__Outputs {
    return new MakeDepositCall__Outputs(this);
  }
}

export class MakeDepositCall__Inputs {
  _call: MakeDepositCall;

  constructor(call: MakeDepositCall) {
    this._call = call;
  }
}

export class MakeDepositCall__Outputs {
  _call: MakeDepositCall;

  constructor(call: MakeDepositCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class RedeemFromExternalPoolCall extends ethereum.Call {
  get inputs(): RedeemFromExternalPoolCall__Inputs {
    return new RedeemFromExternalPoolCall__Inputs(this);
  }

  get outputs(): RedeemFromExternalPoolCall__Outputs {
    return new RedeemFromExternalPoolCall__Outputs(this);
  }
}

export class RedeemFromExternalPoolCall__Inputs {
  _call: RedeemFromExternalPoolCall;

  constructor(call: RedeemFromExternalPoolCall) {
    this._call = call;
  }
}

export class RedeemFromExternalPoolCall__Outputs {
  _call: RedeemFromExternalPoolCall;

  constructor(call: RedeemFromExternalPoolCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
