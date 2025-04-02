"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { birthday, birthdays } from "@/data";
import "./style.css";
import BirthdayCountdown from "../ui/noshow";

// Add type for CSS custom properties
type CSSPropertiesWithVars = React.CSSProperties & {
  "--t"?: string;
  "--i"?: string;
};

function Show({ birth }: { birth: birthday }) {
  const [showLetter, setShowLetter] = useState(false);
  const [dateText, setDateText] = useState("");
  const [titleLetterText, setTitleLetterText] = useState("");
  const [contentLetterText, setContentLetterText] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    setDateText(`${birth.date}/${birth.month + 1}/${new Date().getFullYear()}`);
    setContentLetterText(birth["letter"]);
    setTitleLetterText(birth["title"]);
    setName(birth["name"]);
    if (birth["img"]) {
      setImage(birth["img"]);
    } else {
      setImage(
        `https://ui-avatars.com/api/?name=${encodeURIComponent(birth["name"])}`
      );
    }
  }, [birth]);

  const handleOpenLetter = () => {
    setShowLetter(true);
  };

  const handleCloseLetter = () => {
    setShowLetter(false);
    setTitleLetterText("");
    setContentLetterText("");
  };

  return (
    <>
      <Head>
        <title>Happy Birthday Card</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <div id="wrapper">
        <div className="flag__birthday">
          <div className="flag__left">
            <Image src="/images/1.png" alt="" width={350} height={200} />
          </div>
          <div className="flag__right">
            <Image src="/images/1.png" alt="" width={350} height={200} />
          </div>
        </div>

        <div className="content">
          <div className="left">
            <div className="title">
              <h1 className="happy">
                <span style={{ "--t": "4s" } as CSSPropertiesWithVars}>H</span>
                <span style={{ "--t": "4.2s" } as CSSPropertiesWithVars}>
                  a
                </span>
                <span style={{ "--t": "4.4s" } as CSSPropertiesWithVars}>
                  p
                </span>
                <span style={{ "--t": "4.6s" } as CSSPropertiesWithVars}>
                  p
                </span>
                <span style={{ "--t": "4.8s" } as CSSPropertiesWithVars}>
                  y
                </span>
              </h1>
              <h1 className="birthday">
                <span style={{ "--t": "5s" } as CSSPropertiesWithVars}>B</span>
                <span style={{ "--t": "5.2s" } as CSSPropertiesWithVars}>
                  i
                </span>
                <span style={{ "--t": "5.4s" } as CSSPropertiesWithVars}>
                  r
                </span>
                <span style={{ "--t": "5.6s" } as CSSPropertiesWithVars}>
                  t
                </span>
                <span style={{ "--t": "5.8s" } as CSSPropertiesWithVars}>
                  h
                </span>
                <span style={{ "--t": "6s" } as CSSPropertiesWithVars}>d</span>
                <span style={{ "--t": "6.2s" } as CSSPropertiesWithVars}>
                  a
                </span>
                <span style={{ "--t": "6.4s" } as CSSPropertiesWithVars}>
                  y
                </span>
              </h1>
              <div className="hat">
                <Image src="/images/hat.png" alt="" width={130} height={100} />
              </div>
            </div>

            <div className="date__of__birth">
              <span>{dateText}</span>
            </div>

            <div className="btn">
              <button id="btn__letter" onClick={handleOpenLetter}>
                Click here {name}
                <i className="fa-regular fa-envelope"></i>
              </button>
            </div>
          </div>

          <div className="right">
            <div className="box__account">
              <div className="image">
                <Image src={image} alt="" width={200} height={200} />
              </div>
              <div className="name">
                <i className="fa-solid fa-heart"></i>
                <span>{name}</span>
                <i className="fa-solid fa-heart"></i>
              </div>
              <div className="balloon_one">
                <Image
                  src="/images/balloon1.png"
                  alt=""
                  width={100}
                  height={120}
                />
              </div>
              <div className="balloon_two">
                <Image
                  src="/images/balloon2.png"
                  alt=""
                  width={100}
                  height={120}
                />
              </div>
            </div>

            <div className="cricle">
              <div className="text__cricle">
                <span style={{ "--i": "1" } as CSSPropertiesWithVars}>h</span>
                <span style={{ "--i": "2" } as CSSPropertiesWithVars}>a</span>
                <span style={{ "--i": "3" } as CSSPropertiesWithVars}>p</span>
                <span style={{ "--i": "4" } as CSSPropertiesWithVars}>p</span>
                <span style={{ "--i": "5" } as CSSPropertiesWithVars}>y</span>
                <span style={{ "--i": "6" } as CSSPropertiesWithVars}>-</span>
                <span style={{ "--i": "7" } as CSSPropertiesWithVars}>b</span>
                <span style={{ "--i": "8" } as CSSPropertiesWithVars}>i</span>
                <span style={{ "--i": "9" } as CSSPropertiesWithVars}>r</span>
                <span style={{ "--i": "10" } as CSSPropertiesWithVars}>t</span>
                <span style={{ "--i": "11" } as CSSPropertiesWithVars}>h</span>
                <span style={{ "--i": "12" } as CSSPropertiesWithVars}>d</span>
                <span style={{ "--i": "13" } as CSSPropertiesWithVars}>a</span>
                <span style={{ "--i": "14" } as CSSPropertiesWithVars}>y</span>
                <span style={{ "--i": "15" } as CSSPropertiesWithVars}>-</span>
              </div>
              <i className="fa-solid fa-heart"></i>
            </div>
          </div>
        </div>

        <div
          className="decorate_star star1"
          style={{ "--t": "15s" } as CSSPropertiesWithVars}
        ></div>
        <div
          className="decorate_star star2"
          style={{ "--t": "15.2s" } as CSSPropertiesWithVars}
        ></div>
        <div
          className="decorate_star star3"
          style={{ "--t": "15.4s" } as CSSPropertiesWithVars}
        ></div>
        <div
          className="decorate_star star4"
          style={{ "--t": "15.6s" } as CSSPropertiesWithVars}
        ></div>
        <div
          className="decorate_star star5"
          style={{ "--t": "15.8s" } as CSSPropertiesWithVars}
        ></div>

        <div
          className="decorate_flower--one"
          style={{ "--t": "15s" } as CSSPropertiesWithVars}
        >
          <Image
            src="/images/decorate_flower.png"
            alt=""
            width={20}
            height={20}
          />
        </div>
        <div
          className="decorate_flower--two"
          style={{ "--t": "15.3s" } as CSSPropertiesWithVars}
        >
          <Image
            src="/images/decorate_flower.png"
            alt=""
            width={20}
            height={20}
          />
        </div>
        <div
          className="decorate_flower--three"
          style={{ "--t": "15.6s" } as CSSPropertiesWithVars}
        >
          <Image
            src="/images/decorate_flower.png"
            alt=""
            width={20}
            height={20}
          />
        </div>

        <div className="decorate_bottom">
          <Image src="/images/decorate.png" alt="" width={100} height={50} />
        </div>

        <div className="smiley__icon">
          <Image
            src="/images/smiley_icon.png"
            alt=""
            width={100}
            height={100}
          />
        </div>

        {showLetter && (
          <div className="box__letter" style={{ display: "block" }}>
            <div className="letter__border" style={{ display: "block" }}>
              <div className="letter">
                <div className="title__letter">
                  {titleLetterText}
                  {titleLetterText && <i className="fa-solid fa-heart" />}
                </div>
                <div className="content__letter">
                  <div className="text__letter">
                    <p>{contentLetterText}</p>
                  </div>
                </div>
              </div>
              <div className="close" onClick={handleCloseLetter}>
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
          </div>
        )}
      </div>

      <div id="copy">
        <p className="text-center text-white text-sm">
          creator <a href="/">ridheshw</a>
        </p>
      </div>
    </>
  );
}

const getDiff = (birthday: birthday) => {
  let today = new Date();
  let day = birthday.date - today.getDate();
  let month = birthday.month - today.getMonth();
  day +=
    month * new Date(new Date().getFullYear(), birthday.month + 1, 0).getDate();
  const year = new Date().getFullYear();
  const daysInYear =
    (year % 4 === 0 && year % 100 > 0) || year % 400 == 0 ? 366 : 365;
  if (day < 0) {
    day = day * -1 + daysInYear;
  }
  return day;
};

const near = () => {
  let obj = birthdays[0];
  let diff = Infinity;
  for (let i = 0; i < birthdays.length - 1; i++) {
    const currentDiff = getDiff(birthdays[i]);
    if (currentDiff < diff) {
      obj = birthdays[i];
      diff = currentDiff;
    }
  }
  return { obj, diff };
};

export default function Home() {
  const { obj, diff } = near();

  if (diff == 0) {
    return <Show birth={obj} />;
  } else {
    return (
      <BirthdayCountdown
        birthdayData={{ name: obj.name, daysLeft: diff, profileImage: obj.img }}
      />
    );
  }
}
