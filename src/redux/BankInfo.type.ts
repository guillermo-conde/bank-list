export type BankInfoType = {
    age: number;
    bankName: string;
    description: string;
    url: string;
}

export type ActionType = {
    type: string;
    payload: BankInfoType;
}

export type RootStoreType = {
    bankStore: BankInfoType[];
}