import axios from 'axios'

const AIRTABLE_APIKEY = import.meta.env.VITE_AIRTABLE_APIKEY

export const fetchAirtableData = async (airtableUrl: string) => {
	try {
		const response = await axios.get(airtableUrl, {
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
