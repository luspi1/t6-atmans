import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			src: '/src',
		},
	},
	server: {
		// host: '192.168.31.171',
		port: 5666,
		open: true,
		cors: {
			origin: '*',
			methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
			allowedHeaders: ['Content-Type', 'Authorization'],
		},
	},
})
