import api from '../utils/api'

export default class BaseService {
	private _routeBase: string

	constructor(routeBase: string) {
		this._routeBase = routeBase
	}

	async store(data: object) {
		const response = await api.post(`${this._routeBase}/store`, data)
		return response.data.result.data
	}

	async update(id: string, data: object) {
		const response = await api.post(`${this._routeBase}/update/${id}`, data)
		return response.data.result.data
	}

	async delete(id: string) {
		const response = await api.delete(`${this._routeBase}/delete/${id}`)
		return response.data.result.data
	}

	async getOne(data: object) {
		const response = await api.post(`${this._routeBase}/get`, data)
		return response.data.result.data
	}

	async getAll() {
		const response = await api.get(`${this._routeBase}/getAll`)
		return response.data.result.data
	}

	async getAllWithPaginate(page: number, limit: number) {
		const response = await api.get(`${this._routeBase}/getAllWithPaginate?page=${page}&limit=${limit}`)
		return response.data.result.data
	}
}
