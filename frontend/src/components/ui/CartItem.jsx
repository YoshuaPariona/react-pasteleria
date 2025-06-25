import { FaTrash } from 'react-icons/fa';

export const CartItem = ({ item, updateQuantity, removeItem }) => (
  <li className="flex bg-amber-50 rounded-lg overflow-hidden shadow-sm w-[300px] h-[100px]">
    {/* Imagen */}
    <img
      src={`http://localhost:8080/${item.imagen}`}
      alt={item.nombre}
      className="w-[100px] h-full object-cover"
    />

    {/* Info */}
    <div className="flex flex-col justify-between py-2 px-4 flex-grow text-sm w-[260px]">
      {/* Fila 1: Nombre */}
      <h2 className="font-semibold truncate">{item.nombre}</h2>

      {/* Fila 2: Subtotal */}
      <p className="text-[#8a6a55] font-bold">Subtotal: S/ {(item.precio * item.quantity).toFixed(2)}</p>

      {/* Fila 3: Controles */}
      <div className="flex justify-between items-center mr-4">
        {/* Contador estilo personalizado */}
        <div className="flex border border-[#b4937c] rounded bg-[#f3e8e2] font-bold text-lg overflow-hidden h-8">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="w-8 flex items-center justify-center text-[#8a6a55] hover:bg-[#e8d8cf]"
          >
            -
          </button>
          <div className="w-10 flex items-center justify-center text-[#8a6a55]">
            {item.quantity}
          </div>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-8 flex items-center justify-center text-[#8a6a55] hover:bg-[#e8d8cf]"
          >
            +
          </button>
        </div>

        {/* Eliminar */}
        <button
          onClick={() => removeItem(item.id)}
          className="text-red-500 hover:text-red-700 p-2"
          title="Eliminar"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  </li>
);
