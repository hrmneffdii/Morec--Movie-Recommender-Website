import PropTypes from 'prop-types'

const Card = ({ title, tagline}) => {
  return (
    <div>
        <div className="flex flex-col bg-white border shadow-sm rounded-xl">
            <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 ">
                {title}
                </h3>
                <p className="mt-2 text-gray-500 ">
                {tagline}
                </p>
                <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none" href={`/selected/${title}`}>
                detail
                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </a>
            </div>
        </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string
}

export default Card
