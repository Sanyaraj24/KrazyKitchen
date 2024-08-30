//import React from 'react'

function Contact() {
  return (
    <>
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
        <div className="justify-center flex-1 max-w-2xl px-4 py-4 mx-auto lg:py-6 md:px-6">
            <h2 className="pb-2 text-xl font-bold text-center text-gray-800 md:text-3xl dark:text-gray-300">
                Contact Form
            </h2>
            <div className="w-20 mx-auto mb-6 border-b border-red-700 dark:border-gray-400"></div>
            <div className="px-3 py-6 rounded shadow-md dark:bg-gray-700 bg-gray-50">
                <form action="" className="">
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full px-3 md:w-1/2 md:mb-0">
                            <label htmlFor="firstname"
                                className="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                First Name
                            </label>
                            <input type="text" placeholder="first name" required
                                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "/>
                        </div>
                        <div className="w-full px-3 md:w-1/2 md:mb-0">
                            <label htmlFor="firstname"
                                className="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                Last Name</label>
                            <input type="text" placeholder="last name" required
                                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "/>
                        </div>
                    </div>
                    <div className="px-3 mb-6">
                        <label htmlFor="firstname" className="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                            Email</label>
                        <input type="text" placeholder="abc@gmail.com" required
                            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "/>
                    </div>
                    <div className="px-3 mb-6">
                        <label htmlFor="firstname" className="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                            Subject</label>
                        <input type="text" placeholder="I'm asking information for..." required
                            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "/>
                    </div>
                    <div className="px-3 mb-6">
                        <label htmlFor="firstname" className="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                            Message</label>
                        <textarea type="message" placeholder="Describe your problem" required
                            className="block w-full px-4 leading-tight text-gray-700 bg-gray-100 rounded dark:placeholder-gray-500 py-7 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "></textarea>
                    </div>
                    <div className="px-3">
                        <button
                            className="px-4 py-2 font-medium text-gray-100 bg-blue-600 rounded shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

</>
  )
}

export default Contact
