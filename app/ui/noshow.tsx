"use client";

import { useEffect, useState } from "react";

export default function BirthdayCountdown({
  birthdayData,
}: {
  birthdayData: { name: string; daysLeft: number; profileImage: string };
}) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Function to calculate time from days left
    const calculateTimeLeft = () => {
      // Get current date/time
      const now = new Date();

      // Calculate total seconds from days
      let totalSeconds = birthdayData.daysLeft * 24 * 60 * 60;

      // Subtract elapsed seconds since midnight
      const secondsSinceMidnight =
        now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds();

      totalSeconds = totalSeconds - secondsSinceMidnight;

      if (totalSeconds > 0) {
        // Calculate days, hours, minutes, seconds
        const days = Math.floor(totalSeconds / (24 * 60 * 60));
        const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = Math.floor(totalSeconds % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Birthday has passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);

  // Calculate the target date for display
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + birthdayData.daysLeft);

  const formattedDate = targetDate.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      {/* Inline styles */}
      <style jsx>{`
        /* Base styles */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }

        .container {
          min-height: 100vh;
          background-color: #fff0f5;
          background-image: linear-gradient(
              to right,
              rgba(251, 207, 232, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(251, 207, 232, 0.1) 1px,
              transparent 1px
            );
          background-size: 20px 20px;
          padding: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .birthday-card {
          max-width: 1000px;
          width: 100%;
          position: relative;
          padding: 2rem;
          border-radius: 1rem;
        }

        /* Banner styles */
        .banner {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .banner-section {
          width: 50%;
          height: 60px;
          overflow: hidden;
        }

        /* Content grid */
        .content-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-top: 3rem;
        }

        @media (min-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* Left column */
        .left-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
        }

        .title {
          font-size: 3rem;
          font-weight: bold;
          color: #1f2937;
          text-shadow: 2px 2px 0 #ff6b81, -2px -2px 0 #ff6b81,
            2px -2px 0 #ff6b81, -2px 2px 0 #ff6b81;
          text-align: center;
          line-height: 1.1;
        }

        .date-display {
          background-color: #ff6b81;
          color: white;
          font-weight: 600;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          width: 16rem;
          text-align: center;
          font-size: 1.25rem;
        }

        .countdown-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          background-color: white;
          padding: 1.5rem;
          border-radius: 0.75rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
          width: 100%;
          max-width: 24rem;
        }

        .countdown-unit {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .countdown-value {
          background-color: #ffe0eb;
          color: #ff4d6d;
          font-weight: bold;
          font-size: 1.5rem;
          width: 100%;
          aspect-ratio: 1/1;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .countdown-label {
          font-size: 0.75rem;
          font-weight: 500;
          color: #4b5563;
          margin-top: 0.25rem;
        }

        .action-button {
          background-color: #ff6b81;
          color: white;
          font-weight: 600;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .action-button:hover {
          background-color: #ff4d6d;
        }

        /* Right column */
        .right-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          position: relative;
        }

        .profile-container {
          position: relative;
        }

        .profile-image {
          width: 16rem;
          height: 16rem;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #ff6b81;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          object-fit: cover;
        }

        .balloon {
          position: absolute;
          color: #ff6b81;
          width: 3rem;
          height: 3rem;
        }

        .balloon-top {
          top: -2.5rem;
          right: 0;
        }

        .balloon-bottom {
          bottom: 0;
          right: -2.5rem;
        }

        .name-display {
          background-color: #ff6b81;
          color: white;
          font-weight: 600;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          text-align: center;
          font-size: 1.25rem;
        }

        .smiley {
          position: absolute;
          bottom: 2.5rem;
          right: 2.5rem;
          color: #374151;
          width: 4rem;
          height: 4rem;
        }

        .clock {
          position: absolute;
          top: 25%;
          right: 25%;
          color: #ff6b81;
          width: 3rem;
          height: 3rem;
        }

        .creator {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          color: #ff6b81;
          font-size: 0.875rem;
        }

        /* Banner triangles */
        .triangle {
          width: 0;
          height: 0;
          border-left: 25px solid transparent;
          border-right: 25px solid transparent;
          border-bottom: 50px solid #ff6b81;
          transform: rotate(180deg);
          display: inline-block;
          margin: 0 5px;
        }

        .banner-row {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
      `}</style>

      <div className="container">
        <div className="birthday-card">
          {/* Decorative banner */}
          <div className="banner">
            <div className="banner-section">
              <div className="banner-row">
                {[...Array(6)].map((_, i) => (
                  <div key={`left-${i}`} className="triangle"></div>
                ))}
              </div>
            </div>
            <div className="banner-section">
              <div className="banner-row">
                {[...Array(6)].map((_, i) => (
                  <div key={`right-${i}`} className="triangle"></div>
                ))}
              </div>
            </div>
          </div>

          <div className="content-grid">
            <div className="left-column">
              <h1 className="title">
                Waiting for
                <br />
                {birthdayData.name}
              </h1>

              <div className="date-display">{formattedDate}</div>

              <div className="countdown-container">
                <div className="countdown-unit">
                  <div className="countdown-value">{timeLeft.days}</div>
                  <span className="countdown-label">Days</span>
                </div>
                <div className="countdown-unit">
                  <div className="countdown-value">{timeLeft.hours}</div>
                  <span className="countdown-label">Hours</span>
                </div>
                <div className="countdown-unit">
                  <div className="countdown-value">{timeLeft.minutes}</div>
                  <span className="countdown-label">Mins</span>
                </div>
                <div className="countdown-unit">
                  <div className="countdown-value">{timeLeft.seconds}</div>
                  <span className="countdown-label">Secs</span>
                </div>
              </div>
            </div>

            <div className="right-column">
              <div className="profile-container">
                <img
                  src={birthdayData.profileImage || "/placeholder.svg"}
                  alt={birthdayData.name}
                  className="profile-image"
                />

                {/* Simple balloon emojis */}
                <div className="balloon balloon-top">🎈</div>
                <div className="balloon balloon-bottom">🎈</div>
              </div>

              <div className="name-display">{birthdayData.name}</div>

              {/* Simple emoji icons */}
              <div className="smiley">😊</div>
              <div className="clock">🕒</div>
            </div>
          </div>

          <div className="creator">creator ridheshw</div>
        </div>
      </div>
    </>
  );
}
