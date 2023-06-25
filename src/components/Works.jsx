//import { useState } from "react";
import SecHeadings from "./SecHeadings";
import SingleWork from "./SingleWork";
//import useFetch from "../hooks/useFetch";

const Works = () => {
  //const [loader, setLoader] = useState(true);
  //const { data } = useFetch("url", "", "GET", setLoader);

  return (
    <section
      id="works"
      className="works py-10 md:py-20 bg-slate-200 bg-opacity-50 scroll-mt-12 dark:bg-gradient-to-r dark:from-slate-700 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="container mx-auto mb-10 px-5 md:px-0">
        <SecHeadings
          heading="Works"
          subheading="Crafting Works that Inspire!"
        />
      </div>

      <SingleWork
        image="https://static.showit.co/1200/W-OaQYXOQjW0KFjYBdZhMQ/160719/gray_and_black_bold_minimalist_how_to_youtube_thumbnail.jpg"
        title="Showit Blog Stylist Plugin"
        description="Transform the look of your Showit blog with the click of your mouse. This Showit plugin was created for creatives using Showit who want a better looking blog. Showit is amazing but the blog styles are limited… until now! Changing the style of your blog headings has never been easier. Use custom fonts, update the font size, and set custom spacing on your blog.. plus way more!"
        type="Client's Work"
        category="WordPress Plugin"
        used_tech="PHP, WordPress"
        demo_url="https://riseplugins.com/"
        source_url=""
      />
      <SingleWork
        image="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Gutpress"
        description="Custom Gutenburg blocks plugin to add custom functionalities to your WordPress site."
        type="Open Source"
        category="WordPress Plugin"
        used_tech="PHP, WordPress"
        demo_url="https://github.com/arifix/gutpress"
        source_url="https://github.com/arifix/gutpress"
      />
      <SingleWork
        image="https://quizix.madebyarif.com/codecanyon/images/thumbs_590_300.png"
        title="Quizix - Android Quiz App with AdMob FCM Push Notification Offline Data Caching"
        description="Quizix is an android quiz app with single text/photo question with two/three/four answer options. Simply add your category/sub-category/question from backend and all remaining tasks will be done by app. The application is fully native using latest features of Android platform to provide the best user experience."
        type="Marketplace Product"
        category="Android APP"
        used_tech="JAVA, Android, XML, PHP, MySQL, Laravel"
        demo_url="https://codecanyon.net/item/quizix-android-quiz-app-with-admob-fcm-push-notification-offline-data-caching/21213145"
        source_url=""
      />

      {/* {loader ? (
        <div className="container mx-auto mb-10 px-5 md:px-0 flex items-center justify-start">
          <div className="inline-flex items-center px-4 py-2 leading-6 text-lg rounded-md">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Getting data...
          </div>
        </div>
      ) : (
        data?.record?.works?.map((val, id) => (
          <SingleWork
            key={id}
            image={val.image}
            title={val.title}
            description={val.description}
            type={val.type}
            category={val.category}
            used_tech={val.used_tech}
            demo_url={val.demo_url}
            source_url={val.source_url}
          />
        ))
      )} */}
    </section>
  );
};

export default Works;
