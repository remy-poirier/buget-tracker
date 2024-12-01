import {createContext, useContext, useEffect, useState} from "react";
import {useStorageData} from "@/hooks/use-storage-data";
import {Store} from "@/constants/Store";

const AmountOnAccountContext = createContext<{
	amount: string;
	isLoading: boolean
	refetch: () => Promise<void>;
} | null>(null)

export function useAmountOnAccount() {
	const context = useContext(AmountOnAccountContext);
	if (!context) {
		throw new Error('useAmountOnAccount doit être utilisé dans un AmountOnAccountProvider');
	}
	return context;
}

export const AmountOnAccountProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
	const {data: amount, isLoading, refetch} = useStorageData(Store.AMOUNT_ON_ACCOUNT, "0");

	return (
		<AmountOnAccountContext.Provider value={{amount, isLoading, refetch}}>
			{children}
		</AmountOnAccountContext.Provider>
	)
}
