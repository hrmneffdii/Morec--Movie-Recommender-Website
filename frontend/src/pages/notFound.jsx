const NotFound = () => {
  return (
    <div>
        <html className="">
            <body className="flex h-[100vh] flex-col items-center justify-center">
                <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl ">404</h1>
                <p className="mt-3 text-gray-600 dark:text-gray-400">Oops, something went wrong.</p>
                <p className="text-gray-600 dark:text-gray-400">Sorry, we couldnt find your page.</p>
                <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                    <a className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/login">
                        <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                        login
                    </a>
                </div>
            </body>
        </html>
    </div>
  )
}

export default NotFound

