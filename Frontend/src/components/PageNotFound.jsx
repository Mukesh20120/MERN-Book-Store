import React from 'react'

function PageNotFound() {
return (
    <div className='h-screen flex flex-col justify-center items-center bg-gray-100 text-center'>
        <h1 className='text-6xl font-extrabold text-red-500'>404</h1>
        <p className='text-xl mt-4'>Oops! You seem to be lost.</p>
        <p className='text-lg mt-2'>It's okay, even the best explorers get lost sometimes.</p>
        <p className='mt-4'>But don't worry, you can always <a href="/" className='text-blue-500 underline'>go back home</a>.</p>
        <img 
            src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" 
            alt="Confused Travolta" 
            className='mt-6 w-64 h-64'
        />
    </div>
)
}

export default PageNotFound
