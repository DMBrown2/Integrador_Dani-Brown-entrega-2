import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Admin.css';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const URL = import.meta.env.VITE_API_URL;

export default function AdminProduct() {
  const [products, setProducts] = useState([]);
 

  useEffect(() => {
    loadProducts();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const loadProducts = async () => {
    try {
      const { data } = await axios.get(`${URL}/products`);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async(data) => {
    try {
      
      const response = await axios.post(`${URL}/products`, data);

      setProducts((prev) => [...prev, response.data]);
      Swal.fire("Tu prod se cargo correctamente")


    } catch (error) {
      console.log(error);
      Swal.fire("Tu prod NOO se cargo correctamente")
    }
  };

  const deleteProduct = async (id) => {
    try {
      console.log(id);
      const response = await axios.delete(`${URL}/products/${id}`);
      console.log(response.data);
      setProducts((prev) => prev.filter((prod) => prod._id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  return (
<div>
        <div className="titulo-descripcion">
          <h1 className="titulo-admin">Administrador</h1>
          <p>Hay un total de X productos</p>
        </div>
        <div className="botones">
          <div className="btn-sumar-status">
            <button>Agregar status</button>
          </div>
          <div className="btn-sumar-producto">
            <button>Agregar producto</button>
          </div>
        </div>


        <div className="admin-form-section">
          <form
            action=""
            className="admin-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="form-title">
              <span>Add</span> Product
            </h2>
            <div className="input-group">
              <label htmlFor="">Product name</label>
              <input
                type="text"
                {...register('name', {
                  required: { value: true, message: 'This field is required' },
                  maxLength: { value: 20, message: 'Max length is 20' },
                  minLength: { value: 3, message: 'Min length is 3' },
                })}
              />
              {errors.name && (
                <span className="input-error">{errors.name?.message}</span>
              )}
            </div>

            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Price</label>
                <input
                  type="number"
                  {...register('price', {
                    required: {
                      value: true,
                      message: 'This field is required',
                    },
                    max: { value: 20000000, message: 'Max price is 20000000' },
                    min: { value: 1, message: 'Min price is 1' },
                  })}
                />
                {errors.price && (
                  <span className="input-error">{errors.price?.message}</span>
                )}
              </div>
              <div className="input-group input-stock">
                <label htmlFor="">Stock</label>
                <input
                  type="number"
                  {...register('stock', {
                    required: {
                      value: true,
                      message: 'This field is required',
                    },
                    max: { value: 100000, message: 'Max price is 100000' },
                    min: { value: 1, message: 'Min price is 1' },
                  })}
                />
                {errors.price && (
                  <span className="input-error">{errors.price?.message}</span>
                )}
              </div>
              <div className="input-group input-row-span-2">
                <label htmlFor="">Category</label>
                <select
                  defaultValue={''}
                  {...register('category', {
                    required: {
                      value: true,
                      message: 'This field is required',
                    },
                  })}
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="1">Category 1</option>
                  <option value="2">Category 2</option>
                  <option value="3">Category 3</option>
                </select>
                {errors.category && (
                  <span className="input-error">
                    {errors.category?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="">Description</label>
              <textarea
                rows={5}
                {...register('description', {
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                  maxLength: { value: 500, message: 'Max length is 500' },
                  minLength: { value: 5, message: 'Min length is 5' },
                })}
              ></textarea>
              {errors.description && (
                <span className="input-error">
                  {errors.description.message}
                </span>
              )}
            </div>
            <div className="input-group">
              <label htmlFor="">Product name</label>
              <input
                type="file"
                accept="image/*"
                multiple
                {...register('image', {
                  required: { value: true, message: 'This field is required' },
                  validate: (files) => {
                    if (files.length > 2) return 'Max 2 files';
                    if (files.length < 1) return 'Min 1 file';
                    for (const file of files) {
                      if (file.size > 1000000) return 'Max size is 1MB';
                    }
                  },
                })}
              />
              {errors.image && (
                <span className="input-error">{errors.image.message}</span>
              )}
            </div>

            <div className="input-group input-group--inline">
              <input type="checkbox" {...register('favorite')} />
              <label htmlFor="">Favorite</label>
            </div>
            <button
              type="submit"
              disabled={!isValid}
              className="button button--md"
            >
              Cargar
            </button>
          </form>
        </div>







        <div className="table-responsive">
          <table border={1} className="admin-table">
            {/* Cabecera de la tabla */}
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Género</th>
                <th>Categoria</th>
                <th>Precio</th>
                <th>Comentarios</th>
                <th>Tools</th>
              </tr>
            </thead>
            <tbody>
              {/* Cuerpo de la tabla */}

              {products.map((prod) => (
              <tr key={prod.id || prod._id}>
                <td className="image-cell">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="table-image"
                  />
                </td>
                <td className="name-cell">{prod.title}</td>
                <td className="genero-cell">{prod.genre}</td>
                <td className="status-cell">{prod.category}</td>
                <td className="precio-cell">{prod.price}</td>
                <td className="coment-cell">
                  {prod.coments}
                </td>
                <td className="tools-cell">
                  <div className="icon-container">
                    <button className="btn">
                     <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="btn" onClick={() => deleteProduct(prod._id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              </tr>

))}
              
            </tbody>
          </table>
        </div>
    </div>
  )
}
