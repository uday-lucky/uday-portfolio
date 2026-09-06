export const Contact = () => {
    return(
    <section id="Contact" className=" flex  min-h-screen py-20 items-center justify-center ">
        <div className=" flex flex-col  items-center justify-center max-w-3xl">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-500">Get in Touch</h1>
        <form className="flex  w-full justify-center">
            <div className="flex w-xl h-full flex-col space-y-4">
                <input type="text" placeholder="Name" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="email" placeholder="Email" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <textarea placeholder="Message" rows="4" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Send</button>
            </div>

        </form>
        </div>
    </section>
    )
}