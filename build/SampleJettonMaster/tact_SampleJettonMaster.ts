import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type InternalAdd = {
    $$type: 'InternalAdd';
    amount: bigint;
    origin: Address;
}

export function storeInternalAdd(src: InternalAdd) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(306259763, 32);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.origin);
    };
}

export function loadInternalAdd(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 306259763) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadCoins();
    let _origin = sc_0.loadAddress();
    return { $$type: 'InternalAdd' as const, amount: _amount, origin: _origin };
}

function loadTupleInternalAdd(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _origin = source.readAddress();
    return { $$type: 'InternalAdd' as const, amount: _amount, origin: _origin };
}

function storeTupleInternalAdd(source: InternalAdd) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.origin);
    return builder.build();
}

function dictValueParserInternalAdd(): DictionaryValue<InternalAdd> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeInternalAdd(src)).endCell());
        },
        parse: (src) => {
            return loadInternalAdd(src.loadRef().beginParse());
        }
    }
}

export type TransferToMaster = {
    $$type: 'TransferToMaster';
    amount: bigint;
    masterAddress: Address;
}

export function storeTransferToMaster(src: TransferToMaster) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2969903496, 32);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.masterAddress);
    };
}

export function loadTransferToMaster(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2969903496) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadCoins();
    let _masterAddress = sc_0.loadAddress();
    return { $$type: 'TransferToMaster' as const, amount: _amount, masterAddress: _masterAddress };
}

function loadTupleTransferToMaster(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _masterAddress = source.readAddress();
    return { $$type: 'TransferToMaster' as const, amount: _amount, masterAddress: _masterAddress };
}

function storeTupleTransferToMaster(source: TransferToMaster) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.masterAddress);
    return builder.build();
}

function dictValueParserTransferToMaster(): DictionaryValue<TransferToMaster> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTransferToMaster(src)).endCell());
        },
        parse: (src) => {
            return loadTransferToMaster(src.loadRef().beginParse());
        }
    }
}

export type TransferToUser = {
    $$type: 'TransferToUser';
    amount: bigint;
    userAddress: Address;
}

export function storeTransferToUser(src: TransferToUser) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3636692119, 32);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.userAddress);
    };
}

export function loadTransferToUser(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3636692119) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadCoins();
    let _userAddress = sc_0.loadAddress();
    return { $$type: 'TransferToUser' as const, amount: _amount, userAddress: _userAddress };
}

function loadTupleTransferToUser(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _userAddress = source.readAddress();
    return { $$type: 'TransferToUser' as const, amount: _amount, userAddress: _userAddress };
}

function storeTupleTransferToUser(source: TransferToUser) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.userAddress);
    return builder.build();
}

function dictValueParserTransferToUser(): DictionaryValue<TransferToUser> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTransferToUser(src)).endCell());
        },
        parse: (src) => {
            return loadTransferToUser(src.loadRef().beginParse());
        }
    }
}

 type SampleJettonMaster_init_args = {
    $$type: 'SampleJettonMaster_init_args';
}

function initSampleJettonMaster_init_args(src: SampleJettonMaster_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
    };
}

async function SampleJettonMaster_init() {
    const __code = Cell.fromBase64('te6ccgECFQEAA0YAART/APSkE/S88sgLAQIBYgIDApbQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zzy4ILI+EMBzH8BygAB+gLJ7VQQBAIBWAwNBNYBkjB/4HAh10nCH5UwINcLH94gghASQSczuo89MNMfAYIQEkEnM7ry4IH6APpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgSbBIwoIj4QgF/bds8f+AgghDYw4SXuuMCghCUapi2ugUJBgcALAAAAAByZWNlaXZlZCBmcm9tIHVzZXIDoDDTHwGCENjDhJe68uCB+gD6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIEmwSggDVV12+8vRRIaFZcn9VIG1tbds8iPhCAX9t2zx/CggJAViOp9MfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+AwcAkALgAAAAB0cmFuc2ZlcnJlZCB0byB1c2VyATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPAoByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsACwCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAIBIA4PAgFIExQCD7fqe2ebZ4YwEBEAubd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4DepO98qiy3jjqenvAqzhk0E4TsunLVmnZbmdB0s2yjN0UkAE87UTQ1AH4Y9IAAZT6AAEx4DD4KNcLCoMJuvLgids8EgACIAACcAARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1XUG4xOGhEY1A0ejd0TlZkdFlaRWdOMnJnOE5YQVJ5VDhBa21GaFk1dWZMeYIA==');
    const __system = Cell.fromBase64('te6cckECFwEAA1AAAQHAAQEFoC8xAgEU/wD0pBP0vPLICwMCAWIEDQKW0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wds88uCCyPhDAcx/AcoAAfoCye1UEAUE1gGSMH/gcCHXScIflTAg1wsf3iCCEBJBJzO6jz0w0x8BghASQSczuvLggfoA+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBJsEjCgiPhCAX9t2zx/4CCCENjDhJe64wKCEJRqmLa6BgoHCQAsAAAAAHJlY2VpdmVkIGZyb20gdXNlcgOgMNMfAYIQ2MOEl7ry4IH6APpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgSbBKCANVXXb7y9FEhoVlyf1UgbW1t2zyI+EIBf23bPH8LCAoALgAAAAB0cmFuc2ZlcnJlZCB0byB1c2VyAViOp9MfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+AwcAoBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8CwHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAMAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAgFYDhQCASAPEwIPt+p7Z5tnhjAQEgE87UTQ1AH4Y9IAAZT6AAEx4DD4KNcLCoMJuvLgids8EQACcAACIAC5t3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQAgFIFRYAEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtV1BuMThoRGNQNHo3dE5WZHRZWkVnTjJyZzhOWEFSeVQ4QWttRmhZNXVmTHmCCP4X87');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initSampleJettonMaster_init_args({ $$type: 'SampleJettonMaster_init_args' })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const SampleJettonMaster_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack underflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    54615: { message: `Insufficient balance` },
}

const SampleJettonMaster_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"InternalAdd","header":306259763,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"origin","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"TransferToMaster","header":2969903496,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"masterAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"TransferToUser","header":3636692119,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"userAddress","type":{"kind":"simple","type":"address","optional":false}}]},
]

const SampleJettonMaster_getters: ABIGetter[] = [
    {"name":"getBalance","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
]

const SampleJettonMaster_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"InternalAdd"}},
    {"receiver":"internal","message":{"kind":"typed","type":"TransferToUser"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class SampleJettonMaster implements Contract {
    
    static async init() {
        return await SampleJettonMaster_init();
    }
    
    static async fromInit() {
        const init = await SampleJettonMaster_init();
        const address = contractAddress(0, init);
        return new SampleJettonMaster(address, init);
    }
    
    static fromAddress(address: Address) {
        return new SampleJettonMaster(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  SampleJettonMaster_types,
        getters: SampleJettonMaster_getters,
        receivers: SampleJettonMaster_receivers,
        errors: SampleJettonMaster_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: InternalAdd | TransferToUser | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'InternalAdd') {
            body = beginCell().store(storeInternalAdd(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'TransferToUser') {
            body = beginCell().store(storeTransferToUser(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getGetBalance(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getBalance', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
}