import React from "react";
import { Link } from "react-router-dom";

const List = (props) => {
  const { products, onDel } = props;
  return (
    <div>
      <Link to={`/products/add`}>
        <button className="mt-4 ml-4 bg-green-600 text-white px-4 py-2 rounded-sm">
          Thêm sản phẩm
        </button>
      </Link>
      <div>
        <table className="border border-gray-200 ml-4 mt-4">
          <thead>
            <tr>
              <td className="border border-black px-4 py-2 text-center, bg-gray-200">
                Tên sản phẩm
              </td>
              <td className="border border-black px-4 py-2 text-center, bg-gray-200">
                Mô tả
              </td>
              <td className="border border-black px-4 py-2 text-center, bg-gray-200">
                Giá tiền
              </td>
              <td className="border border-black px-4 py-2 text-center, bg-gray-200">
                Hình ảnh
              </td>
              <td className="border border-black px-4 py-2 text-center, bg-gray-200">
                Hành động
              </td>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td className="border border-black px-4 py-2 text-center">
                    {product.name}
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    {product.des}
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    {product.price}
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <img src={product.img} alt="" />
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <button
                      className="mr-2 bg-red-600 text-white px-4 py-2 rounded-sm"
                      onClick={() => onDel(product.id)}
                    >
                      Xóa
                    </button>
                    <Link to={`/products/${product.id}/update`}>
                      <button className=" bg-indigo-600 text-white px-4 py-2 rounded-sm">
                        Cập nhật
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
