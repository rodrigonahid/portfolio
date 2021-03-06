import Link from "next/link";

export function Header() {
  return(
    <header className="shadow relative">
      <div className="container p-4 mx-auto max-w-5xl">
        <Link href="/">
          <a className="inline-flex items-center">
            <svg width="28px" height="28px" enableBackground="new 0 0 522.468 522.469" version="1.1" viewBox="0 0 522.468 522.469" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                <path d="m325.76 70.513l-17.706-4.854c-2.279-0.76-4.524-0.521-6.707 0.715-2.19 1.237-3.669 3.094-4.429 5.568l-106.49 368.59c-0.76 2.475-0.522 4.809 0.715 6.995 1.237 2.19 3.09 3.665 5.568 4.425l17.701 4.856c2.284 0.766 4.521 0.526 6.71-0.712 2.19-1.243 3.666-3.094 4.425-5.564l106.5-368.59c0.759-2.474 0.523-4.808-0.716-6.999-1.238-2.19-3.089-3.665-5.564-4.424z"></path>
                <path d="m166.17 142.46c0-2.474-0.953-4.665-2.856-6.567l-14.277-14.276c-1.903-1.903-4.093-2.857-6.567-2.857s-4.665 0.955-6.567 2.857l-133.04 133.04c-1.906 1.903-2.856 4.093-2.856 6.567s0.953 4.664 2.856 6.566l133.04 133.04c1.902 1.906 4.089 2.854 6.567 2.854s4.665-0.951 6.567-2.854l14.277-14.268c1.903-1.902 2.856-4.093 2.856-6.57 0-2.471-0.953-4.661-2.856-6.563l-112.2-112.21 112.2-112.2c1.906-1.902 2.856-4.093 2.856-6.567z"></path>
                <path d="m519.61 254.66l-133.05-133.04c-1.902-1.902-4.093-2.857-6.563-2.857-2.478 0-4.661 0.955-6.57 2.857l-14.271 14.275c-1.902 1.903-2.851 4.09-2.851 6.567s0.948 4.665 2.851 6.567l112.21 112.2-112.21 112.21c-1.902 1.902-2.851 4.093-2.851 6.563 0 2.478 0.948 4.668 2.851 6.57l14.271 14.268c1.909 1.906 4.093 2.854 6.57 2.854 2.471 0 4.661-0.951 6.563-2.854l133.05-133.04c1.903-1.902 2.854-4.096 2.854-6.57 0-2.475-0.951-4.665-2.854-6.567z"></path>
            </svg>
            <span className="block ml-3 text-xl relative font-bold">Rodrigo Nahid</span>  
          </a>
        </Link>
      </div>
    </header>
  )
}