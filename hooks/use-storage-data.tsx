import {useEffect, useState} from "react";
import * as SecureStore from 'expo-secure-store';

async function getValueFor<T>(key: string): Promise<T | undefined> {
	const result = await SecureStore.getItemAsync(key);
	return result ? (JSON.parse(result) as T) : undefined;
}

export const useStorageData = (
	key: string, initialValue?: string
)=> {
	const [data, setData] = useState<string>(initialValue ?? "");
	const [isLoading, setIsLoading] = useState(true);

	const fetchData = async () => {
		try {
			const value = await getValueFor<string>(key);
			if(value) {
				setData(value);
			}
		} catch (error) {
			console.error(`Erreur lors de la récupération de la clé ${key}:`, error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, [key, initialValue]);

	return { data, isLoading, refetch: fetchData };
}
