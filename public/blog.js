const data = [
  {
    src: "../src/assets/blog/ultimate-guide-to-chatgpt-for-agencies.jpeg",
    heading: "The Ultimate Guide to ChatGPT for Web Agencies",
    para: "Improve Your SEO, Quickly Create Content, Augment Your Marketing Team, And More — With The Power and Speed of Artificial Intelligence.",
  },
  {
    src: "../src/assets/blog/how-to-generate-more-leads-from-your-agency-website-cover.jpeg",
    heading: "How To Generate More Leads From Your Agency Website",
    para: "Are you looking for a proven system for generating and converting your website visitors into leads for your web agency, SEO company, or marketing agency? You've probably tried all the usual tactics from the How […]",
  },
  {
    src: "../src/assets/blog/agency-sales-framework.jpeg",
    heading: "v4 Agency Sales Framework",
    para: "I don't consider myself great at sales. I don't have a way with words like some of my fellow agency owners do. And yet I regularly close five-figure deals and the occasional six-figure deal. How […]",
  },
  {
    src: "../src/assets/blog/how-to-use-the-core-web-vitals-to-win-more-business-for-your-web-agency.jpeg",
    heading:
      "How to use the core web vitals to win more business for your web agency",
    para: "Over the past few months, Google has been giving businesses a heads up that they're about to include Core Web Vitals (page speed and user experience metrics) as a ranking signal. In other words it […]",
  },
  {
    src: "../src/assets/blog/agency-guide-quarterly-or-annual-reviews.png",
    heading: "Agency guide to quarterly or annual client reviews",
    para: "One of the best things we do in our agency is to hold quarterly and or annual strategy sessions with our clients. If you're not currently doing this in your agency, I'd highly recommend you […]",
  },
  {
    src: "../src/assets/blog/Agency-Discovery.png",
    heading: "The agency guide to executing discovery",
    para: "Here is a simple definition for those of you who don't know what discovery is. Discovery is a process of using your expertise through a series of questions across 4-5 meetings (45-60 mins each) to […]",
  },
  {
    src: "../src/assets/blog/FITD-Strategy.png",
    heading:
      "The magic method that works like crazy to close more web agency leads",
    para: "What happens when your web agency gets a good lead? Plenty of web agencies go all out and work aggressively to close that lead. They use high-pressure sales tactics or sell pipe dreams without even […]",
  },
  {
    src: "../src/assets/blog/ultimate-guide-to-monthly-recurring-revenue-for-agencies-mwa.jpeg",
    heading: "Ultimate guide to monthly recurring revenue for agencies",
    para: "Running a web agency can be stressful, especially if you don’t have recurring revenue streams in place. Without recurring revenue, you’re constantly having to find new clients to keep the money flowing into your business. […]",
  },
  {
    src: "../src/assets/blog/the-ultimate-guide-to-website-audits-how-to-create-present-and-sell-website-audits-mwa.jpeg",
    heading: "Website audits — How to create, present and sell website audits",
    para: "This is the most comprehensive guide you will find on leveraging audits in your web agency or digital marketing company, to generate more leads and close more deals in your business. The best part? This […]",
  },
  {
    src: "../src/assets/blog/agency-guide-cover.jpeg",
    heading: "Agency guide to thriving through coronavirus and a recession",
    para: "To say that we've entered some fairly turbulent times would be an understatement no matter where in the world you live and work. If it's not already happened both you and your agency's clients are […]",
  },
  {
    src: "../src/assets/blog/how-to-optimize-google-my-business-for-your-agency-clients-mwa.jpeg",
    heading: "How to optimize google my business for your agency clients",
    para: "As an agency owner, you're always looking for useful services you can offer to your clients to grow their business (and yours). Here's one that you may not have yet added to your service offerings: […]",
  },
  {
    src: "../src/assets/blog/relational-website-design-the-future-of-staying-in-business-mwa.jpeg",
    heading: "Relational website design: the future of staying in business",
    para: "The web design industry has changed; and if you don’t embrace the shift, it could cost you your business. Recently I embarked on constructing a pitch deck for a major player in the web hosting […]",
  },
  {
    src: "../src/assets/blog/how-to-use-website-roi-calculators-in-your-agency-to-close-more-deals-mwa.jpeg",
    heading:
      "How to use website ROI calculators in your agency to close more deals",
    para: "You should be using ROI Calculators as an interactive lead magnet on your agency website, to gather more leads and in your sales process to close more deals. Over the years more web design and […]",
  },
  {
    src: "../src/assets/blog/five-reasons-you-should-be-offering-clients-a-website-audit-mwa.jpeg",
    heading: "5 reasons you should be offering clients a website audit",
    para: "As a web professional, whether you are a developer or marketing agency, you work in a very competitive field, and you know that your current customers are constantly being bombarded with propositions from your competitors. […]",
  },
  {
    src: "../src/assets/blog/why-website-audits-are-a-powerful-tool-to-generate-qualified-leads-for-your-web-or-digital-agency-mwa.jpeg",
    heading:
      "Why website audits are a powerful tool to generate qualified leads for your web or digital agency",
    para: "When it comes to website audits, I’m sure you’ve spent a ton of time and money running tests using several tools on the web, trying to generate actionable and easy to understand reports you can […]",
  },
  {
    src: "../src/assets/blog/how-mywebaudit-tool-can-improve-your-sales-funnel-mwa.jpeg",
    heading: "How My Web Audit tool can improve your sales funnel",
    para: "Have you encountered prospective clients who are suspicious or angry because they have previously paid a “website expert” to build their website or sales funnel, but they turned out to be a college student or […]",
  },
];

const container = document.getElementById("data-container");

const content = data
  .map(
    (item) => `   
                

  <div class="w-[47.4%] my-7">
              <img
              class="border border-[#e8e8e8]"
                src="${item.src}"
                alt=""
              />
              <div class="flex  items-center z-10 relative -mt-8 ml-6 gap-2 ">
                <img class="rounded-full w-20" src="../src/assets/blog/clifford-almeida.png" alt="" />
                <span class="text-[#004053] text-[16px] font-[roboto-medium] mt-4"
                  >Clifford Almeida</span
                >
              </div>
              <h2 class="mt-3 text-[#1b75bb] text-2xl font-[poppins-medium]">${item.heading}</h2>
              <p class="mt-3 text-lg font-[roboto-light] text-[#004053]">${item.para}</p>
              <button
              type="button"
              onclick="window.location.href='#';"
              class="py-3 !mt-5 !ml-0 text-sm  font-[roboto-regural] rounded-sm border-[#1b75bb] border text-[#1b75bb] w-[190px] btn-slider-animation"
            >
            Continue Reading
            </button>
    </div>  
  `
  )
  .join("");

container.innerHTML = content;
