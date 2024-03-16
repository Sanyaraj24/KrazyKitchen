import React from 'react'

function Contact() {
  return (
    <>
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
        <div class="justify-center flex-1 max-w-2xl px-4 py-4 mx-auto lg:py-6 md:px-6">
            <h2 class="pb-2 text-xl font-bold text-center text-gray-800 md:text-3xl dark:text-gray-300">
                Contact Form
            </h2>
            <div class="w-20 mx-auto mb-6 border-b border-red-700 dark:border-gray-400"></div>
            <div class="px-3 py-6 rounded shadow-md dark:bg-gray-700 bg-gray-50">
                <form action="" class="">
                    <div class="flex flex-wrap mb-6">
                        <div class="w-full px-3 md:w-1/2 md:mb-0">
                            <label for="firstname"
                                class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                First Name
                            </label>
                            <input type="text" placeholder="first name" required
                                class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "/>
                        </div>
                        <div class="w-full px-3 md:w-1/2 md:mb-0">
                            <label for="firstname"
                                class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                Last Name</label>
                            <input type="text" placeholder="last name" required
                                class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "/>
                        </div>
                    </div>
                    <div class="px-3 mb-6">
                        <label for="firstname" class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                            Email</label>
                        <input type="text" placeholder="abc@gmail.com" required
                            class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "/>
                    </div>
                    <div class="px-3 mb-6">
                        <label for="firstname" class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                            Subject</label>
                        <input type="text" placeholder="I'm asking information for..." required
                            class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "/>
                    </div>
                    <div class="px-3 mb-6">
                        <label for="firstname" class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                            Message</label>
                        <textarea type="message" placeholder="Describe your problem" required
                            class="block w-full px-4 leading-tight text-gray-700 bg-gray-100 rounded dark:placeholder-gray-500 py-7 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "></textarea>
                    </div>
                    <div class="px-3">
                        <button
                            class="px-4 py-2 font-medium text-gray-100 bg-blue-600 rounded shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700">
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
