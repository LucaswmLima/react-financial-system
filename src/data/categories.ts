import { Category } from '../types/Category'

export const categories: Category = {
  food: { title: "Alimentação", color: "blue", expense: true },
  rent: { title: "Aluguel", color: "brown", expense: true },
  salary: { title: "Salário", color: "green", expense: false },
  pixReceived: { title: "Pix Recebido", color: "orange", expense: false },
  pixDelivered: { title: "Pix Enviado", color: "orange", expense: true },
  
};
