class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <header>
        <nav
         class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900  m-auto py-3 fixed top-0 w-[100%] z-50 "
       >
         <div
           class="flex flex-wrap justify-between items-center mx-auto xl:max-w-screen-xl  py-2.5   container"
         >
           <a href="/public/home.html" class="flex items-center">
             <img
               src="../src/assets/logo/MyWebAudit Logo in Dark Gray.png"
               class="h-7 mr-3 xl:h-10"
               alt="my web audit Logo"
             />
           </a>
           <button
             id="mega-menu-full-cta-button"
             data-collapse-toggle="mega-menu-full-cta"
             type="button"
             class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
             aria-controls="mega-menu-full-cta"
             aria-expanded="false"
           >
             <span class="sr-only">Open main menu</span>
             <svg
               class="w-6 h-6"
               aria-hidden="true"
               fill="currentColor"
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 fill-rule="evenodd"
                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                 clip-rule="evenodd"
               ></path>
             </svg>
           </button>
           <div
             id="mega-menu-full-cta"
             class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
           >
             <ul
               class="flex flex-col mt-4 xl:text-[15px] text-[13px] font-medium lg:flex-row xl:space-x-7   lg:mt-0 space-x-6"
             >
               <li>
                 <a
                   href="/public/success-stories.html"
                   class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0d96df] md:p-0 dark:text-gray-400 md:dark:hover:text-[#0d96df]  dark:hover:bg-gray-700 dark:hover:text-[#0d96df]  md:dark:hover:bg-transparent dark:border-gray-700"
                   aria-current="page"
                   >Success Stories</a
                 >
               </li>
               <li>
                 <button
                   id="mega-menu-full-cta-dropdown-button"
                   data-collapse-toggle="mega-menu-full-cta-dropdown"
                   data-dropdown-placement="bottom"
                   class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b  border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0d96df]  md:p-0 dark:text-gray-400 md:dark:hover:text-[#0d96df]  dark:hover:bg-gray-700 dark:hover:text-[#0d96df]  md:dark:hover:bg-transparent dark:border-gray-700"
                 >
                 <a href="/public/sample.html"> Sample Reports</a>
                   <svg
                     class="w-4 h-4 ml-1"
                     fill="currentColor"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       fill-rule="evenodd"
                       d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                       clip-rule="evenodd"
                     ></path>
                   </svg>
                 </button>
               </li>
               <li>
                 <a
                   href="/public/price.html"
                   class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0d96df]  md:p-0 dark:text-gray-400 md:dark:hover:text-[#0d96df]  dark:hover:bg-gray-700 dark:hover:text-[#0d96df]  md:dark:hover:bg-transparent dark:border-gray-700"
                   >Pricing</a
                 >
               </li>
               <li>
                 <a
                   href="/public/feature.html"
                   class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0d96df]  md:p-0 dark:text-gray-400 md:dark:hover:text-[#0d96df]  dark:hover:bg-gray-700 dark:hover:text-[#0d96df]  md:dark:hover:bg-transparent dark:border-gray-700"
                   >Features</a
                 >
               </li>
               <li>
                 <a
                   href="/public/about.html"
                   class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0d96df]  md:p-0 dark:text-gray-400 md:dark:hover:text-[#0d96df]  dark:hover:bg-gray-700 dark:hover:text-[#0d96df]  md:dark:hover:bg-transparent dark:border-gray-700"
                   >About</a
                 >
               </li>
               <li>
                 <button
                   id="mega-menu-full-cta-dropdown-button-2"
                   data-collapse-toggle="mega-menu-full-cta-dropdown"
                   data-dropdown-placement="bottom"
                   class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0d96df]  md:p-0 dark:text-gray-400 md:dark:hover:text-[#0d96df]  dark:hover:bg-gray-700 dark:hover:text-[#0d96df]  md:dark:hover:bg-transparent dark:border-gray-700"
                 >
                 <a href="/public/close-more-sale.html">Uses Cases</a>
                   <svg
                     class="w-4 h-4 ml-1"
                     fill="currentColor"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       fill-rule="evenodd"
                       d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                       clip-rule="evenodd"
                     ></path>
                   </svg>
                 </button>
               </li>
               <li>
                 <a
                   href="blog.html"
                   class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0d96df]  md:p-0 dark:text-gray-400 md:dark:hover:text-[#0d96df]  dark:hover:bg-gray-700 dark:hover:text-[#0d96df]  md:dark:hover:bg-transparent dark:border-gray-700  "
                   >Blog</a
                 >
               </li>
               <li>
                 <a
                   href="#"
                   class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0d96df]  md:p-0 dark:text-gray-400 md:dark:hover:text-[#0d96df]  dark:hover:bg-gray-700 dark:hover:text-[#0d96df]  md:dark:hover:bg-transparent dark:border-gray-700"
                   >Login</a
                 >
               </li>
             </ul>
           </div>
         </div>   
       </nav>
        </header>
      `;
  }
}

customElements.define("header-component", Header);
