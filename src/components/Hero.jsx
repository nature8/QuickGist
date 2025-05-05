import {logo} from '../assets'
const Hero = () => {
  return (
    // <header className='w-full flex 
    // justify-center items-center flex-col'>
    //   <nav className='flex justify-between 
    //   items-center w-full mb-10 pt-3'>
    //        <img src={logo} alt='sumz_logo' className='w-28 object-contain'/>
      
    //   </nav>

    <header className='w-full flex justify-center items-center flex-col'>
    <nav className='flex justify-between items-center w-full mb-10 pt-3 px-5'>
      <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

      {/* Social Media Icons */}
      <div className="flex space-x-4 text-xl text-gray-600">
        <a href="https://github.com/nature8" target="_blank" rel="noopener noreferrer" className="hover:text-black">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://x.com/PrakrutiTailor" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/prakruti-tailor-b2a928232/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/prakruti_tailor/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <i className="bi bi-instagram"></i>
        </a>
      </div>
    </nav>

      {/* <h1 className='head_text'>
      Summarize Articles with <br className='max-md:hidden' />
      <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
        <h2 className='desc'>
        Simplify your reading with Summarize, 
        an open-source tool that transforms 
        lengthy articles into clear, concise 
        summaries, making it easy to grasp 
        key points quickly.
        </h2> */}
        <h1 className='head_text'>
        Get the Gist of Any Article <br className='max-md:hidden' />
        <span className='orange_gradient'>In Seconds with GPT-4</span>
        </h1>
        <h2 className='desc'>
          Tired of reading long articles? <br />
          QuickGist gives you clear, accurate summaries powered by OpenAI GPT-4 — 
          so you can save time and understand faster. Try pasting a link and see the magic!
        </h2>

    </header>
  )
}

export default Hero
