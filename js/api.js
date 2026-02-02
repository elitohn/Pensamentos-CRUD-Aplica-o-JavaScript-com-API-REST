const URL_BASE = "http://localhost:3000"

const api = {
    async buscarPensamentos() {
        try {
//            const response = await fetch(`${URL_BASE}/pensamentos`)
            const response = await axios.get(`${URL_BASE}/pensamentos`)
//            return await response.json()
            return await response.data
        } 
        catch (error) {
            alert('erro ao buscar pensamentos')
            throw error
        }
    },

    async salvarPensamentos(pensamento) {
        try {
//            const response = await fetch(`${URL_BASE}/pensamentos`, {
            const response = await axios.post(`${URL_BASE}/pensamentos`, pensamento)
//                method: "POST",
//                headers: {
//                    "Content-Type": "application/json"
//                },
//                body: JSON.stringify(pensamento)
//            })
//            return await response.json()
            return await response.data
        } 
        catch (error) {
            alert('erro ao salvar pensamentos')
            throw error
        }
    },

    async buscarPensamentoPorId(id) {
        try {
//            const response = await fetch(`${URL_BASE}/pensamentos/${id}`)
            const response = await axios.get(`${URL_BASE}/pensamentos/${id}`)
//           return await response.json()
            return await response.data
        } 
        catch (error) {
            alert('erro ao buscar pensamento')
            throw error
        }
    },

    async editarPensamento(pensamento) {
        try {
//            const response = await fetch(`${URL_BASE}/pensamentos/${pensamento.id}`, {
            const response = await axios.put(`${URL_BASE}/pensamentos/${pensamento.id}`, pensamento)
//                method: "PUT",
//                headers: {/
//                    "Content-Type": "application/json"
//                },
//                body: JSON.stringify(pensamento)
//            })
//            return await response.json()
            return await response.data
        } 
        catch (error) {
            alert('erro ao editar pensamentos')
            throw error
        }
    },

    async excluirPensamento(id) {
        try {
//            const response = await fetch(`${URL_BASE}/pensamentos/${id}`, {
            const response = await axios.delete(`${URL_BASE}/pensamentos/${id}`)
//                method: "DELETE"
//            })
        } 
        catch {
            alert('erro ao excluir um pensamento')
            throw error
        }
    }

}

export default api