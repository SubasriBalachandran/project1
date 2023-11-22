import { Skeleton } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "HoneyDew",
      }}
    >
      <center>
        {" "}
        <Skeleton
          variant="rounded"
          width={210}
          height={60}
          style={{
            backgroundColor: "black",
            fontSize: "40px",
            marginTop: 30,
            color: "red",
            fontFamily: "Gabriola",
          }}
        >
          EventsHub
        </Skeleton>
      </center>

      <p style={{ fontFamily: "Cascadia Code", fontSize: "20px" }}>
        Organizing an event, whether corporate, special, or trade events, is a
        challenging task. However meticulous and enthusiastic you are, you might
        be weary of planning and organizing events if it isn’t your usual task.
        The worst is that you might neglect other essential details of the
        events that won’t meet quality expectations. That’s where the event
        planner comes like a superhero! Event planners exist to organize events
        well ahead of time. From facilities, locations, special guests,
        equipment, catering, and other big and small details, event planners
        ensure that all are taken care of. This way, businesses, couples, and
        celebrants will have time to relax and focus on the most important
        matters.
      </p>
      <center>
        <img
          alt="Welcome"
          src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnQlMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3Ds"
        ></img>
      </center>
      <p style={{ fontFamily: "Cascadia Code", fontSize: "20px" }}>
        Today, various event planners provide incredible opportunities for
        brands and couples to create an ultimate lasting impression on the
        audience. Fortunately, you can also find them online. If you’re one of
        them but do not have the ideal website yet, this list is a perfect
        inspiration set. These event planner websites will inspire you to build
        your online visibility with sophistication.
      </p>
      <center>
        <img
          alt="Welcome"
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D"
        ></img>
      </center>
      <p style={{ fontFamily: "Cascadia Code", fontSize: "20px" }}>
        While an event planning job is challenging, building your website can be
        even more challenging. Crafting your website can help you make or break
        your image as a professional event planner. So, you should research and
        find tools to help you carry out your plans. Of course, you can find the
        best websites to guide you in crafting your own.
      </p>
      <center>
        <img
          alt="Welcome"
          src="https://cache.careers360.mobi/media/article_images/2022/7/5/Top-10-Fashion-Shows-in-India.webp"
        />
      </center>
      <p style={{ fontFamily: "Cascadia Code", fontSize: "20px" }}>
        Building an online presence is not as easy as one may think. That’s why
        you should ensure all the elements you need: an outstanding layout, good
        functionality, and a user-friendly design.
      </p>
    </div>
  );
};

export default Home;