import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://pxsxynchnzplllfoxlje.supabase.co/rest/v1',
    headers: {
        apikey: "SUPABASE_CLIENT_ANON_KEY",
        authorization: "Portador SUPABASE_CLIENT_ANON_KEY"
    }
})