
import { useQuery } from '@tanstack/react-query'
import { fetchAirtableData } from '../utils/airTableUtils.ts'


const USERS_TABLE_ID = import.meta.env.VITE_USERS_TABLE_ID
const TABLE_NAME = import.meta.env.VITE_USERS
const AIRTABLE_URL = `https://api.airtable.com/v0/${USERS_TABLE_ID}/${TABLE_NAME}`



export const useAirtableData = () => {
	return useQuery({
		queryKey: ['airtableData'], // Klucz zapytania (do cache)
		queryFn: ()=>  fetchAirtableData(AIRTABLE_URL), // Funkcja pobierająca dane
		staleTime: 1000 * 60 * 5, // Cache na 5 minut
		retry: 2, // Liczba prób w razie błędu
	})
}

console.log('Fetching from:', AIRTABLE_URL)
