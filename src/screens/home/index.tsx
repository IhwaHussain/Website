import NavbarComponent from "@/components/Navbar";
import LogoCarousel from "@/components/LogoCarousel";
import iraidLogo from "@/assets/images/logo-carousel/iraid-logo.svg";
import metaficLogo from "@/assets/images/logo-carousel/metafic-logo.svg";
import { Carousel_002 } from "@/components/SkipperCarousel";
import { Skiper31 } from "@/components/skiper31";
import { ArrowUpRightIcon } from "lucide-react";
import aboutImg from "@/assets/images/about-img.png";
import blueStarGraphic from "@/assets/images/blue-star-graphic.svg";
import smartPricePredictorImg from "@/assets/images/projects/smart-price-predictor.png";
import customersInsightsDashboardImg from "@/assets/images/projects/customers-insights-dashboard.png";
import spamFilterEngineImg from "@/assets/images/projects/spam-filter-engine.png";
import trafficFlowAnalyzerImg from "@/assets/images/projects/traffic-flow-analyzer.png";
import CardImg1 from "@/assets/images/card-img.png";
import CardImg2 from "@/assets/images/card-img2.png";
import CardImg3 from "@/assets/images/card-img3.png";
import Hero from "@/assets/images/hero.png";
import { Button } from "@/components/ui/button";
import { PerspectiveCarousel } from "@/components/PerspectiveCarousel";
import FooterImg from "@/assets/images/footerLogo.png";
import { Facebook, Github, Twitter, Instagram, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
export default function Home() {

  const cardData = [
    {
      cardImg: CardImg1,
      title: "Learning & TutorialsMaking Tech Simple",
      description: "Breaking down complex topics into easy-to-follow guides. From building your first machine learning model to understanding big data, I share what I've learned along the way.",
      buttons: [
        { text: "Data Science Trends", variant: "glassButton" },
        { text: "Future of Tech", variant: "glassButton" },
      ],
    },
    {
      cardImg: CardImg2,
      title: "Project Stories Behind the Code",
      description: "The real stories behind my projects — the challenges I faced, the mistakes I made, and what I learned. Because building great tech isn't always smooth sailing.",
      buttons: [
        { text: "Lessons Learned", variant: "glassButton" },
        { text: "Real Projects", variant: "glassButton" },
      ],
    },
    {
      cardImg: CardImg3,
      title: "Industry InsightsTech That Matters",
      description: "Thoughts on where technology is heading, tools worth trying, and ideas about building better solutions. No buzzwords, just honest takes on what's happening in tech.",
      buttons: [
        { text: "Step-by-Step Guides", variant: "glassButton" },
        { text: "Python Tutorials", variant: "glassButton" },
      ],
    },

  ];

  return (
    <div className="relative w-full bg-black z-0">
      <div className=" w-full relative">
        {/* Black Basic Grid Background */}
        <div
          className="absolute inset-0 -z-1"
          style={{
            background: "#000000",
            backgroundImage: `
        linear-gradient(to right, rgba(75, 85, 99, 0.4) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(75, 85, 99, 0.4) 1px, transparent 1px)
      `,
            backgroundSize: "130px 130px",
          }}
        />
        {/* Your Content Here */}
        <section className='mx-auto max-w-380 px-4 pt-12 pb-5'>
          <NavbarComponent />
        </section>

        {/* Hero Section Starts Here */}
        <section className='mx-auto max-w-380 px-4 pt-12 pb-5 text-white relative z-10 mt-10'>
          <div className="flex xl:flex-row flex-col w-full justify-between items-center gap-8">
            <div className="relative">
              <h5 className="font-instrument sm:text-3xl md:text-5xl italic absolute -top-5 sm:-top-10 md:-top-15">Hello, I'm</h5>
              <h4 className="font-switzer text-4xl sm:text-4xl md:text-8xl tracking-tight text-nowrap">Ihwa Hussain</h4>
            </div>
            <div className="flex flex-col items-center">
              <Carousel_002 images={[
                {
                  src: Hero,
                  alt: "Image 1"
                },
                {
                  src: Hero,
                  alt: "Image 2"
                },
                {
                  src: Hero,
                  alt: "Image 3"
                },
                {
                  src: Hero,
                  alt: "Image 4"
                },
                {
                  src: Hero,
                  alt: "Image 5"
                },
                {
                  src: Hero,
                  alt: "Image 6"
                },
                {
                  src: Hero,
                  alt: "Image 7"
                },
                {
                  src: Hero,
                  alt: "Image 8"
                },
                {
                  src: Hero,
                  alt: "Image 9"
                },
                {
                  src: Hero,
                  alt: "Image 10"
                },
              ]} />
              <Button variant="glassButton">
                <div className="size-2 bg-green-clr rounded-full"></div>
                Available Now
              </Button>
            </div>
            <div>
              {/* <h4 className="font-advine text-9xl uppercase text-primary-clr">Developer</h4> */}
              <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row md:min-w-md">
                <LayoutTextFlip

                  text=""
                  words={["Developer", "ML Engineer"]}
                />
              </motion.div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col items-center justify-between mb-0 lg:mb-10 my-20 gap-5">
            <Button variant="glassButton" className="w-full sm:w-fit">
              <div className="size-2 bg-primary-clr rounded-full"></div>
              MS Computer Science, NYU
            </Button>
            <div className="flex items-center justify-between w-full sm:w-fit">
              <Button variant="glassButton">
                Let's Talk
                {/* <Icon icon="iconamoon:arrow-top-right-1-light" className="[&_svg]:size-6" /> */}
              </Button>
              <Button variant='link' className="text-white cursor-pointer">
                Download CV
              </Button>
            </div>
          </div>
        </section>
        {/* Hero Section Ends Here */}

      </div>
      {/* Logo Carousel Starts Here */}
      <section>
        <LogoCarousel />
      </section>
      {/* Logo Carousel Ends Here */}

      {/* Quote and Projects Section Starts Here */}
      <section id="work" className="bg-[url('/src/assets/images/wheel-graphic.svg')] bg-cover bg-center bg-no-repeat">
        <div className='mx-auto max-w-7xl px-4 md:pt-12'>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[38px] text-white text-center font-medium leading-[1.6em]">Creating solutions that not only solve complex problems but drive measurable impact. <span className="text-white/50">No more theoretical models — I build systems that scale in production and deliver real-world value.</span> Let's build something that transforms data into decisions.</p>
        </div>
        <div className="mx-auto max-w-7xl px-4 pt-12 mt-10 md:mt-20">
          <h2 className="text-2xl md:text-3xl lg:text-[42px] text-white text-center font-medium">Selected Projects</h2>
          <p className="font-medium text-white/50 text-center text-sm sm:text-base md:text-lg lg:text-[22px] mt-2">Explore my projects to experience innovative design and uncover creative solutions.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mt-16">
            <div className="rounded-[18px] border border-[#cdcdcd]/15 overflow-hidden bg-[#181818] flex flex-col">
              <img
                src={smartPricePredictorImg}
                alt="Smart Price Predictor Project Screenshot"
                className="w-full h-80 object-cover"
              />
              <div className="p-3 sm:p-6 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between gap-2 lg:gap-4 mb-3">
                  <h3 className="text-white text-base sm:text-xl md:text-2xl font-semibold">Smart Price Predictor</h3>
                  <Button className="rounded-full border border-white/15 px-4 py-2 text-xs sm:text-base text-white">Live Demo</Button>
                </div>
                <p className="text-white text-sm sm:text-base mb-4">
                  A tool that helps online shoppers predict if product prices will drop soon. Uses past pricing data to give users the best time to buy, saving them money on everyday purchases.
                </p>
                <div className="flex items-center gap-2 lg:gap-3 mt-2">
                  <p className="rounded-full border border-white/15 px-4 py-2 text-xs sm:text-base text-white">Machine Learning</p>
                  <p className="rounded-full border border-white/15 px-4 py-2 text-xs sm:text-base text-white">Python</p>
                </div>
              </div>
            </div>
            <div className="rounded-[18px] border border-[#cdcdcd]/15 overflow-hidden bg-[#181818] flex flex-col">
              <img
                src={customersInsightsDashboardImg}
                alt="Customer Insights Dashboard Project Screenshot"
                className="w-full h-80 object-cover"
              />
              <div className="p-3 sm:p-6 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between gap-2 lg:gap-4 mb-3">
                  <h3 className="text-white text-base sm:text-xl md:text-2xl font-semibold">Customer Insights Dashboard</h3>
                  <Button className="rounded-full border border-white/15 px-4 py-2 text-xs sm:text-base text-white">Live Demo</Button>
                </div>
                <p className="text-white text-sm sm:text-base mb-4">
                  An easy-to-use dashboard that shows businesses who their customers are and what they're buying. Turns complicated sales data into simple charts anyone can understand.
                </p>
                <div className="flex items-center gap-2 lg:gap-3 mt-2">
                  <p className="rounded-full border border-white/15 px-4 py-2 text-xs sm:text-base text-white">Data Visualization</p>
                  <p className="rounded-full border border-white/15 px-4 py-2 text-xs sm:text-base text-white">Analytics</p>
                </div>
              </div>
            </div>
            <div className="rounded-[18px] border border-[#cdcdcd]/15 overflow-hidden bg-[#181818] flex flex-col">
              <img
                src={spamFilterEngineImg}
                alt="Spam Filter Engine Project Screenshot"
                className="w-full h-80 object-cover"
              />
              <div className="p-3 sm:p-6 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="text-white text-base sm:text-xl md:text-2xl font-semibold">Spam Filter Engine</h3>
                  <Button className="rounded-full border border-white/15 px-4 py-2 text-xs sm:text-base text-white">Live Demo</Button>
                </div>
                <p className="text-white text-sm sm:text-base mb-4">
                  A smart email filter that learns what's spam and what's important to you. Gets better over time by understanding your preferences and keeps your inbox clean.
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <p className="rounded-full border border-white/15 px-4 py-2 text-xs sm:text-base text-white">Text Analysis</p>
                  <p className="rounded-full border border-white/15 px-4 py-2 text-xs sm:text-base text-white">AI</p>
                </div>
              </div>
            </div>
            <div className="rounded-[18px] border border-[#cdcdcd]/15 overflow-hidden bg-[#181818] flex flex-col">
              <img
                src={trafficFlowAnalyzerImg}
                alt="Smart Price Predictor Project Screenshot"
                className="w-full h-80 object-cover"
              />
              <div className="p-3 sm:p-6 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="text-white text-base sm:text-xl md:text-2xl font-semibold">Traffic Flow Analyzer</h3>
                  <Button className="rounded-full border border-white/15 px-4 py-2 text-xs sm:text-base text-white">Live Demo</Button>
                </div>
                <p className="text-white text-sm sm:text-base mb-4">
                  A system that predicts traffic patterns in cities using historical data. Helps city planners understand when and where congestion happens to improve roads and public transport.
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <p className="rounded-full border border-white/15 px-4 py-2 text-xs sm:text-base text-white">Big Data</p>
                  <p className="rounded-full border border-white/15 px-4 py-2 text-xs sm:text-base text-white">Predictive Modeling</p>
                </div>
              </div>
            </div>
            {/* Add more projects in a similar format as needed */}
          </div>
        </div>
      </section>
      {/* Quote and Projects Section Ends Here */}

      {/* Work Experience Section Starts Here */}
      <section id="experience" className="mx-auto max-w-380 px-4 py-20 md:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-40 items-start">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <p className="rounded-full border border-white/15 px-6 py-2 text-sm text-white bg-white/15 hover:bg-white/5 transition-colors w-fit">
              Work experience
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-[42px] text-white font-medium leading-[1.3em]">
              Not All Heroes Write Code, Some Make Data Work for You
            </h2>
            <p className="text-white/60 text-base sm:text-lg md:text-xl leading-relaxed">
              I believe in technology that's both powerful and practical. My work combines understanding data with building reliable software to create tools that people can actually use and businesses can count on.
            </p>
          </div>
          {/* Right Side - Experience Cards */}
          <div className="space-y-4.5">
            {/* SOLVATIVE Card */}
            <div className="rounded-[18px] border border-[#cdcdcd]/15 bg-[#181818] p-4.5 flex items-center sm:flex-nowrap flex-wrap gap-4 hover:border-[#cdcdcd]/25 transition-colors">
              <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center shrink-0">
                <span className="text-black font-bold text-xs">SOLVATIVE</span>
              </div>
              <div className="flex justify-between items-center w-full">
                <div>
                  <h3 className="text-white text-lg font-semibold mb-1">ML Engineer</h3>
                  <p className="text-white/60 text-sm">[Company Name] • Full Time</p>
                </div>
                <div className="text-white/80 text-base shrink-0 ms-auto">
                  2023 - Present
                </div>
              </div>
            </div>
            {/* Metafic Card */}
            <div className="rounded-[18px] border border-[#cdcdcd]/15 bg-[#181818] p-4.5 flex items-center sm:flex-nowrap flex-wrap gap-4 hover:border-[#cdcdcd]/25 transition-colors">
              <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center shrink-0 p-2">
                <img
                  src={metaficLogo}
                  alt="Metafic"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex justify-between items-center w-full">
                <div>
                  <h3 className="text-white text-lg font-semibold mb-1">Software Engineer</h3>
                  <p className="text-white/60 text-sm">[Company Name] • Full Time</p>
                </div>
                <div className="text-white/80 text-base shrink-0 ms-auto">
                  2021-2023
                </div>
              </div>
            </div>
            {/* iRaiD Card */}
            <div className="rounded-[18px] border border-[#cdcdcd]/15 bg-[#181818] p-4.5 flex items-center sm:flex-nowrap flex-wrap gap-4 hover:border-[#cdcdcd]/25 transition-colors">
              <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center shrink-0 p-2">
                <img
                  src={iraidLogo}
                  alt="iRaiD"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex justify-between items-center w-full">
                <div>
                  <h3 className="text-white text-lg font-semibold mb-1">Data Engineer</h3>
                  <p className="text-white/60 text-sm">[Company Name] • Full Time</p>
                </div>
                <div className="text-white/80 text-base shrink-0 ms-auto">
                  2019-2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Experience Section Ends Here */}

      {/* Tech Stack Section Starts Here */}
      <section className="mx-auto max-w-380 px-4 sm:pt-12">
        <h2 className="text-[22px] text-center font-satoshi text-white/70 font-medium leading-[1.3em]">{'{'} MY CURRENT TECH STACK {'}'}</h2>
        <div className="text-center">
          <Skiper31 />
        </div>
      </section>
      {/* Tech Stack Section Ends Here */}

      {/* About section starts here */}
      <section id="about" className="mx-auto max-w-380 px-4 pt-12 mt-20">
        <div className="flex flex-col gap-8 md:grid grid-cols-12 lg:gap-20">
          <div className="col-span-5 relative">
            <img src={aboutImg} alt="About" className="w-full md:w-auto" />
            <img
              src={blueStarGraphic}
              alt="Star Graphic"
              className="absolute -top-34 -right-10 object-cover -z-1 animate-spin-slow hidden md:block"
            />
          </div>
          <div className="col-span-7 justify-center flex flex-col gap-6">
            <p className="rounded-full border border-white/15 px-6 py-2 text-sm text-white bg-white/15 hover:bg-white/5 transition-colors w-fit">
              About
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-[42px] text-white font-medium"><span className="text-white/50">Building smart tools that</span><br className="hidden sm:block" />turn data into real solutions</h2>
            <p className="text-white/60 text-base sm:text-lg md:text-xl leading-relaxed">
              I'm a software and machine learning engineer who loves making sense of data. Whether it's building systems that handle massive amounts of information or creating tools that predict what's coming next, I work with care and curiosity always keeping real people and real results in mind.
            </p>
            <Button className="rounded-full border border-white/15 px-5! py-2 h-11 text-sm text-black bg-white hover:bg-white/5 hover:text-white transition-colors w-fit">
              Download CV <ArrowUpRightIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
      {/* About section ends here */}

      {/* Other Interests Section Starts here*/}
      <section id="interests" className="mt-16 md:mt-28">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl lg:text-[42px] text-white text-center font-medium">Other Interests</h2>
          <p className="font-medium text-white/50 text-center text-sm sm:text-base md:text-lg lg:text-[22px] mt-2">Let me show you some of my photography skills</p>
        </div>
        <div className="py-8">
          <PerspectiveCarousel />
        </div>
      </section>
      {/* Other Interests Section Ends here*/}

      {/* Things I've Figured Out(still learning) Section Starts here*/}
      <section className="mx-auto max-w-7xl px-4 pt-12 mt-0 lg:mt-20">
        <h2 className="text-2xl md:text-3xl lg:text-[42px] text-white text-center font-medium">Things I've Figured Out (still learning)</h2>

        <p className="font-medium text-white/50 text-center text-sm sm:text-base md:text-lg lg:text-[22px] mt-2">Honest & RelatableReal lessons from building real projects</p>
        <div className="py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 lg:grid-cols-3">
          {cardData.map((card, idx) => (
            <div key={idx} className="rounded-4xl overflow-hidden text-white border border-white/15 h-full flex flex-col justify-between">
              <img src={card.cardImg} alt="card-img" className="w-full" />
              <div className="p-4 flex flex-col gap-4 justify-between h-full">
                <div className="flex flex-col gap-4">
                  <h4 className="font-semibold">{card.title}</h4>
                  <p className="text-sm">{card.description}</p>
                </div>
                <div className="flex w-full mt-4 gap-4 flex-wrap">
                  {card.buttons.map((button, idx) => (
                    <Button key={idx} variant={button.variant as any} className="text-xs bg-transparent">
                      {button.text}
                    </Button>
                  ))
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Things I've Figured Out(still learning) Section Ends here*/}

      {/* Contact Us section starts here */}
      <section id="contact" className="mx-auto max-w-380 px-4 pt-6 lg:pt-18">
        <Button variant="glassButton">
          Contact
        </Button>
        <div>
          <h2 className="font-switzer text-5xl text-white mt-8"><span className="text-white/45">Let's build something</span> meaningful.</h2>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          <div className="bg-gray-clr-500 p-8 rounded-4xl mt-10">
            <form className="flex flex-col gap-6">
              <Input
                type="text"
                placeholder="Name"
                variant="glass"
              />
              <Input
                type="email"
                placeholder="Email"
                variant="glass"
              />
              <Input
                type="tel"
                placeholder="Contact number"
                variant="glass"
              />
              <Input
                type="text"
                placeholder="Subject"
                variant="glass"
              />
              <Input

                placeholder="How can I help you?"
                variant="glass"
                className="resize-none min-h-15"
              />
              <div className="mt-4">
                <Button type="submit" variant="glassButton" className="w-full flex items-center justify-center text-white text-base">
                  Submit
                  {/* <Icon icon="iconamoon:arrow-top-right-1-light" className="ml-2" /> */}
                </Button>
              </div>
            </form>
          </div>
          <div className="flex flex-col items-end justify-center">
            <img src={FooterImg} alt="footer_logo" />
            <p className="text-white/45 max-w-138 text-xl">Whether you have a crazy idea or a real problem that needs solving, let's talk. I love tackling new challenges and building things that actually work.</p>
          </div>
        </div>
        <div className="py-10 flex flex-col items-center justify-center mt-10">
          <p className="text-3xl sm:text-6xl lg:text-8xl font-instrument text-white/80 italic">ihwahussain@gmail.com</p>
          <div className="mt-10 flex items-center gap-4">
            <Facebook className="text-white/80 size-10 inline-block mx-1" strokeWidth={1.7} />
            <Github className="text-white/80 size-10 inline-block mx-1" strokeWidth={1.7} />
            <Twitter className="text-white/80 size-10 inline-block mx-1" strokeWidth={1.7} />
            <Instagram className="text-white/80 size-10 inline-block mx-1" strokeWidth={1.7} />
            <Linkedin className="text-white/80 size-10 inline-block mx-1" strokeWidth={1.7} />
          </div>
        </div>
      </section>
      {/* Contact Us section ends here */}

    </div >
  )
}