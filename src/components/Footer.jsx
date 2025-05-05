const Footer = () => {
    return (
      <footer className="w-full py-6 border-t mt-16 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 px-4">
        <p>&copy; {new Date().getFullYear()} QuickGist. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://github.com/yourusername/quickgist" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
            GitHub
          </a>
          <a href="/privacy-policy" className="hover:text-orange-500">
            Privacy Policy
          </a>
          <a href="/contact" className="hover:text-orange-500">
            Contact
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  