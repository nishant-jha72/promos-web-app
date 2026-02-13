import ServiceCarousel from "./ServiceCarousel";
import inf from "../assets/influencer.png";
import fb from "../assets/facebook.png";
import google from "../assets/google.png";
import appImages from "../assets/apps.png";
const Services = () => {
  const servicesData = [
    {
      title: "Facebook Ads ",
      description: "Harness the power of Facebook's vast audience through our proven promotion strategies. We optimize business pages, craft engaging Reels and carousel ads, and deploy precise targeting to demographics, interests, and behaviors for maximum reach and conversions.",
      process: "Page Optimization , Audience Precision , High-Impact Ads , Engagement Boost , Data-Driven Results",
      image: fb,
       link: "/services/Facebook.Service",
    },
    {
      title: "Google Adsense ",
      description: "Google AdSense offers website owners a straightforward way to monetize content through automated, high-quality ads. Key advantages include ease of setup, access to Google's vast advertiser network, and reliable payouts, making it ideal for bloggers and small sites scaling traffic.",
      process: "Revenue Potential → Quality and Control → Reliable and Scalable",
      image: google,
       link: "/services/Google.Service",
    },
    {
      title: "Promote By Influencers",
      description: "Promoting with influencers leverages authentic voices to expand reach and build trust rapidly. This strategy excels in niche targeting and higher engagement rates compared to traditional ads, ideal for full-stack developers showcasing portfolio projects.",
      process: "Targeted Reach → Cost-Effective Growth → Enhanced Engagement → Gain Actual Audience",
      image: inf,
      link: "/services/Insta.Service",
    },
    {
      title: "Promote By Specific Type APPS",
      description: "Promoting with apps delivers direct, personalized engagement to users on the go, boosting visibility and conversions for services like full-stack development portfolios. Benefits include push notifications for instant reach and offline access, while the process spans pre-launch research to ongoing retention",
      process: "Pre-Launch → Launch Phase → Post-Launch Retention",
      image: appImages,
       link: "/services/AppPromotion.Service",
    },
  ];

  return (
    <section className="bg-sky-200 px-6 py-10">
      <h2 className="text-4xl font-bold text-center mb-14">
        Our Services
      </h2>

      <ServiceCarousel services={servicesData} interval={3000} />
    </section>
  );
};

export default Services;
