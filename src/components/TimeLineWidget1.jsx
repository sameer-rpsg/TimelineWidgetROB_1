import React, { useEffect } from "react";
import styles from "@/components/TimeLineWidget1.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);
const TimeLineWidget1 = () => {
  const timelineData1 = [
    {
      yearLabel: "2000+",
      subtitle: "YEARS AGO",
      title: "Ancient Beginnings",
      highlights: [
        "Lacquerware was first developed in Vietnam as a practical craft for creating durable, waterproof objects like bowls, trays, and furniture.",
        "The use of lacquer resin from the ”son ta” tree (Toxicodendron vernicifluum) became a hallmark of Vietnamese craftsmanship.",
      ],
      images: [
        {
          src: "https://cdn.prod.website-files.com/6734928e2af1829d3c568460/68119712c8c4c74ad0ef01b8_p1-1.avif",
          alt: "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
          caption:
            "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
        },
      ],
    },
  ];
  const timelineData2 = [
    {
      yearLabel: "2000+",
      subtitle: "YEARS AGO",
      title: "Ancient Beginnings",
      highlights: [
        "Perched high above Lake Lucerne, the Bürgenstock Resort is a 150-year-old icon offering panoramic lake and mountain views alongside unparalleled wellness. The resort is home to three hotels and residences. The 10,000 sqm Alpine Spa features five pools, saline floating baths, steam rooms, private spa suites, and expert-designed hydrothermal journeys.",
      ],
      images: [
        {
          src: "https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.robbreportindia.com%2Feditor-images%2F2025-08-28T16%253A11%253A27.780Z-Untitled%2520design%2520-%25202025-08-28T214056.474.jpg&w=3840&q=75",
          alt: "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
          caption:
            "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
        },
      ],
    },
  ];
  const timelineData3 = [
    {
      yearLabel: "2000+",
      subtitle: "YEARS AGO",
      title: "Ancient Beginnings",
      highlights: [
        "This 5-star wellness retreat near Saint-Tropez is set within the protected Cap Lardier estate overlooking the three-mile Plage de Gigaro. Guests get to follow nutritionist Jacques Fricker’s gastronomy approach for weight loss, complemented by tailored spa treatments and indoor-outdoor fitness sessions.",
      ],
      images: [
        {
          src: "https://cdn.prod.website-files.com/6734928e2af1829d3c568460/68119712c8c4c74ad0ef01b8_p1-1.avif",
          alt: "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
          caption:
            "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
        },
      ],
    },
  ];
  const timelineData4 = [
    {
      yearLabel: "2000+",
      subtitle: "YEARS AGO",
      title: "Ancient Beginnings",
      highlights: [
        "works for the same reason her performances in Gangubai Kathiawadi and Udta Punjab  shine: you don’t expect it to. She looks miscast in the role of a frantic Indian spy who marries into a Pakistani family — only to weaponise our preconceived notions of her inexperience, frightful youth, delicate frame and urban gait. Every perceived flaw supplies the point of her character. ",
      ],
      images: [
        {
          src: "https://cdn.prod.website-files.com/6734928e2af1829d3c568460/68119712c8c4c74ad0ef01b8_p1-1.avif",
          alt: "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
          caption:
            "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
        },
      ],
    },
  ];
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 992px)", () => {
      const container = document.querySelector(`.${styles.horizontal}`);
      const wrapper = container?.querySelector(`.${styles.horizontal_wrapper}`);
      const listItems = container?.querySelectorAll(
        `.${styles.about_list_item}`
      );

      if (container && wrapper && listItems.length) {
        const horizontalScrollTimeline = gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: () => "+=" + (wrapper.scrollWidth - window.innerWidth),
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          })
          .to(wrapper, {
            x: () => -(wrapper.scrollWidth - window.innerWidth),
            ease: "none",
          });

        listItems.forEach((item) => {
          const split = new SplitText(item, {
            //   type: "lines",
            linesClass: "single_line",
            mask: "lines",
          });

          gsap.from(split.lines, {
            yPercent: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
              trigger: item,
              containerAnimation: horizontalScrollTimeline,
              start: "left 80%",
              once: true,
            },
          });
        });
      }
    });

    mm.add("(max-width: 991px)", () => {
      const listItems = document.querySelectorAll(`.${styles.about_list_item}`);

      listItems.forEach((item) => {
        const split = new SplitText(item, {
          type: "lines",
          mask: "lines",
          linesClass: `${styles.single_line}`,
        });

        gsap.from(split.lines, {
          yPercent: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            once: true,
          },
        });
      });
    });

    // Cleanup SplitText instances on unmount
    return () => {
      SplitText.revert();
      mm.revert();
    };
  }, []);

  return (
    <div className={`${styles.horizontal} ${styles.is_about}`}>
      <div className={`${styles.horizontal_wrapper} ${styles.is_about}`}>
        {timelineData1.map((item, index) => (
          <section
            key={index}
            className={`${styles.section_about_horizontal} ${
              index === 0 ? `${styles.is_first}` : ""
            }`}
          >
            <div className={styles.about_horizontal_container}>
              <div className={styles.about_horizontal_slide}>
                  <div className={`${styles.about_horizontal_progress} ${styles.firstProgessIndicator}`}>
                    <div className={styles.about_progress_circle_wrapper}>
                      <div className={styles.about_progress_circle} />
                    </div>
                  </div>
                <div className={styles.about_horizontal_info}>
                <div className={`${styles.about_timeline_heading_wrapper} ${styles.is_section_1}`}>
                  <h2 className={styles.about_timeline_heading}>
                    Canyon Ranch, USA
                  </h2>
                  {/* <div className={styles.yearago}>{item.subtitle}</div> */}
                </div>
                  {/* <div className={styles.u_hide_tablet}></div> */}
                  <div className={styles.about_horizontal_text}>
                    <h3
                      className={`${styles.u_text_style_h4} ${styles.u_mb_5}`}
                    >
                      {/* Villas */}
                    </h3>
                    <ul role="list" className={styles.about_list}>
                      {/* {item.highlights.map((text, idx) => (
                        <li key={idx} className={styles.about_list_item}>
                          {text}
                        </li> */}
                      <li className={styles.about_list_item}>
                       Nestled in 150 acres of the Sonoran Desert at the foothills of the Santa Catalina Mountains, this wellness sanctuary offers over 200 spa and fitness services designed to restore and revitalise. Guests can indulge in whirlpools, cold plunges, Watsu therapy, canyon walk, and infrared sauna pods, or join sunrise yoga, hikes, jeep adventures, and guided cavern tours. Daily wellness experiences include neuro and muscle stimulation and light therapy. Three outdoor pools,
                      </li>
                      {/* <li className={styles.about_list_item}>
                        The third building features a lounge and dining area.
                        Outside, enjoy a private pool and an exclusive dining
                        pavilion.
                      </li> */}
                      {/* ))} */}
                    </ul>
                  </div>
                </div>
                <div className={styles.about_gallery_wrapper}>
                  {item.images.map((img, idx) => (
                    <>
                      <div
                        key={idx}
                        className={styles.about_horizontal_image_wrapper}
                      >
                        <img
                          src="
                          https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.robbreportindia.com%2Feditor-images%2F2025-08-28T11%253A25%253A35.681Z-Untitled%2520design%2520-%25202025-08-28T165518.440.jpg&w=3840&q=75"
                          alt={img.alt}
                          className={styles.about_horizontal_image}
                        />
                        <div className={styles.u_text_style_small}>
                          <em>
                           This luxury wellness retreat offers 200+ spa services.
                          </em>
                        </div>
                      </div>
                      <div className={styles.about_horizontal_image_column}>
                        <div
                          className={styles.about_horizontal_artwork_wrapper}
                        >
                          <img
                            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/39/af/8f/canyon-ranch-in-lenox.jpg?w=700&h=-1&s=1"
                            loading="lazy"
                            width="390"
                            height="260"
                            alt=""
                            className={styles.about_horizontal_image}
                          />
                          <div className={styles.u_text_style_small}>
                            <em>
                            This luxury wellness retreat offers 200+ spa services.
                          </em>
                          </div>
                        </div>
                        <div
                          className={styles.about_horizontal_artwork_wrapper}
                        >
                          <img
                            src="https://i.ytimg.com/vi/xaouwRGJSto/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB3HOeDlxrfqaFqv6mq19ljdutTYQ"
                            loading="lazy"
                            width="390"
                            height="260"
                            alt=""
                            className={styles.about_horizontal_image}
                          />
                          <div className={styles.u_text_style_small}>
                            <em>
                           This luxury wellness retreat offers 200+ spa services.
                          </em>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.about_progress_wrapper}>
              <div className={styles.about_progress_line} />
            </div>
          </section>
        ))}
        {timelineData2.map((item, index) => (
          <section
            key={index}
            className={`${styles.section_about_horizontal} ${
              index === 0 ? `${styles.is_2}` : ""
            }`}
          >
            <div className={styles.about_horizontal_container}>
              <div className={styles.about_horizontal_slide}>
                    <div className={styles.about_horizontal_progress}>
                      <div className={styles.about_progress_circle_wrapper}>
                        <div className={styles.about_progress_circle} />
                      </div>
                    </div>
                <div className={styles.about_horizontal_info}>
                  <div
                    className={`${styles.about_timeline_heading_wrapper} ${styles.is_section_2}`}
                  >
                    <h2 className={styles.about_timeline_heading}>Burgenstock Resort, Switzerland</h2>
                    {/* <div className={styles.yearago}>
                     
                      CENTURY
                    </div> */}
                  </div>
                  <div className={styles.about_horizontal_text}>
                    <h3
                      className={`${styles.u_text_style_h4} ${styles.u_mb_5}`}
                    >
                      {/* {item.title} */}
                    </h3>
                    <ul role="list" className={styles.about_list}>
                      {item.highlights.map((text, idx) => (
                        <li key={idx} className={styles.about_list_item}>
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles.about_gallery_wrapper}>
                  {item.images.map((img, idx) => (
                    <>
                      <div
                        key={idx}
                        className={styles.about_horizontal_image_wrapper}
                      >
                        <img
                          src="https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.robbreportindia.com%2Feditor-images%2F2025-08-28T16%253A11%253A27.780Z-Untitled%2520design%2520-%25202025-08-28T214056.474.jpg&w=3840&q=75"
                          alt={img.alt}
                          className={styles.about_horizontal_image}
                        />
                        <div className={styles.u_text_style_small}>
                          <em>
                           The Bürgenstock Resort is a 150-year old property.
                          </em>
                        </div>
                      </div>
                      <div className={styles.about_horizontal_image_column}>
                        <div
                          className={styles.about_horizontal_artwork_wrapper}
                        >
                          <img
                            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/61/ed/bb/burgenstock-hotel.jpg?w=700&h=-1&s=1"
                            loading="lazy"
                            alt=""
                            className={styles.about_horizontal_image}
                          />
                          <div className={styles.u_text_style_small}>
                             <em>
                          The Bürgenstock Resort is a 150-year old property.
                          </em>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.about_progress_wrapper}>
              <div className={styles.about_progress_line} />
            </div>
          </section>
        ))}
        {timelineData3.map((item, index) => (
          <section
            key={index}
            className={`${styles.section_about_horizontal} ${
              index === 0 ? `${styles.is_2}` : ""
            }`}
          >
            <div className={styles.about_horizontal_container}>
              <div className={styles.about_horizontal_slide}>
                  <div className={styles.about_horizontal_progress}>
                    <div className={styles.about_progress_circle_wrapper}>
                      <div className={styles.about_progress_circle} />
                    </div>
                  </div>
                <div className={styles.about_horizontal_info}>
                  <div
                    className={`${styles.about_timeline_heading_wrapper} ${styles.is_section_2}`}
                  >
                    <h2 className={styles.about_timeline_heading}>Lily of the Valley, France</h2>
                    {/* <div className={styles.yearago}>CENTURY</div> */}
                  </div>
                  <div className={styles.about_horizontal_text}>
                    <h3
                      className={`${styles.u_text_style_h4} ${styles.u_mb_5}`}
                    >
                      {/* The Oberoi Spa */}
                    </h3>
                    <ul role="list" className={styles.about_list}>
                      {item.highlights.map((text, idx) => (
                        <li key={idx} className={styles.about_list_item}>
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles.about_gallery_wrapper}>
                  {item.images.map((img, idx) => (
                    <>
                      <div
                        key={idx}
                        className={styles.about_horizontal_image_wrap_big}
                      >
                        <img
                          src="https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.robbreportindia.com%2Feditor-images%2F2025-08-28T11%253A11%253A35.581Z-Untitled%2520design%2520-%25202025-08-28T164015.450.jpg&w=3840&q=75"
                          alt={img.alt}
                          className={styles.about_horizontal_image}
                        />
                        <div className={styles.u_text_style_small}>
                          <em>Weight loss programmes are offered at Lily of the Valley, Saint-Tropez.</em>
                        </div>
                      </div>
                      <div className={styles.about_horizontal_image_column}>
                        <div
                          className={styles.about_horizontal_artwork_wrapper}
                        >
                          <img
                            src="https://static-new.lhw.com/HotelImages/Final/LW0655/lw0655_112126101_790x490.jpg"
                            loading="lazy"
                            alt=""
                            className={styles.about_horizontal_image}
                            sizes="(max-width: 479px) 100vw, 418px"
                          />
                          <div className={styles.u_text_style_small}>
                             <em>Weight loss programmes are offered at Lily of the Valley, Saint-Tropez.</em>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.about_progress_wrapper}>
              <div className={styles.about_progress_line} />
            </div>
          </section>
        ))}
        {timelineData4.map((item, index) => (
          <section
            key={index}
            className={`${styles.section_about_horizontal} ${
              index === 0 ? `${styles.is_2}` : ""
            }`}
          >
            <div className={styles.about_horizontal_container}>
              <div className={styles.about_horizontal_slide}>
                  <div className={styles.about_horizontal_progress}>
                    <div className={styles.about_progress_circle_wrapper}>
                      <div className={styles.about_progress_circle} />
                    </div>
                  </div>
                <div className={styles.about_horizontal_info}>
                  <div
                    className={`${styles.about_timeline_heading_wrapper} ${styles.is_section_2}`}
                  >
                    <h2 className={styles.about_timeline_heading}>Blue Lagoon, Iceland</h2>
                    {/* <div className={styles.yearago}>CENTURY</div> */}
                  </div>
                  <div className={styles.about_horizontal_text}>
                    <h3
                      className={`${styles.u_text_style_h4} ${styles.u_mb_5}`}
                    >
                      {/* Events */}
                    </h3>
                    <ul role="list" className={styles.about_list}>
                      {item.highlights.map((text, idx) => (
                        <li key={idx} className={styles.about_list_item}>
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles.about_gallery_wrapper}>
                  {item.images.map((img, idx) => (
                    <>
                      <div className={styles.about_horizontal_image_column}>
                        <div
                          key={idx}
                          className={styles.about_horizontal_image_wrapper}
                        >
                          <img
                            src="https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.robbreportindia.com%2Feditor-images%2F2025-08-28T11%253A27%253A12.015Z-Untitled%2520design%2520-%25202025-08-28T165643.577.jpg&w=3840&q=75"
                            alt={img.alt}
                            //   width="390"
                            //     height="475"
                            className={styles.about_horizontal_image}
                          />
                          <div className={styles.u_text_style_small}>
                            <em>
                             Blue Lagoon is a geothermal wellness haven. 
                            </em>
                          </div>
                        </div>
                        <div
                          className={styles.about_horizontal_artwork_wrapper}
                        >
                          <img
                            src="https://images.ctfassets.net/w65k7w0nsb8q/2qjnNNMzd8OphtnqBW7RNK/0cad153a0ffd54b212de1668704210f2/DJI_0348__6_.jpg?w=3840&q=75&fm=webp"
                            loading="lazy"
                            alt=""
                            className={styles.about_horizontal_image}
                            sizes="(max-width: 479px) 100vw, 418px"
                          />
                          <div className={styles.u_text_style_small}>
                            <em>
                              Blue Lagoon is a geothermal wellness haven.
                            </em>
                          </div>
                        </div>
                      </div>
                      <div
                        key={idx}
                        className={styles.about_horizontal_artwork_wrapper}
                      >
                        <img
                          src="https://images.ctfassets.net/w65k7w0nsb8q/2qjnNNMzd8OphtnqBW7RNK/0cad153a0ffd54b212de1668704210f2/DJI_0348__6_.jpg?w=3840&q=75&fm=webp"
                          alt={img.alt}
                          className={styles.about_horizontal_image}
                        />
                        <em>
                             Blue Lagoon is a geothermal wellness haven. 
                            </em>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.about_progress_wrapper}>
              <div className={styles.about_progress_line} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default TimeLineWidget1;

// const t = gsap.matchMedia();
// t.add("(min-width: 769px)", () => {
//   const t = document.querySelector(`.${styles.horizontal}`),
//     r = t.querySelector(`.${styles.horizontal_wrapper}`);
//   t &&
//     r &&
//     gsap
//       .timeline({
//         defaults: {
//           ease: "none",
//         },
//         scrollTrigger: {
//           trigger: t,
//           start: "top top",
//           end: () => "+=" + (r.scrollWidth - window.innerWidth),
//           pin: !0,
//           scrub: 1,
//           invalidateOnRefresh: !0,
//         },
//       })
//       .to(r, {
//         x: () => -(r.scrollWidth - window.innerWidth),
//         ease: "none",
//       });
// }),
//   t.add("(max-width: 768px)", () => {
//     ScrollTrigger.kill();
//   });
