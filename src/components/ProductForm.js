import React, {useState} from 'react';

function ProductForm({onAddProduct})
{

    //state to hold form data
    const[formData, setFormData]=useState({
        name:'',
        description:'',
        category:'',
        price: '',
        quantity:'',
        cost:'',
        image: ''
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
                cost:parseFloat(formData.cost),
                quantitySold:0,
                id: Math.floor(Math.random() * 1000)//Generate ID
            };

            onAddProduct(newProduct);
             
            //Reset the form field to empty after submission
            setFormData({
                name:'',
                description:'',
                category:'',
                price:'',
                quantity:'',
                cost:'',
                image:''
                

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
                <div>
                    <label>Cost(M): </label>
                    <input
                    type='number'
                    name='cost'
                    value={formData.cost}
                    onChange={handleChange}
                    required>
                    </input>
                </div>
                
                                
                {/* NEW IMAGE INPUT */}
                <div>
                    <label>Image URL (Optional): </label>
                    <input
                    type='url'
                    name='image'
                    value={formData.image}
                    onChange={handleChange}
                    placeholder='https://example.com/product-image.jpg'>
                    </input>
                    {formData.image && (
                        <div className="image-preview">
                            <img 
                                src={formData.image} 
                                alt="Preview" 
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'block';
                                }}
                            />
                            <p style={{display: 'none', color: 'red'}}>
                                Invalid image URL
                            </p>
                        </div>
                    )}
                </div>

                <button type='submit'>Add Product</button>
                </form>
            </div>
        );


}

export default ProductForm;