import { useQuery } from '@tanstack/react-query'
import {fetchAirtableData} from '../utils/airTableUtils.ts'


const WASTE_TABLE_ID = import.meta.env.VITE_WASTE_TABLE_ID
const TABLE_NAME = import.meta.env.VITE_WASTE
const AIRTABLE_URL_WASTE = `https://api.airtable.com/v0/${WASTE_TABLE_ID}/${TABLE_NAME}`



export const useAirtableDataWaste = () => {
	return useQuery({
		queryKey: ['airtableWasteData'], // Klucz zapytania (do cache)
		queryFn: ()=>  fetchAirtableData(AIRTABLE_URL_WASTE),// Funkcja pobierająca dane
		staleTime: 1000 * 60 * 5, // Cache na 5 minut
		retry: 2, // Liczba prób w razie błędu
	})
}

console.log('Fetching from:', AIRTABLE_URL_WASTE)
