import React, { useState } from "react";
import "./styles.css";

const channelsList = {
  Finance: [
    {
      name: "Neeraj Aurora",
      subscribers: "682k",
      link: "https://www.youtube.com/user/caneerajaroraforyou"
    },
    {
      name: "Shashank Udupa",
      subscribers: "6.1K",
      link: "https://www.youtube.com/channel/UCdUEJABvX8XKu3HyDSczqhA"
    },
    {
      name: "Pranjal Kamra",
      subscribers: "1.98M",
      link: "https://www.youtube.com/user/pranjalkamra"
    }
  ],
  Coding: [
    {
      name: "Tanay Pratap",
      subscribers: "16.6k",
      link: "https://www.youtube.com/channel/UCNFmBuclxQPe57orKiQbyfA"
    },
    {
      name: "Free Code Camp",
      subscribers: "2.84M",
      link: "https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ"
    }
  ],
  Business: [
    {
      name: "Varun Mayya",
      subscribers: "30.1k",
      link: "https://www.youtube.com/channel/UCsQoiOrh7jzKmE8NBofhTnQ"
    },
    {
      name: "Ankur Wariko",
      subscribers: "44.3K",
      link: "https://www.youtube.com/channel/UCRzYN32xtBf3Yxsx5BvJWJw"
    },
    {
      name: "Gary vaynerchuk",
      subscribers: "2.92M",
      link: "https://www.youtube.com/c/garyvee"
    }
  ]
};
const generes = Object.keys(channelsList);

export default function App() {
  const [type, setType] = useState("");
  const [channelList, setChannelList] = useState([]);
  function clickHandler(genere) {
    setChannelList([]);
    setType(genere);
    setChannelList(channelsList[genere]);
  }

  return (
    <div className="App">
      <h1>
        <span> 📺 </span>
        Youtube Channels
      </h1>
      <p>
        CheckOut some of my favourite Youtube Channels.Select a genere to get
        started
      </p>
      <ul id="genere-list">
        {generes.map((genere, index) => (
          <li key={index} onClick={() => clickHandler(genere)}>
            {genere}
          </li>
        ))}
      </ul>
      <hr />
      {type ? (
        <h4>You have choosen {type} Click on the name to view that channel </h4>
      ) : (
        ""
      )}
      <ul id="channel-list">
        {channelList.map((channel, index) => (
          <li key={index}>
            <a href={channel.link} target="blank">
              {channel.name}
            </a>
            <span id="subs-count">{channel.subscribers} subscribers</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
