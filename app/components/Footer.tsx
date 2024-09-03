// src/app/Footer.tsx
"use client";
const Footer = () => {
    return (
      <footer className="bg-black text-white p-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">

          <div>
            <h3 className="font-semibold mb-4">ABOUT US</h3>
            <ul className="space-y-2">
              <li>ABOUT US</li>
              <li>OUR LEADERSHIP</li>
              <li>OUR MISSION</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">OUR WINGS</h3>
            <ul className="space-y-2">
              <li>KISAN</li>
              <li>MAHILA</li>
              <li>YUVA</li>
              <li>S.C</li>
              <li>S.T</li>
              <li>OBC</li>
              <li>MINORITY</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">MEDIA</h3>
            <ul className="space-y-2">
              <li>MEDIA GALLERY</li>
              <li>PRESS RELEASE</li>
              <li>NEWS ARTICLES</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">SOCIAL WALL</h3>
            <ul className="space-y-2">
              <li>INSTAGRAM</li>
              <li>FACEBOOK</li>
              <li>TWITTER</li>
              <li>YOUTUBE</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">SignUp for Newsletter</h3>
            <p className="mb-4">Get all our latest news and campaigns details delivered to your inbox</p>
            <form className="flex ">
  <input 
    type="email" 
    placeholder="Email" 
    className="flex-grow px-3 py-2 border border-primary-color  focus:outline-none text-black bg-transparent"
  />
  <button type="submit" className="px-4 py-2 border border-primary-color bg-transparent text-white">
    →
  </button>
</form>


          </div>
        </div>
        
        <div className="mt-10 border-gray-700 pt-4 text-xs">
          <p>&copy;2023 — By RSSP. All Right Reserved. | Terms & Conditions | Privacy Policy | Donation Policy | FAQ</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  