import React, {useState} from 'react';

function ProductForm({onAddProduct})
{

    //state to hold form data
    const[formData, setFormData]=useState({
        name:'',
        description:'',
        category:'',
        price: '',
        quantity:''
    });

    const handleChange=(e)=>
    {
        const {name,value}=e.target;
        
        //update the form state, while keeping previous values
        setFormData(prevData=>({
            ...prevData,
            [name]:value
        }));
    };
    
    //prevent browser from refreshing
    const handleSubmit=(e) =>
        {
            e.preventDefault();

            //create a new product object from the form and parse price and quantity
            const newProduct=
            {
                ...formData,
                price:parseFloat(formData.price),
                quantity:parseInt(formData.quantity),
                id: Math.floor(Math.random() * 1000)//Generate ID
            };

            onAddProduct(newProduct);
             
            //Reset the form field to empty after submission
            setFormData({
                name:'',
                description:'',
                category:'',
                price:'',
                quantity:''

            });

        };

        return(
            <div className='product-form'>
                <h2>
                    Add New Product!
                </h2>
                <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required>
                    </input>
                </div>
                <div>
                    <label>Description: </label>
                    <input
                    type='text'
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                    required>
                    </input>
                </div>
                <div>
                    <label>Category: </label>
                    <input
                    type='text'
                    name='category'
                    value={formData.category}
                    onChange={handleChange}
                    required>
                    </input>
                </div>
                <div>
                    <label>Price (M): </label>
                    <input
                    type='number'
                    name='price'
                    step={0.01}
                    value={formData.price}
                    onChange={handleChange}
                    required>
                    </input>
                </div>
                <div>
                    <label>Initial Quantity: </label>
                    <input
                    type='number'
                    name='quantity'
                    value={formData.quantity}
                    onChange={handleChange}
                    required>
                    </input>
                </div>
                <button type='submit'>Add Product</button>
                </form>
            </div>
        );


}

export default ProductForm;