import axios from 'axios';

// TODO: trocar pela URL real do backend Node.js quando ele existir.
// Em desenvolvimento local com Expo, "localhost" não funciona no dispositivo/emulador —
// use o IP da máquina na rede local (ex: http://192.168.0.10:3000).
const BASE_URL = 'http://localhost:3000/api';

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// TODO: interceptor para anexar o token JWT nas requisições, quando auth existir.
