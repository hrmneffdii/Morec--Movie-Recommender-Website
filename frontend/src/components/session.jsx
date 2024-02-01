const SessionHabis = () => {
    return (
      <div>
          <html className="">
              <body className="flex h-[100vh] flex-col items-center justify-center text-xl text-gray-700 text-bold">
                  <p className="mt-3 ">Sesi anda telah habis!</p>
                  <p className="">Silahkan kembali ke halaman login</p>
                  <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                      <a className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/login">
                          <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                          login
                      </a>
                  </div>
              </body>
          </html>
      </div>
    )
  }
  
  export default SessionHabis
  
  