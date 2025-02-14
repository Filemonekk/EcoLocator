import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const AIRTABLE_APIKEY = import.meta.env.VITE_AIRTABLE_APIKEY
const USERS_TABLE_ID = import.meta.env.VITE_USERS_TABLE_ID
const TABLE_NAME = import.meta.env.VITE_USERS
const AIRTABLE_URL = `https://api.airtable.com/v0/${USERS_TABLE_ID}/${TABLE_NAME}`

export const fetchAirtableData = async () => {
	try {
		const response = await axios.get(AIRTABLE_URL, {
			headers: {
				Authorization: `Bearer ${AIRTABLE_APIKEY}`,
			},
		})
		return response.data.records
	} catch (error) {
		console.error('Error fetching data from Airtable:', error)
		throw new Error('Nie udało się pobrać danych.')
	}
}

export const useAirtableData = () => {
	return useQuery({
		queryKey: ['airtableData'], // Klucz zapytania (do cache)
		queryFn: fetchAirtableData, // Funkcja pobierająca dane
		staleTime: 1000 * 60 * 5, // Cache na 5 minut
		retry: 2, // Liczba prób w razie błędu
	})
}

console.log('Fetching from:', AIRTABLE_URL)
